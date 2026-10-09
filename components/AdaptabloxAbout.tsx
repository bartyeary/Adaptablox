'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import AxSequenceWidget from '@/components/AxSequenceWidget';
import AxReceiptWidget from '@/components/AxReceiptWidget';
import AxAuthorityWidget from '@/components/AxAuthorityWidget';

const imgGroup28481 = "/assets/logo2.svg";
const SHOW_AUTHORITY_WIDGET = true;

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

const scenarioClass = "content-stretch flex flex-col items-start relative border border-solid border-[rgba(78,78,78,0.12)] shadow-[0px_4px_18px_0px_rgba(0,0,0,0.14)] rounded-[8px] overflow-hidden shrink-0 w-full";
const scenarioSectionPadding = "px-[25px] md:px-[36px] py-[17px] md:py-[24px]";
const sectionClass = "content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 text-[#4e4e4e] w-full";

const failureFamilies: FailureFamily[] = [
  {
    title: 'The sequence is the violation.',
    summary:
      "No single action breaks policy. The pattern does. A procurement agent issues conflicting orders that each pass their own checks. A support agent's refunds are individually permitted but together exceed a spending limit.",
    whyCurrentSystemsMissIt:
      'an action may be allowed on its own but violate policy when considered alongside earlier actions.',
    whatAdaptabloxDoes:
      'OAC independently evaluates whether a proposed system result is admissible—allowed under current rules and conditions. It considers earlier results and enforcement decisions, then controls release or execution. An action permitted on its own can be changed, delayed, or blocked when the sequence violates system rules.',
    detailLine: 'Detailed scenarios',
    scenarios: [
      {
        label: 'Fail Scenario',
        title: 'The helpful procurement agent',
        body: [
          'A procurement agent is authorized to negotiate vendor terms and execute agreements.',
          'During a busy period, it issues conflicting purchase orders. Each order passes its own checks, but the orders cannot all be fulfilled as intended.',
          'No single action violates policy.',
          'The sequence does.',
        ],
        coreFailure: [
          'The system checks each order without considering earlier orders or the limits on the overall purchase.',
        ],
        whyCurrentSystemsFail: [
          'Each order is checked in isolation',
          'Related orders are not checked for conflicts before commitment',
        ],
        intervention: [
          'Each proposed order is checked against the agent’s authority and related orders.',
          'Conflicts or ordering rates that violate policy are blocked or delayed before commitment.',
          'Cases requiring approval are sent to the responsible person with the order history.',
          'The record explains why an order passed or failed the combined check.',
        ],
        outcome:
          'Orders that fail the combined check are held for correction or approval before commitment.',
      },
      {
        label: 'Fail Scenario',
        title: 'The customer support refund spiral',
        body: [
          'A customer support agent begins issuing refunds and replacements during a surge in tickets.',
          'Each decision appears reasonable in isolation.',
          'Together, the refunds exceed the agent’s spending limit.',
        ],
        coreFailure: [
          'The system checks each refund without tracking the total amount authorized across tickets.',
        ],
        whyCurrentSystemsFail: [
          'Refunds are checked individually',
          'Earlier refunds are not included in the spending check',
        ],
        intervention: [
          'Each refund is checked against the active spending rules',
          'Earlier refunds are included in the check',
          'Refunds that exceed the limit are changed or blocked before payment',
        ],
        outcome: 'Refunds that would exceed the configured spending limit are stopped before payment.',
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
          'The system checks each step without checking whether earlier steps still satisfy the plan’s dependencies.',
        ],
        whyCurrentSystemsFail: [
          'Actions are validated at the step level, not at the sequence level',
          'The system cannot detect when dependencies between steps are no longer satisfied',
        ],
        interventionIntro: 'Adaptablox checks the plan as conditions change.',
        intervention: [
          'Each action is evaluated in the context of prior actions',
          'Dependencies are checked before execution, not after failure',
          'Constraint violations trigger immediate modification, rerouting, or blocking',
        ],
        outcome: 'Steps that fail the dependency or policy checks are held before execution.',
      },
    ],
  },
  {
    title: 'Agreement is not correctness.',
    summary:
      'Several agents reach the same answer because they share the same faulty assumption. Their agreement raises confidence without adding independent support.',
    whyCurrentSystemsMissIt:
      'checking each answer separately does not reveal whether the group has stopped considering different perspectives. Agreement alone does not establish correctness.',
    whatAdaptabloxDoes:
      'DS compares outputs from agents operating under defined constraints. When agreement or disagreement meets a defined failure condition, a counter-agent with different constraints proposes a change to the original group. The group is changed, reruns the task, and combines only the revised outputs.',
    detailLine: 'Detailed scenarios',
    scenarios: [
      {
        label: 'Fail Scenario',
        title: 'False consensus',
        body: [
          'Multiple agents are assigned to analyze the same problem from different roles.',
          'Each output passes its individual checks, but the agents reinforce the same faulty assumption.',
          'Confidence increases. Diversity of reasoning collapses.',
          'The system produces an answer that appears well supported.',
          'It is wrong.',
        ],
        coreFailure: [
          'The system cannot detect when agents are converging on the same underlying assumption.',
          'Agreement is treated as validation.',
        ],
        whyCurrentSystemsFail: [
          'The group’s outputs are not compared for loss of independent perspectives',
          'Agreement is used as a substitute for independent support',
        ],
        interventionIntro: 'DS intervenes when agreement or disagreement meets a defined failure condition.',
        intervention: [
          'Outputs are compared for problematic similarity or unresolved disagreement',
          'A counter-agent with different constraints recommends a change to the original group',
          'The group is changed and reruns the task before its revised outputs are combined',
        ],
        outcome: 'The group reconsiders the task under changed conditions before producing a combined answer.',
      },
    ],
  },
  {
    title: 'Compliant parts, non-compliant whole.',
    summary:
      'Agents retrieve information they are each allowed to access. Combining their outputs reveals information that policy prohibits sharing.',
    whyCurrentSystemsMissIt:
      'permission to access each source does not establish permission to release the combined information.',
    whatAdaptabloxDoes:
      'OAC creates a structured representation of the combined result, including who contributed what. An evaluator independent of the contributing agents checks it against system rules. A release gate can block the combination even when every contribution passed its own checks.',
    detailLine: 'Detailed scenarios',
    scenarios: [
      {
        label: 'Fail Scenario',
        title: 'Contextual compliance failure',
        body: [
          'Two agents retrieve data from separate systems to answer an internal query.',
          'Each agent’s contribution is permitted on its own.',
          'The combined answer reveals information that policy prohibits sharing.',
          'The system returns the result.',
        ],
        coreFailure: [
          'The system checks access to each source but does not check whether the combined answer may be released.',
        ],
        whyCurrentSystemsFail: [
          'Access checks cover each agent and source separately',
          'No independent check of the combined answer controls its release',
        ],
        interventionIntro: 'ARC governs access. OAC independently checks the combined result.',
        intervention: [
          'Each agent’s memory access is limited by its role and context',
          'The combined answer is checked against system rules before release',
          'Results that fail those checks are blocked at the release gate',
        ],
        outcome: 'The combined answer is withheld when it violates the configured rules, even though each contribution was individually permitted.',
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
        interventionIntro: 'Adaptablox applies safety rules before approving an action.',
        intervention: [
          'Safety constraints override optimization goals',
          'Each proposed action is checked against the active rules in priority order',
          'Violations trigger immediate blocking or escalation',
        ],
        outcome: 'Actions that fail the configured safety checks are blocked or escalated before execution.',
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
      <div className={`bg-[#FFFAFA] content-stretch flex flex-col gap-[17px] md:gap-[24px] items-start ${scenarioSectionPadding} relative shrink-0 w-full`}>
        <div className="font-sans leading-[24px] relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
          <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
          {scenario.coreFailure.map((text) => (
            <p className="font-sans font-normal mb-[1em] last:mb-0" key={text}>
              {text}
            </p>
          ))}
        </div>
        <div className="font-sans leading-[24px] relative shrink-0 text-[#4e4e4e] text-[15px] w-full">
          <p className="font-sans font-bold mb-0 text-[#ff4b4b]">Why this system fails</p>
          <ul className="list-disc mb-0">
            {scenario.whyCurrentSystemsFail.map((text) => (
              <li className="mb-0 ms-[23px]" key={text}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bg-[#FF9A9A] bottom-[-1px] left-0 top-[-1px] w-[3px]" />
      </div>
      <div className={`bg-white content-stretch flex flex-col items-start ${scenarioSectionPadding} relative shrink-0 w-full`}>
        <div className="absolute bottom-0 left-0 top-0 w-[3px]" style={{ background: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)' }} />
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
      <div className={`bg-[#f7fdf9] border-l-[3px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start ${scenarioSectionPadding} relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full`}>
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
          <SectionTitle>Govern the agent. Govern the system.</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-sans font-bold mb-[1em]">Agentic AI changes what must be governed.</p>
            <p className="mb-[1em]">
              An AI system that can remember, delegate, use tools, and take action needs enforceable limits on its authority.
            </p>
            <p className="mb-0">
              A model can behave as intended while the surrounding system grants too much access—or combines individually permitted actions into an outcome that violates policy.
            </p>
          </div>
        </section>

        <section className={sectionClass} data-node-id="about-alignment-and-governance">
          <SectionTitle>Alignment is not governance.</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">Alignment helps shape model behavior.</p>
            <p className="font-sans font-bold mb-0">
              Runtime governance defines and enforces what the system is allowed to do, under the conditions that apply now.
            </p>
            <AxSequenceWidget />
            <div className="flex flex-col gap-[10px] mt-[10px]">
              <a className="font-sans font-bold text-[#4e4e4e] arrow-link" href="#failure-families">
                See how agents fail <span className="arrow-link-arrow" aria-hidden="true">→</span>
              </a>
              <button className="font-sans font-bold text-[#4e4e4e] text-left cursor-pointer arrow-link" type="button" onClick={() => navigate('demo')}>
                Watch the demos <span className="arrow-link-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>

        <section className={sectionClass} data-node-id="about-governance-layers">
          <SectionTitle>Governance at four layers.</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">Adaptablox is a runtime governance architecture for autonomous AI.</p>
            <p className="mb-[1em]">It is designed to govern:</p>
            <ul className="list-disc mb-[1em] space-y-[12px]">
              <li className="ms-[23px]"><strong>Agent authority</strong> — define roles, constraints, memory access, and permissible actions.</li>
              <li className="ms-[23px]"><strong>Multi-agent reasoning</strong> — intervene when agents converge falsely or remain in unresolved conflict.</li>
              <li className="ms-[23px]"><strong>Model pathways</strong> — apply runtime constraints to identified internal activation pathways.</li>
              <li className="ms-[23px]"><strong>System outputs</strong> — independently evaluate combined or sequential actions before they are released or executed.</li>
            </ul>
            <p className="font-sans font-bold mb-0">
              Each layer addresses a different failure. Together, they connect authority, runtime intervention, system-level admissibility, and records of enforcement decisions.
            </p>
          </div>
        </section>

        <section className={sectionClass} data-node-id="about-from-role-to-authority">
          <SectionTitle>From role to authority</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-sans font-bold mb-[1em]">An agent needs more than a role. It needs an authority boundary.</p>
            <p className="mb-[1em]">
              Telling an agent “You are a procurement agent” gives it a purpose. It does not establish a spending limit, approved suppliers, or when human approval is required.
            </p>
            <p className="mb-[1em]">
              Adaptablox represents the agent's authority as machine-readable rules for actions, memory, tools, delegation, and escalation. These rules are maintained and enforced as the agent operates, and can change when its authority or circumstances change.
            </p>
            {SHOW_AUTHORITY_WIDGET && <AxAuthorityWidget />}
            <p className="mb-0">
              The prompt defines purpose. The governance layer defines and enforces authority.
            </p>
          </div>
        </section>

        <section className={sectionClass} data-node-id="failure-families" id="failure-families">
          <SectionTitle>Three ways agents fail</SectionTitle>
          <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
            {failureFamilies.map((family) => (
              <details className="failure-family-details bg-white rounded-[8px] border border-solid border-[rgba(78,78,78,0.12)] shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] w-full group" key={family.title}>
                <summary className="cursor-pointer list-none px-[17px] md:px-[24px] py-[17px] md:py-[24px]">
                  <p className="font-sans text-[#4e4e4e] text-[18px] mb-[0.75em] flex items-center gap-[6px]">
                    <img src="/assets/alert.svg" alt="" className="shrink-0 w-[19px] h-[18px]" aria-hidden="true" />
                    <span className="font-bold">{family.title}</span>
                  </p>
                  <p className="font-sans font-normal text-[#4e4e4e] text-[15px] mb-[1em]">{family.summary}</p>
                  <p className="font-sans font-normal text-[#4e4e4e] text-[15px] mb-[0.5em]">
                    <strong>What individual checks miss:</strong> {family.whyCurrentSystemsMissIt}
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

        <section className={sectionClass} data-node-id="enforcement-evidence" id="enforcement-evidence">
          <SectionTitle>Governance you can't verify is just policy.</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">Teams need to review which rules were enforced before an agent acted or a result was released. Adaptablox is designed to create that evidence as part of each enforcement decision.</p>
            <p className="mb-[0.5em]">The record can show:</p>
            <ul className="list-disc mb-[1em]">
              <li className="mb-0 ms-[23px]"><strong>Which rules</strong> were checked</li>
              <li className="mb-0 ms-[23px]"><strong>When</strong> the decision was made</li>
              <li className="mb-0 ms-[23px]"><strong>What was evaluated:</strong> an action, activation pathway, group of agents, or combined result</li>
              <li className="mb-0 ms-[23px]"><strong>Who contributed what,</strong> where it came from, and each contributor's authority</li>
              <li className="ms-[23px]"><strong>What was allowed, changed, delayed, escalated, or blocked,</strong> and why</li>
            </ul>
            <p className="mb-[1em]">
              Cryptographic links between records can help reviewers detect changes to the history. The recorded decisions support a separate review of whether the controls were applied correctly.
            </p>
            <p className="mb-[0.5em]">That evidence supports practical questions:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[23px]">Which actions was this agent blocked from taking in Q3?</li>
              <li className="mb-0 ms-[23px]">Which rule triggered an intervention, and when?</li>
              <li className="ms-[23px]">Was the combined result checked before it was released?</li>
            </ul>
            <span dangerouslySetInnerHTML={{ __html: '<!-- HOLD: pending counsel review -->' }} />
          </div>
          <AxReceiptWidget />
        </section>

        <section className={sectionClass} data-node-id="about-who-this-is-for">
          <SectionTitle>Who this is for</SectionTitle>
          <div className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">
              Adaptablox is designed for teams deploying autonomous agents in financial services, healthcare, legal services, and government. These teams need enforceable limits and evidence of how those limits were applied.
            </p>
            <p className="mb-0">
              If your agents can spend money, access regulated data, or act across systems, their authority needs to be enforced as they operate.
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
