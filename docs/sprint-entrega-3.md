---
type: Project
description: "Galeria com lightbox + seção de depoimentos na home, conforme escopo da proposta-cliente-v2."
tags: [institucional-company, sprint, planejamento]
created: 2026-08-05
sprint: entrega-3
---

# Sprint Entrega 3 — Galeria + Depoimentos

> **Status:** ✅ **no ar em 2026-08-06** (PR #1, `master` em `afe8ebf`) | **Pagamento:** Mês 3 ($200) **pago em 2026-07-29** — cobrado antes do previsto, ver nota abaixo | **Antecipada:** feita em 05/08 com a Entrega 2 ainda aberta do lado do cliente

---

## Contexto — por que começou antes da hora

A Entrega 2 está tecnicamente pronta desde 20/07 e travada num único item que depende só do cliente: gravar o vídeo de verificação do Google Business Profile. Duas semanas sem resposta. Em vez de ficar parado, o trabalho técnico da Entrega 3 foi adiantado — ele não depende da verificação do GBP.

**Cuidado comercial:** a Entrega 3 foi *construída*, mas ainda não *entregue formalmente* (sem Mensagem 3/anúncio ao cliente). A regra original era não cobrar o Mês 3 antes de fechar a Entrega 2, pra manter a régua de "1 entrega por mês pago" — mas o Mês 3 **acabou sendo pago em 2026-07-29** mesmo com a Entrega 2 ainda travada. Ver [[status-atual]] para o cronograma real de pagamentos.

---

## Objetivo

Aumentar a confiança do visitante e converter mais leads, conforme escopo da [[proposta-cliente-v2|proposta V2]].

**Definição de pronto:**
- [x] Galeria de fotos com lightbox (visualização em tela cheia) ✅ 2026-08-05
- [x] Seção de depoimentos/reviews na página inicial ✅ 2026-08-05 — componente pronto, **oculto até ter depoimento real**
- [ ] Depoimentos reais publicados (**bloqueado no cliente**)
- [ ] Revisão geral e ajustes finais em todo o site

---

## ✅ Concluído em 2026-08-05 (commit `881781c`, branch `worktree-entrega-3`)

### Lightbox

- Componente `src/components/Lightbox.astro` sobre o `<dialog>` nativo — focus trap, Esc, restauração de foco e top layer vêm do browser, **zero dependência de JS**
- 1,7 KB inline no HTML, **nenhuma requisição extra**
- Teclado (setas + Esc), swipe no touch, botões prev/next, contador "3 / 8", legenda, preload dos vizinhos
- WebP com fallback JPG reaproveitando o `Pic.astro`
- Ligado na página Gallery (8 fotos) e no preview da Home (4 fotos)
- Os cards viraram `<button>` — a legenda em overlay agora aparece também no **foco por teclado**, não só no hover
- Helper novo `src/lib/img.ts` (`webpFor` + `lightboxAttrs`), com o `Pic.astro` passando a usar o mesmo `webpFor`

### Depoimentos

- `src/components/Testimonials.astro` + `src/data/testimonials.ts`
- Fica na Home entre o preview da galeria e o "Who We Are" — faixa navy, cards com aspas, estrelas, nome, serviço e cidade
- **A seção não renderiza enquanto a lista estiver vazia.** Quando o cliente mandar os depoimentos, é só preencher o `testimonials.ts` — nenhuma mudança de markup
- **Sem JSON-LD de `Review`/`AggregateRating` de propósito:** review que a própria empresa publica sobre si é "self-serving" pro Google e não é elegível a estrela em rich result — marcar isso só arrisca ação manual. Se um dia vier review de plataforma terceira, aí sim

### Validação

- Suíte headless em Chrome (puppeteer-core): **29 checagens passando** — abre/fecha, navegação, wrap, contador, legenda, trava de scroll, foco restaurado, clique fora fecha, clique na foto não fecha, ativação por teclado, ausência de markup órfão nas páginas sem galeria, zero erro de console
- **Bug real pego no teste:** a `<img>` estourava a viewport (900×1200 num palco de 777px) porque `max-h-full` dentro do `<picture>` virava percentual circular. Resolvido com `display:contents` no `<picture>`
- **A11y:** a div das estrelas quebrou `aria-prohibited-attr` (Lighthouse 95). Corrigido com `role="img"` → volta a 100
- **A/B de performance** contra o build anterior, mesmo servidor, 3 rodadas por página: **Home 99/99/99 antes e depois; Services 88 nos dois**. Zero regressão. A11y / Best Practices / SEO **100 nas 5 páginas**

---

## 🔜 Pendente

### Bloqueado no cliente

1. **2–3 depoimentos reais** (nome + texto) — é o que falta pra seção aparecer. Alternativa: quando o GBP for verificado, copiar reviews do Google
2. **Tagline** — arrastando desde a Entrega 1; roda com o default "Built by Family. Built to Last."
3. **Fotos adicionais** (opcional) — enriquece a galeria

### Do nosso lado

4. **Revisão geral final** do site, último item do escopo da Entrega 3

### ✅ Fechados

- **Merge + deploy** ✅ 2026-08-06 — PR #1, `master` em `afe8ebf`. Validado em produção: 29/29 checagens no `mjmasonryma.com` e Lighthouse mobile 100/100/100/100 em Home, About, Gallery e Contact (Services 98 em perf, variação de rodada)
- **Teste mobile em aparelho real** ✅ 2026-08-05 — funcionou; fecha item que arrastava desde a Entrega 1

---

## Links

- [[status-atual]] — status macro do projeto
- [[proposta-cliente-v2]] — escopo contratado
- [[sprint-entrega-2]] — sprint anterior (aberta, travada no GBP)
- [[demandas-cliente]] — pendências do cliente
