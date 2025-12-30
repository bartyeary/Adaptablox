'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

const imgGroup28481 = "/assets/logo.svg";

export default function AdaptabloxFAQs() {
  const { activePage, navigate } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    console.log('AdaptabloxFAQs rendered, activePage:', activePage);
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
    
    return () => {
      delete (window as any).testNavigate;
      delete (window as any).testNavigateAbout;
      delete (window as any).testNavigateDemo;
    };
  }, [navigate]);
  
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - faqs" data-node-id="1:163" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F1F2F4 0%, #D7D9DF 100%)" }}>
      <div className="bg-[rgba(104,106,113,0.8)] backdrop-blur-sm h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="1:164" style={{ background: "rgba(104, 106, 113, 0.80)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px] hidden md:block" data-name="logo" data-node-id="1:175">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="1:176">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[17px] top-[17px] bg-[#67686d] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="1:166">
          <button
            onClick={() => {
              console.log('Failures button clicked');
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
              Failures
            </span>
          </button>
          <button 
            onClick={() => {
              console.log('Control button clicked');
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
        className="bg-[#eef0f4] content-stretch flex flex-col gap-[48px] items-start p-[18px] pb-[118px] relative shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-[800px] max-w-full mx-auto transition-all duration-250 ease-out min-h-[calc(100vh+21px)]" 
        style={{ 
          marginTop: isAnimating ? '0px' : '-20px',
          transition: 'margin-top 0.25s ease-out'
        }}
        data-node-id="1:200"
      >
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[20px] px-[24px] relative shrink-0 w-full" data-node-id="1:201" style={{ marginTop: '71px' }}>
          <p className="font-sans font-[590] leading-[21px] relative shrink-0 text-[24px] text-[#4E4E4E] text-nowrap" data-node-id="27:627" style={{ fontVariationSettings: "'wdth' 100" }}>
            The Adaptablox System
          </p>
          <div className="font-sans font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:203">
            <p className="leading-[21px] mb-0">Adaptablox is a runtime guidance platform for AI systems. It shapes how agents behave at the surface level and how models reason at the internal level.</p>
            <p className="leading-[21px]">
              <span>
                It brings coherence, stability, and continuity to autonomous AI by combining two complementary layers:
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
              <span className="font-sans font-bold not-italic">{`Agent Role & Constraint (A.R.C.) `}</span>
              <span>
                guides the outer loop: agent behavior, tone, memory, delegation, and coordination across agents.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
              <span className="font-sans font-bold not-italic">{`Latent Role & Constraint (L.R.C.) `}</span>
              <span>
                orchestrates the inner loop: internal reasoning dynamics, latent representations, activation patterns, and controlled deliberation within the model.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
                Together, ARC and LRC make autonomous systems governable in the same way enterprises govern human and software actors.
              </span>
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-node-id="1:204">
          <div className="content-stretch flex gap-[6px] h-[21px] items-center px-[5px] py-0 relative shrink-0 w-full" data-node-id="1:205">
            <div className="basis-0 bg-[#d9d9d9] grow h-[1.5px] min-h-px min-w-px shrink-0" data-node-id="1:206" />
            <p className="font-sans font-normal leading-[21px] not-italic relative shrink-0 text-[#6aaf81] text-[15px] text-center text-nowrap" data-node-id="1:207">
              <span className="font-sans font-bold">Behavioral Reasoning Governance</span>
              <span>{` (A.R.C.)`}</span>
            </p>
            <div className="basis-0 bg-[#d9d9d9] grow h-[1.5px] min-h-px min-w-px shrink-0" data-node-id="1:208" />
          </div>
          <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full" data-node-id="1:209">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-node-id="1:210">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:211">
                How does A.R.C. differ from access governance?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:212" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:213">
                Access governance defines who can use a resource. A.R.C. governs how agents behave once access is granted, modulating tone, permissions, and escalation at the moment of action.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:214">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:215">
                Does A.R.C. improve model accuracy?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:216" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:217">
                No. ARC governs authority and behavior at the moment of action, without modifying model weights or training.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:218">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:219">
                How does A.R.C. decide when an agent should evolve or escalate?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:220" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:221">
                It evaluates tone, intent, domain cues, and policy fit. When a prompt falls outside scope, A.R.C. adjusts behavior or hands off the task without requiring retraining.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:222">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:223">
                What if agents interpret a prompt differently?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:224" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:225">
                A.R.C. compares each agent's confidence and constraint alignment, then blends or selects outputs to deliver a balanced and transparent response.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:226">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:227">
                Can A.R.C. learn over time?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:228" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:229">
                It adapts its behavioral parameters through feedback, refining tone, escalation behavior, and constraint balance from real use.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:230">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:231">
                How are agent responses synthesized?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:232" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:233">
                A controller agent reconciles outputs across domains through constraint-aware arbitration and tone alignment.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:234">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:235">
                Will larger frontier models solve governance?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:236" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:237">
                No. Training improves factual accuracy, but not behavior. Runtime governance enables adaptive modulation and policy updates without retraining, ensuring consistency across contexts.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:238">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:239">
                Can A.R.C. prevent harmful or off-policy outputs?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:240" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:241">
                A.R.C. enforces behavioral constraints at the moment of action, reducing drift and policy violations through escalation, fallback, and constraint-aware synthesis.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:242">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:243">
                How does the system assemble multiple agents?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:244" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:245">
                It derives a compact context signature from task semantics and tone, matching it to relevant domains and agents to determine whether to invoke a single role or a coordinated ensemble.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:246">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:247">
                How does A.R.C. handle memory in regulated environments?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:248" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:249">
                It segments memory by type and applies constraint-aware rules for access, retention, and redaction. It enforces retention limits, filters sensitive content, and logs every access for review.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:250">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:251">
                Can A.R.C. support multistep chaining of agent tasks?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:252" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:253">
                Yes. A.R.C. preserves behavioral and tonal continuity across chained agents, maintaining consistent context, policy alignment, and governance throughout.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:254">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:255">
                How does Adaptablox improve efficiency?
              </p>
              <div className="bg-[#85dba2] h-[1.5px] shrink-0 w-full" data-node-id="1:256" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:257">
                By reducing unnecessary reasoning and limiting redundant agent or internal activation, Adaptablox minimizes compute waste and promotes efficient task routing.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-node-id="1:258">
          <div className="content-stretch flex gap-[6px] h-[21px] items-center px-[5px] py-0 relative shrink-0 w-full" data-node-id="1:259">
            <div className="basis-0 bg-[#d9d9d9] grow h-[1.5px] min-h-px min-w-px shrink-0" data-node-id="1:260" />
            <p className="font-sans font-normal leading-[21px] not-italic relative shrink-0 text-[#84a5ff] text-[15px] text-center text-nowrap" data-node-id="1:261">
              <span className="font-sans font-bold">Internal Reasoning Governance</span>
              <span>{` (L.R.C.)`}</span>
            </p>
            <div className="basis-0 bg-[#d9d9d9] grow h-[1.5px] min-h-px min-w-px shrink-0" data-node-id="1:262" />
          </div>
          <div className="content-start flex flex-wrap gap-[16px_24px] items-start justify-center relative shrink-0 w-full" data-node-id="1:263">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:264">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:265">
                Does L.R.C. change the model's weights?
              </p>
              <div className="bg-[#84a5ff] h-[1.5px] shrink-0 w-full" data-node-id="1:266" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:267">
                No. L.R.C. governs internal reasoning at the moment of action and shapes activation behavior without modifying or retraining the underlying model.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:268">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:269">
                How does L.R.C. interact with A.R.C.?
              </p>
              <div className="bg-[#84a5ff] h-[1.5px] shrink-0 w-full" data-node-id="1:270" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:271">
                A.R.C. governs agent behavior at the surface. L.R.C. governs internal reasoning dynamics. Together they align how the system thinks with how it communicates and acts.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:272">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:273">
                Can L.R.C. reduce hallucinations?
              </p>
              <div className="bg-[#84a5ff] h-[1.5px] shrink-0 w-full" data-node-id="1:274" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:275">
                It reduces risk by constraining internal reasoning patterns, limiting unsafe pathways, and guiding activation toward policy-aligned interpretations.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:276">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:277">
                Is L.R.C. compatible with interpretability tools?
              </p>
              <div className="bg-[#84a5ff] h-[1.5px] shrink-0 w-full" data-node-id="1:278" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:279">
                Yes. L.R.C. can incorporate insights from interpretability methods when available, but does not depend on any specific approach or tool.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:280">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:281">
                Why govern internal reasoning at all? Isn't output control enough?
              </p>
              <div className="bg-[#84a5ff] h-[1.5px] shrink-0 w-full" data-node-id="1:282" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:283">
                Output-only governance reacts to errors after they occur. L.R.C. addresses risk earlier by shaping internal reasoning before a response is generated.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[8px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full min-[600px]:w-[250px] flex-shrink-0 h-auto min-[600px]:h-[320px] pb-[20px] min-[600px]:pb-[24px] bg-white" data-faq-card data-node-id="1:284">
              <p className="font-sans font-bold leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:285">
                Can L.R.C. work with any model?
              </p>
              <div className="bg-[#84a5ff] h-[1.5px] shrink-0 w-full" data-node-id="1:286" />
              <p className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:287">
                Yes. It is model-agnostic and compatible with proprietary, open, fine-tuned, or emerging architectures without requiring structural assumptions.
              </p>
            </div>
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

