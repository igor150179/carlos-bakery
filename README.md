# Carlo's Bakery Brasil — Website Oficial

Site institucional da única Carlo's Bakery fora dos Estados Unidos — a confeitaria italiana de Buddy Valastro em São Paulo desde 2016.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/carlos-bakery)

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan)

## Visão geral

Website premium com **7 páginas**, **3 idiomas** (PT, EN, IT), design system completo, SEO técnico avançado e foco em conversão para encomendas de bolos personalizados e Buddy's Club.

## Stack

| Tecnologia | Uso |
|------------|-----|
| **Next.js 15** | App Router, SSR/SSG |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS v4** | Design tokens + utilitários |
| **Framer Motion** | Animações de UI |
| **GSAP** | Scroll cinematográfico |
| **next-intl** | i18n (pt, en, it) |
| **React Hook Form + Zod** | Formulários |
| **Leaflet** | Mapa de lojas |
| **Radix UI** | Select acessível |
| **Vercel** | Deploy (região `gru1`) |

## Estrutura

```
src/
├── app/[locale]/     # Rotas por idioma
├── components/       # UI, layout, páginas
├── data/             # Lojas, cardápio, bolos
├── lib/              # SEO, utils, constantes
├── messages/         # Traduções i18n
└── styles/           # tokens.css, fonts
```

## Setup local

```bash
git clone <repo-url>
cd carlos-bakery
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) — o middleware redireciona para `/pt`.

```bash
npm run build
npm run start
npm run lint
```

## Idiomas

| Locale | URL exemplo |
|--------|-------------|
| `pt` (padrão) | `/pt/cardapio` |
| `en` | `/en/cardapio` |
| `it` | `/it/cardapio` |

Textos: `src/messages/{locale}.json`

## Design system

- **Vermelho marca**: `carlo-red` / `brand-red-500`
- **Champagne (claro)**: `champagne-400`, `champagne-500`
- **Champagne (escuro)**: `champagne-on-dark`, `champagne-on-dark-muted`
- **Neutros**: `cream-*`, `espresso-*`

Documentação completa: [`docs/design-system.md`](docs/design-system.md)  
Auditoria de contraste: [`docs/contrast-audit.md`](docs/contrast-audit.md)

## SEO

- Schema.org: Organization, Bakery, LocalBusiness, FAQ
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- Open Graph dinâmico + hreflang

## Deploy na Vercel

1. Importar repositório no [Vercel Dashboard](https://vercel.com)
2. Framework: **Next.js** (detecção automática)
3. Variáveis de ambiente (ver `.env.example`)
4. Região: **São Paulo (gru1)** — configurado em `vercel.json`
5. Domínio: `carlosbakery.com.br` + redirect `www` → apex

Push em `main` → produção. Demais branches → preview URL automático.

## Documentação para o cliente

- [`docs/manual-cliente.md`](docs/manual-cliente.md) — editar conteúdo
- [`docs/apresentacao-cliente.md`](docs/apresentacao-cliente.md) — material de entrega

## Licença

Projeto privado — Carlo's Bakery Brasil © 2026
