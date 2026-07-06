'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import AxOutcomesWidget from '@/components/AxOutcomesWidget';

const imgGroup28481 = "/assets/logo2.svg";
const sectionClass = "content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="font-sans font-[590] relative shrink-0 text-[24px] leading-[1.38] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {children}
      </p>
      <div
        className="h-[4px] w-full max-w-[720px] overflow-hidden shrink-0 mb-[6px]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
          backgroundSize: '22.627px 22.627px',
          backgroundPosition: '0 0',
          imageRendering: 'crisp-edges',
        }}
      />
    </>
  );
}

export default function AdaptabloxOverview() {
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
    (window as any).testNavigate = () => navigate('faqs');
    (window as any).testNavigateAbout = () => navigate('about');
    (window as any).testNavigateDemo = () => navigate('demo');
    (window as any).testNavigateOverview = () => navigate('overview');

    return () => {
      delete (window as any).testNavigate;
      delete (window as any).testNavigateAbout;
      delete (window as any).testNavigateDemo;
      delete (window as any).testNavigateOverview;
    };
  }, [navigate]);

  const goToEvidence = () => {
    navigate('about');
    window.setTimeout(() => {
      document.getElementById('enforcement-evidence')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - overview" data-node-id="27:645" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F2F4F8 0%, #DCDEE6 100%)" }}>
      <div className="bg-[rgba(135,137,145,0.68)] backdrop-blur-sm h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="27:646" style={{ background: "rgba(135, 137, 145, 0.68)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px] hidden md:block" data-name="logo" data-node-id="27:648">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="27:649">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[17px] top-[17px] bg-[#82848e] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="27:668">
          <button onClick={() => navigate('about')} className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${activePage === 'about' ? 'bg-[#f7f9fc] shadow-[0px_5px_9px_0px_rgba(0,0,0,0.07)]' : 'bg-transparent hover:opacity-80'}`} data-name="button" data-node-id="27:671" type="button">
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${activePage === 'about' ? 'text-[#5b5b5f]' : 'text-white'}`}>About</span>
          </button>
          <button onClick={() => navigate('overview')} className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${activePage === 'overview' ? 'bg-[#f7f9fc] shadow-[0px_5px_9px_0px_rgba(0,0,0,0.07)]' : 'bg-transparent hover:opacity-80'}`} data-name="button" data-node-id="27:669" type="button">
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${activePage === 'overview' ? 'text-[#5b5b5f]' : 'text-white'}`}>Control</span>
          </button>
          <button onClick={() => navigate('faqs')} className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${activePage === 'faqs' ? 'bg-[#f7f9fc] shadow-[0px_5px_9px_0px_rgba(0,0,0,0.07)]' : 'bg-transparent hover:opacity-80'}`} data-name="button" data-node-id="1:10" type="button" style={{ zIndex: 10001, position: 'relative' }}>
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${activePage === 'faqs' ? 'text-[#5b5b5f]' : 'text-white'}`}>System</span>
          </button>
          <button onClick={() => navigate('demo')} className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity ${activePage === 'demo' ? 'bg-[#f7f9fc] shadow-[0px_5px_9px_0px_rgba(0,0,0,0.07)]' : 'bg-transparent hover:opacity-80'}`} data-name="button" data-node-id="1:12" type="button">
            <span className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap ${activePage === 'demo' ? 'text-[#5b5b5f]' : 'text-white'}`}>Demo</span>
          </button>
        </div>
      </div>
      <div
        className="bg-[#f7f9fc] content-stretch flex flex-col gap-[32px] items-start p-[13px] md:p-[18px] pb-[82px] md:pb-[118px] relative shadow-[2px_5px_9px_0px_rgba(0,0,0,0.07)] shrink-0 w-[800px] max-w-full mx-auto transition-all duration-250 ease-out min-h-[calc(100vh+21px)]"
        style={{
          marginTop: isAnimating ? '0px' : '-20px',
          transition: 'margin-top 0.25s ease-out',
        }}
        data-node-id="27:684"
      >
        <section className={sectionClass} data-node-id="overview-control-layers" style={{ marginTop: '71px' }}>
          <SectionTitle>How control is enforced</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[#4e4e4e] text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">
              Adaptablox applies control where agentic systems actually operate:
              <br />
              At execution, in coordination, and inside inference.
            </p>
            <button className="font-sans font-bold text-[#4e4e4e] text-left cursor-pointer arrow-link" type="button" onClick={() => navigate('faqs')}>
              Adaptablox system <span className="arrow-link-arrow" aria-hidden="true">→</span>
            </button>
          </div>
          <AxOutcomesWidget />
        </section>

        <section className={sectionClass} data-node-id="overview-how-it-works">
          <SectionTitle>How it works</SectionTitle>
          <p className="font-mono leading-[12px] md:leading-[18px] not-italic relative shrink-0 text-[#4e4e4e] text-[10px] md:text-[15px] text-center w-full max-w-[780px]" style={{ fontFamily: 'monospace' }}>
            All evaluation and enforcement occurs during runtime, not after output is produced. Below is a sequence of enforced decisions.
          </p>
          <div className="[container-type:inline-size] -mx-[17px] w-[calc(100%+34px)] md:-mx-[24px] md:w-[calc(100%+48px)] overflow-x-hidden md:overflow-x-auto">
            <pre
              className="font-mono not-italic relative text-[#4e4e4e] w-full whitespace-pre text-center leading-[1.15] overflow-x-hidden [font-size:calc(100cqw/69.75)] md:text-[15px] md:leading-[18px]"
              data-node-id="42:802"
              style={{ fontFamily: 'monospace' }}
            >
{`+----------------------------------------------------------------------+
|                       USER / ENVIRONMENT INPUT                       |
|           (Prompt, signal, context, ambient trigger, etc.)           |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                 A.R.C., BEHAVIORAL GOVERNANCE LAYER                  |
|                                                                      |
|  - Evaluate delegated authority against role and constraint stack    |
|  - Validate scope, permissions, and execution context                |
|  - Block, modify, or reroute actions that exceed constraints         |
|  - Regulate memory access and delegation boundaries                  |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|      L.R.C., INTERNAL REASONING GOVERNANCE (research direction)      |
|                                                                      |
|  - Designed to evaluate internal reasoning pathways during inference |
|  - Designed to suppress or redirect pathways that violate constraints|
|  - Designed to select only compliant reasoning trajectories          |
|  - Designed to resolve conflicts between competing interpretations   |
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
|                      ENFORCEMENT + EVIDENCE                          |
|                                                                      |
|  - Record which constraints were applied                             |
|  - Record when the decision was evaluated                            |
|  - Record why the action was allowed, modified, or blocked           |
+----------------------------------------------------------------------+
`}
            </pre>
          </div>
          <button className="font-sans font-bold text-[#4e4e4e] text-left mt-[12px] cursor-pointer arrow-link" type="button" onClick={goToEvidence}>
            View Enforcement + Evidence <span className="arrow-link-arrow" aria-hidden="true">→</span>
          </button>
        </section>

        <section className={sectionClass} data-node-id="overview-what-adaptablox-is-not">
          <SectionTitle>What Adaptablox is not</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[#4e4e4e] text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul className="list-disc mb-0">
              <li className="mb-[0.75em] ms-[23px]">
                <strong>Not a guardrail.</strong> Guardrails evaluate outputs after generation. Adaptablox evaluates admissibility <em>before</em> an action or output is allowed to cross the boundary, before it commits, sends, or externalizes.
              </li>
              <li className="mb-[0.75em] ms-[23px]">
                <strong>Not access governance.</strong> Access control decides who gets in. Adaptablox governs what happens after access is granted.
              </li>
              <li className="mb-[0.75em] ms-[23px]">
                <strong>Not model modification.</strong> No retraining, no fine-tuning, no weight changes.
              </li>
              <li className="ms-[23px]">
                <strong>Not post-hoc filtering.</strong> We don't clean up results after the fact. We gate whether results are admissible at the moment they would be produced or released.
              </li>
            </ul>
          </div>
        </section>

        <div className="content-stretch flex flex-col gap-[12px] items-center pb-[17px] md:pb-[24px] pt-0 px-[17px] md:px-[24px] relative shrink-0 w-full">
          <p className="font-sans font-normal leading-[21px] relative shrink-0 text-[#4e4e4e] text-[13px] text-center">
            © 2026 Adaptablox. Patents Pending.
          </p>
        </div>
      </div>
    </div>
  );
}
