'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

const imgGroup28481 = "/assets/logo2.svg";

export default function AdaptabloxDemo() {
  const { activePage, navigate } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    console.log('AdaptabloxDemo rendered, activePage:', activePage);
    // Reset and trigger animation on page change
    setIsAnimating(false);
    // Use setTimeout to ensure the state change is applied before animation
    setTimeout(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }, 10);
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
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - demo" data-node-id="27:483" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F2F4F8 0%, #DCDEE6 100%)" }}>
      <div className="bg-[rgba(135,137,145,0.68)] backdrop-blur-sm h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="27:484" style={{ background: "rgba(135, 137, 145, 0.68)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px] hidden md:block" data-name="logo" data-node-id="27:495">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="27:496">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[17px] top-[17px] bg-[#82848e] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="27:486">
          <button
            onClick={() => {
              console.log('Failures button clicked');
              navigate('about');
            }}
            className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${
              activePage === 'about'
                ? 'bg-[#f7f9fc] shadow-[0px_5px_9px_0px_rgba(0,0,0,0.07)]'
                : 'bg-transparent hover:opacity-80'
            }`}
            data-name="button"
            data-node-id="27:671"
            type="button"
          >
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${
              activePage === 'about' ? 'text-[#5b5b5f]' : 'text-white'
            }`}>
              About
            </span>
          </button>
          <button
            onClick={() => {
              console.log('Control button clicked');
              navigate('overview');
            }}
            className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${
              activePage === 'overview'
                ? 'bg-[#f7f9fc] shadow-[0px_5px_9px_0px_rgba(0,0,0,0.07)]'
                : 'bg-transparent hover:opacity-80'
            }`}
            data-name="button"
            data-node-id="27:669"
            type="button"
          >
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${
              activePage === 'overview' ? 'text-[#5b5b5f]' : 'text-white'
            }`}>
              Control
            </span>
          </button>
          <button
            onClick={(e) => {
              console.log('System button clicked');
              e.preventDefault();
              e.stopPropagation();
              navigate('faqs');
            }}
            className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${
              activePage === 'faqs'
                ? 'bg-[#f7f9fc] shadow-[0px_5px_9px_0px_rgba(0,0,0,0.07)]'
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
              System
            </span>
          </button>
          <button
            onClick={() => {
              console.log('Demo button clicked');
              navigate('demo');
            }}
            className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${
              activePage === 'demo'
                ? 'bg-[#f7f9fc] shadow-[0px_5px_9px_0px_rgba(0,0,0,0.07)]'
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
        className="bg-[#f7f9fc] content-stretch flex flex-col gap-[48px] items-start p-[13px] md:p-[18px] pb-[82px] md:pb-[118px] relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-[800px] max-w-full mx-auto transition-all duration-250 ease-out min-h-[calc(100vh+21px)]" 
        style={{ 
          marginTop: isAnimating ? '0px' : '-20px',
          transition: 'margin-top 0.25s ease-out'
        }}
        data-node-id="27:520"
      >
        <div
          className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full"
          data-node-id="demo-runtime-behavior-practice"
          style={{ marginTop: '71px' }}
        >
          <div className="min-w-full relative shrink-0 w-full">
            <p
              className="font-sans font-[590] leading-[21px] relative shrink-0 text-[24px] text-[#4E4E4E] text-nowrap mb-0"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Runtime Behavior in Practice
            </p>
            <div
              className="mt-[12px] h-[4px] w-full overflow-hidden mb-[6px]"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
                backgroundSize: '22.627px 22.627px',
                backgroundPosition: '0 0',
                imageRendering: 'crisp-edges',
              }}
            />
          </div>
          <div
            className="font-sans font-normal leading-[21px] min-w-full relative shrink-0 text-[15px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="mb-0">
              These simulations show control being enforced during execution. No retraining occurs between scenarios. No prompt tuning. No output post-processing. Behavior changes because constraints change, and constraints are enforced as the system runs.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="44:849">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="44:823">
            <div className="bg-white overflow-clip relative rounded-[8px] shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-full flex flex-col" data-node-id="27:608">
              <div className="content-stretch flex flex-col gap-[12px] items-start pt-[17px] md:pt-[24px] px-[17px] md:px-[24px] pb-0 relative shrink-0 w-full" data-node-id="44:818">
                <p className="font-sans font-[510] leading-[21px] relative shrink-0 text-[#4e4e4e] text-[20px] text-nowrap" data-node-id="44:820" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Super Agent Demo
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
              <p className="font-sans font-normal leading-[21px] text-[#4e4e4e] text-[12px] text-center w-full px-[15px] md:px-[21px] pb-[7px] md:pb-[10px]" data-node-id="27:610" style={{ fontVariationSettings: "'wdth' 100" }}>
                A.R.C. System Overview: constraint hierarchy, escalation logic, and multi-agent synthesis.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] md:pb-[12px] pt-0 px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="42:813">
            <p className="font-sans font-medium relative shrink-0 text-[20px] text-nowrap" data-node-id="42:815">
              What is Enforced
            </p>
            <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px] w-full" data-node-id="42:816" style={{ fontVariationSettings: "'wdth' 100" }}>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">Each agent operates within a defined role and constraint scope</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">Actions are evaluated before they are allowed to execute</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">Outputs are checked for alignment before being combined</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">Premature convergence is identified and prevented before synthesis</span>
                </li>
                <li className="ms-[22.5px]">
                  <span className="leading-[21px]">Conflicting actions are resolved before execution</span>
                </li>
              </ul>
              <p className="leading-[21px] mb-0 mt-[1em]">Evaluation occurs before any action is allowed.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="44:848">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="44:832">
            <div className="bg-white overflow-clip relative rounded-[8px] shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-full flex flex-col" data-node-id="27:620">
              <div className="content-stretch flex flex-col gap-[12px] items-start pt-[17px] md:pt-[24px] px-[17px] md:px-[24px] pb-0 relative shrink-0 w-full" data-node-id="44:828">
                <p className="font-sans font-[510] leading-[21px] relative shrink-0 text-[#4e4e4e] text-[20px] text-nowrap" data-node-id="44:830" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Ambient AI Demo
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
              <p className="font-sans font-normal leading-[21px] text-[#4e4e4e] text-[12px] text-center w-full px-[15px] md:px-[21px] pb-[7px] md:pb-[10px]" data-node-id="27:622" style={{ fontVariationSettings: "'wdth' 100" }}>
                A.R.C. Ambient Assistant: behavioral tone modulation and real-time orchestration.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] md:pb-[12px] pt-0 px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="44:833">
            <p className="font-sans font-medium relative shrink-0 text-[20px] text-nowrap" data-node-id="44:835">
              What is Enforced
            </p>
            <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px] w-full" data-node-id="44:836" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[21px] mb-0">
                An ambient assistant that operates across environments while enforcing context-specific constraints.
              </p>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">The system evaluates context continuously:</p>
              <ul className="list-disc mb-0">
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">location and environment</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">active role and domain</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[21px]">risk and sensitivity</span>
                </li>
                <li className="ms-[22.5px]">
                  <span className="leading-[21px]">delegated authority</span>
                </li>
              </ul>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">Behavior is adjusted at runtime.</p>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">Tone and behavior shift automatically as context changes.</p>
              <p className="leading-[21px] mb-0">Memory access is constrained by domain boundaries.</p>
              <p className="leading-[21px] mb-0">Actions valid in one environment are blocked or deferred in another.</p>
              <p className="leading-[21px] mb-0">The system does not rely on user correction to remain compliant.</p>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">No retraining occurs between contexts.</p>
              <p className="leading-[21px] mb-0">&nbsp;</p>
              <p className="leading-[21px] mb-0">Control is enforced as conditions change. Behavior adapts because constraints change.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] md:pb-[12px] pt-0 px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="44:843">
          <p className="font-sans font-medium relative shrink-0 text-[20px]" data-node-id="44:845">
            What These Demos Do Not Show
          </p>
          <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px] w-full" data-node-id="44:846" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] mb-0">These are not prompt variations or tuned responses.</p>
            <p className="leading-[21px] mb-0">No fine-tuning or retraining is used.</p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">No post-processing or output filtering is applied.</p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">Control is not applied after results are produced.</p>
            <p className="leading-[21px] mb-0">It is enforced during execution.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] md:pb-[12px] pt-0 px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="44:854">
          <p className="font-sans font-medium relative shrink-0 text-[20px] text-nowrap" data-node-id="44:856">
            Why This Matters
          </p>
          <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px] w-full" data-node-id="44:857" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] mb-0">
              As AI systems operate with greater autonomy, control must be enforced during execution.
            </p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">Governance cannot depend on prompts, policies, or post-hoc review.</p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">Adaptablox ensures:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[21px]">Autonomy remains within defined authority.</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[21px]">Reasoning remains within constraint.</span>
              </li>
              <li className="ms-[22.5px]">
                <span className="leading-[21px]">Invalid actions are prevented before they occur.</span>
              </li>
            </ul>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">Failures are not logged after the fact.</p>
            <p className="leading-[21px] mb-0">They are blocked before execution.</p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">The model remains the same.</p>
            <p className="leading-[21px] mb-0">The behavior does not.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-center pb-[17px] md:pb-[24px] pt-0 px-[17px] md:px-[24px] relative shrink-0 w-full">
          <p className="font-sans font-normal leading-[21px] relative shrink-0 text-[#4e4e4e] text-[13px] text-center">
            © 2026 Adaptablox. Patents Pending.
          </p>
        </div>
      </div>
    </div>
  );
}

