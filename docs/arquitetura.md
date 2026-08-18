---
type: Project
description: Decisões arquiteturais do projeto. Ver também convencoes-web para padrões gerais e hugo-github-pages para detalhes do setup da V0.
tags: [institucional-company, arquitetura, decisões]
---

# Arquitetura — institucional-company

Decisões arquiteturais do projeto. Ver também [[convencoes-web]] para padrões gerais e [[hugo-github-pages]] para detalhes do setup da V0.

---

## Stack por Fase

### V0 (atual)
| Camada | Tecnologia | Status |
|--------|-----------|--------|
| Frontend | Hugo (SSG) ou HTML/CSS puro | **Opção preferida** |
| Backend | — (sem backend) | — |
| Banco de dados | — (sem banco) | — |
| Hospedagem | GitHub Pages | **Opção preferida** |
| Domínio | Custom domain via DNS (CNAME) | A definir |
| Contato | Redirecionamento via link (WhatsApp/tel:) | **Definido** |

### V1 em diante
| Camada | Tecnologia | Status |
|--------|-----------|--------|
| Frontend | Next.js / Angular / Razor Pages | A definir |
| Backend | ASP.NET Core Web API | Definido |
| Banco de dados | PostgreSQL ou SQL Server | A definir |
| Storage de imagens | S3 ou Azure Blob | A definir |

---

## Modelo de Dados (V1 — Rascunho)

### Lead
```
id, name, email, phone, service_type, message, location, created_at
```

### Project (Portfolio)
```
id, title, description, service_category, created_at
```

### ProjectPhoto
```
id, project_id, url, is_before, order
```

### Service
```
id, name, slug, description
```

---

## Decisões em Aberto

### V0
- [ ] Canal de contato principal: WhatsApp, telefone ou email?

### V1+
- [ ] Escolha do framework frontend (Next.js vs Angular vs Razor Pages)
- [ ] Banco de dados (PostgreSQL vs SQL Server)
- [ ] Provedor de storage de imagens
- [ ] Provedor de email transacional (SendGrid, SES, etc.)
- [ ] Hospedagem (Azure, AWS, Vercel + Railway, etc.)
- [ ] CMS headless ou solução própria para V2
