'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import AxSequenceWidget from '@/components/AxSequenceWidget';
import AxReceiptWidget from '@/components/AxReceiptWidget';

const imgGroup28481 = "/assets/logo2.svg";

type Scenario = {
  label: string;
  title: string;
  body: string[];
  coreFailure: string[];
  whyCurrentSystemsFail: string[];
  interventionIntro?: string;
  intervention: string[];
  interventionOutro?: string[];
  outcome: string;
};

type FailureFamily = {
  title: string;
  summary: string;
  whyCurrentSystemsMissIt: string;
  whatAdaptabloxDoes: string;
  detailLine: string;
  scenarios: Scenario[];
};

const scenarioClass = "content-stretch flex flex-col items-start relative shadow-[0px_4px_18px_0px_rgba(0,0,0,0.14)] rounded-[8px] overflow-hidden shrink-0 w-full";
const sectionClass = "content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full";

const failureFamilies: FailureFamily[] = [
  {
    title: 'The sequence is the violation.',
    summary:
      "No single action breaks policy. The pattern does. A procurement agent issues rapid, conflicting purchase orders, each valid in isolation, incoherent in aggregate. A support agent's refunds are each defensible; across a hundred tickets, they're a financial exposure.",
    whyCurrentSystemsMissIt:
      'authority is checked per request. Nothing evaluates whether an action remains admissible given the actions that came before it.',
    whatAdaptabloxDoes:
      'every action is evaluated in the context of the sequence it belongs to. Incoherent or over-rapid sequences are blocked or deferred before they commit. A snapshot check cannot do this. Sequence-aware enforcement can.',
    detailLine: 'Detailed scenarios',
    scenarios: [
      {
        label: 'Fail Scenario',
        title: 'The helpful procurement agent',
        body: [
          'A procurement agent is authorized to negotiate vendor terms and execute agreements.',
          'During a high-pressure interval, it begins issuing a series of rapid, conflicting purchase orders. Each action is valid in isolation, but the sequence is incoherent.',
          'No single action violates policy.',
          'The sequence does.',
        ],
        coreFailure: [
          'The system cannot evaluate whether actions remain valid in the context of prior actions. It cannot detect that behavior has drifted outside its intended role.',
        ],
        whyCurrentSystemsFail: [
          'Authority is checked at the point of request, not enforced during execution',
          "Per-step checks don't compose. Each transition is evaluated as if the steps before it never happened.",
          'Agents operate without continuous constraint evaluation',
        ],
        intervention: [
          'Delegated scope is checked at each commit against recent related orders.',
          'Incoherent or over-rapid sequences are blocked or deferred before send.',
          'Owners are escalated with full sequence context when aggregate behavior exceeds role.',
          'Audit shows how locally valid steps composed a globally invalid pattern.',
        ],
        outcome:
          'Ordering pauses until the sequence matches delegated intent. Authority holds; stakeholders reconcile once, not after a pile of irreversible commits.',
      },
      {
        label: 'Fail Scenario',
        title: 'The customer support refund spiral',
        body: [
          'A customer support agent begins issuing refunds and replacements during a surge in tickets.',
          'Each decision appears reasonable in isolation.',
          'Across interactions, the behavior becomes inconsistent and financially exposed.',
        ],
        coreFailure: [
          'The system cannot maintain consistent policy enforcement across a sequence of decisions. It cannot detect that its behavior has drifted beyond acceptable bounds.',
        ],
        whyCurrentSystemsFail: [
          'Decisions are evaluated independently, not as part of a governed sequence',
          'The system lacks visibility into its own behavioral drift',
        ],
        intervention: [
          'Every action is evaluated against a constraint stack before execution',
          'Prior actions are incorporated into the current admissibility check',
          'Constraint violations trigger immediate modification or blocking',
        ],
        interventionOutro: [
          'The system does not rely on the agent to remain consistent.',
          'It enforces consistency directly.',
        ],
        outcome: 'Behavior remains consistent across interactions. Financial exposure is prevented before escalation occurs.',
      },
      {
        label: 'Fail Scenario',
        title: 'The well-meaning planning agent',
        body: [
          'A planning agent is tasked with coordinating a multi-step workflow across systems.',
          'It produces a sequence of actions that appear valid step by step.',
          'As the sequence progresses, dependencies begin to break and outcomes become inconsistent.',
          'The system continues executing.',
        ],
        coreFailure: [
          'The system cannot verify that the sequence of actions remains valid as a whole.',
          'Each step is evaluated independently.',
          'The system cannot detect that the plan has become incoherent over time.',
        ],
        whyCurrentSystemsFail: [
          'Actions are validated at the step level, not at the sequence level',
          'The system cannot detect when dependencies between steps are no longer satisfied',
        ],
        interventionIntro: 'Adaptablox enforces constraint continuity at runtime.',
        intervention: [
          'Each action is evaluated in the context of prior actions',
          'Dependencies are checked before execution, not after failure',
          'Constraint violations trigger immediate modification, rerouting, or blocking',
        ],
        interventionOutro: [
          'The system does not assume that a valid step leads to a valid outcome.',
          'It verifies that the sequence remains admissible at every step.',
        ],
        outcome: 'The workflow remains coherent across all steps. Invalid transitions are prevented before execution.',
      },
    ],
  },
  {
    title: 'Agreement is not correctness.',
    summary:
      'Multiple agents converge on the same answer, because they converged on the same assumption. Confidence rises as reasoning diversity collapses. The system produces a consistent, well-supported answer. It is wrong.',
    whyCurrentSystemsMissIt:
      'consensus is treated as validation. Per-output checks evaluate each agent in isolation. Nothing evaluates coordination state to distinguish agreement from correctness, or to detect that diversity has collapsed.',
    whatAdaptabloxDoes:
      'agent outputs are evaluated for coordination quality before they are combined. Premature convergence and irreconcilable conflict are treated as coordination failures, and the system intervenes, restoring structured disagreement, before synthesis occurs.',
    detailLine: 'Detailed scenarios',
    scenarios: [
      {
        label: 'Fail Scenario',
        title: 'False consensus',
        body: [
          'Multiple agents are assigned to analyze the same problem from different roles.',
          'Each agent produces a valid output. As the system aggregates responses, the agents begin reinforcing the same perspective.',
          'Confidence increases. Diversity of reasoning collapses.',
          'The system produces a consistent, well-supported answer.',
          'It is wrong.',
        ],
        coreFailure: [
          'The system cannot detect when agents are converging on the same underlying assumption.',
          'Agreement is treated as validation.',
        ],
        whyCurrentSystemsFail: [
          'No detection of convergence across agent outputs',
          'Per-output checks cannot distinguish agreement from correctness across coordination state',
          'Per-output checks cannot preserve reasoning diversity when agents converge',
        ],
        interventionIntro: 'Adaptablox detects and resolves convergence at runtime.',
        intervention: [
          'Outputs are evaluated for coordination quality before being combined',
          'Convergent reasoning is identified as a coordination failure before synthesis',
          'When coordination fails, the system intervenes to restore reasoning diversity',
        ],
        interventionOutro: [
          'This evaluation occurs before outputs are combined, not after the result is produced.',
          'The system does not rely on consensus.',
          'It enforces structured disagreement when required.',
        ],
        outcome: 'Diverse reasoning paths are preserved. Invalid consensus is broken before a final output is produced.',
      },
    ],
  },
  {
    title: 'Compliant parts, non-compliant whole.',
    summary:
      'An agent combines data from two systems. Each source is compliant in isolation. Together, they violate policy. Or an agent optimizes throughput in ways that are individually efficient and collectively unsafe.',
    whyCurrentSystemsMissIt:
      'compliance is evaluated per source, per output, per step, never on the composition.',
    whatAdaptabloxDoes:
      'composite results are evaluated for admissibility before they are produced or released. The system does not assume that compliant inputs produce compliant outputs. It evaluates the combination.',
    detailLine: 'Detailed scenarios',
    scenarios: [
      {
        label: 'Fail Scenario',
        title: 'Contextual compliance failure',
        body: [
          'A data-access agent answers an internal query by combining data from two systems.',
          'Each source is compliant in isolation.',
          'Together, they violate policy.',
          'The system returns the result.',
        ],
        coreFailure: [
          'The system allows cross-domain data use without enforcing contextual compliance boundaries.',
          'It cannot evaluate whether data remains compliant when combined.',
        ],
        whyCurrentSystemsFail: [
          'Policies exist outside execution paths',
          'Memory and retrieval are not governed by constraints',
          'Violations are detected after the fact through audit',
        ],
        interventionIntro: 'Adaptablox enforces compliance at runtime.',
        intervention: [
          'Memory access is constrained by domain and context',
          'Cross-domain combinations are evaluated before execution',
          'Violating actions are blocked before results are generated',
        ],
        interventionOutro: [
          'The system does not assume compliant inputs produce compliant outputs.',
          'It enforces compliance at the moment of use.',
        ],
        outcome: 'Compliance is enforced during execution. Violations are prevented, not discovered.',
      },
      {
        label: 'Fail Scenario',
        title: 'Objective override failure',
        body: [
          'A warehouse robot agent optimizes throughput by adjusting movement patterns.',
          'The changes improve efficiency.',
          'They violate safety assumptions around human proximity.',
          'The system continues operating.',
        ],
        coreFailure: [
          'The system prioritizes optimization goals without enforcing safety constraints at the moment of action.',
          'It cannot prevent goal-driven behavior from exceeding safe boundaries.',
        ],
        whyCurrentSystemsFail: [
          'Optimization is evaluated independently from safety constraints',
          'Safety systems react after near-miss events',
          'No unified constraint enforcement exists at execution time',
        ],
        interventionIntro: 'Adaptablox enforces constraint precedence at runtime.',
        intervention: [
          'Safety constraints override optimization goals',
          'Every action is evaluated against a hierarchical constraint stack',
          'Violations trigger immediate blocking or escalation',
        ],
        interventionOutro: [
          'The system does not rely on monitoring to catch failures.',
          'It blocks constraint-violating actions before execution.',
        ],
        outcome: 'Safety constraints are enforced at the moment of action. Optimization remains bounded within safe limits.',
      },
    ],
  },
];

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

function collapseFailureFamilyDetails(event: React.MouseEvent<HTMLElement>) {
  const details = event.currentTarget.closest('details');
  if (details instanceof HTMLDetailsElement) {
    details.open = false;
  }
}

function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <article className={scenarioClass}>
      <div className="bg-white border-solid content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
        <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] uppercase flex items-center gap-[6px] mb-0">
          {scenario.label}
        </p>
        <div className="font-sans leading-[24px] relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
          <p className="font-sans font-bold mb-0">{scenario.title}</p>
          {scenario.body.map((text) => (
            <p className="font-sans font-normal mb-[1em] last:mb-0" key={text}>
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-[#FFFAFA] content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full">
        <div className="font-sans leading-[24px] relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
          <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
          {scenario.coreFailure.map((text) => (
            <p className="font-sans font-normal mb-[1em] last:mb-0" key={text}>
              {text}
            </p>
          ))}
        </div>
        <div className="font-sans leading-[24px] relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
          <p className="font-sans font-bold mb-0 text-[#ff4b4b]">Why current systems fail</p>
          <ul className="list-disc mb-0">
            {scenario.whyCurrentSystemsFail.map((text) => (
              <li className="mb-0 ms-[23px]" key={text}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bg-[#FF9A9A] bottom-[-1px] left-0 top-[-1px] w-[5px]" />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 top-0 w-[5px]" style={{ background: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)' }} />
        <div className="font-sans leading-[24px] relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
          <p className="font-sans font-bold leading-[24px] mb-0">Runtime intervention</p>
          {scenario.interventionIntro && <p className="font-sans font-normal leading-[24px] mb-[1em]">{scenario.interventionIntro}</p>}
          <ul className="list-disc mb-[1em]">
            {scenario.intervention.map((text) => (
              <li className="mb-0 ms-[23px]" key={text}>
                {text}
              </li>
            ))}
          </ul>
          {scenario.interventionOutro?.map((text) => (
            <p className="font-sans font-normal leading-[24px] mb-[1em] last:mb-0" key={text}>
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-[#f7fdf9] border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[25px] md:px-[36px] py-[17px] md:py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
        <div className="font-sans leading-[24px] relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
          <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
          <p className="font-sans font-normal mb-0">{scenario.outcome}</p>
        </div>
      </div>
    </article>
  );
}

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
    (window as any).testNavigate = () => navigate('faqs');
    (window as any).testNavigateAbout = () => navigate('about');
    (window as any).testNavigateDemo = () => navigate('demo');

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
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[17px] top-[17px] bg-[#82848e] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="1:5">
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
        className="bg-[#f7f9fc] content-stretch flex flex-col gap-[24px] min-h-[calc(100vh+21px)] items-start p-[13px] md:p-[18px] pb-[82px] md:pb-[118px] relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-[800px] max-w-full mx-auto"
        style={{
          marginTop: isAnimating ? '0px' : '-12px',
          transition: 'margin-top 0.25s ease-out',
        }}
        data-node-id="1:39"
      >
        <section className={sectionClass} data-node-id="about-hero-agentic-systems" style={{ marginTop: '71px' }}>
          <SectionTitle>Agentic systems fail differently.</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-sans font-bold mb-[1em]">Every action is valid. The sequence isn't.</p>
            <p className="mb-[1em]">
              Adaptablox is a runtime control layer that enforces delegated authority at the moment of execution, across actions, sequences of actions, and coordination between agents.
            </p>
            <ul className="list-disc mb-[1em]">
              <li className="mb-0 ms-[23px]">Not training.</li>
              <li className="mb-0 ms-[23px]">Not prompting.</li>
              <li className="mb-0 ms-[23px]">Not post-hoc monitoring.</li>
              <li className="ms-[23px]">Enforcement, during execution.</li>
            </ul>
            <div className="flex flex-col gap-[10px] mt-[10px]">
              <a className="font-sans font-bold text-[#4e4e4e] arrow-link" href="#failure-families">
                See how agents fail <span className="arrow-link-arrow" aria-hidden="true">→</span>
              </a>
            </div>
            <AxSequenceWidget />
            <button className="font-sans font-bold text-[#4e4e4e] text-left cursor-pointer arrow-link mt-[16px]" type="button" onClick={() => navigate('demo')}>
              Watch the demos <span className="arrow-link-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </section>

        <section className={sectionClass} data-node-id="about-why-adaptablox-exists">
          <SectionTitle>Why Adaptablox exists</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">Autonomous agents don't fail the way software fails, and they don't fail the way models fail.</p>
            <p className="mb-[1em]">
              Software fails when code is wrong. Models fail when outputs are wrong. Agents fail when <strong>behavior drifts</strong>, when a system composed of individually correct steps produces an outcome no one authorized.
            </p>
            <p className="mb-[1em]">
              Today, authority over agents is defined <em>before</em> execution (policies, prompts, permissions) or reconstructed <em>after</em> failure (logs, monitoring, audits). Enforcement today is per-request. Nothing evaluates the sequence, the composition, or the coordination state.
            </p>
            <p className="mb-0">That gap is where agentic failures live. Adaptablox closes it.</p>
          </div>
        </section>

        <section className={sectionClass} data-node-id="failure-families" id="failure-families">
          <SectionTitle>Three ways agents fail</SectionTitle>
          <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
            {failureFamilies.map((family) => (
              <details className="failure-family-details bg-white rounded-[8px] shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] w-full group" key={family.title}>
                <summary className="cursor-pointer list-none px-[17px] md:px-[24px] py-[17px] md:py-[24px]">
                  <p className="font-sans text-[#4e4e4e] text-[18px] mb-[0.75em] flex items-center gap-[6px]">
                    <img src="/assets/alert.svg" alt="" className="shrink-0 w-[19px] h-[18px]" aria-hidden="true" />
                    <span className="font-bold">{family.title}</span>
                  </p>
                  <p className="font-sans font-normal text-[#4e4e4e] text-[15px] mb-[1em]">{family.summary}</p>
                  <p className="font-sans font-normal text-[#4e4e4e] text-[15px] mb-[0.5em]">
                    <strong>Why current systems miss it:</strong> {family.whyCurrentSystemsMissIt}
                  </p>
                  <p className="font-sans font-normal text-[#4e4e4e] text-[15px] mb-[1em]">
                    <strong>What Adaptablox does:</strong> {family.whatAdaptabloxDoes}
                  </p>
                  <p className="font-sans font-normal italic text-[#4e4e4e] text-[15px] mb-0 flex items-center gap-[8px]">
                    <span className="failure-family-chevron text-[#4e4e4e]" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{family.detailLine}</span>
                  </p>
                </summary>
                <div
                  className="content-stretch flex flex-col gap-[16px] px-[17px] md:px-[24px] pb-[17px] md:pb-[24px] cursor-pointer"
                  onClick={collapseFailureFamilyDetails}
                >
                  {family.scenarios.map((scenario) => (
                    <ScenarioCard key={scenario.title} scenario={scenario} />
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className={sectionClass} data-node-id="about-regulators">
          <SectionTitle>What regulators are about to ask</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-sans font-bold mb-[1em]">Not what the model can do. Whether this agent should be allowed to do it now, in this context, under this authority.</p>
            <p className="mb-[1em]">
              Regulatory pressure on frontier models governs <em>capability</em>: what models may be built and who may access them. But once a model is deployed as an agent, capability governance stops answering the question that matters:
            </p>
            <p className="italic mb-[1em]">Was this specific action within this specific agent's delegated authority at the moment it was taken?</p>
            <p className="mb-[1em]">
              Prompts can't prove that. Policies on paper can't prove that. Logs written after the fact can describe what happened, but they can't show that authority was <em>enforced</em>.
            </p>
            <p className="mb-0">
              Adaptablox is built for the question deployers will be asked: enforcement of delegated authority at execution time, with a persistent record of every enforcement decision. As regulatory attention moves from model capability to agent conduct, that layer stops being optional.
            </p>
          </div>
        </section>

        <section className={sectionClass} data-node-id="enforcement-evidence" id="enforcement-evidence">
          <SectionTitle>Governance you can't verify is just policy.</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[0.5em]">Every runtime intervention Adaptablox makes produces a record:</p>
            <ul className="list-disc mb-[1em]">
              <li className="mb-0 ms-[23px]"><strong>Which constraints</strong> were evaluated</li>
              <li className="mb-0 ms-[23px]"><strong>When</strong> the decision was made</li>
              <li className="ms-[23px]"><strong>Why</strong> the action was allowed, modified, rerouted, or blocked</li>
            </ul>
            <p className="mb-[1em]">
              These records are cryptographically chained, so the history of enforcement decisions is tamper-evident. An auditor doesn't have to trust that governance happened. The record shows it, and shows that the record itself hasn't been altered.
            </p>
            <p className="mb-[0.5em]">This is the difference between governance as a promise and governance as a verifiable record:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[23px]">A compliance officer can answer "show me every action this agent was blocked from taking in Q3."</li>
              <li className="mb-0 ms-[23px]">An incident review can reconstruct exactly which constraint held, and when.</li>
              <li className="ms-[23px]">A regulator can verify that authority was enforced, not just documented.</li>
            </ul>
            <span dangerouslySetInnerHTML={{ __html: '<!-- HOLD: pending counsel review -->' }} />
          </div>
          <AxReceiptWidget />
        </section>

        <section className={sectionClass} data-node-id="about-who-this-is-for">
          <SectionTitle>Who this is for</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">
              Adaptablox is built for teams deploying autonomous agents where behavior carries consequence: financial services, healthcare, legal, and government, environments where "the agent seemed fine in testing" is not an acceptable control posture, and where every enforcement decision must be demonstrable after the fact.
            </p>
            <p className="mb-0">
              If your agents can spend money, touch regulated data, or act across systems, the question is no longer whether they're capable. It's whether their authority is enforced.
            </p>
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
