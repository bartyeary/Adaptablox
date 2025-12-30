import type { Metadata } from 'next'
import './globals.css'
import { NavigationProvider } from '@/contexts/NavigationContext'

export const metadata: Metadata = {
  title: 'Adaptablox - About',
  description: 'Autonomous AI authority enforcement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('=== Inline script executed - JavaScript is working! ===');
              
              // Set up a simple navigation system that works without React
              // Start with 'about' to match React's initial state
              let currentPage = 'about';
              
              // Directly update segmented control button states in the DOM (independent of React)
              function updateSegmentedControlButtons(activePage) {
                console.log('Updating segmented control buttons for page:', activePage);
                
                // Find all segmented control containers (they exist on each page)
                const controls = document.querySelectorAll('[data-name="control"]');
                controls.forEach(function(control) {
                  // Overview button (data-node-id="27:669")
                  const overviewBtn = control.querySelector('[data-node-id="27:669"]');
                  if (overviewBtn) {
                    const btn = overviewBtn;
                    const span = btn.querySelector('span');
                    if (activePage === 'overview') {
                      btn.className = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-[#eef0f4] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]';
                      if (span) span.className = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-[#5b5b5f]';
                    } else {
                      btn.className = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-transparent hover:opacity-80';
                      if (span) span.className = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-white';
                    }
                  }
                  
                  // Failure Cases button (data-node-id="27:671")
                  const aboutBtn = control.querySelector('[data-node-id="27:671"]');
                  if (aboutBtn) {
                    const btn = aboutBtn;
                    const span = btn.querySelector('span');
                    if (activePage === 'about') {
                      btn.className = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-[#eef0f4] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]';
                      if (span) span.className = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-[#5b5b5f]';
                    } else {
                      btn.className = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-transparent hover:opacity-80';
                      if (span) span.className = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-white';
                    }
                  }
                  
                  // FAQs button (data-node-id="1:10")
                  const faqsBtn = control.querySelector('[data-node-id="1:10"]');
                  if (faqsBtn) {
                    const btn = faqsBtn;
                    const span = btn.querySelector('span');
                    if (activePage === 'faqs') {
                      btn.className = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-[#eef0f4] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]';
                      if (span) span.className = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-[#5b5b5f]';
                    } else {
                      btn.className = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-transparent hover:opacity-80';
                      if (span) span.className = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-white';
                    }
                  }
                  
                  // Demo button (data-node-id="1:12")
                  const demoBtn = control.querySelector('[data-node-id="1:12"]');
                  if (demoBtn) {
                    const btn = demoBtn;
                    const span = btn.querySelector('span');
                    if (activePage === 'demo') {
                      btn.className = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-[#eef0f4] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]';
                      if (span) span.className = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-[#5b5b5f]';
                    } else {
                      btn.className = 'content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[8px] shrink-0 cursor-pointer border-none outline-none transition-opacity bg-transparent hover:opacity-80';
                      if (span) span.className = 'font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[15px] text-nowrap text-white';
                    }
                  }
                });
                
                console.log('Segmented control buttons updated');
              }
              
              function navigateToPage(page) {
                console.log('Navigating to page:', page);
                currentPage = page;
                
                // Directly manipulate the DOM to show/hide pages
                // Find the wrapper divs that contain the pages
                const pageContainer = document.querySelector('[data-page-container]');
                if (!pageContainer) {
                  console.log('Page container not found, waiting...');
                  setTimeout(function() { navigateToPage(page); }, 100);
                  return;
                }
                
                // Try multiple selectors to find the pages
                const overviewWrapper = pageContainer.querySelector('[data-wrapper="overview"]') || pageContainer.querySelector('[data-always-render="true"]:first-child');
                const aboutWrapper = pageContainer.querySelector('[data-wrapper="about"]') || pageContainer.querySelector('[data-always-render="true"]:nth-child(2)');
                const faqsWrapper = pageContainer.querySelector('[data-wrapper="faqs"]') || pageContainer.querySelector('[data-always-render="true"]:nth-child(3)');
                const demoWrapper = pageContainer.querySelector('[data-wrapper="demo"]') || pageContainer.querySelector('[data-name="demo"]');
                
                // Also try finding by data-name as fallback
                const overviewPage = document.querySelector('[data-name="adaptablox - overview"]');
                const aboutPage = document.querySelector('[data-name="adaptablox - about"]');
                const faqsPage = document.querySelector('[data-name="adaptablox - faqs"]');
                const demoPage = document.querySelector('[data-name="adaptablox - demo"]') || document.querySelector('[data-name="demo"]');
                
                console.log('Overview wrapper found:', overviewWrapper);
                console.log('About wrapper found:', aboutWrapper);
                console.log('FAQs wrapper found:', faqsWrapper);
                console.log('Demo wrapper found:', demoWrapper);
                console.log('Overview page found:', overviewPage);
                console.log('About page found:', aboutPage);
                console.log('FAQs page found:', faqsPage);
                console.log('Demo page found:', demoPage);
                
                // Hide/show wrapper divs (these control visibility)
                if (overviewWrapper) {
                  overviewWrapper.style.display = page === 'overview' ? 'block' : 'none';
                  overviewWrapper.style.visibility = page === 'overview' ? 'visible' : 'hidden';
                  console.log('Set overview wrapper display to:', page === 'overview' ? 'block' : 'none');
                } else {
                  console.log('Overview wrapper NOT found!');
                }
                if (aboutWrapper) {
                  aboutWrapper.style.display = page === 'about' ? 'block' : 'none';
                  aboutWrapper.style.visibility = page === 'about' ? 'visible' : 'hidden';
                  console.log('Set about wrapper display to:', page === 'about' ? 'block' : 'none');
                } else {
                  console.log('About wrapper NOT found!');
                }
                if (faqsWrapper) {
                  faqsWrapper.style.display = page === 'faqs' ? 'block' : 'none';
                  faqsWrapper.style.visibility = page === 'faqs' ? 'visible' : 'hidden';
                  console.log('Set FAQs wrapper display to:', page === 'faqs' ? 'block' : 'none');
                } else {
                  console.log('FAQs wrapper NOT found!');
                }
                if (demoWrapper) {
                  demoWrapper.style.display = page === 'demo' ? 'block' : 'none';
                  demoWrapper.style.visibility = page === 'demo' ? 'visible' : 'hidden';
                  console.log('Set demo wrapper display to:', page === 'demo' ? 'block' : 'none');
                } else {
                  console.log('Demo wrapper NOT found!');
                }
                
                // Also hide/show the actual page elements as backup
                if (overviewPage) {
                  overviewPage.style.display = page === 'overview' ? 'block' : 'none';
                }
                if (aboutPage) {
                  aboutPage.style.display = page === 'about' ? 'block' : 'none';
                }
                if (faqsPage) {
                  faqsPage.style.display = page === 'faqs' ? 'block' : 'none';
                }
                if (demoPage) {
                  demoPage.style.display = page === 'demo' ? 'block' : 'none';
                }
                
                // Also try to update React if it's available
                // Set data-active-page attribute - this is the source of truth for React sync
                if (pageContainer) {
                  const currentAttr = pageContainer.getAttribute('data-active-page');
                  if (currentAttr !== page) {
                    console.log('Setting data-active-page to:', page, '(was:', currentAttr, ')');
                    pageContainer.setAttribute('data-active-page', page);
                  }
                }
                
                // Update button states immediately (independent of React)
                updateSegmentedControlButtons(page);
                
                // Try to call React navigate directly FIRST (if available)
                // Retry multiple times with increasing delays to catch React hydration
                function tryReactNavigate(retries) {
                  retries = retries || 0;
                  if (window.__reactNavigate) {
                    console.log('Calling React navigate directly from navigateToPage:', page);
                    try {
                      window.__reactNavigate(page);
                      console.log('Successfully called __reactNavigate');
                    } catch (err) {
                      console.error('Error calling __reactNavigate:', err);
                    }
                  } else if (retries < 10) {
                    console.log('window.__reactNavigate not available yet, retry', retries + 1);
                    setTimeout(function() {
                      tryReactNavigate(retries + 1);
                    }, 50 * (retries + 1)); // Exponential backoff
                  } else {
                    console.log('window.__reactNavigate still not available after', retries, 'retries');
                  }
                }
                tryReactNavigate(0);
                
                // Dispatch event for React (if it ever hydrates)
                const event = new CustomEvent('navigate', { 
                  detail: { page },
                  bubbles: true,
                  cancelable: true
                });
                window.dispatchEvent(event);
                document.dispatchEvent(event);
                
                console.log('Page navigation complete, current page:', page);
              }
              
              // Expose navigation functions immediately - these just dispatch events
              window.testNavigateOverview = () => {
                console.log('window.testNavigateOverview called');
                navigateToPage('overview');
              };
              window.testNavigateAbout = () => {
                console.log('window.testNavigateAbout called');
                navigateToPage('about');
              };
              window.testNavigate = () => {
                console.log('window.testNavigate called');
                navigateToPage('faqs');
              };
              window.testNavigateDemo = () => {
                console.log('window.testNavigateDemo called');
                navigateToPage('demo');
              };
              
              console.log('Navigation functions set up in inline script');
              
              function setupClickHandlers() {
                // Try document-level listener in capture phase
                document.addEventListener('click', function(e) {
                  console.log('=== DOCUMENT CLICK DETECTED (CAPTURE) ===', e.target);
                  console.log('Click target:', e.target);
                  console.log('Click coordinates:', e.clientX, e.clientY);
                  console.log('Event phase:', e.eventPhase);
                  
                  const target = e.target;
                  if (target && target.matches) {
                    if (target.matches('[data-test="link"]') || target.closest('[data-test="link"]')) {
                      console.log('MATCHED TEST LINK!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      alert('Test link clicked via document listener!');
                      if (window.testNavigate) {
                        window.testNavigate();
                      }
                      return false;
                    }
                    
                    if (target.matches('[data-test="button"]') || target.closest('[data-test="button"]')) {
                      console.log('MATCHED TEST BUTTON!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      alert('Test button clicked via document listener!');
                      if (window.testNavigate) {
                        window.testNavigate();
                      }
                      return false;
                    }
                    
                    if (target.matches('[data-node-id="1:10"]') || target.closest('[data-node-id="1:10"]')) {
                      console.log('MATCHED FAQs BUTTON!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      // Try React navigate first
                      console.log('Checking for __reactNavigate:', typeof window.__reactNavigate);
                      if (window.__reactNavigate) {
                        console.log('Calling React navigate for faqs');
                        try {
                          window.__reactNavigate('faqs');
                          console.log('React navigate called successfully');
                        } catch (err) {
                          console.error('Error calling React navigate:', err);
                        }
                      } else {
                        console.log('__reactNavigate not available, will try again after delay');
                        // Retry multiple times
                        let retries = 0;
                        const retryInterval = setInterval(() => {
                          retries++;
                          if (window.__reactNavigate) {
                            console.log('Calling React navigate for faqs (delayed, retry', retries, ')');
                            window.__reactNavigate('faqs');
                            clearInterval(retryInterval);
                          } else if (retries >= 20) {
                            console.log('Gave up waiting for __reactNavigate after', retries, 'retries');
                            clearInterval(retryInterval);
                          }
                        }, 50);
                      }
                      console.log('Calling window.testNavigate for FAQs');
                      
                      // Wait for React to hydrate if needed
                      function tryNavigate() {
                        if (window.testNavigate) {
                          console.log('window.testNavigate found, calling it');
                          window.testNavigate();
                        } else {
                          console.log('window.testNavigate not ready, retrying...');
                          setTimeout(tryNavigate, 100);
                        }
                      }
                      tryNavigate();
                      return false;
                    }
                    
                    // Also check for About and Demo buttons (from About page)
                    if (target.matches('[data-node-id="1:6"]') || target.closest('[data-node-id="1:6"]')) {
                      console.log('MATCHED ABOUT BUTTON!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      // Try React navigate first
                      console.log('Checking for __reactNavigate:', typeof window.__reactNavigate);
                      if (window.__reactNavigate) {
                        console.log('Calling React navigate for about');
                        try {
                          window.__reactNavigate('about');
                          console.log('React navigate called successfully');
                        } catch (err) {
                          console.error('Error calling React navigate:', err);
                        }
                      } else {
                        console.log('__reactNavigate not available, will try again after delay');
                        // Retry multiple times
                        let retries = 0;
                        const retryInterval = setInterval(() => {
                          retries++;
                          if (window.__reactNavigate) {
                            console.log('Calling React navigate for about (delayed, retry', retries, ')');
                            window.__reactNavigate('about');
                            clearInterval(retryInterval);
                          } else if (retries >= 20) {
                            console.log('Gave up waiting for __reactNavigate after', retries, 'retries');
                            clearInterval(retryInterval);
                          }
                        }, 50);
                      }
                      function tryNavigateAbout() {
                        if (window.testNavigateAbout) {
                          window.testNavigateAbout();
                        } else {
                          setTimeout(tryNavigateAbout, 100);
                        }
                      }
                      tryNavigateAbout();
                      return false;
                    }
                    
                    if (target.matches('[data-node-id="1:12"]') || target.closest('[data-node-id="1:12"]')) {
                      console.log('MATCHED DEMO BUTTON!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      // Try React navigate first
                      console.log('Checking for __reactNavigate:', typeof window.__reactNavigate);
                      if (window.__reactNavigate) {
                        console.log('Calling React navigate for demo');
                        try {
                          window.__reactNavigate('demo');
                          console.log('React navigate called successfully');
                        } catch (err) {
                          console.error('Error calling React navigate:', err);
                        }
                      } else {
                        console.log('__reactNavigate not available, will try again after delay');
                        // Retry multiple times
                        let retries = 0;
                        const retryInterval = setInterval(() => {
                          retries++;
                          if (window.__reactNavigate) {
                            console.log('Calling React navigate for demo (delayed, retry', retries, ')');
                            window.__reactNavigate('demo');
                            clearInterval(retryInterval);
                          } else if (retries >= 20) {
                            console.log('Gave up waiting for __reactNavigate after', retries, 'retries');
                            clearInterval(retryInterval);
                          }
                        }, 50);
                      }
                      function tryNavigateDemo() {
                        if (window.testNavigateDemo) {
                          window.testNavigateDemo();
                        } else {
                          setTimeout(tryNavigateDemo, 100);
                        }
                      }
                      tryNavigateDemo();
                      return false;
                    }
                    
                    // Check for Overview and Failure Cases buttons (new structure)
                    if (target.matches('[data-node-id="27:669"]') || target.closest('[data-node-id="27:669"]')) {
                      console.log('MATCHED OVERVIEW BUTTON!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      // Try React navigate first
                      console.log('Checking for __reactNavigate:', typeof window.__reactNavigate);
                      if (window.__reactNavigate) {
                        console.log('Calling React navigate for overview');
                        try {
                          window.__reactNavigate('overview');
                          console.log('React navigate called successfully');
                        } catch (err) {
                          console.error('Error calling React navigate:', err);
                        }
                      } else {
                        console.log('__reactNavigate not available, will try again after delay');
                        // Retry multiple times
                        let retries = 0;
                        const retryInterval = setInterval(() => {
                          retries++;
                          if (window.__reactNavigate) {
                            console.log('Calling React navigate for overview (delayed, retry', retries, ')');
                            window.__reactNavigate('overview');
                            clearInterval(retryInterval);
                          } else if (retries >= 20) {
                            console.log('Gave up waiting for __reactNavigate after', retries, 'retries');
                            clearInterval(retryInterval);
                          }
                        }, 50);
                      }
                      function tryNavigateOverview() {
                        if (window.testNavigateOverview) {
                          window.testNavigateOverview();
                        } else {
                          setTimeout(tryNavigateOverview, 100);
                        }
                      }
                      tryNavigateOverview();
                      return false;
                    }
                    
                    if (target.matches('[data-node-id="27:671"]') || target.closest('[data-node-id="27:671"]')) {
                      console.log('MATCHED FAILURE CASES BUTTON!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      // Try React navigate first
                      console.log('Checking for __reactNavigate:', typeof window.__reactNavigate);
                      if (window.__reactNavigate) {
                        console.log('Calling React navigate for about');
                        try {
                          window.__reactNavigate('about');
                          console.log('React navigate called successfully');
                        } catch (err) {
                          console.error('Error calling React navigate:', err);
                        }
                      } else {
                        console.log('__reactNavigate not available, will try again after delay');
                        // Retry multiple times
                        let retries = 0;
                        const retryInterval = setInterval(() => {
                          retries++;
                          if (window.__reactNavigate) {
                            console.log('Calling React navigate for about (delayed, retry', retries, ')');
                            window.__reactNavigate('about');
                            clearInterval(retryInterval);
                          } else if (retries >= 20) {
                            console.log('Gave up waiting for __reactNavigate after', retries, 'retries');
                            clearInterval(retryInterval);
                          }
                        }, 50);
                      }
                      function tryNavigateAbout() {
                        if (window.testNavigateAbout) {
                          window.testNavigateAbout();
                        } else {
                          setTimeout(tryNavigateAbout, 100);
                        }
                      }
                      tryNavigateAbout();
                      return false;
                    }
                    
                    // Check for FAQs page buttons
                    if (target.matches('[data-node-id="1:167"]') || target.closest('[data-node-id="1:167"]')) {
                      console.log('MATCHED ABOUT BUTTON (FAQs page)!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      function tryNavigateAbout() {
                        if (window.testNavigateAbout) {
                          window.testNavigateAbout();
                        } else {
                          setTimeout(tryNavigateAbout, 100);
                        }
                      }
                      tryNavigateAbout();
                      return false;
                    }
                    
                    if (target.matches('[data-node-id="1:171"]') || target.closest('[data-node-id="1:171"]')) {
                      console.log('MATCHED FAQs BUTTON (FAQs page)!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      function tryNavigate() {
                        if (window.testNavigate) {
                          window.testNavigate();
                        } else {
                          setTimeout(tryNavigate, 100);
                        }
                      }
                      tryNavigate();
                      return false;
                    }
                    
                    if (target.matches('[data-node-id="1:173"]') || target.closest('[data-node-id="1:173"]')) {
                      console.log('MATCHED DEMO BUTTON (FAQs page)!');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      function tryNavigateDemo() {
                        if (window.testNavigateDemo) {
                          window.testNavigateDemo();
                        } else {
                          setTimeout(tryNavigateDemo, 100);
                        }
                      }
                      tryNavigateDemo();
                      return false;
                    }
                  }
                }, true); // Capture phase
                
                // Also try bubble phase
                document.addEventListener('click', function(e) {
                  console.log('=== DOCUMENT CLICK DETECTED (BUBBLE) ===', e.target);
                }, false);
                
                // Add body-level click listener to catch ALL clicks
                if (document.body) {
                  document.body.addEventListener('click', function(e) {
                    console.log('=== BODY CLICK DETECTED ===', e.target);
                  }, true);
                  console.log('Body click listener attached');
                } else {
                  console.log('Body not ready yet');
                }
                
                console.log('Document click listener attached (capture phase)');
                
                function attachListeners() {
                  const testLink = document.querySelector('[data-test="link"]');
                  const testBtn = document.querySelector('[data-test="button"]');
                  const faqsBtn = document.querySelector('[data-node-id="1:10"]');
                  console.log('Test link found:', testLink);
                  console.log('Test button found:', testBtn);
                  console.log('FAQs button found:', faqsBtn);
                  
                  if (testLink) {
                    testLink.addEventListener('click', function(e) {
                      console.log('=== Test link direct listener fired! ===');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      console.log('Test link clicked via inline script!');
                      alert('Test link clicked via inline script!');
                      if (window.testNavigate) {
                        window.testNavigate();
                      }
                      return false;
                    }, true);
                    console.log('Attached listener to test link');
                  }
                  
                  if (testBtn) {
                    testBtn.addEventListener('click', function(e) {
                      console.log('=== Test button direct listener fired! ===');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      console.log('Test button clicked via inline script!');
                      alert('Test button clicked via inline script!');
                      if (window.testNavigate) {
                        window.testNavigate();
                      }
                      return false;
                    }, true);
                    console.log('Attached listener to test button');
                  }
                  
                  if (faqsBtn) {
                    faqsBtn.addEventListener('click', function(e) {
                      console.log('=== FAQs button direct listener fired! ===');
                      e.preventDefault();
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      console.log('FAQs button clicked via inline script!');
                      alert('FAQs button clicked via inline script!');
                      if (window.testNavigate) {
                        window.testNavigate();
                      }
                      return false;
                    }, true);
                    console.log('Attached listener to FAQs button');
                  }
                }
                
                attachListeners();
                setTimeout(attachListeners, 100);
                setTimeout(attachListeners, 500);
                setTimeout(attachListeners, 1000);
                setTimeout(attachListeners, 2000);
              }
              
              // Function to initialize button states on page load
              function initializeButtonStates() {
                const pageContainer = document.querySelector('[data-page-container]');
                if (pageContainer) {
                  const activePage = pageContainer.getAttribute('data-active-page') || currentPage;
                  console.log('Initializing button states for page:', activePage);
                  updateSegmentedControlButtons(activePage);
                } else {
                  // Retry if page container not ready
                  setTimeout(initializeButtonStates, 100);
                }
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                  console.log('DOMContentLoaded fired');
                  setupClickHandlers();
                  // Initialize button states after a short delay to ensure DOM is ready
                  setTimeout(initializeButtonStates, 200);
                });
              } else {
                console.log('Document already loaded');
                setupClickHandlers();
                // Initialize button states after a short delay to ensure DOM is ready
                setTimeout(initializeButtonStates, 200);
              }
            `,
          }}
        />
      </head>
      <body>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  )
}

