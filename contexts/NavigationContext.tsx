'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Page = 'overview' | 'about' | 'faqs' | 'demo';

interface NavigationContextType {
  activePage: Page;
  navigate: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState<Page>('overview');

  useEffect(() => {
    console.log('NavigationProvider mounted, activePage:', activePage);
  }, []);

  useEffect(() => {
    console.log('NavigationProvider activePage changed to:', activePage);
    // Scroll to top whenever page changes
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activePage]);

  const navigate = (page: Page) => {
    console.log('NavigationContext navigate called with:', page);
    console.log('Current activePage before update:', activePage);
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

