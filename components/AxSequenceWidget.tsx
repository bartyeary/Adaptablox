'use client';

import { useEffect, useRef } from 'react';

const SCRIPT_ID = 'adaptablox-widgets-script';

function mountSequence(host: HTMLDivElement) {
  if (host.querySelector('ax-sequence')) return;
  const widget = document.createElement('ax-sequence');
  widget.setAttribute('theme', 'light');
  host.appendChild(widget);
}

function loadWidgetsScript(onReady: () => void) {
  if (customElements.get('ax-sequence')) {
    onReady();
    return;
  }

  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    if (customElements.get('ax-sequence')) {
      onReady();
    } else {
      existing.addEventListener('load', onReady, { once: true });
    }
    return;
  }

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = '/adaptablox-widgets.js';
  script.async = true;
  script.onload = onReady;
  document.head.appendChild(script);
}

export default function AxSequenceWidget() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    loadWidgetsScript(() => mountSequence(host));
  }, []);

  return (
    <div
      ref={hostRef}
      className="w-full max-w-[720px] mt-[16px] rounded-[8px] overflow-hidden"
      aria-label="Sequence drift"
    />
  );
}
