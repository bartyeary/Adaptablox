'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import AxOutcomesWidget from '@/components/AxOutcomesWidget';

const imgGroup28481 = "/assets/logo2.svg";
const sectionClass = "content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full";

const FLOW_DIAGRAM_MOBILE = `+-------------------------------------+
|      USER / ENVIRONMENT INPUT       |
+-------------------------------------+
▼
+-------------------------------------+
| A.R.C. · AGENT GOVERNANCE           |
| Associate machine-readable role,    |
| authority, and constraints with     |
| each agent. Enforce through agent-  |
| bound or environment-side control.  |
| Gate actions, memory, delegation,   |
| and runtime constraint changes.     |
+-------------------------------------+
▼
+-------------------------------------+
| L.R.C. · ACTIVATION GOVERNANCE      |
| (research direction)                |
| Observe activation data, identify   |
| a pathway, apply its constraint     |
| set, and modulate activations       |
| without changing stored weights.    |
+-------------------------------------+
▼
+-------------------------------------+
| D.S. · ENSEMBLE GOVERNANCE          |
| Detect pathological similarity or   |
| divergence, introduce a governed    |
| counter-perspective, modify the     |
| ensemble, and reprocess the task.   |
+-------------------------------------+
▼
+-------------------------------------+
| O.A.C. · OUTPUT ADMISSIBILITY       |
| Build a system-level output object  |
| and independently test the whole,   |
| sequence, and aggregate before      |
| externalization.                    |
+-------------------------------------+
▼
+-------------------------------------+
| EXECUTE · MODIFY · BLOCK · HOLD     |
| Record the constraints, decision,   |
| disposition, time, and provenance.  |
+-------------------------------------+`;

const FLOW_DIAGRAM_DESKTOP = `+----------------------------------------------------------------------+
|                       USER / ENVIRONMENT INPUT                       |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                    A.R.C. · AGENT GOVERNANCE                         |
| Associate machine-readable role, authority, and constraint state     |
| with each agent. Enforce through control logic operating with the    |
| agent, through a separate runtime environment or service, or both.   |
| Gate actions, memory, delegation, and runtime constraint changes.    |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|       L.R.C. · ACTIVATION-PATHWAY GOVERNANCE (research direction)    |
| Observe intermediate activation data, identify a pathway or subgraph,|
| evaluate it against its constraint set, and modulate activations     |
| during inference without retraining or changing stored weights.      |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                  D.S. · MULTI-AGENT GOVERNANCE                       |
| Detect pathological similarity or divergence across constrained      |
| outputs. Introduce a governed counter-perspective, modify the        |
| original ensemble, reprocess the task, and synthesize updated        |
| outputs.                                                             |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|                O.A.C. · SYSTEM-LEVEL ADMISSIBILITY                   |
| Construct a system-level output object and independently test the    |
| combination, sequence, aggregation, authority, and current state.    |
| Only an admissible object may cross the externalization boundary.    |
+----------------------------------------------------------------------+
▼
+----------------------------------------------------------------------+
|               EXECUTE · MODIFY · BLOCK · HOLD · ESCALATE             |
| Record the constraints evaluated, result, disposition, time, and     |
| contributing-agent provenance as verifiable enforcement evidence.    |
+----------------------------------------------------------------------+`;

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
        className="bg-[#f7f9fc] content-stretch flex flex-col gap-[32px] items-start p-[13px] md:p-[18px] pb-[82px] md:pb-[118px] relative shadow-[2px_5px_9px_0px_rgba(0,0,0,0.07)] shrink-0 w-[800px] max-w-full min-w-0 mx-auto transition-all duration-250 ease-out min-h-[calc(100vh+21px)]"
        style={{
          marginTop: isAnimating ? '0px' : '-20px',
          transition: 'margin-top 0.25s ease-out',
        }}
        data-node-id="27:684"
      >
        <section className={sectionClass} data-node-id="overview-control-layers" style={{ marginTop: '71px' }}>
          <SectionTitle>Defense in depth</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[#4e4e4e] text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">
              Adaptablox defines four layers of control: individual agents, internal activation pathways, groups of agents, and the combined result before it is released or acted on.
            </p>
            <p className="mb-[1em]">
              Each layer is designed to check a different part of the system and change or block what happens next.
            </p>
            <button className="font-sans font-bold text-[#4e4e4e] text-left cursor-pointer arrow-link" type="button" onClick={() => navigate('faqs')}>
              Adaptablox system <span className="arrow-link-arrow" aria-hidden="true">→</span>
            </button>
          </div>
          <AxOutcomesWidget />
        </section>

        <section className={`${sectionClass} min-w-0`} data-node-id="overview-how-it-works">
          <SectionTitle>How it works</SectionTitle>
          <p className="font-sans font-normal relative shrink-0 text-[#4e4e4e] text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Authority and rules remain associated with each agent as it operates. Control logic running with the agent, in its runtime environment, or both checks proposed actions. DS changes a group of agents and reruns its task when a defined failure condition is met. LRC explores constraints on internal activation pathways. OAC independently checks the combined result and gates its release or execution.
          </p>
          <button className="font-sans font-bold text-[#4e4e4e] text-left mb-[12px] cursor-pointer arrow-link" type="button" onClick={goToEvidence}>
            See the enforcement record <span className="arrow-link-arrow" aria-hidden="true">→</span>
          </button>
          <div className="flow-diagram-fit min-w-0 w-full self-stretch md:w-[calc(100%+84px)] md:-mx-[42px]">
            <div className="flow-diagram-mobile-outer">
            <pre
              className="flow-diagram-mobile font-mono not-italic relative text-[#4e4e4e] whitespace-pre text-center"
              data-node-id="42:802-mobile"
              style={{ fontFamily: 'monospace' }}
            >
{FLOW_DIAGRAM_MOBILE}
            </pre>
            </div>
            <pre
              className="flow-diagram-desktop font-mono not-italic relative text-[#4e4e4e] whitespace-pre text-center"
              data-node-id="42:802"
              style={{ fontFamily: 'monospace' }}
            >
{FLOW_DIAGRAM_DESKTOP}
            </pre>
          </div>
        </section>

        <section className={sectionClass} data-node-id="overview-what-adaptablox-is-not">
          <SectionTitle>What Adaptablox is not</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[#4e4e4e] text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul className="list-disc mb-0">
              <li className="mb-[0.75em] ms-[23px]">
                <strong>Not a prompt guardrail.</strong> Prompts guide model behavior. Adaptablox represents authority and constraints as machine-readable rules enforced by control logic as the agent operates.
              </li>
              <li className="mb-[0.75em] ms-[23px]">
                <strong>Not access governance alone.</strong> Permission to reach a resource does not determine whether a particular action or combination of outputs is allowed under current conditions. Adaptablox evaluates that behavior before permitting it.
              </li>
              <li className="mb-[0.75em] ms-[23px]">
                <strong>Not retraining.</strong> LRC is designed to adjust activation data as the model processes an input, without permanently changing its stored weights.
              </li>
              <li className="ms-[23px]">
                <strong>Not monitoring alone.</strong> The system is designed to record what each enforcement check evaluated, what it allowed or blocked, and why.
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
