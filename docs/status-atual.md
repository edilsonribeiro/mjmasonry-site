---
type: Project
description: "Fase: Entrega 3 no ar desde 06/08 (lightbox + depoimentos), revisão geral final concluída em 17/08 | Entrega 2 ainda travada na verificação do GBP, que depende do cliente | $800 recebidos até 22/08 (meses 1-4)"
tags: [institucional-company, status]
updated: 2026-08-22
---

# Status — institucional-company

---

## Estado Atual

**Fase:** Entrega 3 **no ar desde 06/08** — lightbox na galeria e seção de depoimentos (oculta até ter conteúdo). Entrega 2 segue **travada desde 20/07** no único item que depende do cliente (vídeo de verificação do GBP); prazo de 31/07 estourado por inação dele

**Site em produção:** https://mjmasonryma.com (HTTPS via Let's Encrypt, GH Pages) *(sem remote — só na máquina Windows)*
**Repositório:** https://github.com/edilsonribeiro/mjmasonry-site
**Plano de sprint:** [[sprint-entrega-1]]

---

## Modelo V2 ($1.000 em 6 meses)

| # | Mês | Entrega / Serviço | Valor | Status |
|:-:|-----|-------------------|:-----:|:------:|
| 1 | Mês 1 | Entrega 1 — Site no ar | $200 | ✅ Concluída — pago **2026-05-13**, site no ar em mjmasonryma.com (2026-06-08) |
| 2 | Mês 2 | Entrega 2 — SEO + Google Business | $200 | ⚠️ Travada no cliente — **pago (confirmado 2026-06-17)**, técnico 100% pronto, falta só a verificação do GBP |
| 3 | Mês 3 | Entrega 3 — Galeria + Testimonials | $200 | ✅ **Pago em 2026-07-29** — no ar desde 06/08, ainda não anunciada oficialmente ao cliente; falta só os depoimentos do cliente — ver [[sprint-entrega-3]]. ⚠️ Cobrado antes do previsto (regra original era não cobrar antes de fechar a Entrega 2 — ver nota abaixo) |
| 4 | Mês 4 | Manutenção — mês 1 | $200 (proposta previa $134) | ✅ Pago em **2026-08-22** |
| 5 | Mês 5 | Manutenção — mês 2 | **$100 (recalculado)** | 🔒 Pendente |
| 6 | Mês 6 | Manutenção — mês 3 | **$100 (recalculado)** | 🔒 Pendente |

> ⚠️ **Nota sobre valores:** recebido até agora = **$800** (4× $200 em 2026-05-13, 2026-06-17, 2026-07-29, 2026-08-22). A proposta original ([[proposta-cliente-v2]]) previa $200/$200/$200 nos meses 1–3 e depois $134/$133/$133 na manutenção (total $1.000). O 4º pagamento veio em $200 fixo, não $134 — **$66 a mais que o previsto**. Recalculando pra manter o contrato fechado em $1.000: restam $1.000 − $800 = **$200** pros meses 5 e 6, divididos igualmente em **$100 cada** (em vez de $133/$133). Se o total de $1.000 não for pra ficar fixo — por exemplo, se o cliente pagou $200 no mês 4 como valor novo combinado, não por engano — os meses 5–6 voltam a ser $133 cada e o contrato passa a somar $1.066. **Confirmar qual dos dois cenários é o real antes de cobrar os meses 5 e 6.**

---

## Entrega 2 — SEO + Google Business (em execução)

**Início:** Mês 2 pago (confirmado 2026-06-17). Escopo conforme [[proposta-cliente-v2]].
**Plano de sprint:** [[sprint-entrega-2]] — deadline 2026-07-31, caminho crítico = Google Business Profile (conta Google do cliente + verificação)

### Itens carregados da Entrega 1 (verificar/fechar)

- [x] **Confirmar email destinatário do Formspree** ✅ (2026-07-02) — cliente verificou `mj_candidos@outlook.com` e o Target do action Email no Workflow do form foi trocado. **Leads agora chegam direto no email do cliente.** ⚠️ Email correto é **outlook.com** — o `hotmail.com` anotado em maio estava errado
- [x] **Corrigir email no código do site** ✅ (2026-07-02) — `src/data/contact.ts` corrigido pra `mj_candidos@outlook.com` (commit `de78cb5`), deploy verificado em produção
- [x] **Teste end-to-end** ✅ **VALIDADO** (2026-07-02) — lead de teste enviado via form em produção (CAPTCHA ok, Inbox do Formspree, notificação disparada) e **cliente confirmou recebimento no Outlook**. Circuito de leads 100% funcional: site → Formspree → `mj_candidos@outlook.com`
- Nota: única submission em spam (11/06) era solicitação de SEO — spam real, nenhum lead perdido. Formshield funcionando
- [x] **Tagline** ✅ (confirmada 2026-08-17) — cliente escolheu "Built by Family. Built to Last." (opção 1), já era o default, nada mudou no código
- [x] **Teste mobile real** ✅ (2026-08-05) — iPhone + Android físicos, funcionou

### ✅ Concluído em 2026-07-02 (dia 1 do sprint — commit `c1d6c3f`, verificado em produção)

- WebP com fallback JPG via componente `Pic.astro` (galeria 2.4MB → 1.1MB)
- Hero com preload + eager + fetchpriority (LCP)
- Title + meta description únicos por página (keywords locais)
- Open Graph + Twitter Card + canonical
- JSON-LD `HomeAndConstructionBusiness` em todas as páginas
- `sitemap.xml` (manual, 5 páginas) + `robots.txt`
- Página 404 custom
- ~2.6MB de assets órfãos removidos

### ✅ Concluído em 2026-07-13 (commit `c048bf0`, verificado em produção)

- **Console errors** — 5 páginas em produção 100% limpas (0 erros, 0 warnings)
- **JSON-LD validado no Rich Results Test** — LocalBusiness ✅ + Organization ✅; únicos avisos são `postalCode`/`streetAddress` ausentes (opcionais, intencionais — service-area business)
- **PageSpeed mobile ≥ 90 nas 5 páginas** ✅ — pós-fixes (Perf/A11y/BP/SEO): Home **100**/95/100/100 · About **95**/95/100/100 · Services **98**/95/100/100 · Gallery **99**/100/100/100 · Contact **100**/100/100/100
- **Google Search Console configurado** ✅ — propriedade verificada (arquivo `google0d9869d7d4e894d7.html` no repo, **não remover**), sitemap submetido, indexação solicitada das 5 páginas (Home/About/Services já indexadas; Gallery/Contact na fila)
- **Conteúdo do GBP preparado** — [[gbp-perfil]] com categoria, descrição, serviços, área e passo a passo do cadastro
- **Fixes de performance** (PSI mobile home estava 89/95/100/100, ofensor = render-blocking):
  - Fontes self-hosted (Inter variável + Poppins woff2, subset latin) em `public/fonts/` — elimina o CSS bloqueante do fonts.googleapis.com (~750ms)
  - `inlineStylesheets: 'always'` no Astro — CSS inline, zero stylesheet externo
  - Logos quantizados: ícone header 91KB → 6KB (redimensionado pra 2x do display), logo full 119KB → 29KB (RMS diff < 5, imperceptível)

### ✅ Concluído em 2026-07-20

- **Conta Google do negócio criada** (login `mj_candidos@outlook.com`; senha no gerenciador — repassar por canal seguro; recovery = telefone do cliente)
- **A11y 100 nas 5 páginas** — fix de contraste (token `gold-dark` #856A1D nos eyebrows sobre fundo claro + navy sólido no CTA dourado), commits `750c6b8`/`c58bd9f`. PSI mobile: Home 100/100/100/100 · About 96/100/100/100 · Services 100/100/100/100
- **GBP criado e preenchido** ✅ — M & J Masonry, categoria Pedreiro (Masonry contractor), service area 13 cidades South Shore, tel + site + chat SMS, **10 serviços** (3 presets + 7 custom em inglês) e **descrição** cadastrados. **Verificação adiada** ("Confirmar depois"): pede endereço de correspondência do cliente (privado). Perfil "não visível publicamente" até verificar. Faltam fotos (upload manual) e horário

### ✅ Fechamento de 2026-07-20 (fim do dia)

- **Mensagens 1 e 2 ENVIADAS** ao cliente (PT-BR, tom natural, passo a passo autossuficiente testado no browser). Senha da conta por canal seguro
- **Endereço do cliente obtido** (recibo Namecheap): 240 Concord St #3, Rockland, MA 02370 — incluído na Mensagem 2 (o fluxo de verificação não persiste endereço se abandonado)
- **SEO 100% fechado**: 5/5 páginas indexadas (Gallery/Contact confirmadas), sitemap "Processado" (5 págs), Rich Results limpo, **7 cliques orgânicos na 1ª semana**
- **Formspree checado**: nenhum lead real ainda (2 testes + 3 spams filtrados); notificações vão pro outlook do cliente
- **Mensagem 3 (entrega oficial) redigida** — enviar quando a verificação aprovar, com prints

### 🔜 Próximos passos (aguardando o cliente)

1. Cliente **grava o vídeo de verificação** do GBP (passo a passo já enviado na Mensagem 2, e de novo no follow-up de 2026-08-17) — data de nascimento e tagline já foram recebidos
2. Verificação aprovada → **fotos** (upload manual das 8 da galeria + logo) + **horário** no perfil
3. Confirmar perfil no ar (`site:` e buscas "masonry Rockland MA") → **enviar Mensagem 3 com prints** → ENTREGA

**Detalhes de infra pra lembrar:** a máquina Mint **tem** Node v24 + npm 11 (a nota antiga de que não tinha estava errada) — dá pra rodar `npm run build`, `astro preview` e Lighthouse local. Sitemap é manual: se criar página nova, atualizar `public/sitemap.xml` na mão. Se o deploy do Pages falhar com "deployment_failed" transiente, re-disparar com `gh workflow run "Deploy to GitHub Pages"`.

---

## Entrega 3 — Galeria + Depoimentos (antecipada, construída em 2026-08-05)

Plano detalhado: [[sprint-entrega-3]]. Feita fora de ordem porque a Entrega 2 está parada há duas semanas esperando o cliente, e nada da Entrega 3 depende do GBP.

⚠️ **Construída, não entregue formalmente ao cliente** (sem Mensagem 3/anúncio). A regra original era não cobrar o Mês 3 antes de fechar a Entrega 2, mas o Mês 3 **foi cobrado e pago em 2026-07-29** mesmo com a Entrega 2 ainda travada no GBP — regra não seguida na prática, registrado aqui pra não perder o histórico.

✅ **NO AR desde 2026-08-06** — PR #1 mergeada, `master` em `afe8ebf`, deploy verde. Validado direto em `mjmasonryma.com`: **29/29 checagens** e **Lighthouse mobile 100/100/100/100** em Home, About, Gallery e Contact (Services 98 em performance — variação de rodada, o A/B pré-deploy não acusou regressão).

**Entregue** (commit `881781c`):
- **Lightbox** na galeria (8 fotos) e no preview da Home (4) — `<dialog>` nativo, sem dependência de JS, 1,7 KB inline e nenhuma requisição extra. Teclado, swipe, prev/next, contador, legenda, preload dos vizinhos, WebP com fallback
- **Seção de depoimentos** na Home — pronta e **oculta enquanto não houver depoimento real**; basta preencher `src/data/testimonials.ts` depois. Sem JSON-LD de review de propósito (review auto-publicada não é elegível a estrela no Google)
- **Validação:** 29 checagens headless passando, A/B de performance sem regressão (Home 99 antes e depois), A11y/BP/SEO 100 nas 5 páginas

**Teste em aparelho físico:** ✅ feito em 2026-08-05, funcionou — fecha um item que arrastava desde a Entrega 1.

**Falta:** depoimentos reais do cliente (a seção está no ar, invisível, esperando o conteúdo).

### ✅ Concluído em 2026-08-17

- **Revisão geral final** — checkout local sincronizado com `origin/master` (estava 2 commits atrás, faltava todo o código do Lightbox/Testimonials); build de produção limpo, conteúdo das 5 páginas revisado (sem typo/placeholder), meta/JSON-LD conferidos
- **`sitemap.xml` corrigido** — `lastmod` de Home e Gallery estava parado em 02/07; atualizado pra 06/08 (data real do deploy da Entrega 3), commit `96bbfcc`
- **Tagline confirmada com o cliente** — "Built by Family. Built to Last." (opção 1), já é a que está no código, nada a mudar
- **Data de nascimento também já recebida** do cliente (uso interno, conta Google)
- **Mais um contato feito com o cliente** — follow-up cobrando o vídeo de verificação do GBP (sem resposta desde a Mensagem 2, 2026-07-20) e pedindo os 2-3 depoimentos da Entrega 3
- Observação levantada, não corrigida (decisão do dono do projeto): a Home mostra selo "5★ Customer Rated" sem nenhum review público existir ainda — vale reconsiderar quando os depoimentos reais entrarem

---

## Entrega 1 — concluída ✅ (site no ar em 2026-06-08)

### ✅ Concluído

**Infraestrutura:**
- [x] Repo público `mjmasonry-site` no GitHub
- [x] Workflow GH Actions de deploy automático (push em master → deploy ~30s)
- [x] **Domínio próprio `mjmasonryma.com` no ar com HTTPS** — cliente comprou o domínio, CNAME + DNS configurados, `SITE_URL`/`BASE_PATH=/` setados como repo vars, workflow ajustado (commit `65e1e83`, 2026-06-08)
- [x] Fotos reais do cliente na galeria (8 fotos) + galeria por categoria + fotos nos service cards (commit `d5174f1`, 2026-05-25)
- [x] Favicon com logo do cliente (commit `c1def83`, 2026-05-25)

**Funcionalidade:**
- [x] 5 páginas Astro (Home, About, Services, Gallery, Contact)
- [x] Formulário Free Estimate integrado com Formspree (Form ID `xnjrqadr`, secret no GH Actions)
- [x] Botões Call + Text (SMS) + WhatsApp + Email + Location em design uniforme
- [x] 8 ícones SVG custom themed (substituindo emojis)
- [x] Menu mobile hambúrguer funcional
- [x] Header responsivo (tagline e CTA escondidos em viewport médio)
- [x] Logo do cliente aplicada (full no footer, icon-only no header)
- [x] Imagem placeholder do "Who We Are" trocada pelo logo (Home + About)

**Código:**
- [x] Dados de contato centralizados em `src/data/contact.ts`
- [x] Componente `ServiceIcon.astro` com 8 SVGs
- [x] Data centralizada em `src/data/services.ts`
- [x] Helper `link()` em `src/lib/url.ts` (sub-path GH Pages + custom domain sem mudança de código)

**Dados do cliente confirmados:**
- [x] Telefone `(857) 251-7967` confirmado
- [x] WhatsApp ativo nesse número
- [x] Email do cliente — ⚠️ o correto é `mj_candidos@outlook.com` (confirmado 2026-07-02); a "correção" pra `hotmail.com` de maio estava errada
- [x] Logo PNG (otimizado de 9.6MB → 119KB full + 91KB icon)

**Testes:**
- [x] Build sem erros
- [x] Layout desktop testado
- [x] Layout mobile testado (DevTools device mode)
- [x] Mobile menu toggle funcionando
- [x] Form action apontando pro Formspree correto
- [x] HTML servido com classes responsivas corretas

### Itens que ficaram em aberto (migrados pra seção Entrega 2 acima)

Confirmação do email no Formspree, teste end-to-end de lead, tagline definitiva e teste em dispositivos reais.

---

## Links

- [[sprint-entrega-3]] — Plano da Entrega 3 (Galeria + Depoimentos) — **construída, aguardando fechar a Entrega 2**
- [[sprint-entrega-2]] — Plano da Entrega 2 (SEO + Google Business) — **vigente, travada no cliente**
- [[sprint-entrega-1]] — Plano da Entrega 1 (concluída)
- [[orcamento-v2]] — Orçamento V2 (vigente)
- [[proposta-cliente-v2]] — Proposta enviada ao cliente
- [[demandas-dev]] — Tarefas técnicas detalhadas
- [[demandas-cliente]] — Pendências do cliente
- [[../../../Todo/Coletar dados cliente — site M & J Masonry|Tarefa: Coletar dados cliente]]
- Repositórios: `~/Projetos/mjmasonry-site` (produção) | `mjmasonry` (protótipos antigos) *(não clonado nesta máquina — [GitHub](https://github.com/edilsonribeiro/mjmasonry-site))*
