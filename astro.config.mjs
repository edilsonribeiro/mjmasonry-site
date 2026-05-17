// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Project-page deploy on GitHub Pages: https://edilsonribeiro.github.io/mjmasonry-site/
// When the client buys a custom domain, set SITE_URL=https://mjmasonryma.com
// and BASE_PATH=/ as build-time env vars (no code change needed).
const site = process.env.SITE_URL ?? 'https://edilsonribeiro.github.io';
const base = process.env.BASE_PATH ?? '/mjmasonry-site';

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
