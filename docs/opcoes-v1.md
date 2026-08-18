---
type: Project
description: Escolher um tema Hugo para contractors/serviços (existem dezenas no marketplace)
tags: [institucional-company, arquitetura, planejamento]
status: pendente-decisao
created: 2026-03-17
---

# 4 Opções para V1 — Site M & J Masonry

> Contexto: site estático de geração de leads para empresa de masonry/hardscape em Massachusetts. 5 páginas (Home, About, Services, Gallery, Contact). Copywriting pronto. Atualização semestral pelo dev.
> PRD: [[prd]] | Concorrência: [[analise-concorrencia]] | Copy: [[copywriting-site]]

---

## Opção 1 — Hugo + Tema Pronto (Mais rápido para publicar)

### Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Hugo |
| Design | Tema pronto (ex: Flavor, Flavor Corporate, Flavor Starter) customizado |
| CSS | O que vier no tema + overrides |
| Formulário | Formspree (free tier: 50 envios/mês) |
| Hospedagem | GitHub Pages |
| Domínio | Custom domain via CNAME |

### Abordagem

- Escolher um tema Hugo para contractors/serviços (existem dezenas no marketplace)
- Customizar cores, logo, fontes e conteúdo
- Substituir textos pelo copywriting já pronto
- Adicionar fotos do cliente
- Deploy via `gh-pages` branch ou GitHub Actions

### Prós

- **Tempo de entrega: ~1-2 dias** para ter algo no ar
- Custo zero (GitHub Pages + Formspree free)
- SEO nativo do Hugo (sitemap, meta tags, schema)
- Design responsivo de fábrica
- Manutenção mínima

### Contras

- Design genérico — pode parecer template
- Customização limitada (dependente do tema)
- Se o tema for abandonado, você herda a dívida técnica
- Menos controle sobre performance e estrutura

### Ideal para

Validar rápido, colocar algo no ar enquanto o cliente ainda está empolgado. Pode ser substituído depois.

---

## Opção 2 — Hugo + Tailwind CSS (Tema custom)

### Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Hugo |
| Design | Tema custom do zero |
| CSS | Tailwind CSS (via Hugo Pipes ou PostCSS) |
| Componentes | Hugo partials (header, footer, hero, service-card, gallery-grid) |
| Formulário | Formspree ou Netlify Forms |
| Hospedagem | GitHub Pages |
| Imagens | Hugo image processing (resize + WebP) |

### Abordagem

- Criar tema Hugo do zero com Tailwind
- Estrutura de partials reutilizáveis
- Layout mobile-first com breakpoints para tablet/desktop
- Gallery com lightbox (JS mínimo — ex: GLightbox, ~2KB)
- SEO: JSON-LD LocalBusiness, Open Graph, meta tags por página
- Build otimizado: CSS purgado, imagens processadas pelo Hugo

### Prós

- **Design único e profissional** — sem cara de template
- Controle total sobre layout, animações e performance
- Tailwind facilita prototipar rápido e manter consistência
- Hugo Pipes processa imagens automaticamente (WebP, resize)
- Lighthouse 95+ facilmente alcançável
- Custo zero de hospedagem

### Contras

- **Tempo de entrega: ~4-6 dias**
- Precisa de familiaridade com Go templates do Hugo (curva de aprendizado)
- Tailwind via Hugo Pipes exige config de PostCSS
- Sem componentes reativos (tudo estático)

### Ideal para

Dev que quer controle total e resultado profissional sem dependência de frameworks JS. Melhor custo-benefício entre tempo e qualidade.

---

## Opção 3 — Astro + Tailwind (Stack moderno)

### Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Astro |
| Design | Custom com Astro components |
| CSS | Tailwind CSS |
| Componentes | Astro components (.astro) + islands opcionais (React/Svelte) |
| Formulário | Astro + Netlify Forms ou Resend |
| Hospedagem | Netlify ou Vercel (free tier) |
| Imagens | `astro:assets` (otimização nativa) |

### Abordagem

- Astro gera HTML estático por padrão (zero JS no cliente)
- Componentes `.astro` para cada seção (Hero, ServiceCard, Gallery, ContactForm)
- Islands Architecture: JS só onde precisa (ex: lightbox da gallery, validação de form)
- Content Collections para serviços (Markdown → tipado)
- Otimização de imagens nativa (`<Image>` component)
- View Transitions (animações entre páginas, nativo do Astro)
- Deploy automático via Git push no Netlify/Vercel

### Prós

- **DX moderna**: componentes, TypeScript, hot reload
- Zero JS no cliente por padrão — performance excelente
- Islands Architecture: adiciona interatividade só onde precisa
- Content Collections: serviços em Markdown com schema tipado
- Ecossistema de integrações (sitemap, SEO, image, etc.)
- **Migração para V2 mais suave**: pode adicionar React/Svelte islands sem reescrever
- Netlify/Vercel: deploy automático, forms, analytics, edge functions

### Contras

- **Tempo de entrega: ~4-6 dias**
- Stack mais nova (Astro v4/v5) — menos exemplos no mercado para contractors
- Netlify/Vercel free tier tem limites (100GB bandwidth, 100 form submissions)
- Se precisar de backend futuro, não é .NET — precisaria de API separada

### Ideal para

Dev que quer stack moderna, boa DX, e caminho natural para expandir o site com interatividade progressiva.

---

## Opção 4 — Next.js Static Export (Pensando no futuro)

### Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js (App Router, static export) |
| Design | Custom com React components |
| CSS | Tailwind CSS |
| Componentes | React (server components + client components) |
| Formulário | Server Action via API route ou Formspree |
| Hospedagem | Vercel (free tier) ou GitHub Pages (static export) |
| Imagens | `next/image` (otimização automática no Vercel) |

### Abordagem

- Next.js com `output: 'export'` — gera HTML estático
- React components para toda a UI
- `next/image` para otimização de imagens
- Metadata API para SEO (title, description, Open Graph, JSON-LD)
- Pode usar Server Components no build time
- Na V2, basta remover `output: 'export'` e adicionar API routes para CRM, admin, etc.

### Prós

- **Caminho direto para V2/V3**: mesmo codebase evolui de estático → fullstack
- React ecosystem: milhares de componentes disponíveis
- `next/image`: lazy loading, responsive, WebP automático no Vercel
- Metadata API: SEO robusto e tipado
- Vercel: deploy, analytics, Speed Insights, Web Vitals gratuitamente
- Se futuro backend for Node, tudo fica em um lugar só

### Contras

- **Tempo de entrega: ~5-8 dias** (mais boilerplate e config)
- Overkill para 5 páginas estáticas — complexidade desnecessária no V1
- Bundle JS no cliente mesmo para conteúdo estático (React hydration)
- Se backend futuro for .NET (como planejado na arquitetura), o argumento "fullstack" cai
- `next/image` otimizado só no Vercel — static export perde essa feature
- Mais pesado que Hugo/Astro para o mesmo resultado

### Ideal para

Se o plano de longo prazo fosse fullstack em Node/React. Mas como o backend futuro é .NET, perde a principal vantagem.

---

## Comparativo

| Critério | 1 — Hugo+Tema | 2 — Hugo+Tailwind | 3 — Astro | 4 — Next.js |
|----------|:---:|:---:|:---:|:---:|
| **Tempo para publicar** | 1-2 dias | 4-6 dias | 4-6 dias | 5-8 dias |
| **Custo mensal** | $0 | $0 | $0 | $0 |
| **Performance (Lighthouse)** | 85-95 | 95-100 | 95-100 | 80-95 |
| **Design único** | Baixo | Alto | Alto | Alto |
| **SEO local** | Bom | Ótimo | Ótimo | Ótimo |
| **Manutenção** | Baixa | Baixa | Baixa | Média |
| **Curva de aprendizado** | Baixa | Média (Go tpl) | Média | Alta |
| **Escalabilidade V2+** | Baixa | Média | Alta | Alta* |
| **Controle do dev** | Baixo | Total | Total | Total |
| **JS no cliente** | Depende do tema | Mínimo | Zero (default) | React hydration |

> *Next.js seria Alta se backend futuro fosse Node. Com .NET, fica Média.

---

## Recomendação

**Opção 2 (Hugo + Tailwind) ou Opção 3 (Astro)** — ambas entregam:

- Design profissional e único
- Performance excelente
- SEO forte
- Custo zero
- Tempo razoável (4-6 dias)

**Hugo + Tailwind** se você quer simplicidade máxima e zero JS.
**Astro** se você quer DX moderna e caminho mais suave para V2 com interatividade.

**Opção 1** faz sentido se a prioridade é velocidade absoluta (algo no ar em 1-2 dias).
**Opção 4** é overkill para este projeto — complexidade que não se paga.

---

## Fontes

- [[prd]]
- [[analise-concorrencia]]
- [[arquitetura]]
- [[demandas-dev]]
