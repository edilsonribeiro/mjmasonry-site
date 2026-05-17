// Prefix internal URLs with Astro's BASE_URL so they work on GitHub Pages
// project sites (e.g. /mjmasonry-site/about). On custom domain (base: '/')
// this is a no-op.

const RAW_BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

export const link = (path: string): string => {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('sms:') ||
    path.startsWith('#')
  ) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${RAW_BASE}${normalized}`;
};
