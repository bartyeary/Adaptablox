'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

const imgGroup28481 = "/assets/logo.svg";

export default function AdaptabloxDemo() {
  const { activePage, navigate } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    console.log('AdaptabloxDemo rendered, activePage:', activePage);
    // Trigger animation on mount
    setIsAnimating(false);
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  }, [activePage]);
  
  useEffect(() => {
    // Expose navigate functions to window for document-level listeners
    (window as any).testNavigate = () => {
      console.log('window.testNavigate called - navigating to FAQs');
      navigate('faqs');
    };
    (window as any).testNavigateAbout = () => {
      console.log('window.testNavigateAbout called - navigating to About');
      navigate('about');
    };
    (window as any).testNavigateDemo = () => {
      console.log('window.testNavigateDemo called - navigating to Demo');
      navigate('demo');
    };
    
    // Load Vimeo player script
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      delete (window as any).testNavigate;
      delete (window as any).testNavigateAbout;
      delete (window as any).testNavigateDemo;
      // Script cleanup is handled by browser
    };
  }, [navigate]);
  
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - demo" data-node-id="27:483" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F1F2F4 0%, #D7D9DF 100%)" }}>
      <div className="bg-[rgba(104,106,113,0.8)] h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="27:484" style={{ background: "rgba(104, 106, 113, 0.80)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px]" data-name="logo" data-node-id="27:495">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="27:496">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute right-[17px] top-[17px] bg-[#67686d] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="27:486">
          <button
            onClick={() => {
              console.log('Overview button clicked');
              navigate('overview');
            }}
            className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${
              activePage === 'overview'
                ? 'bg-[#eef0f4] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]'
                : 'bg-transparent hover:opacity-80'
            }`}
            data-name="button"
            data-node-id="27:669"
            type="button"
          >
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${
              activePage === 'overview' ? 'text-[#5b5b5f]' : 'text-white'
            }`}>
              Overview
            </span>
          </button>
          <button
            onClick={() => {
              console.log('Failure Cases button clicked');
              navigate('about');
            }}
            className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${
              activePage === 'about'
                ? 'bg-[#eef0f4] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]'
                : 'bg-transparent hover:opacity-80'
            }`}
            data-name="button"
            data-node-id="27:671"
            type="button"
          >
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${
              activePage === 'about' ? 'text-[#5b5b5f]' : 'text-white'
            }`}>
              Failure Cases
            </span>
          </button>
          <button
            onClick={(e) => {
              console.log('FAQs button clicked');
              e.preventDefault();
              e.stopPropagation();
              navigate('faqs');
            }}
            className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${
              activePage === 'faqs'
                ? 'bg-[#eef0f4] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]'
                : 'bg-transparent hover:opacity-80'
            }`}
            data-name="button"
            data-node-id="1:10"
            type="button"
            style={{ zIndex: 10001, position: 'relative' }}
          >
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${
              activePage === 'faqs' ? 'text-[#5b5b5f]' : 'text-white'
            }`}>
              FAQs
            </span>
          </button>
          <button
            onClick={() => {
              console.log('Demo button clicked');
              navigate('demo');
            }}
            className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${
              activePage === 'demo'
                ? 'bg-[#eef0f4] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]'
                : 'bg-transparent hover:opacity-80'
            }`}
            data-name="button"
            data-node-id="1:12"
            type="button"
          >
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${
              activePage === 'demo' ? 'text-[#5b5b5f]' : 'text-white'
            }`}>
              Demo
            </span>
          </button>
        </div>
      </div>
      <div 
        className="bg-[#eef0f4] content-stretch flex flex-col gap-[48px] items-start p-[18px] relative rounded-[8px] shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] shrink-0 w-[900px] max-w-full mb-6 mx-auto transition-all duration-500 ease-out" 
        style={{ 
          marginTop: isAnimating ? '82px' : '102px',
          transition: 'margin-top 0.5s ease-out'
        }}
        data-node-id="27:520"
      >
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[20px] px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="27:521">
          <p className="font-sans font-[590] leading-[21px] relative shrink-0 text-[24px] text-[#4E4E4E] text-nowrap" data-node-id="27:643" style={{ fontVariationSettings: "'wdth' 100" }}>
            Demos
          </p>
          <div className="font-sans font-normal leading-[21px] min-w-full relative shrink-0 text-[15px] w-[min-content]" data-node-id="27:523" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">
              <span>{`These demonstrations show how Adaptablox governs autonomous systems `}</span>
              <span className="font-sans font-normal italic" style={{ fontVariationSettings: "'YAXS' 400" }}>
                while they operate
              </span>
              <span>{` — not before execution and not after failure.`}</span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              <span>{`They are simulations designed to illustrate runtime authority enforcement, `}</span>
              <span className="font-sans font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                multi-agent arbitration
              </span>
              <span>{`, and `}</span>
              <span className="font-sans font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                ambient continuity across contexts
              </span>
              .
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>Each demo highlights a different aspect of the system.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="44:849">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="44:823">
            <div className="bg-white overflow-clip relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full flex flex-col" data-node-id="27:608">
              <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] pb-0 relative shrink-0 w-full" data-node-id="44:818">
                <p className="font-sans font-[510] leading-[21px] relative shrink-0 text-[#4e4e4e] text-[20px] text-nowrap" data-node-id="44:820" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Super-Agent with Governed Sub-Agents
                </p>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '63.58%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1132838746?title=0&byline=0&portrait=0&badge=0&autopause=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="A.R.C. System Overview"
                  className="absolute inset-0 w-full h-full rounded-tl-[8px] rounded-tr-[8px]"
                  style={{ border: 'none', display: 'block' }}
                />
              </div>
              <p className="font-sans font-normal leading-[21px] text-[#4e4e4e] text-[12px] text-center w-full px-[21px] pb-[10px]" data-node-id="27:610" style={{ fontVariationSettings: "'wdth' 100" }}>
                A.R.C. System Overview: constraint hierarchy, escalation logic, and multi-agent synthesis.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-0 px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="42:813">
            <p className="font-sans font-[510] leading-[21px] relative shrink-0 text-[20px] text-nowrap" data-node-id="42:815" style={{ fontVariationSettings: "'wdth' 100" }}>
              What you're seeing
            </p>
            <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px] w-[min-content]" data-node-id="42:816" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[21px] mb-0">A single conversational interface backed by a super-agent that delegates tasks to specialized agents operating under defined roles and constraints.</p>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">Each sub-agent is activated with:</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">A scoped role</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">Explicit authority boundaries</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">Tone and communication limits</span>
                </li>
                <li className="ms-[22.5px]">
                  <span className="leading-[21px]">Governed access to memory and tools</span>
                </li>
              </ul>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">The super-agent does not simply merge outputs.</p>
              <p className="leading-[21px] mb-0">It arbitrates them under policy before responding.</p>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">What to notice</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">The system evaluates authority before delegation, not after synthesis</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">Specialized agents may disagree, but their outputs are reconciled under constraint</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">Escalation and deferral are treated as valid outcomes, not failures</span>
                </li>
                <li className="ms-[22.5px]">
                  <span className="leading-[21px]">The final response reflects a single, policy-aligned voice — not a blended average</span>
                </li>
              </ul>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px]">This demo illustrates how Adaptablox enables multi-agent reasoning without loss of control.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="44:848">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="44:832">
            <div className="bg-white overflow-clip relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full flex flex-col" data-node-id="27:620">
              <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] pb-0 relative shrink-0 w-full" data-node-id="44:828">
                <p className="font-sans font-[510] leading-[21px] relative shrink-0 text-[#4e4e4e] text-[20px] text-nowrap" data-node-id="44:830" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Ambient Assistant Across Contexts
                </p>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '63.58%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1118926409?title=0&byline=0&portrait=0&badge=0&autopause=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="A.R.C. Ambient Assistant"
                  className="absolute inset-0 w-full h-full rounded-tl-[8px] rounded-tr-[8px]"
                  style={{ border: 'none', display: 'block' }}
                />
              </div>
              <p className="font-sans font-normal leading-[21px] text-[#4e4e4e] text-[12px] text-center w-full px-[21px] pb-[10px]" data-node-id="27:622" style={{ fontVariationSettings: "'wdth' 100" }}>
                A.R.C. Ambient Assistant: behavioral tone modulation and real-time orchestration.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-0 px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="44:833">
            <p className="font-sans font-[510] leading-[21px] relative shrink-0 text-[20px] text-nowrap" data-node-id="44:835" style={{ fontVariationSettings: "'wdth' 100" }}>
              What you're seeing
            </p>
            <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px] w-[min-content]" data-node-id="44:836" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[21px] mb-0">An ambient AI assistant that follows a user across environments — home, transit, and work — while maintaining behavioral continuity and appropriate authority in each setting.</p>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">The assistant adapts in real time based on:</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[32px]">Contextual signals</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[32px]">Active role and domain</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[32px]">Environmental risk and sensitivity</span>
                </li>
                <li className="ms-[22.5px]">
                  <span className="leading-[32px]">Delegated authority in the current setting</span>
                </li>
              </ul>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">No retraining occurs between contexts.</p>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">What to notice</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[32px]">Tone and behavior shift automatically as context changes</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[32px]">Memory is selectively accessed or suppressed based on domain boundaries</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[32px]">Actions that would be appropriate in one environment are deferred or blocked in another</span>
                </li>
                <li className="ms-[22.5px]">
                  <span className="leading-[32px]">The system does not rely on user correction to remain compliant</span>
                </li>
              </ul>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px]">This demo illustrates how Adaptablox enables ambient AI without behavioral drift.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-0 px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="44:843">
          <p className="font-sans font-[590] leading-[21px] relative shrink-0 text-[24px] text-nowrap" data-node-id="44:845" style={{ fontVariationSettings: "'wdth' 100" }}>
            What These Demos Are – and Are Not
          </p>
          <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px] w-[min-content]" data-node-id="44:846" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] mb-0">These demonstrations are not product mockups and not UI proposals. They do not represent a finished product surface.</p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">They are behavioral simulations designed to make runtime governance visible.</p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">They show:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[32px]">How authority is enforced at the moment of action</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[32px]">How reasoning is shaped before outputs are generated</span>
              </li>
              <li className="ms-[22.5px]">
                <span className="leading-[32px]">How escalation replaces silent failure</span>
              </li>
            </ul>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">They do not depend on:</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[32px]">Specific models</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[32px]">Prompt engineering</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[32px]">Static rules</span>
              </li>
              <li className="ms-[22.5px]">
                <span className="leading-[32px]">Post-hoc moderation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-0 px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="44:854">
          <p className="font-sans font-[590] leading-[21px] relative shrink-0 text-[24px] text-nowrap" data-node-id="44:856" style={{ fontVariationSettings: "'wdth' 100" }}>
            Why This Matters
          </p>
          <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px] w-[min-content]" data-node-id="44:857" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] mb-0">As AI systems move toward autonomy, delegation, and ambient presence, governance can no longer be an afterthought.</p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">Adaptablox exists to ensure that:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[32px]">Autonomy does not exceed authority</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[32px]">Reasoning remains policy-aligned</span>
              </li>
              <li className="ms-[22.5px]">
                <span className="leading-[32px]">Failures are prevented, not merely logged</span>
              </li>
            </ul>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px]">The demos show what that looks like in practice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

