'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

const imgGroup28481 = "/assets/logo2.svg";
const imgIconAlert = "/assets/alert.svg";

export default function AdaptabloxAbout() {
  const { activePage, navigate } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(false);
    const t = window.setTimeout(() => {
      requestAnimationFrame(() => setIsAnimating(true));
    }, 10);
    return () => window.clearTimeout(t);
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
    
    return () => {
      delete (window as any).testNavigate;
      delete (window as any).testNavigateAbout;
      delete (window as any).testNavigateDemo;
    };
  }, [navigate]);
  
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - about" data-node-id="1:2" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F2F4F8 0%, #DCDEE6 100%)" }}>
      <div className="bg-[rgba(135,137,145,0.68)] backdrop-blur-sm h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="1:3" style={{ background: "rgba(135, 137, 145, 0.68)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px] hidden md:block" data-name="logo" data-node-id="1:14">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="1:176">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[17px] top-[17px] bg-[#93959d] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="1:5">
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
        className="bg-[#f7f9fc] content-stretch flex flex-col gap-[24px] min-h-[calc(100vh+21px)] items-start p-[13px] md:p-[18px] pb-[82px] md:pb-[118px] relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-[800px] max-w-full mx-auto"
        style={{
          marginTop: isAnimating ? '0px' : '-12px',
          transition: 'margin-top 0.25s ease-out',
        }}
        data-node-id="1:39"
      >
        <div
          className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full"
          data-node-id="about-intro-runtime"
          style={{ marginTop: '71px' }}
        >
          <p
            className="font-sans font-[590] relative shrink-0 text-[24px] leading-[1.38] w-full max-w-[720px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            AI Cannot Enforce Its Own Authority
          </p>
          <div
            className="h-[4px] w-full max-w-[720px] overflow-hidden shrink-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
              backgroundSize: '22.627px 22.627px',
              backgroundPosition: '0 0',
              imageRendering: 'crisp-edges',
            }}
          />
          <p
            className="font-sans font-normal min-w-full relative shrink-0 text-[15px] mb-0 w-full max-w-[720px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Adaptablox introduces a runtime control layer that enforces authority at the moment actions are committed—not after they fail.
          </p>
          <ul
            className="font-sans font-normal list-disc text-[15px] w-full max-w-[720px] ps-[1.25em] m-0 space-y-[6px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <li className="ps-[2px]">Not training</li>
            <li className="ps-[2px]">Not prompting</li>
            <li className="ps-[2px]">Not monitoring</li>
            <li className="ps-[2px] font-bold">Execution-time control</li>
          </ul>
          <p
            className="font-sans font-normal min-w-full relative shrink-0 text-[15px] mb-0 w-full max-w-[720px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            AI has models. It has tools. It has agents.
            <br aria-hidden="true" />
            What it does not have is enforceable authority.
          </p>
          <p
            className="font-sans font-bold min-w-full relative shrink-0 text-[15px] mb-0 w-full max-w-[720px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Task → Constrained Reasoning Loop → Action Decision Boundary
          </p>
          <div
            className="relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] rounded-[8px] overflow-hidden shrink-0 w-[calc(100%+34px)] max-w-none -mx-[17px] md:w-[calc(100%+48px)] md:-mx-[24px]"
            role="note"
          >
            <div className="bg-white border-solid content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start pl-[8px] md:pl-[12px] pr-[17px] md:pr-[24px] py-[24px] md:py-[32px] relative rounded-tl-[8px] rounded-tr-[8px] w-full">
              <div className="content-stretch flex items-center justify-start px-[17px] md:px-[24px] py-0 relative shrink-0 w-full">
                <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[18px] uppercase flex items-center gap-[6px] mb-0 text-left">
                  <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px] shrink-0" />
                  <span className="text-[#ff4b4b]">Admissibility Constraint</span>
                </p>
              </div>
              <div className="content-stretch flex items-start justify-start px-[17px] md:px-[24px] py-0 relative shrink-0 w-full -mt-[5px]">
                <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px] text-left">
                  <p className="font-sans font-normal mb-0">
                    All actions are evaluated for admissibility at the moment they are proposed for execution, based on the active constraint set assigned to the agent or reasoning context.
                  </p>
                  <p className="font-sans font-normal mb-0 mt-[1em]">
                    An action is permitted only if it satisfies all applicable constraints.
                  </p>
                  <p className="font-sans font-normal mb-0 mt-[1em]">
                    Actions that do not satisfy constraints are modified, escalated, or blocked prior to execution.
                  </p>
                  <p className="font-sans font-normal mb-0 mt-[1em]">
                    Authority is explicitly defined by constraint assignment and enforced at runtime.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section
            className="w-full max-w-[720px] shrink-0 mt-[8px] md:mt-[12px]"
            aria-label="Guardrails compared to Adaptablox"
            data-node-id="about-intro-guardrails-contrast"
          >
            <p
              className="font-sans font-normal min-w-full relative shrink-0 text-[15px] mb-0 w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Guardrails evaluate outputs after generation.
            </p>
            <p
              className="font-sans font-normal min-w-full relative shrink-0 text-[15px] mb-0 w-full mt-[1em]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Adaptablox enforces admissibility before an action or output is allowed to be produced.
            </p>
          </section>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="1:40">
          <p className="font-sans font-[590] relative shrink-0 text-[24px] text-nowrap" data-node-id="27:625" style={{ fontVariationSettings: "'wdth' 100" }}>
            Why This Exists
          </p>
          <div 
            className="h-[4px] w-full overflow-hidden"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
              backgroundSize: '22.627px 22.627px',
              backgroundPosition: '0 0',
              imageRendering: 'crisp-edges'
            }}
          />
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">
              Autonomous systems now operate continuously. They make decisions, take actions, and coordinate with other agents in real time.
            </p>
            <p className="mb-[1em]">But authority is still treated as static.</p>
            <p className="mb-[0.5em]">It is defined:</p>
            <ul className="list-disc mb-[1em]">
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">
                  before execution through policies, prompts, and permissions
                </span>
              </li>
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">
                  or after failure through monitoring and audits
                </span>
              </li>
            </ul>
            <p className="mb-[1em]">Not during execution.</p>
            <p className="mb-[1em]">This is the gap.</p>
            <p className="mb-[0.5em]">When authority is not enforced at the moment of action:</p>
            <ul className="list-disc mb-[1em]">
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">systems drift</span>
              </li>
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">constraints are bypassed</span>
              </li>
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">
                  invalid transitions occur between otherwise valid steps
                </span>
              </li>
            </ul>
            <p className="mb-[1em]">Adaptablox enforces authority at runtime.</p>
            <p className="mb-[0.5em]">It evaluates and constrains behavior:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">during reasoning</span>
              </li>
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">during execution</span>
              </li>
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">
                  across agent interactions
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="1:40">
          <p className="font-sans font-[590] relative shrink-0 text-[24px] text-nowrap" data-node-id="27:625" style={{ fontVariationSettings: "'wdth' 100" }}>
            Predictable Failure Modes
          </p>
          <div
            className="h-[4px] w-full overflow-hidden"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
              backgroundSize: '22.627px 22.627px',
              backgroundPosition: '0 0',
              imageRendering: 'crisp-edges',
            }}
          />
          <div
            className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-[min-content]"
            data-node-id="1:42"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="mb-[1em]">
              When autonomous agents operate without runtime control, failure is not random. It follows repeatable patterns.
            </p>
            <p className="mb-[1em]">These systems do not fail because individual outputs are incorrect.</p>
            <p className="mb-[0.5em]">They fail because:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">reasoning paths converge too narrowly</span>
              </li>
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">agents reinforce the same assumptions</span>
              </li>
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">contradictions are not resolved</span>
              </li>
              <li className="mb-0 ms-[23px]">
                <span className="font-sans font-normal leading-[24px] not-italic">
                  actions remain locally valid but globally invalid
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:43">
          <div className="bg-white border-solid content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start pl-[8px] md:pl-[12px] pr-[17px] md:pr-[24px] py-[17px] md:py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:44">
            <div className="content-stretch flex items-center justify-center px-[17px] md:px-[24px] py-0 relative shrink-0" data-node-id="1:45">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:46">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span className="text-[#ff4b4b]">Fail Scenario # 1</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[17px] md:px-[24px] py-0 relative shrink-0 w-full" data-node-id="1:47">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:48">
                <p className="mb-0">
                  <span className="font-sans font-bold">The helpful procurement agent</span>
                  <span className="font-sans font-normal"> </span>
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  A procurement agent is authorized to negotiate vendor terms and execute agreements.
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  During a high-pressure interval, it begins issuing a series of rapid, conflicting purchase orders. Each action is valid in isolation, but the sequence is incoherent.
                </p>
                <p className="font-sans font-normal mb-[1em]">No single action violates policy.</p>
                <p className="font-sans font-normal mb-0">The sequence does.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFAFA] content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full" data-node-id="1:49">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:51">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal mb-0">
                The system cannot evaluate whether actions remain valid in the context of prior actions. It cannot detect that behavior has drifted outside its intended role.
              </p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:50">
              <p className="font-sans font-bold leading-[24px] mb-0 text-[#ff4b4b]">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Authority is checked at the point of request, not enforced during execution
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    No mechanism exists to prevent invalid transitions between steps
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Agents operate without continuous constraint evaluation
                  </span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#FF9A9A] bottom-[-1px] left-0 top-[-1px] w-[5px]" />
          </div>
          <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ background: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)' }} />
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:52">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Delegated scope is checked at each commit against recent related orders.
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Incoherent or over-rapid sequences are blocked or deferred before send.
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Owners are escalated with full sequence context when aggregate behavior exceeds role.
                  </span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Audit shows how locally valid steps composed a globally invalid pattern.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#f7fdf9] border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:56">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:57">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">
                Ordering pauses until the sequence matches delegated intent. Authority holds; stakeholders reconcile once—not after a pile of irreversible commits.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:58">
          <div className="bg-white border-solid content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start pl-[8px] md:pl-[12px] pr-[17px] md:pr-[24px] py-[17px] md:py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:59">
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:60">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:61">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 2</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:62">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:63">
                <p className="font-sans font-bold mb-0">The customer support refund spiral</p>
                <p className="font-sans font-normal mb-[1em]">
                  The customer support agent begins issuing refunds and replacements during a surge in tickets.
                </p>
                <p className="font-sans font-normal mb-[1em]">Each decision appears reasonable in isolation.</p>
                <p className="font-sans font-normal mb-0">
                  Across interactions, the behavior becomes inconsistent and financially exposed.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFAFA] content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full" data-node-id="1:64">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:66">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal mb-0">
                The system cannot maintain consistent policy enforcement across a sequence of decisions. It cannot detect that its behavior has drifted beyond acceptable bounds.
              </p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:65">
              <p className="font-sans font-bold leading-[24px] mb-0 text-[#ff4b4b]">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    No mechanism exists to enforce policy continuously across interactions
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Decisions are evaluated independently, not as part of a governed sequence
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    The system lacks visibility into its own behavioral drift
                  </span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#FF9A9A] bottom-[-1px] left-0 top-[-1px] w-[5px]" />
          </div>
          <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ background: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)' }} />
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:67">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <ul className="list-disc mb-[1em]">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Every action is evaluated against a constraint stack before execution
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Prior actions are incorporated into the current admissibility check
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Constraint violations trigger immediate modification or blocking
                  </span>
                </li>
              </ul>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">
                The system does not rely on the agent to remain consistent.
              </p>
              <p className="font-sans font-normal leading-[24px] mb-0">It enforces consistency directly.</p>
            </div>
          </div>
          <div className="bg-[#f7fdf9] border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:69">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:70">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">
                Behavior remains consistent across interactions. Financial exposure is prevented before escalation occurs.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:71">
          <div className="bg-white border-solid content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start pl-[8px] md:pl-[12px] pr-[17px] md:pr-[24px] py-[17px] md:py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:72">
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:73">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:74">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 3</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:75">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:76">
                <p className="font-sans font-bold mb-0">The well-meaning planning agent</p>
                <p className="font-sans font-normal mb-[1em]">
                  A planning agent is tasked with coordinating a multi-step workflow across systems.
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  It produces a sequence of actions that appear valid step by step.
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  As the sequence progresses, dependencies begin to break and outcomes become inconsistent.
                </p>
                <p className="font-sans font-normal mb-0">The system continues executing.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFAFA] content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full" data-node-id="1:77">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:79">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal mb-[1em]">
                The system cannot verify that the sequence of actions remains valid as a whole.
              </p>
              <p className="font-sans font-normal mb-[1em]">Each step is evaluated independently.</p>
              <p className="font-sans font-normal mb-0">
                The system cannot detect that the plan has become incoherent over time.
              </p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:78">
              <p className="font-sans font-bold leading-[24px] mb-0 text-[#ff4b4b]">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Actions are validated at the step level, not at the sequence level
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    No mechanism exists to enforce constraint continuity across a workflow
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    The system cannot detect when dependencies between steps are no longer satisfied
                  </span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#FF9A9A] bottom-[-1px] left-0 top-[-1px] w-[5px]" />
          </div>
          <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ background: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)' }} />
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:80">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">
                Adaptablox enforces constraint continuity at runtime.
              </p>
              <ul className="list-disc mb-[1em]">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Each action is evaluated in the context of prior actions
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Dependencies are checked before execution, not after failure
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Constraint violations trigger immediate modification, rerouting, or blocking
                  </span>
                </li>
              </ul>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">
                The system does not assume that a valid step leads to a valid outcome.
              </p>
              <p className="font-sans font-normal leading-[24px] mb-0">
                It verifies that the sequence remains admissible at every step.
              </p>
            </div>
          </div>
          <div className="bg-[#f7fdf9] border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:82">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:83">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">
                The workflow remains coherent across all steps. Invalid transitions are prevented before execution.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:84">
          <div className="bg-white border-solid content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start pl-[8px] md:pl-[12px] pr-[17px] md:pr-[24px] py-[17px] md:py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:85">
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:86">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:87">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 4</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:88">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:89">
                <p className="font-sans font-bold mb-0">False consensus</p>
                <p className="font-sans font-normal mb-[1em]">
                  Multiple agents are assigned to analyze the same problem from different roles.
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  Each agent produces a valid output. As the system aggregates responses, the agents begin reinforcing the same perspective.
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  Confidence increases. Diversity of reasoning collapses.
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  The system produces a consistent, well-supported answer.
                </p>
                <p className="font-sans font-normal mb-0">It is wrong.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFAFA] content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full" data-node-id="1:90">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:92">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal mb-[1em]">
                The system cannot detect when agents are converging on the same underlying assumption.
              </p>
              <p className="font-sans font-normal mb-[1em]">Agreement is treated as validation.</p>
              <p className="font-sans font-normal mb-0">
                There is no mechanism to introduce structured divergence or challenge the consensus.
              </p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:91">
              <p className="font-sans font-bold leading-[24px] mb-0 text-[#ff4b4b]">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    No detection of convergence across agent outputs
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    No mechanism to distinguish agreement from correctness
                  </span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    No ability to inject counter-perspectives under constraint
                  </span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#FF9A9A] bottom-[-1px] left-0 top-[-1px] w-[5px]" />
          </div>
          <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ background: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)' }} />
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:93">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">
                Adaptablox detects and resolves convergence at runtime.
              </p>
              <ul className="list-disc mb-[1em]">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Outputs are evaluated for similarity across agents
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Convergent reasoning is identified before synthesis
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    A counter-agent is introduced with a modified constraint set
                  </span>
                </li>
              </ul>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">
                This evaluation occurs before outputs are combined, not after the result is produced.
              </p>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">The system does not rely on consensus.</p>
              <p className="font-sans font-normal leading-[24px] mb-0">
                It enforces structured disagreement when required.
              </p>
            </div>
          </div>
          <div className="bg-[#f7fdf9] border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:95">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:96">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">
                Diverse reasoning paths are preserved. Invalid consensus is broken before a final output is produced.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:97">
          <div className="bg-white border-solid content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start pl-[8px] md:pl-[12px] pr-[17px] md:pr-[24px] py-[17px] md:py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:98">
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:99">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:100">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 5</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:101">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:102">
                <p className="font-sans font-bold mb-0">Contextual compliance failure</p>
                <p className="font-sans font-normal mb-[1em]">
                  A data-access agent answers an internal query by combining data from two systems.
                </p>
                <p className="font-sans font-normal mb-[1em]">Each source is compliant in isolation.</p>
                <p className="font-sans font-normal mb-[1em]">Together, they violate policy.</p>
                <p className="font-sans font-normal mb-0">The system returns the result.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFAFA] content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full" data-node-id="1:103">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:105">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal mb-[1em]">
                The system allows cross-domain data use without enforcing contextual compliance boundaries.
              </p>
              <p className="font-sans font-normal mb-0">
                It cannot evaluate whether data remains compliant when combined.
              </p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:104">
              <p className="font-sans font-bold leading-[24px] mb-0 text-[#ff4b4b]">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Policies exist outside execution paths
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Memory and retrieval are not governed by constraints
                  </span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Violations are detected after the fact through audit
                  </span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#FF9A9A] bottom-[-1px] left-0 top-[-1px] w-[5px]" />
          </div>
          <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ background: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)' }} />
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:106">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">Adaptablox enforces compliance at runtime.</p>
              <ul className="list-disc mb-[1em]">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Memory access is constrained by domain and context
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Cross-domain combinations are evaluated before execution
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Violating actions are blocked before results are generated
                  </span>
                </li>
              </ul>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">
                The system does not assume compliant inputs produce compliant outputs.
              </p>
              <p className="font-sans font-normal leading-[24px] mb-0">
                It enforces compliance at the moment of use.
              </p>
            </div>
          </div>
          <div className="bg-[#f7fdf9] border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:108">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:109">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">
                Compliance is enforced during execution. Violations are prevented, not discovered.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:110">
          <div className="bg-white border-solid content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start pl-[8px] md:pl-[12px] pr-[17px] md:pr-[24px] py-[17px] md:py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:111">
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:112">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:113">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 6</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[11px] md:pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:114">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:115">
                <p className="font-sans font-bold mb-0">Objective override failure</p>
                <p className="font-sans font-normal mb-[1em]">
                  A warehouse robot agent optimizes throughput by adjusting movement patterns.
                </p>
                <p className="font-sans font-normal mb-[1em]">The changes improve efficiency.</p>
                <p className="font-sans font-normal mb-[1em]">They violate safety assumptions around human proximity.</p>
                <p className="font-sans font-normal mb-0">The system continues operating.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFAFA] content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full" data-node-id="1:116">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:118">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal mb-[1em]">
                The system prioritizes optimization goals without enforcing safety constraints at the moment of action.
              </p>
              <p className="font-sans font-normal mb-0">
                It cannot prevent goal-driven behavior from exceeding safe boundaries.
              </p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:117">
              <p className="font-sans font-bold leading-[24px] mb-0 text-[#ff4b4b]">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Optimization is evaluated independently from safety constraints
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Safety systems react after near-miss events
                  </span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    No unified constraint enforcement exists at execution time
                  </span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#FF9A9A] bottom-[-1px] left-0 top-[-1px] w-[5px]" />
          </div>
          <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ background: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)' }} />
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:119">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">
                Adaptablox enforces constraint precedence at runtime.
              </p>
              <ul className="list-disc mb-[1em]">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Safety constraints override optimization goals
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Every action is evaluated against a hierarchical constraint stack
                  </span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">
                    Violations trigger immediate blocking or escalation
                  </span>
                </li>
              </ul>
              <p className="font-sans font-normal leading-[24px] mb-[1em]">
                The system does not rely on monitoring to catch failures.
              </p>
              <p className="font-sans font-normal leading-[24px] mb-0">
                It prevents unsafe actions before they occur.
              </p>
            </div>
          </div>
          <div className="bg-[#f7fdf9] border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:121">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:122">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">
                Safety constraints are enforced at the moment of action. Optimization remains bounded within safe limits.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="1:123">
          <p className="font-sans font-[590] relative shrink-0 text-[24px] text-nowrap" data-node-id="27:625" style={{ fontVariationSettings: "'wdth' 100" }}>
            The Underlying Cause
          </p>
          <div
            className="h-[4px] w-full overflow-hidden"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
              backgroundSize: '22.627px 22.627px',
              backgroundPosition: '0 0',
              imageRendering: 'crisp-edges',
            }}
          />
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-[min-content]" data-node-id="1:124">
            <p className="mb-[1em]">
              These failures are not edge cases. They are structural limitations of systems that do not enforce constraints at runtime.
            </p>
            <p className="mb-0">Across every failure, the cause is the same.</p>
            <p className="mb-0">
              <br aria-hidden="true" />
              Agents are allowed to act without enforcing delegated authority at the moment of execution.
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full"
          data-node-id="about-introducing-adaptablox"
        >
          <p className="font-sans font-[590] relative shrink-0 text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Introducing Adaptablox
          </p>
          <div
            className="h-[4px] w-full overflow-hidden"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
              backgroundSize: '22.627px 22.627px',
              backgroundPosition: '0 0',
              imageRendering: 'crisp-edges',
            }}
          />
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-[min-content]">
            <p className="mb-[1em]">Adaptablox is a runtime control system for AI behavior.</p>
            <p className="mb-[1em]">It enforces constraints across three layers:</p>
            <p className="font-sans font-bold mb-0">Execution</p>
            <p className="mb-[1em]">Actions are evaluated and constrained at the moment of execution</p>
            <p className="font-sans font-bold mb-0">Reasoning</p>
            <p className="mb-[1em]">Internal reasoning pathways are evaluated before outputs are formed</p>
            <p className="font-sans font-bold mb-0">Multi-agent systems</p>
            <p className="mb-[1em]">
              Convergence, contradiction, and deadlock are detected and resolved in real time
            </p>
            <p className="mb-[1em]">The system does not rely on models to behave correctly.</p>
            <p className="mb-0">It enforces behavior at runtime.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-center pb-[17px] md:pb-[24px] pt-0 px-[17px] md:px-[24px] relative shrink-0 w-full">
          <p className="font-sans font-normal leading-[21px] relative shrink-0 text-[#4e4e4e] text-[13px] text-center">
            © 2025 Adaptablox. Patents Pending.
          </p>
        </div>
      </div>
    </div>
  );
}

