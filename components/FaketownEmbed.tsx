// The game is its own Vercel project (~/Desktop/faketown-godot/deploy). Its address opens on a small
// start screen (logo, password, "Enter Faketown") that works inside this frame; the ~60 MB game itself
// loads only after that button. Locally, run its `node dev_server.mjs` (port 8060).
export const FAKETOWN_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8060/' : 'https://faketown.vercel.app/';

export function FaketownEmbed() {
  return (
    <div className="relative w-full overflow-hidden rounded-[8px] bg-[#0F1422]" style={{ paddingBottom: '56.25%' }}>
      {/* Hidden on phones, where a lazy frame isn't loaded at all */}
      <iframe
        src={FAKETOWN_URL}
        loading="lazy"
        allow="fullscreen; autoplay"
        title="Faketown"
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{ border: 'none' }}
      />
      <div className="md:hidden absolute inset-0 flex items-center justify-center px-[24px] text-center">
        <p className="font-sans text-[14px] leading-[20px] text-[#E8EAF2]">
          Faketown needs a keyboard and mouse. Open this page on a computer to play.
        </p>
      </div>
    </div>
  );
}
