'use client';

import { useRef, useState } from 'react';

// The game is its own Vercel project (~/Desktop/faketown-godot/deploy), behind a password page that
// works inside this frame. Locally, run its `node dev_server.mjs` (port 8060).
export const FAKETOWN_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8060/' : 'https://faketown.vercel.app/';

// Loads only when asked: the game is ~60 MB, too much to fetch for everyone who opens the Demo tab.
export function FaketownEmbed() {
  const [started, setStarted] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-[#0F1422]" style={{ paddingBottom: '56.25%' }}>
      {started ? (
        <iframe
          ref={frame}
          src={FAKETOWN_URL}
          allow="fullscreen; autoplay"
          title="Faketown"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none', display: 'block' }}
          onLoad={() => frame.current?.focus()}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px] px-[24px] text-center">
          <button
            type="button"
            onClick={() => setStarted(true)}
            className="hidden md:block font-sans font-[590] text-[15px] text-[#0F1422] bg-[#FFC107] hover:bg-[#FFD24D] rounded-[8px] px-[18px] py-[10px] cursor-pointer border-none"
          >
            Play Faketown
          </button>
          <p className="hidden md:block font-sans text-[12px] text-[#9AA1B5]">Password required</p>
          <p className="md:hidden font-sans text-[14px] leading-[20px] text-[#E8EAF2]">
            Faketown needs a keyboard and mouse. Open this page on a computer to play.
          </p>
        </div>
      )}
    </div>
  );
}
