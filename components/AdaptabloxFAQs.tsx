'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import AxSignalsWidget from '@/components/AxSignalsWidget';

const imgGroup28481 = "/assets/logo2.svg";
const sectionClass = "content-stretch flex flex-col gap-[12px] items-start pb-[8px] md:pb-[12px] pt-[14px] md:pt-[20px] px-[17px] md:px-[24px] relative shrink-0 w-full text-[#4e4e4e]";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="font-sans font-[590] leading-[21px] relative shrink-0 text-[24px] text-[#4E4E4E] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        {children}
      </p>
      <div
        className="mt-[12px] h-[4px] w-full max-w-[720px] overflow-hidden mb-[6px]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 8px, #67686D 8px, #67686D 16px)',
          backgroundSize: '22.627px 22.627px',
          backgroundPosition: '0 0',
          imageRendering: 'crisp-edges',
        }}
      />
    </>
  );
}

function SystemCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[17px] md:px-[24px] py-[17px] md:py-[24px] relative rounded-[8px] border border-solid border-[rgba(78,78,78,0.12)] shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-full bg-white">
      <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full mb-0">
        {title}
        {subtitle && <span className="font-normal italic"> ({subtitle})</span>}
      </p>
      <div className="font-sans font-normal leading-[21px] text-[#4e4e4e] text-[15px] w-full">
        {children}
      </div>
    </div>
  );
}

export default function AdaptabloxFAQs() {
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
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - faqs" data-node-id="1:163" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F2F4F8 0%, #DCDEE6 100%)" }}>
      <div className="bg-[rgba(135,137,145,0.68)] backdrop-blur-sm h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="1:164" style={{ background: "rgba(135, 137, 145, 0.68)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px] hidden md:block" data-name="logo" data-node-id="1:175">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="1:176">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[17px] top-[17px] bg-[#82848e] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="1:166">
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
        className="bg-[#f7f9fc] content-stretch flex flex-col gap-[32px] items-start p-[13px] md:p-[18px] pb-[82px] md:pb-[118px] relative shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-[800px] max-w-full mx-auto transition-all duration-250 ease-out min-h-[calc(100vh+21px)]"
        style={{
          marginTop: isAnimating ? '0px' : '-20px',
          transition: 'margin-top 0.25s ease-out',
        }}
        data-node-id="1:200"
      >
        <section className={sectionClass} data-node-id="system-control-layers" style={{ marginTop: '71px' }}>
          <SectionTitle>The system</SectionTitle>
          <div className="font-sans font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full max-w-[720px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[1em]">Adaptablox defines four layers of runtime governance: individual agents, groups of agents, internal activation pathways, and combined system outputs. Each layer addresses a different kind of failure.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <SystemCard title="Agent governance, Agent Role & Constraint (ARC)">
              <p className="mb-0">
                ARC maintains machine-readable role, authority, and constraint state for each agent. Control logic running with the agent, in a separate runtime service, or both checks proposed actions and memory operations before allowing them. These rules can govern delegation, escalation, and temporary permissions, and can change while the agent operates.
              </p>
            </SystemCard>
            <SystemCard title="Ensemble governance, Disagreement Scaffolding (DS)">
              <p className="mb-0">
                Agents operating under defined constraints produce independent outputs. DS compares them for a deadlock condition: problematic similarity or excessive disagreement. A counter-agent with different constraints recommends a change to at least one agent in the original ensemble, such as changing its retrieval scope or constraints. The changed ensemble reruns the original task, and only its revised outputs are combined.
              </p>
            </SystemCard>
            <SystemCard title="Activation governance, Latent Role & Constraint (LRC)" subtitle="research direction">
              <p className="mb-0">
                LRC is designed to observe activation data as a model processes an input, identify an internal pathway, feature, or circuit, and assign constraints to it. It evaluates that pathway against its constraints and adjusts its activations when needed—for example, by blocking or scaling them—without retraining or permanently changing the model’s stored weights.
              </p>
            </SystemCard>
            <SystemCard title="System governance, Output Admissibility Control (OAC)">
              <p className="mb-0">
                OAC creates a system-level output object: a structured representation of the proposed combined result and its contributing agents. An evaluator independent of those agents checks the whole against system rules, including authority, sequence, timing, and cumulative effects. Individually permitted contributions can still form an inadmissible whole. An execution gate controls whether the result is released, changed, delayed, escalated, or blocked before it is sent, stored, or acted on.
              </p>
            </SystemCard>
          </div>
        </section>

        <div className="px-[17px] md:px-[24px] w-full">
          <AxSignalsWidget />
        </div>

        <section className={sectionClass} data-node-id="system-faq-cards">
          <SectionTitle>Questions</SectionTitle>
          <div className="content-start flex flex-wrap gap-[18px] items-start justify-center relative shrink-0 w-full">
            <SystemCard title="How does ARC differ from identity and access management?">
              <p className="mb-[1em]">Identity and access management authenticates an actor and grants permissions to a resource.</p>
              <p className="mb-[1em]">ARC attaches role and constraint state to the operating agent and evaluates its proposed behavior, including actions, memory access, and delegation.</p>
              <p className="mb-0">Being allowed to reach a tool is not the same as being allowed to take this action with it.</p>
            </SystemCard>
            <SystemCard title="How does ARC work with agent routing?">
              <p className="mb-[1em]">An agent’s role can help determine which tasks it receives.</p>
              <p className="mb-0">Once a task is assigned, ARC checks the agent’s proposed actions against its active authority and constraints.</p>
            </SystemCard>
            <SystemCard title="Does ARC improve model accuracy?">
              <p className="mb-[1em]">No.</p>
              <p className="mb-[1em]">ARC does not make a model know more or reason better.</p>
              <p className="mb-0">It determines whether an agent operating under a defined role and constraint set may perform a proposed action.</p>
            </SystemCard>
            <SystemCard title="Is DS just debate, voting, or a critic agent?">
              <p className="mb-[1em]">No. DS compares the outputs of constrained agents and intervenes when agreement or disagreement meets a defined failure condition.</p>
              <p className="mb-[1em]">A counter-agent with different constraints recommends a change to the original ensemble.</p>
              <p className="mb-0">The changed ensemble reruns the original task before its revised outputs are combined.</p>
            </SystemCard>
            <SystemCard title="Does LRC change the model's weights?">
              <p className="mb-[1em]">No.</p>
              <p className="mb-[1em]">LRC is designed to evaluate and modulate intermediate activation data during inference.</p>
              <p className="mb-0">The stored model parameters remain unchanged.</p>
            </SystemCard>
            <SystemCard title="How is LRC different from interpretability or steering?">
              <p className="mb-[1em]">Interpretability identifies or explains internal features and circuits. Steering changes activations.</p>
              <p className="mb-0">LRC is designed to assign constraints to an identified pathway, check its activation behavior, and intervene when it falls outside those constraints.</p>
            </SystemCard>
            <SystemCard title="Why is OAC separate from agent-level compliance?">
              <p className="mb-[1em]">Because permissible parts can form an impermissible whole.</p>
              <p className="mb-[1em]">Admissible means allowed under the current rules and conditions. Two individually permitted outputs may violate those rules when combined. Sequence, repetition, timing, or cumulative effects can also change whether a result is allowed.</p>
              <p className="mb-0">OAC independently checks the proposed system result and gates its release or execution.</p>
            </SystemCard>
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
