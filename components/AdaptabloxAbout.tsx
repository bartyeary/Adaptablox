'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

const imgGroup28481 = "/assets/logo.svg";
const imgIconAlert = "/assets/alert.svg";
const imgLogo = "/assets/logo.svg";

export default function AdaptabloxAbout() {
  const { activePage, navigate } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    console.log('AdaptabloxAbout rendered, activePage:', activePage);
    // Trigger animation on mount
    setIsAnimating(false);
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
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
    <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full min-h-screen" data-name="adaptablox - about" data-node-id="1:2" style={{ background: "radial-gradient(66.15% 98.68% at -6.3% -5.34%, #F1F2F4 0%, #D7D9DF 100%)" }}>
      <div className="bg-[rgba(104,106,113,0.8)] h-[71px] overflow-clip fixed top-0 left-0 right-0 z-50 w-full" data-node-id="1:3" style={{ background: "rgba(104, 106, 113, 0.80)" }}>
        <div className="absolute left-[17px] top-[17px] h-[36px] w-[189px]" data-name="logo" data-node-id="1:14">
          <div className="absolute h-[35px] left-0 top-[1.5px] w-[188px]" data-node-id="1:176">
            <img alt="Adaptablox Logo" className="block max-w-none size-full" src={imgGroup28481} />
          </div>
        </div>
        <div className="absolute right-[17px] top-[17px] bg-[#67686d] content-stretch flex gap-[6px] items-center p-[3px] rounded-[12px] z-[60]" data-name="control" data-node-id="1:5">
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
        className="bg-[#eef0f4] content-stretch flex flex-col gap-[24px] h-[4378px] items-start p-[18px] relative rounded-[8px] shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] shrink-0 w-[900px] max-w-full mb-6 mx-auto transition-all duration-500 ease-out" 
        style={{ 
          marginTop: isAnimating ? '82px' : '102px',
          transition: 'margin-top 0.5s ease-out'
        }}
        data-node-id="1:39"
      >
        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[21px] pb-[12px] pt-[20px] px-[24px] relative shrink-0 text-[#4e4e4e] w-full" data-node-id="1:40">
          <p className="font-sans font-[590] relative shrink-0 text-[24px] text-nowrap" data-node-id="27:625" style={{ fontVariationSettings: "'wdth' 100" }}>
            Predictable Failure Modes
          </p>
          <p className="font-sans font-normal min-w-full relative shrink-0 text-[15px] w-[min-content]" data-node-id="1:42" style={{ fontVariationSettings: "'wdth' 100" }}>
            The following are not edge cases. They are predictable outcomes of deploying agents without runtime enforcement of delegated authority.
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:43">
          <div className="bg-white border-l-[5px] border-l-[#ff4b4b] border-solid content-stretch flex flex-col gap-[36px] items-start pl-[12px] pr-[24px] py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:44">
            <div className="content-stretch flex items-center justify-center px-[24px] py-0 relative shrink-0" data-node-id="1:45">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:46">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span className="text-[#ff4b4b]">Fail Scenario # 1</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[24px] py-0 relative shrink-0 w-full" data-node-id="1:47">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:48">
                <p className="mb-0">
                  <span className="font-sans font-bold">The helpful procurement agent</span>
                  <span className="font-sans font-normal"> </span>
                </p>
                <p className="font-sans font-normal">A procurement agent is authorized to negotiate vendor terms and recommend agreements. During a high-pressure renewal, it agrees to a non-standard indemnity clause to "close the deal faster."</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f7f7f7] border-t border-b border-t-[#E4E4E4] border-b-[#E4E4E4] border-solid content-stretch flex flex-col gap-[36px] items-start px-[36px] py-[24px] relative shrink-0 w-full" data-node-id="1:49" style={{ borderTop: "1.5px solid #E4E4E4", borderBottom: "1.5px solid #E4E4E4", background: "#F7F7F7" }}>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:50">
              <p className="font-sans font-bold leading-[24px] mb-0">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Authority boundaries were implicit, not enforced.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The clause sounded commercially reasonable.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Monitoring only detects violations after execution.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Legal now owns a risk they never approved.</span>
                </li>
              </ul>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:51">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal">The system had no way to evaluate authority at the moment of action.</p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:52">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The agent's role does not include authority to bind indemnity terms.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The action is blocked at generation.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The system escalates the clause to Legal with context.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">A chain-of-events shows the attempted overreach.</span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#bfbfbf] bottom-[-1px] left-0 top-[-1px] w-[5px]" data-node-id="1:53" />
          </div>
          <div className="bg-white border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[36px] py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:56">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:57">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">Negotiation continues. Authority stays intact. Legal sleeps.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:58">
          <div className="bg-white border-l-[5px] border-l-[#ff4b4b] border-solid content-stretch flex flex-col gap-[36px] items-start pl-[12px] pr-[24px] py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:59">
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:60">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:61">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 2</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:62">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:63">
                <p className="font-sans font-bold mb-0">The customer support refund spiral</p>
                <p className="font-sans font-normal">A support agent is empowered to issue refunds "to improve customer satisfaction." It begins refunding edge cases outside policy because sentiment signals suggest churn risk.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f7f7f7] border-t border-b border-t-[#E4E4E4] border-b-[#E4E4E4] border-solid content-stretch flex flex-col gap-[36px] items-start px-[36px] py-[24px] relative shrink-0 w-full" data-node-id="1:64" style={{ borderTop: "1.5px solid #E4E4E4", borderBottom: "1.5px solid #E4E4E4", background: "#F7F7F7" }}>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:65">
              <p className="font-sans font-bold leading-[24px] mb-0">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The model optimizes for satisfaction, not policy boundaries.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Refund authority is implicit, not scoped.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Finance notices weeks later.</span>
                </li>
              </ul>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:66">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal">The system could not enforce policy scope while the refund decision was being generated.</p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:67">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Refund authority is role-bounded and amount-limited.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Out-of-policy actions trigger escalation, not generosity.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Every blocked action is logged with rationale.</span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#bfbfbf] bottom-[-1px] left-0 top-[-1px] w-[5px]" data-node-id="1:68" />
          </div>
          <div className="bg-white border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[36px] py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:69">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:70">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">Support stays empathetic. Financial controls remain real.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:71">
          <div className="bg-white border-l-[5px] border-l-[#ff4b4b] border-solid content-stretch flex flex-col gap-[36px] items-start pl-[12px] pr-[24px] py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:72">
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:73">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:74">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 3</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:75">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:76">
                <p className="font-sans font-bold mb-0">The well-meaning planning agent</p>
                <p className="font-sans font-normal">A project-planning agent reallocates headcount across teams after inferring that a launch deadline is "at risk."</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f7f7f7] border-t border-b border-t-[#E4E4E4] border-b-[#E4E4E4] border-solid content-stretch flex flex-col gap-[36px] items-start px-[36px] py-[24px] relative shrink-0 w-full" data-node-id="1:77" style={{ borderTop: "1.5px solid #E4E4E4", borderBottom: "1.5px solid #E4E4E4", background: "#F7F7F7" }}>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:78">
              <p className="font-sans font-bold leading-[24px] mb-0">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Inference substitutes for permission.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">No explicit authority model exists for resource reallocation.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Managers discover changes after morale damage.</span>
                </li>
              </ul>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:79">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal">The system treated inferred intent as permission to reallocate resources.</p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:80">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The agent can recommend, not reassign.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Role constraints prevent execution.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Escalation routes recommendations to humans with context.</span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#bfbfbf] bottom-[-1px] left-0 top-[-1px] w-[5px]" data-node-id="1:81" />
          </div>
          <div className="bg-white border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[36px] py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:82">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:83">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">Velocity without organizational chaos.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:84">
          <div className="bg-white border-l-[5px] border-l-[#ff4b4b] border-solid content-stretch flex flex-col gap-[36px] items-start pl-[12px] pr-[24px] py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:85">
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:86">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:87">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 4</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:88">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:89">
                <p className="font-sans font-bold mb-0">The autonomous email that becomes evidence</p>
                <p className="font-sans font-normal">An executive assistant agent drafts an external email explaining a delay. Its wording implies internal uncertainty that later becomes discoverable in litigation.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f7f7f7] border-t border-b border-t-[#E4E4E4] border-b-[#E4E4E4] border-solid content-stretch flex flex-col gap-[36px] items-start px-[36px] py-[24px] relative shrink-0 w-full" data-node-id="1:90" style={{ borderTop: "1.5px solid #E4E4E4", borderBottom: "1.5px solid #E4E4E4", background: "#F7F7F7" }}>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:91">
              <p className="font-sans font-bold leading-[24px] mb-0">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Tone and phrasing are uncontrolled.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">No notion of legal exposure at the moment of action.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The system "did what it was asked."</span>
                </li>
              </ul>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:92">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal">The system had no runtime awareness of legal exposure or communicative authority.</p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:93">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Tone vectors are role- and audience-aware.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Sensitive domains trigger constrained phrasing.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The chain-of-events shows exactly why wording was chosen.</span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#bfbfbf] bottom-[-1px] left-0 top-[-1px] w-[5px]" data-node-id="1:94" />
          </div>
          <div className="bg-white border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[36px] py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:95">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:96">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">Communication without accidental admissions.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:97">
          <div className="bg-white border-l-[5px] border-l-[#ff4b4b] border-solid content-stretch flex flex-col gap-[36px] items-start pl-[12px] pr-[24px] py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:98">
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:99">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:100">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 5</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:101">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:102">
                <p className="font-sans font-bold mb-0">The compliance-aware agent that wasn't</p>
                <p className="font-sans font-normal">A data-access agent answers an internal query by combining data from two systems that are compliant individually, but not together.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f7f7f7] border-t border-b border-t-[#E4E4E4] border-b-[#E4E4E4] border-solid content-stretch flex flex-col gap-[36px] items-start px-[36px] py-[24px] relative shrink-0 w-full" data-node-id="1:103" style={{ borderTop: "1.5px solid #E4E4E4", borderBottom: "1.5px solid #E4E4E4", background: "#F7F7F7" }}>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:104">
              <p className="font-sans font-bold leading-[24px] mb-0">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Policies live in documents, not execution paths.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The agent has tool access but no memory governance.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The violation is discovered in audit.</span>
                </li>
              </ul>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:105">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal">The system allowed cross-domain data use without enforcing contextual compliance boundaries.</p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:106">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Constraint-embedded memory prevents cross-domain access.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">The action is blocked before execution.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">An immutable log records the prevented violation.</span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#bfbfbf] bottom-[-1px] left-0 top-[-1px] w-[5px]" data-node-id="1:107" />
          </div>
          <div className="bg-white border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[36px] py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:108">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:109">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">Compliance enforced at the moment of action, not retroactively.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] rounded-[8px] overflow-hidden shrink-0 w-full" data-node-id="1:110">
          <div className="bg-white border-l-[5px] border-l-[#ff4b4b] border-solid content-stretch flex flex-col gap-[36px] items-start pl-[12px] pr-[24px] py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-node-id="1:111">
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0" data-node-id="1:112">
              <p className="font-sans font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff4b4b] text-[18px] text-nowrap uppercase flex items-center gap-[6px]" data-node-id="1:113">
                <img src={imgIconAlert} alt="Alert" className="inline-block w-[18px] h-[18px]" />
                <span>Fail Scenario # 6</span>
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0 w-full" data-node-id="1:114">
              <div className="basis-0 font-['Courier_New:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#4e4e4e] text-[15px]" data-node-id="1:115">
                <p className="font-sans font-bold mb-0">The robotics optimization incident</p>
                <p className="font-sans font-normal">A warehouse robot agent optimizes throughput by adjusting movement patterns, unintentionally violating safety assumptions around human proximity.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f7f7f7] border-t border-b border-t-[#E4E4E4] border-b-[#E4E4E4] border-solid content-stretch flex flex-col gap-[36px] items-start px-[36px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:116" style={{ borderTop: "1.5px solid #E4E4E4", borderBottom: "1.5px solid #E4E4E4", background: "#F7F7F7" }}>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:117">
              <p className="font-sans font-bold leading-[24px] mb-0">Why current systems fail</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Optimization goals were evaluated without enforced safety constraints.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Monitoring reacts after near-miss events.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Accountability is unclear.</span>
                </li>
              </ul>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:118">
              <p className="font-sans font-bold mb-0 text-[#ff4b4b]">The core failure</p>
              <p className="font-sans font-normal">The system prioritized optimization goals without enforcing safety constraints at the moment of action.</p>
            </div>
            <div className="font-['Courier_New:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-[min-content]" data-node-id="1:119">
              <p className="font-sans font-bold leading-[24px] mb-0">Adaptablox intervention</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Safety constraints override optimization goals.</span>
                </li>
                <li className="mb-0 ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Role boundaries restrict autonomous adaptation.</span>
                </li>
                <li className="ms-[23px]">
                  <span className="font-sans font-normal leading-[24px] not-italic">Escalation triggers human review.</span>
                </li>
              </ul>
            </div>
            <div className="absolute bg-[#bfbfbf] bottom-[-1px] left-0 top-[-1px] w-[5px]" data-node-id="1:120" />
          </div>
          <div className="bg-white border-l-[5px] border-l-[#85dba2] border-solid content-stretch flex flex-col items-start px-[36px] py-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-node-id="1:121">
            <div className="font-['Courier_New:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] w-full" data-node-id="1:122">
              <p className="font-sans font-bold mb-0 text-[#6aaf81]">Outcome</p>
              <p className="font-sans font-normal">Efficiency without headlines.</p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center p-[24px] relative rounded-[8px] shadow-[3px_6px_15px_0px_rgba(0,0,0,0.12)] size-full" data-node-id="1:123">
          <div className="basis-0 font-sans font-normal grow leading-[21px] min-h-px min-w-px not-italic relative shrink-0 text-[#373737] text-[15px]" data-node-id="1:124">
            <p className="mb-0">Across every failure, the cause is the same.</p>
            <p className="mb-0">
              <br aria-hidden="true" />
              Autonomous systems were allowed to act without verifying whether the action was within their delegated authority at the moment it was generated.
            </p>
            <p>
              <br aria-hidden="true" />
              Adaptablox introduces a runtime behavioral control layer that makes autonomy legible to Strategy, Governance, Risk, and Compliance, before damage occurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

