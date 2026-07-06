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
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[17px] md:px-[24px] py-[17px] md:py-[24px] relative rounded-[8px] shadow-[1px_2px_5px_0px_rgba(0,0,0,0.06)] shrink-0 w-full bg-white">
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
            <p className="mb-[1em]">Adaptablox applies control where agentic systems actually operate:</p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <SystemCard title="Execution, Agent Role & Constraint (ARC)">
              <p className="mb-0">
                Every action is evaluated against a constraint stack before it executes. Role boundaries define what is permitted. Prior actions inform the current admissibility check. Actions that exceed scope are blocked, modified, or rerouted, and memory access and delegation are governed by the same boundaries.
              </p>
            </SystemCard>
            <SystemCard title="Coordination, Disagreement Scaffolding (DS)">
              <p className="mb-0">
                Agent outputs are evaluated for coordination quality before being combined. Premature convergence, irreconcilable conflict, and deadlock are detected and resolved before synthesis. The system does not rely on consensus; it enforces the conditions under which agreement is valid.
              </p>
            </SystemCard>
            <SystemCard title="Reasoning, Latent Role & Constraint (LRC)" subtitle="research direction">
              <p className="mb-0">
                LRC extends the same constraint model inside the inference process, evaluating reasoning trajectories rather than only their outputs. It is designed to constrain reasoning paths that lead toward non-compliant behavior, without modifying model weights. LRC is an active research and development direction that deepens the control stack.
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
            <SystemCard title="How does A.R.C. differ from access governance?">
              <p className="mb-[1em]">Access governance controls who can access a resource.</p>
              <p className="mb-[1em]">A.R.C. controls what happens after access is granted.</p>
              <p className="mb-0">Actions are evaluated and constrained at execution.</p>
            </SystemCard>
            <SystemCard title="Does A.R.C. improve model accuracy?">
              <p className="mb-[1em]">No.</p>
              <p className="mb-[1em]">A.R.C. does not change the model.</p>
              <p className="mb-0">It enforces whether actions are allowed at runtime.</p>
            </SystemCard>
            <SystemCard title="How are agent responses synthesized?">
              <p className="mb-[1em]">Outputs are evaluated before being combined.</p>
              <p className="mb-[1em]">Non-compliant responses are removed.</p>
              <p className="mb-0">Synthesis occurs under constraint.</p>
            </SystemCard>
            <SystemCard title="Does L.R.C. change the model's weights?">
              <p className="mb-[1em]">No.</p>
              <p className="mb-[1em]">It is designed to constrain reasoning during inference.</p>
              <p className="mb-0">Control is applied without retraining.</p>
            </SystemCard>
            <SystemCard title="Why govern internal reasoning at all? Isn't output control enough?">
              <p className="mb-[1em]">No.</p>
              <p className="mb-[1em]">Output control happens too late.</p>
              <p className="mb-0">L.R.C. is designed to constrain reasoning before output.</p>
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
