'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

const imgGroup28481 = "/assets/logo.svg";

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
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - overview" data-node-id="27:645" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F1F2F4 0%, #D7D9DF 100%)" }}>
      <div className="bg-[rgba(104,106,113,0.8)] backdrop-blur-sm h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="27:646" style={{ background: "rgba(104, 106, 113, 0.80)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px] hidden md:block" data-name="logo" data-node-id="27:648">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="27:649">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[17px] top-[17px] bg-[#67686d] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="27:668">
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
        className="bg-[#eef0f4] content-stretch flex flex-col gap-[48px] items-start p-[18px] pb-[118px] relative shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] shrink-0 w-[900px] max-w-full mx-auto transition-all duration-250 ease-out min-h-[calc(100vh+21px)]" 
        style={{ 
          marginTop: isAnimating ? '0px' : '-20px',
          transition: 'margin-top 0.25s ease-out'
        }}
        data-node-id="27:684"
      >
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="44:869" style={{ marginTop: '71px' }}>
          <div className="content-stretch flex flex-col gap-[18px] items-start pb-[12px] pt-[20px] px-[24px] relative shrink-0 w-full" data-node-id="27:685">
            <p className="font-sans font-semibold leading-[21px] relative shrink-0 text-[#4e4e4e] text-[24px]" data-node-id="27:687">
              An OS for Agents
            </p>
            <p className="font-sans font-bold leading-[21px] min-w-full relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="27:688">
              Autonomous AI doesn't fail because it's malicious or unintelligent. It fails because it acts outside delegated authority at the moment of action.
            </p>
            <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pl-0 pr-[24px] pt-0 relative shrink-0 w-full" data-node-id="44:850">
              <div className="font-sans font-normal leading-[21px] min-w-full relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="44:852">
                <p className="mb-0">Most AI governance today operates either before execution (prompts, policies, access control) or after execution (logs, audits, kill switches). Neither is sufficient once agents can reason, delegate, remember, and adapt in real time. What's missing is enforcement during action—when decisions are actually formed and committed.</p>
                <p className="mb-0">&nbsp;</p>
                <p>Adaptablox is a runtime guidance platform that fills this gap.</p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[32px] px-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-node-id="27:769">
            <div className="content-stretch flex items-center justify-center px-[16px] py-0 relative shrink-0 w-full" data-node-id="42:785">
              <div className="basis-0 font-sans grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="27:770">
                <p className="font-sans font-medium relative shrink-0 text-[#4e4e4e] text-[20px] text-nowrap mb-[18px]">
                  The Adaptablox Control Layer
                </p>
                <p className="font-sans font-normal mb-0">
                  Adaptablox introduces a behavioral operating layer for autonomous systems. It governs how agents behave at the surface level and how models reason internally, without retraining or modifying model weights.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p className="font-sans font-normal">
                  It does this through two complementary runtime layers:
                </p>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start px-[36px] py-[8px] relative shrink-0 w-full" data-node-id="42:782">
              <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
                <p className="font-sans font-bold leading-[24px] mb-0 text-[#6aaf81]">{`Agent Role & Constraint (A.R.C.) governs the outer loop`}</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Agent behavior, tone, permissions, memory access, delegation, and coordination
                    </span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Enforces role-bounded authority at the moment of action
                    </span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Escalates, blocks, or reroutes actions that exceed scope
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start px-[36px] py-[8px] relative shrink-0 w-full" data-node-id="42:790">
              <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="42:791">
                <p className="font-sans font-bold leading-[24px] mb-0 text-[#84a5ff]">{`Latent Role & Constraint (L.R.C.) governs the inner loop`}</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Internal reasoning dynamics, activation patterns, and latent deliberation
                    </span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Constrains unsafe or misaligned reasoning pathways before outputs are generated
                    </span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="font-sans font-normal leading-[24px]">
                      Resolves conflicts between competing internal interpretations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center px-[16px] py-0 pb-[24px] relative shrink-0 w-full" data-node-id="42:793">
              <p className="basis-0 font-sans font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="42:794">
                Together, these layers make autonomous systems governable in the same way enterprises govern human and software actors: through defined authority, enforced scope, and auditable decision paths.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[12px] pt-0 px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="42:796">
          <p className="font-sans font-medium relative shrink-0 text-[20px] text-nowrap" data-node-id="42:798">
            How It Works
          </p>
          <p className="font-sans font-normal min-w-full relative shrink-0 text-[15px]" data-node-id="42:799">
            This dual-loop approach ensures that what the system does and how it reasons remain aligned with delegated authority in real time.
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] md:px-[40px] py-0 relative size-full" data-node-id="42:801">
          <pre className="font-mono leading-[12px] md:leading-[18px] not-italic relative shrink-0 text-[#4e4e4e] text-[10px] md:text-[15px] text-center w-full max-w-[546px] whitespace-pre" data-node-id="42:802" style={{ fontFamily: 'monospace' }}>
{`+------------------------------------------------------+
|               USER / ENVIRONMENT INPUT               |
|    (Prompt, signal, context, ambient trigger, etc.)  |
+------------------------------------------------------+
▼
+------------------------------------------------------+
|        A.R.C. — BEHAVIORAL GOVERNANCE LAYER          |
|                                                      |
|  - Evaluates delegated authority                     |
|  - Enforces role, scope, and permissions             |
|  - Modulates tone and communication boundaries       |
|  - Governs memory access and delegation              |
+------------------------------------------------------+
▼
+------------------------------------------------------+
|        L.R.C. — INTERNAL REASONING GOVERNANCE        |
|                                                      |
|  - Constrains activation pathways                    |
|  - Applies deliberation limits                       |
|  - Selects policy-aligned reasoning trajectories     |
|  - Resolves conflicting internal interpretations     |
+------------------------------------------------------+
▼
+------------------------------------------------------+
|               MODEL REASONING ENGINE                 |
|         (Weights and training unchanged)             |
+------------------------------------------------------+
▼
+------------------------------------------------------+
|         POLICY-ALIGNED ACTION OR ESCALATION          |
|                                                      |
|  - Execute permitted action                          |
|  - Defer, reroute, or escalate when out of scope     |
+------------------------------------------------------+
▼
+------------------------------------------------------+
|                     AUDIT TRAIL                      |
|                                                      |
|  - What authority applied                            |
|  - When the decision was made                        |
|  - Why the action was allowed, blocked, or escalated |
+------------------------------------------------------+
`}
          </pre>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-0 px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="42:803">
          <p className="font-sans font-medium leading-[21px] relative shrink-0 text-[20px] text-nowrap" data-node-id="42:805">
            Why This Matters
          </p>
          <div className="font-sans font-normal leading-[0] min-w-full relative shrink-0 text-[15px]" data-node-id="42:806">
            <p className="leading-[21px] mb-0">Without runtime authority enforcement:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[22.5px]">
                <span className="font-sans font-normal leading-[24px]">Agents optimize for goals while violating policy</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="font-sans font-normal leading-[24px]">Memory leaks across domains</span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="font-sans font-normal leading-[24px]">Reasoning drifts into unsafe or noncompliant paths</span>
              </li>
              <li className="ms-[22.5px]">
                <span className="font-sans font-normal leading-[24px]">Failures are discovered only after damage occurs</span>
              </li>
            </ul>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">
              <span>{`Adaptablox prevents these outcomes by enforcing authority `}</span>
              <span className="font-sans font-bold">
                before actions execute
              </span>
              , not after they're logged.
            </p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px] mb-0">It does not replace models.</p>
            <p className="leading-[21px] mb-0">It does not rely on brittle rules.</p>
            <p className="leading-[21px] mb-0">It does not assume perfect prompts.</p>
            <p className="leading-[21px] mb-0">&nbsp;</p>
            <p className="leading-[21px]">It provides the missing control layer required for agentic, ambient, and multi-agent AI systems to operate safely, coherently, and at scale.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-0 px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="42:808">
          <p className="font-sans font-medium leading-[21px] relative shrink-0 text-[20px] text-nowrap" data-node-id="42:810">
            What Follows
          </p>
          <div className="font-sans font-normal leading-[21px] min-w-full relative shrink-0 text-[15px]" data-node-id="42:811">
            <p className="mb-0">The failure cases that follow are not hypotheticals.</p>
            <p className="mb-0">They are predictable consequences of deploying autonomy without runtime governance.</p>
            <p className="mb-0">&nbsp;</p>
            <p>Adaptablox exists to stop them before they happen.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-center pb-[24px] pt-0 px-[24px] relative shrink-0 w-full">
          <p className="font-sans font-normal leading-[21px] relative shrink-0 text-[#4e4e4e] text-[13px] text-center">
            © 2025 Adaptablox. Patents Pending.
          </p>
        </div>
      </div>
    </div>
  );
}

