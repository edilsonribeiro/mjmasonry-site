---
type: Project
description: demandas dev
tags: [institucional-company, demandas, dev]
status: em-andamento
created: 2026-03-16
updated: 2026-05-17
---

# Demandas — Desenvolvimento

> Tarefas do desenvolvedor para o projeto M & J Masonry.
> Escopo vigente: [[orcamento-v2]] / [[proposta-cliente-v2]] | PRD: [[prd]]
> Repositório de produção: `~/Projetos/mjmasonry-site` → https://github.com/edilsonribeiro/mjmasonry-site *(não clonado nesta máquina — [GitHub](https://github.com/edilsonribeiro/mjmasonry-site))*
> Site preview: https://edilsonribeiro.github.io/mjmasonry-site/

---

## Pré-desenvolvimento (concluído)

- [x] Verificar nomes dos serviços em inglês nativo → [[analise-nomes-servicos]]
- [x] Criar copywriting completo (4 tons, 8 serviços) → [[copywriting-site]]
- [x] Definir opções de tagline/slogan → [[copywriting-site]]
- [x] Pesquisa de cores e tipografia → [[pesquisa-cores]]
- [x] Pesquisa de copyright de fotos → [[pesquisa-copyright-fotos]]
- [x] 3 protótipos publicados → [[comparativo-4-opcoes]]
- [x] Cotação de domínios → [[cotacao-dominios]]
- [x] Escopo definido em 3 entregas → [[escopo-3-entregas]]

---

## Entrega 1 — Site no ar ($200, Mês 1, modelo V2)

> Google Business migrado para Entrega 2 no V2.

### Pré-requisitos (ações do cliente)
- [ ] Receber tagline escolhida
- [ ] Receber telefone/WhatsApp confirmado
- [ ] Receber escolha de domínio
- [ ] Receber logo em alta resolução
- [ ] Receber email de contato confirmado

### Desenvolvimento — concluído (2026-05-17)
- [x] Repo separado `mjmasonry-site` criado no GitHub público
- [x] Workflow GitHub Actions de deploy pra Pages
- [x] Integrar Formspree no formulário (via env `PUBLIC_FORMSPREE_FORM_ID`)
- [x] Adicionar botão SMS (`sms:+18572517967`)
- [x] Adicionar botão WhatsApp (`wa.me/18572517967`)
- [x] Centralizar dados de contato em `src/data/contact.ts`
- [x] Helper `link()` em `src/lib/url.ts` (BASE_URL aware)
- [x] Build + deploy bem-sucedidos
- [x] Site preview no ar

### Desenvolvimento — pendente (depende do cliente)
- [ ] Ajustar tagline em `src/data/contact.ts` após cliente escolher
- [ ] Trocar logo em `public/img/logo-mj.jpg`
- [ ] Setar secret `PUBLIC_FORMSPREE_FORM_ID` (`gh secret set` no repo)
- [ ] Cliente compra domínio em namecheap.com
- [ ] Configurar custom domain no GH Pages + CNAME + DNS A/AAAA
- [ ] Setar `SITE_URL` + `BASE_PATH=/` como repo vars no GH Actions
- [ ] Testar em mobile (iOS + Android)
- [ ] Testar formulário (envio + recebimento de email)

---

## Entrega 2 — SEO + Google Business ($200, Mês 2)

- [ ] Meta tags por página (title, description)
- [ ] Open Graph tags (para compartilhamento social)
- [ ] JSON-LD LocalBusiness schema
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Alt text em todas as imagens
- [ ] Otimizar imagens (comprimir, WebP se possível)
- [ ] Configurar Google Search Console
- [ ] Submeter sitemap ao Search Console
- [ ] Testar PageSpeed Insights (meta > 90 mobile)
- [ ] Corrigir issues do PageSpeed
- [ ] Cliente cria conta Google para a empresa
- [ ] Configurar Google Business Profile (Maps, horário, serviços)
- [ ] Vincular site ao Google Business

---

## Entrega 3 — Galeria + Testimonials ($200, Mês 3)

### Pré-requisitos (ações do cliente)
- [ ] Receber 2-3 depoimentos de clientes
- [ ] Receber fotos adicionais (opcional)

### Desenvolvimento
- [ ] Implementar lightbox na galeria (modal para fotos ampliadas)
- [ ] Criar seção de testimonials na Home
- [ ] Adicionar depoimentos recebidos
- [ ] Revisão geral do site
- [ ] Ajustes finais de design/conteúdo

---

## Fora do escopo (upsell futuro)

- [ ] Páginas individuais por serviço (SEO avançado)
- [ ] Integração com Instagram (feed ou embed)
- [ ] Blog com conteúdo educativo
- [ ] Google Ads / Instagram Ads
- [ ] Analytics dashboard
- [ ] Manutenção contínua
