---
type: Project
description: "Fazer a M & J Masonry aparecer no Google Search e no Google Maps, conforme escopo da proposta-cliente-v2."
tags: [institucional-company, sprint, planejamento]
created: 2026-07-02
deadline: 2026-07-31
sprint: entrega-2
---

# Sprint Entrega 2 — SEO + Google Business

> **Deadline:** 2026-07-31 (meta técnica: 2026-07-16) | **Pagamento:** $200 recebido (Mês 2 V2, pago 2026-06-17 — data corrigida em [[status-atual]], trabalho técnico deste sprint segue registrado a partir de 2026-07-02) | **Status macro:** [[status-atual]]

---

## Objetivo

Fazer a M & J Masonry **aparecer no Google Search e no Google Maps**, conforme escopo da [[proposta-cliente-v2|proposta V2]].

**Definição de pronto:**
- [x] Meta tags otimizadas em todas as 5 páginas (title, description, Open Graph) ✅ 2026-07-02
- [x] Schema LocalBusiness (JSON-LD) validando no Rich Results Test ✅ 2026-07-13
- [x] Sitemap XML + robots.txt no ar ✅ 2026-07-02
- [x] Alt text em todas as imagens ✅ 2026-07-02
- [x] Imagens otimizadas (WebP + compressão; logos quantizados) ✅ 2026-07-13
- [x] Google Search Console configurado, sitemap submetido ✅ 2026-07-13 — **2026-07-20: TODAS as 5 páginas indexadas** (Gallery e Contact confirmadas via inspeção de URL); sitemap "Processado" com 5 páginas (última leitura 17/07, erro transitório resolvido); **7 cliques orgânicos na primeira semana**; Rich Results re-validado: LocalBusiness limpo, Organization só com avisos não-críticos
- [x] PageSpeed/Lighthouse mobile ≥ 90 (Performance, Accessibility, Best Practices, SEO) ✅ 2026-07-13
- [ ] Google Business Profile no ar e **verificado** (Maps, horário, serviços, fotos)

---

## Caminho crítico

O **Google Business Profile** é o item mais demorado: depende de conta Google do cliente E da verificação do Google (que pode levar de horas a 2 semanas — vídeo ou correspondência). Todo o resto é trabalho técnico sem bloqueio externo.

```
Hoje (2026-07-02)
  ↓
Mandar mensagem pro cliente (conta Google da empresa + tagline)
  ↓                                    ↓ (em paralelo)
Cliente cria/informa conta Google      Trabalho técnico SEO no repo
  ↓                                    (WebP, meta tags, JSON-LD, sitemap,
Criar GBP + preencher perfil            404, alt text, Lighthouse)
  ↓                                    ↓
Google verifica o negócio (1h–14 dias) Search Console + indexação
  ↓                                    ↓
        ENTREGA (≤ 2026-07-31)
```

**Folga real:** se o cliente resolver a conta Google até 2026-07-08, a verificação do GBP cabe folgada no prazo. Trabalho técnico não depende dele — dá pra fechar até 2026-07-16.

---

## Plano dia a dia

### Semana 1 (2026-07-02 a 2026-07-08) — Técnico pesado + destravar cliente

**2026-07-02 (qua) — HOJE**
- [x] Formspree apontando pro cliente + teste end-to-end validado
- [x] Email corrigido no site (`mj_candidos@outlook.com`)
- [ ] **Mandar mensagem pro cliente** com 2 pedidos: conta Google da empresa (email + senha OU convite de acesso) e escolha da tagline (4 opções)

**2026-07-02 (qua) — Imagens** ✅ *(adiantado — feito no dia 1)*
- [x] Fotos da galeria convertidas pra WebP (máx 1200px, q60 — 2.4MB → 1.1MB, −53%) com fallback JPG via componente `Pic.astro`
- [x] Alt text já existia (data files) — mantido; hero com alt descritivo
- [x] Preload do hero WebP + `loading=eager` + `fetchpriority=high`

**2026-07-02 (qua) — Meta tags + estrutura** ✅ *(adiantado)*
- [x] Meta description única por página (5 páginas) via prop do Layout
- [x] Open Graph + Twitter Card + canonical — OG image: patio-paver-fountain (1600x1200)
- [x] Página 404 custom com brand + CTAs
- [x] Titles com keywords locais ("Masonry & Hardscape Contractor in Rockland, MA" etc.)

**2026-07-02 (qua) — Dados estruturados + crawling** ✅ *(adiantado)*
- [x] JSON-LD `HomeAndConstructionBusiness` (service area South Shore, geo Rockland) — no Layout, todas as páginas
- [x] `sitemap.xml` manual (5 páginas, sem dependência nova — não há npm local) + `robots.txt`
- [x] Bônus: removidos ~2.6MB de assets órfãos do template antigo
- [x] Deploy commit `c1d6c3f` verificado em produção (titles, OG, JSON-LD, sitemap 200, robots, 404, WebP servindo). Obs: 1º deploy falhou com erro transiente do GH Pages — re-disparar o workflow resolveu
- [x] Validar JSON-LD no Rich Results Test ✅ (2026-07-13) — LocalBusiness + Organization válidos; warnings opcionais de endereço resolvidos em parte com `postalCode` 02370 (commit `135c30e`); `streetAddress` fica de fora de propósito (service-area business)
- [x] Verificar console errors em produção ✅ (2026-07-13) — 5 páginas, 0 erros, 0 warnings

### Semana 2 (2026-07-09 a 2026-07-16) — Google + performance

**2026-07-09 a 2026-07-10 (qua–qui)**
- [x] Google Search Console ✅ (2026-07-13): propriedade `https://mjmasonryma.com/` verificada via arquivo HTML (`google0d9869d7d4e894d7.html`, commit `05cecb0` — **não remover do repo**), sitemap submetido, indexação solicitada das 5 páginas. Home, About e Services **já estavam indexadas**; Gallery e Contact "detectadas, não indexadas" → solicitação enviada. Obs: status "não foi possível buscar o sitemap" é transitório — o Google já usa o sitemap como fonte de detecção
- [x] Lighthouse audit completo nas 5 páginas (mobile) ✅ (2026-07-13) — **todas ≥ 95 de Performance** após fixes (commit `c048bf0`: fonts self-hosted, CSS inline, logos otimizados). Perf: Home 100, About 95, Services 98, Gallery 99, Contact 100; A11y ≥ 95, BP 100, SEO 100 em todas

**2026-07-11 a 2026-07-13 (sex–dom) — Google Business Profile** *(depende da conta Google do cliente)*
- [x] Criar o perfil ✅ (2026-07-20): nome M & J Masonry, categoria **Pedreiro** (= Masonry contractor, conta em pt-BR), service area business (sem endereço público), 13 cidades (Rockland, Abington, Weymouth, Hingham, Braintree, Quincy, Hanover, Norwell, Marshfield, Scituate, Pembroke, Duxbury, Plymouth), tel (857) 251-7967, site, chat SMS pro mesmo número. Notificações de dicas: não
- [x] Serviços cadastrados ✅ (2026-07-20) — 3 presets (Alvenaria, Reparo e manutenção em alvenaria, Tijolos e blocos) + 7 personalizados em inglês (Stone & Retaining Walls, Walkways, Steps & Stoops, Paver Installation, Patios, Outdoor Fireplaces & Fire Pits, Property Cleanup)
- [x] Descrição do perfil ✅ (2026-07-20) — versão dos 341 chars do [[gbp-perfil]]
- [x] **Endereço de correspondência obtido** ✅ (2026-07-20) — 240 Concord St #3, Rockland, MA 02370 (do recibo Namecheap; fica privado). ⚠️ Teste mostrou que o fluxo NÃO salva o endereço se sair antes de enviar o vídeo — por isso a Mensagem 2 inclui o endereço pro cliente digitar
- [ ] **Verificação por VÍDEO** — único método oferecido pelo Google. ⏸️ Parado na tela de gravação: **o cliente grava** (celular, gravação contínua única) mostrando: (1) arredores — placas de rua/comércios vizinhos, dentro da área de cobertura; (2) nome "M & J Masonry" impresso em cartão de visita, licença ou veículo; (3) equipamentos de trabalho ou veículo com a marca. Retomar: painel do perfil → Fazer verificação → Avançar (endereço já salvo). Enviar Mensagem 2 com instruções
- [ ] Subir fotos dos projetos (originais JPG em `public/img/gallery/`) — upload manual pelo painel (extensão não acessa arquivos locais)
- [ ] Horário de funcionamento (confirmar com cliente; sugestão Seg–Sáb 7:00–17:00)
- [ ] Upsells pulados de propósito: crédito Google Ads US$ 500, Google Workspace

**2026-07-14 a 2026-07-16 (seg–qua)**
- [x] Teste mobile ✅ (2026-07-26, viewport 390×844 emulado a pedido do usuário) — **tudo passou**: sem overflow horizontal nas 5 páginas; menu hambúrguer ok (5 links + CTA); links de contato corretos (`tel:`/`sms:`/`wa.me`/`mailto:` no número e email certos); imagens 100% (lazy-loading funcionando); form → Formspree, campos com fonte 18px (sem auto-zoom iOS) e altura 49–53px (touch ok), honeypot presente; galeria com pills de navegação por categoria. *Teste em aparelho físico continua como nice-to-have*
- [ ] Aplicar tagline escolhida pelo cliente (se respondeu)
- [ ] Review geral + screenshots do antes/depois do PageSpeed pro cliente

### Semana 3–4 (2026-07-17 a 2026-07-31) — Buffer de verificação + entrega

- [ ] Acompanhar verificação do GBP (repetir se o Google pedir vídeo/código)
- [ ] Confirmar site aparecendo no Google (`site:mjmasonryma.com`)
- [ ] **ENTREGA OFICIAL** — apresentar pro cliente: perfil no Maps + resultados de busca + relatório PageSpeed
- [x] Confirmar pagamento Mês 3 (Entrega 3 — Galeria + Depoimentos) ✅ pago 2026-07-29 — falta ainda pedir os 2–3 depoimentos

---

## Conta Google do negócio (criada 2026-07-20)

- **Email de login:** `mj_candidos@outlook.com` *(conta Google criada sobre o email existente do cliente)* — confirmar se ficou esse mesmo ou se saiu um Gmail novo
- **Senha:** definida em 2026-07-20 — ⚠️ **NÃO registrada aqui** (vault sincroniza com OneDrive/GitHub). Guardada no gerenciador de senhas. Repassar ao cliente por canal seguro.
- **Recovery:** telefone do cliente (857) 251-7967
- Próximo passo: cadastrar o GBP em business.google.com logado nessa conta — conteúdo em [[gbp-perfil]]

## Ponto de parada (2026-07-13) — retomar daqui

Investigação em andamento quando pausamos: **Acessibilidade 95 (não 100) em Home/About/Services** por **contraste insuficiente**. Causa identificada: texto dourado `text-gold` (`#C9A84C`) sobre fundo claro `cream` (`#F8F6F0`) — usado nos "eyebrows" das seções (ex: "Who We Are", "What We Do", "Our Values") e nos números de destaque da home (10+, 500+…). Contraste ≈ 2,4:1 (mínimo WCAG AA = 4,5:1). Gallery/Contact têm 100 porque não usam gold sobre claro.

**Fix sugerido (não aplicado):** criar token `--color-gold-dark` (algo como `#8A6E1F`–`#96781f`, que passa de 4,5:1 sobre cream) e trocar `text-gold` → `text-gold-dark` apenas onde o fundo é claro; manter `text-gold` sobre navy (footer/hero), que já passa. Opcional — 95 já cumpre a meta ≥90; é polimento.

Também ficou pendente (opcional): re-rodar o Rich Results Test pra confirmar que o warning de `postalCode` sumiu (o campo já está em produção, verificado via curl) e redigir as Mensagens 2 e 3 abaixo.

## Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|-------|:-:|---|
| Cliente demora pra criar/passar conta Google | Alta | Pedir HOJE. Follow-up em 2026-07-08. Todo o resto do escopo não depende disso |
| Verificação do GBP demora ou exige vídeo | Alta | Iniciar o quanto antes; buffer de 2 semanas no plano. Vídeo: agendar chamada com o cliente no local de trabalho |
| Google recusa GBP (negócio sem endereço físico visível) | Média | Cadastrar como "service area business" (sem endereço público) — modalidade correta pra contractor |
| PageSpeed < 90 por causa das fotos | Média | WebP + lazy loading + preload resolvem; se faltar, reduzir dimensões servidas |
| Cliente não escolhe tagline (de novo) | Alta | Não bloqueia — default continua. Levar as 4 opções na mensagem de hoje e na entrega |
| Limite de 50 envios/mês do Formspree | Baixa | Monitorar no dashboard; upgrade só se o volume de leads justificar |

---

## Tarefas relacionadas no Kanban

- [[../../../Todo/Polish site M & J Masonry — pós-Entrega 1|Polish site M & J Masonry]] — cobre metade do escopo técnico (WebP, meta tags, OG, 404, Lighthouse); executar dentro deste sprint

---

## Comunicação com cliente

> ✉️ **Mensagens 1 e 2 ENVIADAS em 2026-07-20.** Aguardando: data de nascimento, tagline e vídeo de verificação.

**Mensagem 1 — Conta Google + tagline** *(versão final em PT-BR, 2026-07-20 — endereço não é mais pedido, já obtido via recibo Namecheap; conta criada sobre o outlook do cliente)*

> Oi José, tudo bem? Passando pra te contar como está o trabalho deste mês.
>
> Terminei a parte de otimização do site — ele está rápido e bem avaliado pelo Google agora, nota máxima de velocidade na página principal. E comecei a parte mais importante: colocar a M & J Masonry no Google Maps, pra quando alguém procurar "masonry" na região, vocês aparecerem.
>
> Pra isso precisei criar uma conta do Google pra empresa. Usei o seu email mesmo, o mj_candidos@outlook.com, então a conta é sua. A senha te mando em outra mensagem, guarda ela num lugar seguro.
>
> Preciso só de duas coisas suas pra fechar:
>
> 1. Sua data de nascimento — o Google pede pra completar o cadastro da conta.
>
> 2. A frase de destaque do site. Te mandei essas 4 opções um tempo atrás, me diz qual você prefere:
> 1. "Built by Family. Built to Last." (a que está no site hoje)
> 2. "Quality Masonry, One Stone at a Time."
> 3. "Your Vision. Our Craftsmanship."
> 4. "Craftsmanship You Can Trust."
>
> O resto fica tudo comigo. Qualquer coisa me chama.

*Nota: senha da conta deve ser repassada por canal seguro, separada da mensagem. Recovery já configurado: telefone do cliente.*

**Mensagem 2 — Verificação por vídeo** *(v4 em PT-BR, 2026-07-20 — passo a passo completo, autossuficiente, testado no browser)*

> José, deixa eu te atualizar do que já fiz no Google.
>
> O cadastro da M & J Masonry está pronto: coloquei os serviços que vocês fazem, as cidades que atendem (Rockland e região do South Shore), o telefone, o site, e configurei pra quem achar vocês no Google poder mandar mensagem de texto direto pro seu número. Tá tudo montado.
>
> Só falta uma coisa, e essa só você pode fazer: o Google pede um vídeo curto pra confirmar que a empresa existe de verdade. É rapidinho, uns 5 minutos, e você grava do seu próprio celular. Te explico direitinho:
>
> Pra entrar:
> 1. No celular, abre o navegador e digita: business.google.com
> 2. Entra com o email mj_candidos@outlook.com e a senha que te mandei
> 3. Vai aparecer a M & J Masonry com um aviso vermelho. Toca em "Fazer verificação"
> 4. Ele pede seu endereço (fica privado, ninguém vê). Preenche assim:
>    Endereço: 240 Concord St #3
>    Cidade: Rockland / Estado: Massachusetts / CEP: 02370
> 5. Toca em Avançar. A opção de vídeo já vem marcada, é só ir avançando até abrir a câmera
>
> O que filmar (um vídeo só, sem parar a gravação — o ideal é fazer num dia de obra ou perto do caminhão):
> 1. A rua ao redor: placas de rua, casas ou comércios vizinhos
> 2. O nome da empresa impresso em alguma coisa: cartão, orçamento, o seguro, ou o caminhão se tiver o nome
> 3. Suas ferramentas e equipamentos de trabalho
>
> Não precisa falar nada no vídeo, é só mostrar. Se travar em qualquer passo, me liga que a gente faz junto.
>
> Depois que o Google aprovar, o que costuma levar uns dias, a empresa aparece no Maps e nas buscas da região. Aí é só esperar os clientes acharem vocês.

**Mensagem 3 — Entrega oficial** *(rascunho pronto 2026-07-20 — enviar QUANDO a verificação for aprovada, anexando prints do perfil no Maps, da busca e do PageSpeed)*

> José, saiu! A M & J Masonry está oficialmente no Google.
>
> Te mando junto as fotos de como ficou: o perfil no Google Maps, a empresa aparecendo quando alguém busca os serviços na região, e o relatório do Google mostrando o site com nota máxima de velocidade e acessibilidade.
>
> Recapitulando o que foi feito neste mês: o site foi todo otimizado pra aparecer bem no Google, cadastrei a empresa no Google Maps com os serviços, as cidades que vocês atendem, telefone e mensagem de texto direto pro seu número, e agora tudo está no ar e verificado.
>
> Daqui pra frente isso trabalha sozinho: quem procurar "masonry" ou "stone wall" na região do South Shore vai encontrar vocês, com o site e o telefone a um toque de distância.
>
> Uma coisa que vai ajudar muito daqui pra frente: avaliações no Google. Empresas com estrelas aparecem primeiro na busca. Se você tiver 2 ou 3 clientes satisfeitos de obras recentes, pede pra eles deixarem uma avaliação — te mando o link pronto, é só encaminhar pra eles.
>
> No mês que vem, se você quiser seguir, a próxima etapa é melhorar a galeria com mais fotos e colocar os depoimentos no site. Me avisa que eu te passo os detalhes.
