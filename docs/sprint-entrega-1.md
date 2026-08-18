---
type: Project
description: Entregar o Site no ar com domínio próprio conforme escopo da proposta-cliente-v2.
tags: [institucional-company, sprint, planejamento]
created: 2026-05-17
deadline: 2026-05-31
sprint: entrega-1
---

# Sprint Entrega 1 — M & J Masonry Website

> **Deadline:** 2026-05-31 (14 dias) | **Pagamento:** $200 já recebido (Mês 1 V2) | **Status macro:** [[status-atual]]

---

## Objetivo

Entregar o **Site no ar com domínio próprio** conforme escopo da [[proposta-cliente-v2|proposta V2]].

**Definição de pronto:**
- [ ] Site acessível em `https://<dominio-do-cliente>` (HTTPS funcionando)
- [ ] Formulário "Free Estimate" enviando emails pro cliente confirmadamente
- [ ] Botões Call/Text/WhatsApp/Email funcionando em iOS e Android reais
- [ ] Cliente revisou e aprovou o resultado

---

## Caminho crítico

O **domínio** é o item mais demorado e o que bloqueia tudo. Tudo gira em torno dele.

```
Hoje (2026-05-17)
  ↓
Mandar mensagem pro cliente (próximo passo)
  ↓
Cliente compra domínio (2-7 dias na prática)
  ↓
Configurar DNS + CNAME + Pages (1 hora minha)
  ↓
Aguardar SSL Let's Encrypt (até 24h, geralmente <1h)
  ↓
Testar end-to-end + ajustes finais (2 horas)
  ↓
ENTREGA (≤ 2026-05-31)
```

**Folga real:** se cliente comprar domínio nos próximos 5 dias (até 2026-05-22), entregamos confortável. Depois disso, prazo aperta.

---

## Plano dia a dia

### Semana 1 — Pressão no cliente + tarefas técnicas paralelas

**2026-05-17 (sab) — HOJE**
- [x] Base técnica deployada
- [x] Formspree configurado
- [x] Logo aplicada
- [x] Documentar progresso ← *você está aqui*
- [ ] **Mandar mensagem pro cliente** com checklist (domínio + email confirmation + tagline)

**2026-05-18 a 2026-05-19 (dom–seg)**
- [ ] Aguardar resposta do cliente
- [ ] Em paralelo: começar conteúdo de **Entrega 2 (SEO + Google Business)** — não bloqueia Entrega 1 mas adianta o Mês 2
  - Esboçar meta tags por página
  - Pesquisar palavras-chave do mercado de masonry em MA

**2026-05-20 (ter)**
- [ ] Se cliente não respondeu: **follow-up direto** (telefone? mensagem mais incisiva?)
- [ ] Confirmar com cliente que `mj_candidos@hotmail.com` é o email correto pro Formspree (1 clique)

**2026-05-21 a 2026-05-22 (qua–qui)**
- [ ] Cliente compra domínio em namecheap.com (~5 min de tarefa pra ele)
- [ ] Ele te dá acesso/credenciais do painel OU te passa lista do que precisa configurar

**2026-05-23 (sex) — Configurar domínio**
- [ ] Configurar CNAME no GH Pages: `gh api -X PUT repos/edilsonribeiro/mjmasonry-site/pages -f cname=<dominio>`
- [ ] Setar repo vars: `SITE_URL` e `BASE_PATH=/`
- [ ] Configurar DNS no Namecheap:
  - `A @ 185.199.108.153`
  - `A @ 185.199.109.153`
  - `A @ 185.199.110.153`
  - `A @ 185.199.111.153`
  - `AAAA @ 2606:50c0:8000::153` (e os outros 3 IPv6)
  - `CNAME www edilsonribeiro.github.io`
- [ ] Re-disparar workflow pra build com novo BASE_PATH
- [ ] Aguardar SSL Let's Encrypt (geralmente <1h, máx 24h)

### Semana 2 — Testes finais + entrega

**2026-05-24 a 2026-05-26 (sab–seg)**
- [ ] Confirmar HTTPS funcionando no domínio próprio
- [ ] Testar form de novo (com domínio próprio) → enviar lead → confirmar email chegando
- [ ] Testar em iPhone real (Safari) e Android real (Chrome)
- [ ] Ajustes finais baseados nos testes

**2026-05-27 a 2026-05-29 (ter–qui)**
- [ ] Apresentar pro cliente o site no domínio próprio
- [ ] Receber feedback final
- [ ] Aplicar ajustes pedidos pelo cliente (escopo razoável — texto, fotos, ordem de seções)

**2026-05-30 a 2026-05-31 (sex–sab)**
- [ ] **ENTREGA OFICIAL**
- [ ] Confirmar pagamento Mês 2 (Entrega 2 — SEO)
- [ ] Iniciar Entrega 2 (Mês 2)

---

## Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|-------|:-:|---|
| Cliente atrasa pra comprar domínio | Alta | Follow-up direto em 2026-05-20. Se passar de 2026-05-24 sem domínio, negociar deadline ou entregar parcial sem domínio próprio |
| Cliente escolhe email diferente e Formspree precisa re-confirmar | Média | Ele confirma com 1 clique no email — sem bloqueio real |
| Form Formspree spam-filtrado pelo email do cliente | Média | Cliente whitelista `noreply@formspree.io` antes de testar |
| Cliente pede mudanças grandes de design fora do escopo | Baixa | Escopo é claro: site de 5 páginas com design já aprovado. Mudanças = nova cotação |
| GH Pages SSL demora >24h | Baixa | Plan B: usar Cloudflare proxy (gratuito, SSL instantâneo) |
| Cliente não tem cartão de crédito pra comprar domínio | Baixa | Ofereço comprar no meu nome e cobrar depois (mas perde-se "propriedade limpa") |

---

## Tarefas relacionadas no Kanban

- [[../../../Todo/Coletar dados cliente — site M & J Masonry|Coletar dados cliente]] — em andamento, 2 itens restantes (domínio + email confirmation + tagline)

---

## Comunicação com cliente

**Mensagem 1 (hoje 2026-05-17) — Cobrar domínio + tagline + email confirmation:**
> *(rascunho a fazer — em inglês, conciso, com 3 pedidos claros)*

**Mensagem 2 (após cliente comprar domínio):**
> *(rascunho a fazer — pedir acesso ao painel Namecheap)*

**Mensagem 3 (após SSL ativo):**
> *(rascunho a fazer — anunciar site no ar pra cliente revisar)*
