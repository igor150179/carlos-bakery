# Design System — Carlo's Bakery Brasil

## Cores da marca

| Token | Hex | Uso |
|-------|-----|-----|
| `carlo-red` / `brand-red-500` | #C8102E | CTAs, links de ação, seleção |
| `champagne-400` | #D4A857 | Dourado em fundos **claros** |
| `champagne-500` | #C9982E | Eyebrows e acentos em fundos cream |
| `champagne-on-dark` | #E8D4A8 | Texto dourado em fundos **escuros** |
| `champagne-on-dark-soft` | #DEC289 | Subtítulos em fundos escuros |
| `champagne-on-dark-muted` | #C9B68A | Bordas e labels em fundos escuros |
| `cream-50` | #FBF8F3 | Background principal |
| `espresso-900` | #0F0B08 | Seções cinematográficas |
| `espresso-950` | #0A0705 | Footer |

Definições em `src/styles/tokens.css` e mapeamento Tailwind em `src/app/globals.css`.

## Tipografia

- **Display**: Playfair Display — títulos
- **Body**: Inter — UI e parágrafos
- **Accent**: Cormorant Garamond (itálico) — citações
- **Script**: Caveat — assinaturas

## Componentes base

- `src/components/ui/` — botões, selects
- `src/components/shared/MonogramBackground.tsx` — marca d'água
- `src/components/layout/` — Header, Footer, navegação

## Formulários em fundo escuro

Padrão de input (ver `ContactForm.tsx`):

- Label: `text-champagne-on-dark`
- Borda: `border-champagne-on-dark-muted/40`
- Focus: `focus-visible:border-b-brand-red-500`
- Texto: `text-cream-50`
- Placeholder: `text-cream-50/40`

Select customizado: `CustomSelect.tsx` (Radix UI).
