'use client';

import { useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

const imgGroup28481 = "/assets/logo2.svg";
const imgLogoIcon = "/assets/logoIcon.svg";

const tabClass = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-transparent hover:opacity-80';
const tabLabelClass = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-white';

/**
 * The scroll-driven bouncy ball animation (public/bouncy-ball/index.html), shown full-screen under the site header.
 * It runs in an iframe because the page drives everything from its own window scroll and global styles.
 */
export default function BouncyBallView() {
  const { navigate } = useNavigation();
  // Bumping the key remounts the iframe, which replays the animation from the start
  const [replay, setReplay] = useState(0);

  return (
    <div className="fixed inset-0" data-name="adaptablox - bouncy" style={{ background: '#f0f2f6' }}>
      <div className="bg-[rgba(135,137,145,0.68)] backdrop-blur-sm h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" style={{ background: "rgba(135, 137, 145, 0.68)" }}>
        <button type="button" onClick={() => setReplay((n) => n + 1)} aria-label="Replay the Adaptablox animation" className="absolute left-[17px] top-[17px] h-[36px] w-[189px] hidden min-[560px]:block cursor-pointer border-none bg-transparent p-0" data-name="logo">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </button>
        <button type="button" onClick={() => setReplay((n) => n + 1)} aria-label="Replay the Adaptablox animation" className="absolute left-[14px] max-[374px]:left-[10px] top-[17px] h-[40px] flex items-center min-[560px]:hidden cursor-pointer border-none bg-transparent p-0" data-name="logo-icon">
          <img alt="Adaptablox" className="block h-[32px] w-auto" src={imgLogoIcon} />
        </button>
        <div className="absolute right-[12px] max-[374px]:right-[8px] md:right-[17px] top-[17px] bg-[#82848e] content-stretch flex gap-[6px] max-[374px]:gap-[2px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control">
          <button onClick={() => navigate('about')} className={tabClass} data-name="button" type="button">
            <span className={tabLabelClass}>About</span>
          </button>
          <button onClick={() => navigate('overview')} className={tabClass} data-name="button" type="button">
            <span className={tabLabelClass}>Control</span>
          </button>
          <button onClick={() => navigate('faqs')} className={tabClass} data-name="button" type="button">
            <span className={tabLabelClass}>System</span>
          </button>
          <button onClick={() => navigate('demo')} className={tabClass} data-name="button" type="button">
            <span className={tabLabelClass}>Demo</span>
          </button>
        </div>
      </div>
      <iframe
        key={replay}
        src="/bouncy-ball/"
        title="Adaptablox animation"
        className="absolute left-0 right-0 bottom-0 top-[71px] w-full border-0"
        style={{ height: 'calc(100% - 71px)' }}
        ref={(el) => el?.focus()}
      />
    </div>
  );
}
