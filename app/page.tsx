'use client';

import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import AdaptabloxOverview from '@/components/AdaptabloxOverview';
import AdaptabloxAbout from '@/components/AdaptabloxAbout';
import AdaptabloxFAQs from '@/components/AdaptabloxFAQs';
import AdaptabloxDemo from '@/components/AdaptabloxDemo';
import BouncyBallView from '@/components/BouncyBallView';
import { type Page, isPage } from '@/lib/navigationHash';

export default function Home() {
  const { activePage, navigate } = useNavigation();
  const [pageFromEvent, setPageFromEvent] = useState<Page | null>(null);
  const activePageRef = useRef(activePage);
  // The static HTML is rendered with the animation hidden and absent, so it only shows and mounts after
  // hydration: on a #bouncy deep link the first client render must match that HTML, and React won't
  // correct the wrapper's display style while hydrating
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  // Keep ref in sync with activePage
  useEffect(() => {
    activePageRef.current = activePage;
  }, [activePage]);
  
  console.log('Home component rendered, activePage:', activePage);

  // Expose navigate function to window for inline script - do this IMMEDIATELY
  useEffect(() => {
    const reactNavigate = (page: Page) => {
      console.log('__reactNavigate called with:', page, 'current activePage:', activePageRef.current);
      if (page !== activePageRef.current) {
        console.log('Navigating from', activePageRef.current, 'to', page);
        navigate(page);
      } else {
        console.log('Already on page', page, 'skipping navigation');
      }
    };
    
    (window as any).__reactNavigate = reactNavigate;
    console.log('Exposed __reactNavigate to window, navigate function:', typeof navigate);
    
    return () => {
      delete (window as any).__reactNavigate;
    };
  }, [navigate]);
  
  // Listen for navigation events from inline script
  useEffect(() => {
    console.log('Setting up navigate event listener, navigate function:', navigate);
    
    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent;
      console.log('=== Navigation event received! ===', customEvent.detail);
      const page = customEvent.detail?.page;
      console.log('Page from event:', page);
      if (isPage(page)) {
        console.log('Calling navigate with:', page);
        navigate(page);
        console.log('Navigate called');
      } else {
        console.log('Invalid page:', page);
      }
    };
    
    window.addEventListener('navigate', handleNavigate);
    console.log('Added navigate event listener to window');
    
    // Also try listening on document
    document.addEventListener('navigate', handleNavigate);
    console.log('Added navigate event listener to document');
    
    // Also sync with data-active-page attribute that inline script sets
    const syncActivePage = () => {
      const pageContainer = document.querySelector('[data-page-container]');
      if (pageContainer) {
        const domActivePage = pageContainer.getAttribute('data-active-page');
        if (domActivePage && isPage(domActivePage)) {
          // Only sync if different from current activePage (use ref to avoid stale closure)
          if (domActivePage !== activePageRef.current) {
            console.log('=== SYNC: Syncing activePage from DOM:', domActivePage, 'current React state:', activePageRef.current, '===');
            navigate(domActivePage);
            console.log('=== SYNC: navigate() called ===');
          }
        } else {
          // Log when attribute is missing (but not too frequently)
          if (Math.random() < 0.1) {
            console.log('SYNC: data-active-page attribute:', domActivePage || 'not found');
          }
        }
      } else {
        console.log('SYNC: Page container not found');
      }
    };
    
    // Check periodically for DOM changes (more frequently to catch changes)
    let syncCount = 0;
    const intervalId = setInterval(() => {
      syncCount++;
      // Log every 20th sync to confirm it's running (every ~1 second)
      if (syncCount % 20 === 0) {
        console.log('SYNC: Periodic sync running (count:', syncCount, ')');
      }
      syncActivePage();
    }, 50); // Check every 50ms for faster sync
    
    // Also use MutationObserver to watch for attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-active-page') {
          const newPage = (mutation.target as HTMLElement).getAttribute('data-active-page');
          console.log('MutationObserver detected data-active-page change:', newPage, 'current React state:', activePageRef.current);
          if (newPage && newPage !== activePageRef.current && isPage(newPage)) {
            console.log('DOM activePage changed to:', newPage, 'syncing with React state');
            navigate(newPage);
          }
        }
      });
    });
    
    // Set up observer immediately and also after a delay
    const setupObserver = () => {
      const pageContainer = document.querySelector('[data-page-container]');
      if (pageContainer) {
        console.log('Setting up MutationObserver on page container');
        observer.observe(pageContainer, { attributes: true, attributeFilter: ['data-active-page'] });
        // Initial sync
        syncActivePage();
        return true;
      }
      return false;
    };
    
    // Try immediately
    if (!setupObserver()) {
      // If not ready, try after delays
      setTimeout(() => {
        if (!setupObserver()) {
          setTimeout(() => {
            if (!setupObserver()) {
              console.log('SYNC: Failed to set up observer after multiple attempts');
            }
          }, 200);
        }
      }, 50);
    }
    
    // Also run an initial sync after a short delay to catch any early changes
    setTimeout(() => {
      console.log('SYNC: Running initial sync check');
      syncActivePage();
    }, 100);
    
    return () => {
      window.removeEventListener('navigate', handleNavigate);
      document.removeEventListener('navigate', handleNavigate);
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [navigate]);

  // Always render all pages so they exist in the DOM for the inline script to manipulate
  // Note: We don't set data-active-page in JSX because the inline script controls it
  // React will sync FROM the DOM attribute, not TO it
  return (
    <div key={activePage} data-page-container style={{ pointerEvents: 'auto' }}>
      <div 
        data-wrapper="overview"
        style={{ display: activePage === 'overview' ? 'block' : 'none' }} 
        data-always-render="true"
      >
        <AdaptabloxOverview />
      </div>
      <div 
        data-wrapper="about"
        style={{ display: activePage === 'about' ? 'block' : 'none' }} 
        data-always-render="true"
      >
        <AdaptabloxAbout />
      </div>
      <div 
        data-wrapper="faqs"
        style={{ display: activePage === 'faqs' ? 'block' : 'none' }} 
        data-always-render="true"
      >
        <AdaptabloxFAQs />
      </div>
      <div 
        data-wrapper="demo"
        data-name="demo" 
        style={{ display: activePage === 'demo' ? 'block' : 'none' }} 
        data-always-render="true"
      >
        <AdaptabloxDemo />
      </div>
      <div
        data-wrapper="bouncy"
        style={{ display: hydrated && activePage === 'bouncy' ? 'block' : 'none' }}
      >
        {hydrated && activePage === 'bouncy' && <BouncyBallView />}
      </div>
    </div>
  );
}
