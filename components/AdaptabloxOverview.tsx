'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

const imgGroup28481 = "/assets/logo2.svg";

export default function AdaptabloxOverview() {
  const { activePage, navigate } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    console.log('AdaptabloxOverview rendered, activePage:', activePage);
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
    (window as any).testNavigateOverview = () => {
      console.log('window.testNavigateOverview called - navigating to Overview');
      navigate('overview');
    };
    
    return () => {
      delete (window as any).testNavigate;
      delete (window as any).testNavigateAbout;
      delete (window as any).testNavigateDemo;
      delete (window as any).testNavigateOverview;
    };
  }, [navigate]);
  
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - overview" data-node-id="27:645" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F2F4F8 0%, #DCDEE6 100%)" }}>
      <div className="bg-[rgba(135,137,145,0.68)] backdrop-blur-sm h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="27:646" style={{ background: "rgba(135, 137, 145, 0.68)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px] hidden md:block" data-name="logo" data-node-id="27:648">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="27:649">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[17px] top-[17px] bg-[#93959d] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="27:668">
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
        className="bg-[#f7f9fc] content-stretch flex flex-col gap-[48px] items-start p-[13px] md:p-[18px] pb-[82px] md:pb-[118px] relative shadow-[2px_5px_9px_0px_rgba(0,0,0,0.07)] shrink-0 w-[800px] max-w-full mx-auto transition-all duration-250 ease-out min-h-[calc(100vh+21px)]" 
        style={{ 
          marginTop: isAnimating ? '0px' : '-20px',
          transition: 'margin-top 0.25s ease-out'
        }}
        data-node-id="27:684"
      >
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="44:869" style={{ marginTop: '71px' }}>
          <div
            className="content-stretch flex flex-col gap-[18px] items-start pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 w-full"
            data-node-id="overview-control-enforced-runtime"
          >
            <p className="font-sans font-semibold leading-[21px] relative shrink-0 text-[#4e4e4e] text-[24px]">
              Control Enforced at Runtime
            </p>
            <div className="min-w-full relative shrink-0 w-full">
              <div
                className="h-[4px] w-full overflow-hidden"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
                  backgroundSize: '22.627px 22.627px',
                  backgroundPosition: '0 0',
                  imageRendering: 'crisp-edges',
                }}
              />
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pl-0 pr-[17px] md:pr-[24px] pt-0 relative shrink-0 w-full">
              <div className="font-sans font-normal leading-[21px] min-w-full relative shrink-0 text-[#4e4e4e] text-[15px]">
                <p className="mb-[1em]">Adaptablox is a runtime control system.</p>
                <p className="mb-[1em]">It does not rely on models to behave correctly.</p>
                <p className="mb-[1em]">It evaluates and constrains behavior as the system operates.</p>
                <p className="mb-[0.5em]">Most systems apply control:</p>
                <ul className="list-disc mb-[1em]">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[21px]">
                      before execution through policies and prompts
                    </span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="font-sans font-normal leading-[21px]">
                      or after execution through monitoring and audit
                    </span>
                  </li>
                </ul>
                <p className="mb-[1em]">This is not sufficient once systems act continuously.</p>
                <p className="mb-[1em]">Control must be enforced during execution.</p>
                <p className="mb-[0.5em]">Adaptablox applies control across three layers:</p>
                <ul className="list-disc mb-[1em]">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[21px]">execution</span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[21px]">reasoning</span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="font-sans font-normal leading-[21px]">multi-agent coordination</span>
                  </li>
                </ul>
                <p className="mb-0">Each layer enforces constraints at the moment decisions are made.</p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center pb-[17px] md:pb-[24px] pt-[22px] md:pt-[32px] px-[17px] md:px-[24px] relative rounded-[8px] shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-node-id="27:769">
            <div className="content-stretch flex items-center justify-center px-[11px] md:px-[16px] py-0 relative shrink-0 w-full" data-node-id="42:785">
              <div className="basis-0 font-sans grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="27:770">
                <p className="font-sans font-medium relative shrink-0 text-[#4e4e4e] text-[20px] text-nowrap mb-[18px]">
                  The Control Layers
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  Adaptablox enforces behavior at the execution and reasoning layers without modifying model weights.
                </p>
                <p className="font-sans font-normal mb-[1em]">
                  It operates as a runtime control layer that continuously evaluates actions and reasoning before outcomes are produced.
                </p>
                <p className="font-sans font-normal mb-0">
                  Control is applied through constraint evaluation, pathway selection, and real-time intervention.
                </p>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[8px] relative shrink-0 w-full" data-node-id="42:782">
              <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
                <p className="font-sans font-bold leading-[24px] mb-0 text-[#4e4e4e]">Agent Role & Constraint (ARC)</p>
                <p className="font-sans font-normal italic leading-[24px] mb-0 mt-[0.5em] text-[#4e4e4e]">Execution Control</p>
                <p className="font-sans font-normal leading-[24px] mb-0 mt-[0.75em]">
                  ARC enforces constraints at the moment of action.
                </p>
                <ul className="list-disc mt-[0.5em] mb-[1em]">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Every action is evaluated against a constraint stack before execution
                    </span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Role boundaries define what actions are permitted
                    </span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Actions that exceed scope are blocked, modified, or rerouted
                    </span>
                  </li>
                </ul>
                <p className="font-sans font-normal leading-[24px] mb-[1em]">
                  The system does not assume valid inputs produce valid behavior.
                </p>
                <p className="font-sans font-normal leading-[24px] mb-0">
                  It enforces admissibility at every step.
                </p>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[8px] relative shrink-0 w-full" data-node-id="42:790">
              <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="42:791">
                <p className="font-sans font-bold leading-[24px] mb-0 text-[#4e4e4e]">Latent Role & Constraint (LRC)</p>
                <p className="font-sans font-normal italic leading-[24px] mb-0 mt-[0.5em] text-[#4e4e4e]">Reasoning Control</p>
                <p className="font-sans font-normal leading-[24px] mb-0 mt-[0.75em]">
                  LRC enforces constraints within the reasoning process during inference.
                </p>
                <ul className="list-disc mt-[0.5em] mb-[1em]">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Evaluate internal reasoning pathways during inference
                    </span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Suppress or redirect pathways that violate constraints
                    </span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Select only constraint-compliant reasoning trajectories
                    </span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Resolve conflicts between competing internal interpretations
                    </span>
                  </li>
                </ul>
                <p className="font-sans font-normal leading-[24px] mb-[1em]">
                  The system does not wait for a response to be generated.
                </p>
                <p className="font-sans font-normal leading-[24px] mb-0">
                  It constrains reasoning before the output is formed.
                </p>
              </div>
            </div>
            <div
              className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[8px] relative shrink-0 w-full"
              data-node-id="overview-disagreement-scaffolding"
            >
              <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
                <p className="font-sans font-bold leading-[24px] mb-0 text-[#4e4e4e]">Disagreement Scaffolding (DS)</p>
                <p className="font-sans font-normal italic leading-[24px] mb-0 mt-[0.5em] text-[#4e4e4e]">
                  Multi-Agent Control
                </p>
                <p className="font-sans font-normal leading-[24px] mb-0 mt-[0.75em]">
                  DS enforces control across interacting agents.
                </p>
                <ul className="list-disc mt-[0.5em] mb-[1em]">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Outputs are evaluated for similarity and divergence across agents
                    </span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Convergence on a single perspective is detected before synthesis
                    </span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Counter-agents are introduced with modified constraints when required
                    </span>
                  </li>
                </ul>
                <p className="font-sans font-normal leading-[24px] mb-[1em]">The system does not rely on consensus.</p>
                <p className="font-sans font-normal leading-[24px] mb-0">
                  It enforces structured disagreement to prevent false agreement.
                </p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] mt-[12px] md:mt-[16px] pb-[8px] md:pb-[12px] pt-0 px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full"
            data-node-id="overview-full-stack-control"
          >
            <p className="font-sans font-medium relative shrink-0 text-[#4e4e4e] text-[20px] text-nowrap">
              Full-Stack Control
            </p>
            <div className="min-w-full relative shrink-0 w-full">
              <div
                className="h-[4px] w-full overflow-hidden"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
                  backgroundSize: '22.627px 22.627px',
                  backgroundPosition: '0 0',
                  imageRendering: 'crisp-edges',
                }}
              />
            </div>
            <div className="font-sans font-normal min-w-full relative shrink-0 text-[#4e4e4e] text-[15px] w-full leading-[24px]">
              <p className="mb-0 mt-[0.25em]">Adaptablox enforces control across:</p>
              <p className="font-sans font-bold mb-0 mt-[0.75em] text-[#4e4e4e]">Execution</p>
              <p className="mb-0 mt-[0.35em]">Actions are constrained at the moment of execution</p>
              <p className="font-sans font-bold mb-0 mt-[0.75em] text-[#4e4e4e]">Reasoning</p>
              <p className="mb-0 mt-[0.35em]">Internal pathways are constrained before outputs are formed</p>
              <p className="font-sans font-bold mb-0 mt-[0.75em] text-[#4e4e4e]">Coordination</p>
              <p className="mb-0 mt-[0.35em]">Multi-agent interactions are governed to prevent convergence failure</p>
              <p className="mb-[1em] mt-[1em]">These layers operate continuously during runtime.</p>
              <p className="mb-[1em]">Control is not static. It is enforced as the system runs.</p>
              <p className="mb-[1em]">We do not filter outputs.</p>
              <p className="mb-0">We control the conditions under which outputs are produced.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-0 px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="42:796">
          <p className="font-sans font-medium relative shrink-0 text-[20px] text-nowrap" data-node-id="42:798">
            How It Works
          </p>
          <div className="min-w-full relative shrink-0 w-full">
            <div
              className="h-[4px] w-full overflow-hidden"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
                backgroundSize: '22.627px 22.627px',
                backgroundPosition: '0 0',
                imageRendering: 'crisp-edges',
              }}
            />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-center justify-center px-[20px] md:px-[40px] py-0 relative size-full" data-node-id="42:801">
          <p
            className="font-mono leading-[12px] md:leading-[18px] not-italic relative shrink-0 text-[#4e4e4e] text-[10px] md:text-[15px] text-center w-full max-w-[780px]"
            style={{ fontFamily: 'monospace' }}
          >
            All evaluation and enforcement occurs during runtime, not after output is produced. Below is a sequence of enforced decisions.
          </p>
          <pre className="font-mono leading-[12px] md:leading-[18px] not-italic relative shrink-0 text-[#4e4e4e] text-[10px] md:text-[15px] text-center w-full max-w-[780px] whitespace-pre" data-node-id="42:802" style={{ fontFamily: 'monospace' }}>
{`+----------------------------------------------------------------------+
|                       USER / ENVIRONMENT INPUT                       |
|           (Prompt, signal, context, ambient trigger, etc.)           |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                 A.R.C. — BEHAVIORAL GOVERNANCE LAYER                 |
|                                                                      |
|  - Evaluate delegated authority against role and constraint stack    |
|  - Validate scope, permissions, and execution context                |
|  - Block, modify, or reroute actions that exceed constraints         |
|  - Regulate memory access and delegation boundaries                  |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                L.R.C. — INTERNAL REASONING GOVERNANCE                |
|                                                                      |
|  - Evaluate internal reasoning pathways during inference             |
|  - Suppress or redirect pathways that violate constraints            |
|  - Select only constraint-compliant reasoning trajectories           |
|  - Resolve conflicts between competing internal interpretations      |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                        MODEL REASONING ENGINE                        |
|                   (Weights and training unchanged)                   |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                 POLICY-ALIGNED ACTION OR ESCALATION                  |
|                                                                      |
|  - Execute permitted actions within constraint boundaries            |
|  - Defer, reroute, or escalate actions when constraints are violated |
|  - Introduce alternative actions when primary paths are blocked      |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                             AUDIT TRAIL                              |
|                                                                      |
|  - Record which constraints were applied                             |
|  - Record when the decision was evaluated                            |
|  - Record why the action was allowed, modified, or blocked           |
+----------------------------------------------------------------------+
`}
          </pre>
          <p
            className="font-mono leading-[12px] md:leading-[18px] not-italic relative shrink-0 text-[#4e4e4e] text-[10px] md:text-[15px] text-center w-full max-w-[780px]"
            style={{ fontFamily: 'monospace' }}
          >
            Control is enforced at every decision point in the system.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] md:pb-[12px] pt-0 px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="42:803">
          <p className="font-sans font-medium leading-[21px] relative shrink-0 text-[20px] text-nowrap" data-node-id="42:805">
            Why This Matters
          </p>
          <div className="min-w-full relative shrink-0 w-full">
            <div
              className="h-[4px] w-full overflow-hidden"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
                backgroundSize: '22.627px 22.627px',
                backgroundPosition: '0 0',
                imageRendering: 'crisp-edges',
              }}
            />
          </div>
          <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px]" data-node-id="42:806">
            <p className="leading-[21px] mb-[0.5em]">Without runtime enforcement:</p>
            <ul className="list-disc mb-[1em]">
              <li className="mb-0 ms-[22.5px]">
                <span className="font-sans font-normal leading-[24px]">Agents optimize for goals while violating constraints</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="font-sans font-normal leading-[24px]">Memory access crosses domains without validation</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="font-sans font-normal leading-[24px]">Reasoning drifts into unsafe or noncompliant paths</span>
              </li>
              <li className="ms-[22.5px]">
                <span className="font-sans font-normal leading-[24px]">Failures are detected only after damage occurs</span>
              </li>
            </ul>
            <p className="leading-[21px] mb-[1em]">These are not edge cases.</p>
            <p className="leading-[21px] mb-[1em]">
              They are the result of systems that do not enforce constraints during execution.
            </p>
            <p className="leading-[21px] mb-0">
              Adaptablox enforces authority before actions execute, not after they are logged.
            </p>
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

