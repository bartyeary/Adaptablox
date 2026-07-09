export type Page = 'overview' | 'about' | 'faqs' | 'demo';

const PAGE_TO_HASH: Record<Page, string> = {
  about: 'about',
  overview: 'control',
  faqs: 'system',
  demo: 'demo',
};

const HASH_TO_PAGE: Record<string, Page> = {
  about: 'about',
  control: 'overview',
  overview: 'overview',
  system: 'faqs',
  faqs: 'faqs',
  demo: 'demo',
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
