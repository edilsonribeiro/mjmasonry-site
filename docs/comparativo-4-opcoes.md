---
type: Project
description: "Tema open-source Hugoplate (MIT, 1.4k stars) com Tailwind integrado. Configurado com o conteúdo da M&J Masonry."
title: Comparativo — 4 Opções de Site M & J Masonry
tags: [institucional-company, arquitetura, comparativo]
status: enviado-cliente
created: 2026-03-20
---

# Comparativo — 4 Opções de Site

> Cada opção usa o mesmo conteúdo (copy, fotos, dados do negócio) e a paleta **Navy & Gold** (`#1B2A4A` + `#C9A84C`).
> Todas rodam localmente em `mjmasonry\`. *(sem remote — só na máquina Windows)*

---

## Links para o cliente

| Opção | URL pública |
|-------|------------|
| 2 — Astro | http://mjmasonry-astro.surge.sh |
| 3 — v0dev | http://mjmasonry-v0dev.surge.sh |
| 4 — Custom | http://mjmasonry-custom.surge.sh |

> Hospedados no surge.sh (gratuito). Para remover: `npx surge teardown <url>`

---

## Resumo rápido

| | Opção 1 | Opção 2 | Opção 3 | Opção 4 |
|---|---|---|---|---|
| **Nome** | Hugoplate | Astro ScrewFast | v0.dev Style | Custom Conversion |
| **Stack** | Hugo + Tailwind (tema) | Astro + Tailwind v4 | Hugo + Tailwind CDN | Hugo + Tailwind CDN |
| **Pasta** | `opcao-1-hugoplate/` | `opcao-2-screwfast/` | `opcao-3-v0dev/` | `opcao-4-custom/` |
| **Comando dev** | `npm run dev` | `npm run dev` | `hugo server` | `hugo server` |
| **Porta local** | 1315 | 4321 | 1313 | 1314 |
| **Páginas** | 6 | 5 | 5 | 5 |
| **Layouts custom** | 0 (usa tema) | 5 (.astro) | 12 | 18 |
| **Dependências** | Node + Hugo | Node (Astro) | Hugo somente | Hugo somente |
| **JS no cliente** | Mínimo (tema) | Zero (Astro default) | Zero (Tailwind CDN) | Lucide icons + menu |

---

## Opção 1 — Hugoplate (Tema pronto)

### O que é
Tema open-source [Hugoplate](https://github.com/zeon-studio/hugoplate) (MIT, 1.4k stars) com Tailwind integrado. Configurado com o conteúdo da M&J Masonry.

### Características
- Tema pronto com componentes pré-construídos (hero, features, CTA, formulário)
- Gerador de tema via `data/theme.json` (cores, fontes)
- Suporte a i18n, dark mode, SEO automático
- Fontes: Inter + Playfair Display

### Prós
- **Mais rápido de personalizar** — só editar content/ e data/
- Dark mode já incluso
- Componentes testados e responsivos de fábrica
- SEO automático (Open Graph, meta tags, sitemap)

### Contras
- Visual mais genérico — "cara de template"
- Menos controle sobre layout e estrutura
- Dependência de Go Modules do Hugo (precisa de Go instalado para módulos completos)
- Mais pesado (16MB sem node_modules)

### Publicação gratuita
1. **GitHub Pages** — push para repo + GitHub Actions com Hugo build
2. **Netlify** — connect repo, build command: `npm run build`, publish dir: `public/`
3. **Cloudflare Pages** — igual Netlify, free tier generoso

---

## Opção 2 — Astro + Tailwind (ScrewFast style)

### O que é
Site estático com [Astro](https://astro.build/) + Tailwind v4. Componentes `.astro` com design temático de construção.

### Características
- Astro gera HTML estático puro — zero JS no cliente por default
- Componentes: Header, Footer, cada página como `.astro`
- Tailwind v4 com `@theme` directives para cores customizadas
- Layout com hero bold, cards de serviço, galeria com hover

### Prós
- **Zero JS no cliente** — performance máxima
- DX moderna — componentes tipados, hot reload rápido
- Caminho natural para V2 (pode adicionar React/Svelte islands)
- Ecossistema de integrações (sitemap, image optimization, etc.)

### Contras
- Precisa de Node.js (npm install)
- Stack mais nova — menos exemplos para sites de contractor
- Tailwind v4 pode ter breaking changes
- Mais complexo que Hugo puro para manutenção simples

### Publicação gratuita
1. **Netlify** — connect repo, build: `npm run build`, dir: `dist/` (melhor opção)
2. **Vercel** — auto-detect Astro, deploy automático
3. **Cloudflare Pages** — build: `npm run build`, dir: `dist/`
4. **GitHub Pages** — precisa de GitHub Actions com setup Node

---

## Opção 3 — v0.dev Style (Design AI-clean)

### O que é
Hugo com layouts 100% custom, sem tema. Design ultra-clean inspirado em outputs do v0.dev — minimalista, muito whitespace, cards com bordas arredondadas, gradientes sutis.

### Características
- Tailwind via CDN (sem build step de CSS)
- Glassmorphism no nav (backdrop-blur)
- Cards com hover lift e border gold
- Animações de fade-in-up na entrada
- Hero com badge animado (pulse)
- Seções alternadas (cream/white/navy)
- Font Awesome para ícones

### Prós
- **Design mais moderno e clean** das 4 opções
- Zero dependências npm — só Hugo
- Fácil de customizar (tudo em HTML + classes Tailwind)
- Leve (5.9MB)
- Build instantâneo (~300ms)

### Contras
- Tailwind CDN não é ideal para produção (arquivo grande, sem purge)
- Sem dark mode
- Ícones dependem de CDN externo (Font Awesome)
- Para produção, deveria migrar para Tailwind via PostCSS

### Publicação gratuita
1. **GitHub Pages** — GitHub Actions com Hugo build (mais simples)
2. **Netlify** — build: `hugo`, dir: `public/`
3. **Cloudflare Pages** — build: `hugo`, dir: `public/`

> [!tip] Migração para produção
> Para deploy real, substituir `cdn.tailwindcss.com` por Tailwind via PostCSS + Hugo Pipes. Isso reduz o CSS de ~300KB para ~10KB.

---

## Opção 4 — Custom Conversion-Optimized

### O que é
Hugo com layouts 100% custom, sem tema. Cada decisão de design baseada em pesquisa de conversão (tipografia, cores, posicionamento de CTA).

### Características
- **CTA repetido** a cada 2-3 seções (hero, services, cta-band, gallery, footer)
- **Telefone sempre visível** no topo (clicável em mobile)
- Trust badges logo após o hero (above the fold)
- "Why Choose Us" com 4 differenciadores numerados
- Formulário de contato embutido na homepage
- Ícones via Lucide (SVG, leve)
- JSON-LD LocalBusiness schema
- 18 layouts/partials (mais modular)

### Prós
- **Mais otimizado para gerar leads** — design baseado em dados
- Modular — partials reutilizáveis (cta-band, trust-badges, etc.)
- Telefone proeminente no header gold
- Formulário na homepage (não precisa ir para /contact)
- Lucide icons (SVG, mais leve que Font Awesome)

### Contras
- Tailwind CDN (mesmo problema da opção 3)
- Mais arquivos para manter (18 partials)
- Lucide precisa de JS para renderizar ícones
- Alguns ícones podem não existir (ex: `stairs` não existe no Lucide)

### Publicação gratuita
Igual à Opção 3:
1. **GitHub Pages** + GitHub Actions
2. **Netlify** — build: `hugo`, dir: `public/`
3. **Cloudflare Pages**

---

## Como publicar gratuitamente (guia geral)

### GitHub Pages (todas as opções Hugo)

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

### Netlify (todas as opções)

1. Conectar repositório GitHub
2. Configurar build:
   - **Hugo:** Build: `hugo`, Dir: `public/`
   - **Astro:** Build: `npm run build`, Dir: `dist/`
3. Deploy automático a cada push
4. Free tier: 100GB bandwidth/mês, builds ilimitados

### Cloudflare Pages (todas as opções)

1. Conectar repo GitHub
2. Framework preset: Hugo ou None
3. Free tier: bandwidth ilimitado, 500 builds/mês

### Domínio custom

Após publicar em qualquer plataforma:
1. Comprar domínio (Namecheap ~$10/ano, ou Cloudflare Registrar pelo preço de custo)
2. Configurar CNAME apontando para o host (ex: `mjmasonry.netlify.app`)
3. SSL automático (grátis em todas as plataformas)

---

## Recomendação

| Critério | Melhor opção |
|----------|-------------|
| **Velocidade de entrega** | Opção 1 (Hugoplate) |
| **Design mais bonito** | Opção 3 (v0.dev style) |
| **Geração de leads** | Opção 4 (Custom conversion) |
| **Escalabilidade futura** | Opção 2 (Astro) |
| **Manutenção mais simples** | Opção 3 (Hugo puro, sem npm) |
| **Performance máxima** | Opção 2 (Astro, zero JS) |

> [!note] Combinação ideal
> Pegar o **design da Opção 3** (clean, moderno) com a **estrutura de conversão da Opção 4** (CTA repetido, telefone visível, trust badges, formulário na home). Stack: Hugo + Tailwind via PostCSS para produção.

---

## Links

- [[plano-v1]] — Plano original em 2 fases
- [[opcoes-v1]] — Avaliação das 4 stacks
- [[pesquisa-cores]] — Pesquisa acadêmica de cores e tipografia
