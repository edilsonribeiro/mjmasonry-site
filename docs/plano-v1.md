---
type: Project
description: Flavor — limpo, seções modulares, CTA pronto
tags: [institucional-company, plano, implementacao]
status: aprovado
created: 2026-03-17
---

# Plano V1 — Site M & J Masonry

> Abordagem em 2 fases: lançar rápido com tema Hugo (Fase A), depois evoluir para design custom com Tailwind (Fase B).
> PRD: [[prd]] | Copy: [[copywriting-site]] | Opções avaliadas: [[opcoes-v1]]

---

## Fase A — MVP Rápido (Tema Hugo)

> Objetivo: site no ar em 1-2 dias. Funcional, com copywriting real e formulário de contato.

### A1. Setup do projeto

- [ ] Criar repo `institucional-company` no GitHub (se não existe)
- [ ] Instalar Hugo (`winget install Hugo.Hugo.Extended`)
- [ ] Criar site: `hugo new site mjmasonry`
- [ ] Inicializar Git + `.gitignore`

### A2. Escolher e instalar tema

- [ ] Avaliar temas Hugo para contractor/service business:
  - **Flavor** — limpo, seções modulares, CTA pronto
  - **Jesuspended** — hero grande, galeria, formulário
  - **Flavor Corporate** — profissional, multi-página
  - **Flavor starter** — minimalista, fácil de customizar
  - Alternativa: buscar em [hugothemes.io](https://themes.gohugo.io/) filtro "business" ou "agency"
- [ ] Instalar tema como Git submodule: `git submodule add <repo> themes/<nome>`
- [ ] Configurar `hugo.toml` com dados do tema

### A3. Configurar conteúdo

- [ ] Configurar `hugo.toml` / `config.toml`:
  ```toml
  baseURL = "https://mjmasonry.com"  # placeholder
  languageCode = "en-us"
  title = "M & J Masonry"

  [params]
    description = "Quality Masonry & Hardscape Services in Massachusetts"
    tagline = "Built by Family. Built to Last."  # ou a que o cliente escolher
    phone = "857-251-7967"  # confirmar com cliente
    email = "Mj_candidos@outlook.com"  # confirmar
    address = "Rockland, MA"
    serviceArea = "Serving All of Massachusetts"
  ```
- [ ] Criar páginas em `content/`:
  - `_index.md` — Home (hero, services preview, CTA)
  - `about.md` — About (copiar de [[copywriting-site]])
  - `services.md` — Services (8 serviços)
  - `gallery.md` — Gallery (placeholder até ter fotos)
  - `contact.md` — Contact / Free Estimate

### A4. Conteúdo das páginas

- [ ] Copiar textos de [[copywriting-site]] para cada página
  - Tom escolhido pelo cliente (A, B, C ou D) — apresentar na próxima reunião
  - Default: usar Opção A (profissional) até decisão
- [ ] Configurar menu de navegação (Home, About, Services, Gallery, Contact)
- [ ] Adicionar badges: "Insured & Registered", "Family-Owned", "Serving All of MA"

### A5. Formulário de contato

- [ ] Criar conta no [Formspree](https://formspree.io/) (free: 50 envios/mês)
- [ ] Configurar form HTML:
  ```html
  <form action="https://formspree.io/f/{id}" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="tel" name="phone" placeholder="Your Phone" required>
    <select name="service">
      <option value="">Select a Service</option>
      <option>Stone & Retaining Walls</option>
      <option>Walkways</option>
      <option>Steps & Stoops</option>
      <option>Masonry Services</option>
      <option>Paver Installation</option>
      <option>Patios</option>
      <option>Outdoor Fireplaces & Fire Pits</option>
      <option>Property Cleanup</option>
    </select>
    <textarea name="message" placeholder="Tell us about your project"></textarea>
    <input type="text" name="_gotcha" style="display:none">  <!-- honeypot anti-spam -->
    <button type="submit">Request My Free Estimate</button>
  </form>
  ```
- [ ] Botões de contato direto:
  - `<a href="tel:+18572517967">Call Now</a>`
  - `<a href="sms:+18572517967">Text Us</a>`
  - `<a href="https://wa.me/18572517967">WhatsApp</a>`
  - `<a href="mailto:Mj_candidos@outlook.com">Email Us</a>`

### A6. Imagens

- [ ] Usar fotos do Instagram do cliente (as de trabalhos próprios)
- [ ] Se poucas fotos: usar imagens de placeholder de serviços (Unsplash, Pexels — licença livre)
- [ ] Otimizar manualmente (WebP, max 800px largura) ou usar Hugo image processing

### A7. SEO básico

- [ ] Meta tags por página (title, description)
- [ ] JSON-LD `LocalBusiness` no `<head>`:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "M & J Masonry",
    "description": "Masonry & Hardscape Services in Massachusetts",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rockland",
      "addressRegion": "MA"
    },
    "telephone": "+1-857-251-7967",
    "areaServed": "Massachusetts",
    "priceRange": "$$"
  }
  ```
- [ ] `sitemap.xml` (Hugo gera automaticamente)
- [ ] `robots.txt`
- [ ] Alt text em todas as imagens com serviço + "Massachusetts"

### A8. Deploy

- [ ] Configurar GitHub Actions para build Hugo:
  ```yaml
  # .github/workflows/deploy.yml
  name: Deploy Hugo
  on:
    push:
      branches: [main]
  jobs:
    build-deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
          with:
            submodules: true
        - uses: peaceiris/actions-hugo@v3
          with:
            hugo-version: 'latest'
            extended: true
        - run: hugo --minify
        - uses: peaceiris/actions-gh-pages@v4
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./public
  ```
- [ ] Ativar GitHub Pages no repo (branch `gh-pages`)
- [ ] Testar em mobile (Chrome DevTools + dispositivo real)
- [ ] Validar Lighthouse (>85 nesta fase)

### A9. Checklist de lançamento

- [ ] Todas as 5 páginas com conteúdo real
- [ ] Formulário funcionando (testar envio)
- [ ] Botões tel/sms/wa.me funcionando em mobile
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] SEO: meta tags, schema, sitemap
- [ ] Favicon + Open Graph image
- [ ] 404 page customizada

> **Entregável Fase A:** site funcional no ar com conteúdo real, formulário de contato e SEO básico. URL temporária: `<usuario>.github.io/institucional-company`

---

## Fase B — Design Custom (Hugo + Tailwind)

> Objetivo: substituir o tema pronto por design custom, profissional e otimizado. Manter o conteúdo, trocar a casca.

### B1. Setup Tailwind no Hugo

- [ ] Instalar dependências:
  ```bash
  npm init -y
  npm install -D tailwindcss @tailwindcss/typography postcss autoprefixer
  npx tailwindcss init
  ```
- [ ] Configurar `tailwind.config.js`:
  ```js
  module.exports = {
    content: [
      './layouts/**/*.html',
      './content/**/*.md',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1a365d',    // azul escuro — confiança
          secondary: '#c05621',  // laranja/terracota — masonry
          accent: '#2d3748',     // cinza escuro
        },
        fontFamily: {
          heading: ['Inter', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  }
  ```
- [ ] Configurar PostCSS no Hugo (`postcss.config.js`)
- [ ] Criar `assets/css/main.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### B2. Criar layout base

- [ ] `layouts/_default/baseof.html` — HTML base (head, body, scripts)
- [ ] `layouts/partials/head.html` — meta tags, fonts, CSS, JSON-LD
- [ ] `layouts/partials/header.html` — nav responsivo (hamburger mobile)
- [ ] `layouts/partials/footer.html` — footer com tagline, links, copyright
- [ ] `layouts/partials/cta.html` — bloco CTA reutilizável ("Get Your Free Estimate")

### B3. Componentes (partials)

- [ ] `hero.html` — hero section com imagem de fundo, headline, CTA
- [ ] `service-card.html` — card de serviço (ícone/foto, título, descrição)
- [ ] `services-grid.html` — grid de services cards (3 colunas desktop, 1 mobile)
- [ ] `gallery-grid.html` — grid de fotos com lightbox
- [ ] `contact-form.html` — formulário Free Estimate
- [ ] `contact-buttons.html` — botões Call/Text/WhatsApp/Email
- [ ] `badges.html` — Insured, Family-Owned, Serving MA
- [ ] `why-choose-us.html` — seção de diferenciais

### B4. Páginas

- [ ] **Home** (`layouts/index.html`):
  - Hero (foto destaque + headline + CTA)
  - Why Choose Us (4 bullets com ícones)
  - Services Preview (grid de cards)
  - Mini Gallery (3-6 fotos)
  - CTA final
- [ ] **About** (`layouts/about/single.html`):
  - Hero com headline
  - Story (texto corrido)
  - Values (3 cards)
  - Badges
  - CTA
- [ ] **Services** (`layouts/services/single.html`):
  - Intro
  - Grid de 8 serviços (card com foto + título + descrição)
  - CTA final
- [ ] **Gallery** (`layouts/gallery/single.html`):
  - Grid de fotos (masonry layout ou grid uniforme)
  - Lightbox (GLightbox — 2KB gzip)
  - Filtro por serviço (opcional, pode ser CSS-only)
- [ ] **Contact** (`layouts/contact/single.html`):
  - Headline + descrição
  - Formulário
  - Botões de contato direto
  - Mapa ou "Serving all of MA"

### B5. Design system

- [ ] Paleta de cores definida no Tailwind config
- [ ] Tipografia: 1 font (Inter ou similar) — heading bold, body regular
- [ ] Espaçamento consistente (seções com `py-16` ou `py-20`)
- [ ] Botões: primário (primary bg), secundário (outline), ghost
- [ ] Mobile-first: base → `sm:` → `md:` → `lg:`
- [ ] Hover/focus states em todos os interativos
- [ ] Máximo de 2 cores de destaque + neutros

### B6. Performance

- [ ] Hugo image processing para todas as fotos:
  ```html
  {{ $img := resources.Get "images/hero.jpg" }}
  {{ $webp := $img.Resize "1200x webp" }}
  {{ $small := $img.Resize "600x webp" }}
  <picture>
    <source srcset="{{ $small.RelPermalink }}" media="(max-width: 640px)">
    <img src="{{ $webp.RelPermalink }}" alt="..." loading="lazy">
  </picture>
  ```
- [ ] Tailwind CSS purgado no build (automático com content config)
- [ ] Fonts: self-hosted (sem Google Fonts CDN) ou `font-display: swap`
- [ ] JS mínimo: só lightbox (~2KB) + hamburger menu (~20 linhas)
- [ ] Preload hero image
- [ ] Meta: Lighthouse 95+ (Performance, SEO, Accessibility, Best Practices)

### B7. SEO avançado

- [ ] JSON-LD `LocalBusiness` completo (com `openingHours`, `geo`, `sameAs`)
- [ ] Open Graph tags por página (imagem, título, descrição)
- [ ] `<link rel="canonical">` em todas as páginas
- [ ] Alt text descritivo: "{serviço} project in {cidade}, Massachusetts"
- [ ] Internal linking: services → gallery, gallery → contact
- [ ] Heading hierarchy: H1 único por página, H2 seções, H3 sub

### B8. Testes e lançamento

- [ ] Testar em: Chrome, Safari, Firefox (desktop + mobile)
- [ ] Testar formulário (envio real → chega no email?)
- [ ] Testar botões tel/sms/wa.me em dispositivo real
- [ ] Lighthouse audit: 4 categorias > 90
- [ ] Validar HTML (W3C validator)
- [ ] Verificar links quebrados
- [ ] Configurar domínio custom (CNAME no DNS + GitHub Pages)

---

## Timeline sugerida

```
Fase A (MVP com tema):
  Dia 1  — Setup + tema + conteúdo + formulário
  Dia 2  — SEO + deploy + teste → SITE NO AR ✓

Fase B (Custom Tailwind):
  Dia 3  — Setup Tailwind + layout base + header/footer
  Dia 4  — Home + About (custom)
  Dia 5  — Services + Gallery (custom)
  Dia 6  — Contact + SEO avançado + performance
  Dia 7  — Testes + ajustes + domínio custom → V1 FINAL ✓
```

---

## Decisões pendentes (antes de começar)

| # | Decisão | Quem decide | Status |
|---|---------|------------|--------|
| 1 | Tom do copywriting (A/B/C/D) | Cliente | Pendente |
| 2 | Tagline escolhida | Cliente | Pendente |
| 3 | Domínio | Cliente | Pendente |
| 4 | Telefone/email confirmados | Cliente | Pendente |
| 5 | Paleta de cores | Dev (baseada no logo) | Pendente |
| 6 | Fotos disponíveis | Cliente | Pendente |

> ⚠️ **Fase A pode começar sem essas decisões** (usar defaults e placeholder). Fase B precisa pelo menos de: fotos, logo e telefone confirmados.

---

## Links

- [[prd]]
- [[copywriting-site]]
- [[demandas-dev]]
- [[demandas-cliente]]
- [[opcoes-v1]]
- [[analise-concorrencia]]
