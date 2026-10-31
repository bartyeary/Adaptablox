export type Page = 'overview' | 'about' | 'faqs' | 'demo' | 'bouncy';

export function isPage(value: unknown): value is Page {
  return value === 'overview' || value === 'about' || value === 'faqs' || value === 'demo' || value === 'bouncy';
}

const PAGE_TO_HASH: Record<Page, string> = {
  about: 'about',
  overview: 'control',
  faqs: 'system',
  demo: 'demo',
  bouncy: 'spot',
};

const HASH_TO_PAGE: Record<string, Page> = {
  about: 'about',
  control: 'overview',
  overview: 'overview',
  system: 'faqs',
  faqs: 'faqs',
  demo: 'demo',
  spot: 'bouncy',
  bouncy: 'bouncy',
};

export function pageToHash(page: Page): string {
  return PAGE_TO_HASH[page];
}

export function hashToPage(hash: string): Page | null {
  const key = hash.replace(/^#/, '').trim().toLowerCase();
  if (!key) return null;
  return HASH_TO_PAGE[key] ?? null;
}

export function readPageFromLocation(): Page | null {
  if (typeof window === 'undefined') return null;
  return hashToPage(window.location.hash);
}

export function writeHashForPage(page: Page, replace = true): void {
  if (typeof window === 'undefined') return;
  const hash = `#${pageToHash(page)}`;
  if (window.location.hash === hash) return;
  if (replace) {
    window.history.replaceState(null, '', hash);
  } else {
    window.location.hash = pageToHash(page);
  }
}
