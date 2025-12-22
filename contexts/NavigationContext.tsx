'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Page = 'overview' | 'about' | 'faqs' | 'demo';

interface NavigationContextType {
  activePage: Page;
  navigate: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  // Initialize from URL hash if present
  const getInitialPage = (): Page => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'overview' || hash === 'about' || hash === 'faqs' || hash === 'demo') {
        return hash as Page;
      }
    }
    return 'overview';
  };

  const [activePage, setActivePage] = useState<Page>(getInitialPage());

  useEffect(() => {
    console.log('NavigationProvider mounted, activePage:', activePage);
    // Scroll to top on initial load
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    // Set initial URL hash if not present
    if (!window.location.hash) {
      const url = new URL(window.location.href);
      url.hash = activePage;
      window.history.replaceState({ page: activePage }, '', url.toString());
    }
    
    // Handle browser back/forward buttons
    const handlePopState = (event: PopStateEvent) => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'overview' || hash === 'about' || hash === 'faqs' || hash === 'demo') {
        setActivePage(hash as Page);
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    console.log('NavigationProvider activePage changed to:', activePage);
    // Scroll to top whenever activePage changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const navigate = (page: Page) => {
    console.log('NavigationContext navigate called with:', page);
    console.log('Current activePage before update:', activePage);
    
    // Update URL with current page
    const url = new URL(window.location.href);
    url.hash = page;
    window.history.pushState({ page }, '', url.toString());
    
    // Update state (scroll will happen in useEffect)
    setActivePage(page);
    console.log('setActivePage called with:', page);
  };

  console.log('NavigationProvider rendering, activePage:', activePage);

  return (
    <NavigationContext.Provider value={{ activePage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

