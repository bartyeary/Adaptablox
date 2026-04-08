'use client';

import { useEffect, useRef } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

/** Tab order left-to-right in the header segmented control */
const TAB_ORDER = ['about', 'overview', 'faqs', 'demo'] as const;

type Tab = (typeof TAB_ORDER)[number];

function isInteractiveTarget(node: EventTarget | null): boolean {
  if (!(node instanceof Element)) return false;
  const el = node.closest(
    'button, a, input, textarea, select, [role="slider"], [data-no-swipe-nav]'
  );
  return el != null;
}

export default function SwipeNavigation() {
  const { activePage, navigate } = useNavigation();
  const activeRef = useRef(activePage);
  const startRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    activeRef.current = activePage;
  }, [activePage]);

  useEffect(() => {
    const minDistance = 72;
    const maxVerticalRatio = 1.15;

    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      if (isInteractiveTarget(e.target)) return;
      const t = e.touches[0];
      startRef.current = { x: t.clientX, y: t.clientY };
    };

    const onEnd = (e: TouchEvent) => {
      const start = startRef.current;
      startRef.current = null;
      if (!start || e.changedTouches.length !== 1) return;
      if (isInteractiveTarget(e.target)) return;

      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);

      if (absX < minDistance) return;
      if (absY * maxVerticalRatio > absX) return;

      const current = activeRef.current as Tab;
      const i = TAB_ORDER.indexOf(current);
      if (i === -1) return;

      if (dx < 0 && i < TAB_ORDER.length - 1) {
        navigate(TAB_ORDER[i + 1]);
      } else if (dx > 0 && i > 0) {
        navigate(TAB_ORDER[i - 1]);
      }
    };

    const onCancel = () => {
      startRef.current = null;
    };

    document.addEventListener('touchstart', onStart, { passive: true, capture: true });
    document.addEventListener('touchend', onEnd, { passive: true, capture: true });
    document.addEventListener('touchcancel', onCancel, { passive: true, capture: true });

    return () => {
      document.removeEventListener('touchstart', onStart, true);
      document.removeEventListener('touchend', onEnd, true);
      document.removeEventListener('touchcancel', onCancel, true);
    };
  }, [navigate]);

  return null;
}
