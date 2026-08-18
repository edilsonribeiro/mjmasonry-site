---
type: Project
description: "Criar um site institucional tipo \"cartão de visita online\" para a M & J Masonry que:"
tags: [prd, requisitos, produto]
status: atualizado
updated: 2026-03-16
---

# PRD — M & J Masonry — Website Institucional

> Referência de discovery: [[respostas-discovery]]
> Análise de concorrência: [[analise-concorrencia]]
> Pesquisa de copyright: [[pesquisa-copyright-fotos]]

## 1. Objetivo do Produto

Criar um **site institucional tipo "cartão de visita online"** para a M & J Masonry que:

- Transmita **credibilidade e profissionalismo**
- Apresente os serviços e portfólio
- Capture contatos de clientes interessados (Free Estimate)
- Funcione como ponto de entrada para futuras estratégias de marketing digital

> O site **não** faz orçamento automático. O fluxo é: cliente solicita Free Estimate → deixa contato → empresa retorna por SMS.

## 2. Sobre o Cliente

- **Empresa:** M & J Masonry
- **Local:** Rockland, MA — atende todo Massachusetts
- **Equipe:** 2 sócios (pai e filho), registrada em 2024
- **Status:** Insured (CI) — empresa legalmente registrada, não licenciada
- **Presença digital atual:** Instagram + Thumbtack. Sem site, sem Google Business Profile, sem ads
- **Responsável por leads:** José Renato (retorno em <24h por SMS)
- **Atualização do site:** feita pelo desenvolvedor, semestralmente com fotos do Instagram

## 3. Personas

**Proprietário (José Renato / Márcio)**
- Quer que clientes encontrem a empresa e confiem nela
- Quer receber contatos de potenciais clientes por SMS
- Não vai gerenciar o site diretamente

**Cliente residencial em Massachusetts**
- Procura serviço de masonry/hardscape na região
- Quer ver fotos de trabalhos realizados
- Quer um jeito fácil de pedir orçamento gratuito

## 4. Serviços

> ⚠️ Verificar nomes em inglês nativo (termos do mercado americano)

| # | Nome original | Nome recomendado (EN-US) | Status |
|---|---------------|--------------------------|--------|
| 1 | Stone Wall | **Stone & Retaining Walls** | Aprovado |
| 2 | Walkway | **Walkways** | Aprovado |
| 3 | Stairway | **Steps & Stoops** | Aprovado |
| 4 | Masonry | **Masonry Services** | Aprovado |
| 5 | Cobblestone | **Paver Installation** | Aprovado |
| 6 | Patios | **Patios** | Aprovado |
| 7 | Fireplace | **Outdoor Fireplaces & Fire Pits** | Aprovado |
| 8 | Full Clean Up | **Property Cleanup** | Aprovado |
| 9 | *(sugestão)* | **Driveways** | ⏳ Verificar com cliente |

> Nomes verificados contra concorrentes de MA em 2026-03-16. Detalhes em [[analise-nomes-servicos]]

## 5. Estrutura do Site (Sitemap)

```
Home
About
Services (lista todos os serviços)
Gallery (fotos do Instagram / próprias)
Contact / Free Estimate
```

> Escopo enxuto — 5 páginas. Sem páginas individuais por serviço no MVP (pouco conteúdo disponível). Expansão para páginas individuais na fase 2, quando tiver mais fotos e copy.

## 6. Funcionalidades — MVP (V1)

### 6.1 Home
- Hero section com foto de destaque + tagline
- Badge "Insured & Registered Business"
- Lista de serviços com ícones ou fotos
- Mini galeria (3-6 fotos dos melhores trabalhos)
- CTA principal: **"Get Your Free Estimate"**
- Telefone clicável no mobile

### 6.2 About
- História da empresa (pai e filho, empresa familiar)
- Valores: qualidade, compromisso, confiança
- Badge: Insured, Registered in MA
- Foto dos sócios (se disponível)

### 6.3 Services
- Lista de todos os serviços com descrição curta e foto
- CTA ao final: "Get Your Free Estimate"
- Copywriting necessário (cliente não tem textos)

### 6.4 Gallery
- Grid de fotos dos trabalhos realizados
- Lightbox para visualização ampliada
- Fonte: fotos próprias (2 JPEG) + fotos do Instagram
- Atualização semestral pelo dev

### 6.5 Contact / Free Estimate
- Formulário simples de captura:
  - Name*
  - Phone*
  - Service (dropdown)
  - Brief description
- Envio gera notificação (email e/ou SMS para José Renato)
- Telefone clicável
- Endereço (Rockland, MA)
- Área de atendimento: "Serving all of Massachusetts"

## 7. Funcionalidades de Conversão

| Elemento | Onde aparece |
|----------|-------------|
| Botão "Get Your Free Estimate" | Home, Services, Gallery, About |
| Telefone clicável | Header (mobile), Contact |
| Badge "Insured & Registered" | Home, About, Footer |
| "Serving all of Massachusetts" | Home, Footer |

## 8. SEO (desde o MVP)

- Meta tags otimizadas por página (title, description)
- Structured data: LocalBusiness schema (JSON-LD)
- Sitemap.xml + robots.txt
- NAP consistency (Name, Address, Phone)
- Alt text em todas as imagens
- Keywords: "masonry contractor Massachusetts", "stone wall [city] MA", "hardscape [city] MA"
- Mobile-first (Google prioriza mobile)

## 9. Lead Management

> Sem banco de dados, sem CRM. A equipe já usa SMS, WhatsApp e email no dia a dia — o site apenas conecta o cliente a esses canais.

**Fluxo:** Cliente preenche formulário → notificação chega por email → José Renato responde por SMS/WhatsApp.

**Formulário (campos):**

| Campo | Tipo | Obrigatório |
|-------|------|:-----------:|
| Name | string | Sim |
| Phone | string | Sim |
| Service | dropdown | Não |
| Brief description | text | Não |

**Integrações diretas no site:**
- Botão **"Call Now"** — link `tel:` (liga direto)
- Botão **"Text Us"** — link `sms:` (abre SMS no celular do visitante)
- Botão **"WhatsApp"** — link `wa.me/` (abre conversa no WhatsApp)
- Botão **"Email"** — link `mailto:`
- **Formulário Free Estimate** — envia notificação por email (Formspree ou similar)

## 10. Requisitos Não Funcionais

- **Performance:** carregamento < 2s, imagens otimizadas (WebP)
- **Responsividade:** mobile-first
- **Segurança:** HTTPS, validação de formulário, proteção anti-spam (honeypot ou reCAPTCHA)
- **Acessibilidade:** contraste adequado, alt text, navegação por teclado

## 11. Arquitetura

> Site estático é a melhor opção — cliente não vai gerenciar, dev atualiza semestralmente.

| Camada | Decisão |
|--------|---------|
| Framework | Hugo (site estático, rápido, SEO-friendly) |
| Hospedagem | GitHub Pages (gratuito) |
| Domínio | A definir (registrar) |
| Formulário | Formspree / Netlify Forms / similar (sem backend) |
| Notificação | Email (via serviço do formulário) |
| Contato direto | Links nativos: `tel:`, `sms:`, `wa.me/`, `mailto:` |
| Imagens | Otimizadas no build (Hugo pipes) |

## 12. Roadmap

### V1 — MVP ("Cartão de visita online")
- Home, About, Services, Gallery, Contact/Free Estimate
- Formulário simples com notificação por email
- SEO básico
- Google Business Profile (configurar junto)
- **Conteúdo:** copywriting dos serviços, fotos do Instagram

### V2 — Expansão
- Páginas individuais por serviço (melhora SEO)
- Integração com Instagram (feed automático ou embed)
- Seção de testimonials/reviews

### V3 — Marketing Digital
- SEO avançado (blog com conteúdo educativo)
- Google Ads (search ads locais)
- Instagram Ads
- Analytics dashboard

## 13. Backlog (User Stories)

**Epic: Presença Online (V1)**
- US01 — Como visitante, quero ver os serviços da empresa para entender o que ela oferece
- US02 — Como visitante, quero ver fotos de projetos para avaliar a qualidade
- US03 — Como visitante, quero pedir um Free Estimate facilmente
- US04 — Como dono, quero receber notificação quando alguém pedir orçamento

**Epic: Confiança (V1)**
- US05 — Como visitante, quero ver que a empresa é segurada e registrada
- US06 — Como visitante, quero saber a história da empresa (About)

**Epic: Expansão (V2)**
- US07 — Como visitante, quero ver detalhes de cada serviço em página própria
- US08 — Como visitante, quero ver depoimentos de outros clientes

**Epic: Marketing (V3)**
- US10 — Como dono, quero aparecer no Google quando alguém buscar masonry em MA
- US11 — Como dono, quero impulsionar a empresa no Instagram e Google

## 14. Ações Imediatas

- [ ] Verificar nomes dos serviços em inglês nativo
- [ ] Criar copywriting para todos os serviços
- [ ] Registrar domínio (sugestões: mjmasonry.com, mjmasonryma.com)
- [ ] Configurar Google Business Profile
- [ ] Levantar fotos do Instagram para uso no site
- [ ] Resolver questão de copyright de fotos ([[pesquisa-copyright-fotos]])
- [ ] Definir tagline/slogan da empresa
- [ ] Desenvolver e publicar V1

## 15. Inspiração da Concorrência

> Detalhes completos em [[analise-concorrencia]]

- **Boston Masonry** — processo transparente em 4 etapas
- **Academy Masonry** — testimonials dedicados + blog ativo
- **JS Hardscapes** — design moderno, CTA convidativo
- **Black Diamond** — certificações e garantias como trust signals
- **Mario & Sons** — empresa familiar como valor (pai e filho, similar à M & J)
