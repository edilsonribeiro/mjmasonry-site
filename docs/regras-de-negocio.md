---
type: Project
description: Site institucional e geração de leads para empresa de serviços de alvenaria/hardscape.
tags: [institucional-company, regras-de-negocio, leads, portfolio]
---

# Regras de Negócio — institucional-company

Site institucional e geração de leads para empresa de serviços de alvenaria/hardscape.

---

## Contexto do Negócio

- Empresa local de serviços de **hardscape e alvenaria** (patios, muros, driveways, etc.)
- Área de atendimento definida por raio geográfico (ex: 30 milhas)
- Empresa licenciada e segurada — deve ser destacado no site
- Estimativas gratuitas para clientes

---

## Entidades Principais

### Lead
- Campos obrigatórios: **nome**, **telefone**, **email**
- Campos opcionais: tipo de serviço, descrição do trabalho, localização
- Todo lead deve gerar notificação imediata para o dono da empresa (email, SMS ou WhatsApp — a definir)
- Leads devem ser armazenados no banco e exportáveis (CSV)
- SLA esperado de resposta: preferencial 1–2 dias, ideal < 24h para maximizar conversão

### Projeto (Portfolio)
- Um projeto possui: fotos, categoria de serviço, descrição
- Suporte a fotos "antes e depois"
- Projetos são associados a uma ou mais categorias de serviço
- Gerenciamento pelo dono via CMS (V2)

### Serviço
- Catálogo fixo de serviços oferecidos (ver lista abaixo)
- Cada serviço tem página própria para SEO
- Serviços são usados como filtro no portfolio e no formulário de lead

---

## Catálogo de Serviços

- Patio (pavers, bluestone, granite)
- Muros de pedra (natural, veneer, contenção, fieldstone)
- Driveways (pavers)
- Walkways
- Pool decks
- Firepits
- Outdoor kitchens
- Lareiras (fireplaces)
- Stone veneer
- Degraus de granito (granite steps)
- Colunas de pedra
- Terraplanagem / preparação de terreno

---

## Fluxo de Lead

### V0 (atual — página estática)
1. Visitante acessa o site
2. Clica no CTA e é **redirecionado diretamente para o contato** do dono (WhatsApp ou telefone)
3. Contato acontece fora do sistema — sem formulário, sem banco de dados

### V1 (próxima fase)
1. Visitante acessa o site e clica em CTA ("Request a Free Estimate")
2. Preenche formulário com nome, telefone, email, tipo de serviço e descrição opcional
3. Sistema armazena o lead no banco de dados
4. Notificação enviada ao dono da empresa (email obrigatório; SMS/WhatsApp opcionais)
5. Dono entra em contato com o cliente em até 1–2 dias

---

## Validações de Negócio

### V0
- Nenhuma validação de formulário — o usuário é redirecionado para contato direto
- CTA deve deixar claro o canal de contato (ex: botão "Fale pelo WhatsApp")

### V1 em diante
- Formulário de lead **não deve ser enviado sem nome, telefone e email**
- Campo de telefone deve aceitar formato americano (projeto é para mercado US)
- Tipo de serviço é recomendado mas não obrigatório
- Localização é opcional — serve para triagem de área de atendimento
- Não há validação automática de área de atendimento (é feita manualmente pelo dono)

---

## Páginas e Propósito

| Página | Objetivo |
|--------|----------|
| Home | Apresentar a empresa, gerar interesse e direcionar para CTA |
| Serviços | SEO por serviço, detalhar o que é oferecido |
| Portfolio/Gallery | Mostrar trabalhos realizados, filtrar por categoria |
| Sobre | Credenciais, experiência, licença, equipe |
| Contato | Mapa, telefone, horário de funcionamento |
| Request Estimate | Formulário principal de geração de lead |

---

## Roadmap de Funcionalidades

### V0 (MVP imediato — em andamento)
- **Página estática única** apresentando a empresa
- CTAs redirecionam o usuário diretamente para contato (WhatsApp / telefone)
- Sem backend, sem formulário, sem banco de dados
- Objetivo: ir ao ar rápido e validar o interesse

### V1
- Site completo com múltiplas páginas
- Formulário de lead funcional com notificação por email
- Portfolio com filtro por categoria
- SEO básico (meta tags, schema, sitemap)

### V2
- Feed do Instagram integrado
- Seção de depoimentos (testimonials)
- CMS para o dono gerenciar portfolio e conteúdo
- Dashboard de leads

### V3
- Blog / artigos (SEO avançado)
- Automação de SEO
- Analytics dashboard
- Potencial multitenancy (replicar para outros clientes de nicho similar)

---

## Personas

**Dono da empresa**
- Quer receber leads qualificados com frequência
- Não tem tempo para gerenciar tecnologia
- Precisa de CMS simples para atualizar fotos e conteúdo

**Cliente residencial**
- Proprietário de imóvel buscando melhorar área externa
- Pesquisa no Google, compara portfólios e solicita orçamento
- Valoriza experiência visual (fotos de projetos anteriores)
