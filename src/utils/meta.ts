// Utilidades de SEO (títulos y metas por página) y Analytics (GA4 opcional).
// Para activar Analytics: crea una propiedad GA4, obtén el Measurement ID
// (G-XXXXXXXXXX) y agrégalo como VITE_GA_ID en un archivo .env

const GA_ID: string | undefined = (import.meta as unknown as { env: Record<string, string | undefined> }).env?.VITE_GA_ID;

export function setPageMeta(opts: { title: string; description: string }) {
  document.title = opts.title;

  const upsert = (selector: string, create: () => HTMLMetaElement, set: (el: HTMLMetaElement) => void) => {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    set(el);
  };

  upsert('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }), (el) =>
    el.setAttribute('content', opts.description),
  );
  upsert('meta[property="og:title"]', () => {
    const m = document.createElement('meta');
    m.setAttribute('property', 'og:title');
    return m;
  }, (el) => el.setAttribute('content', opts.title));
  upsert('meta[property="og:description"]', () => {
    const m = document.createElement('meta');
    m.setAttribute('property', 'og:description');
    return m;
  }, (el) => el.setAttribute('content', opts.description));
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let gaLoaded = false;

export function initAnalytics() {
  if (!GA_ID || gaLoaded || typeof document === 'undefined') return;
  gaLoaded = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

export function trackPageview(path: string) {
  if (!GA_ID || !window.gtag) return;
  window.gtag('config', GA_ID, { page_path: path });
}

export function siteUrl(): string {
  return typeof window !== 'undefined' ? window.location.origin : '';
}
