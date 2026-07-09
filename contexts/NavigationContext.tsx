'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import SwipeNavigation from '@/components/SwipeNavigation';
import {
  type Page,
  hashToPage,
  readPageFromLocation,
  writeHashForPage,
} from '@/lib/navigationHash';

interface NavigationContextType {
  activePage: Page;
  navigate: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function initialPage(): Page {
  return readPageFromLocation() ?? 'about';
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState<Page>(initialPage);

  useEffect(() => {
    const syncFromHash = () => {
      const page = hashToPage(window.location.hash);
      if (page) setActivePage(page);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const navigate = useCallback((page: Page) => {
    setActivePage(page);
  }, []);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (!window.location.hash && activePage === 'about') {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }
    }
    writeHashForPage(activePage);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activePage]);

  return (
    <NavigationContext.Provider value={{ activePage, navigate }}>
      <SwipeNavigation />
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
