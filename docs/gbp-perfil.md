---
type: Project
description: "1. Stone & Retaining Walls"
created: 2026-07-13
tags: [institucional-company, gbp, seo]
status: active
---

# Google Business Profile — conteúdo pronto pra cadastro

> Preparado em 2026-07-13 pra quando a conta Google do negócio existir. Cadastrar em https://business.google.com como **service area business** (SEM endereço público). Status geral: [[status-atual]] | Sprint: [[sprint-entrega-2]]

## Dados do perfil

| Campo | Valor |
|---|---|
| Nome do negócio | M & J Masonry |
| Categoria principal | Masonry contractor |
| Categorias secundárias | Landscaper · Paving contractor (se disponíveis) |
| Telefone | (857) 251-7967 |
| Site | https://mjmasonryma.com |
| Área de atendimento | Rockland, MA + South Shore (Abington, Weymouth, Hingham, Braintree, Quincy, Hanover, Norwell, Marshfield…) — discovery diz "todo Massachusetts", mas GBP limita a ~20 áreas; priorizar South Shore |
| Endereço | **Não publicar** (service area business — pular endereço no cadastro) |
| Endereço de correspondência (PRIVADO, só p/ verificação) | 240 Concord St. #3, Rockland, MA 02370 — fonte: recibo Namecheap do domínio (order 204761672) |
| Horário | ⚠️ confirmar com cliente — sugestão típica de contractor: Seg–Sáb 7:00–17:00 |

## Descrição (750 chars máx — versão pronta)

> M & J Masonry is a family-owned masonry and hardscape company serving Rockland, MA and the South Shore. We specialize in stone walls, retaining walls, walkways, patios, steps, paver installation, outdoor fireplaces and fire pits, and general masonry repairs. Built by family. Built to last. Free estimates — call, text, or visit our website.

## Serviços (os 8 do site)

1. Stone & Retaining Walls
2. Walkways
3. Steps & Stoops
4. Masonry Services (repairs)
5. Paver Installation
6. Patios
7. Outdoor Fireplaces & Fire Pits
8. Property Cleanup

## Fotos (usar as da galeria do site — originais JPG em `public/img/gallery/`)

- Logo: `logo-mj.png`
- Capa sugerida: `patio-paver-fountain.jpg` (mesma do OG image)
- Demais: as 8 fotos reais do cliente, já categorizadas na galeria

## Passos no cadastro (quando a conta existir)

1. business.google.com → Add business → nome + categoria
2. "Do you want to add a location customers can visit?" → **No** (isso torna service area business)
3. Área de atendimento → cidades da lista acima
4. Contato → telefone + site
5. ~~Verificação → provavelmente **vídeo**~~ ~~feito por SMS em 2026-08-25~~ — **SMS não foi aprovado**
   (checado 2026-09-12, 23 dias depois: painel resetou, pedindo verificação do zero, sem explicação).
   Indo pro **vídeo** agora (única opção que apareceu na 2ª tentativa). Requisitos exatos, tudo numa
   gravação contínua: (1) área ao redor — placas da rua/empresas vizinhas batendo com a área de
   cobertura cadastrada; (2) nome da empresa impresso em cartão/licença/veículo, exatamente
   "M & J Masonry"; (3) equipamentos comerciais, sistema de agendamento ou veículo com a marca.
6. Pós-verificação: descrição, horário, serviços, fotos, ativar mensagens e Q&A — **falta**: 8 fotos da galeria + logo + horário (1 vídeo do adesivo da caminhonete já subiu, status "Pendente")
7. Adicionar `mjmasonryma@gmail.com` como proprietário e manter o dev como gerente (Users → invite)

## Fontes

- [[respostas-discovery]] — área de atendimento, responsável por leads
- `src/data/services.ts` no repo do site — lista de serviços
- [[analise-instagram]] — identidade da marca (M & J Candidos LLC)
