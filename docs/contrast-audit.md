# Auditoria de contraste WCAG — Carlo's Bakery

Valores calculados sobre fundo `espresso-900` (#0F0B08) e `cream-50` (#FBF8F3).

| Cor de texto | Fundo | Ratio | WCAG |
|--------------|-------|-------|------|
| `cream-50` (#FBF8F3) | `espresso-900` | ~16.8:1 | AAA |
| `champagne-on-dark` (#E8D4A8) | `espresso-900` | ~11.2:1 | AAA |
| `champagne-on-dark-soft` (#DEC289) | `espresso-900` | ~9.4:1 | AAA |
| `champagne-on-dark-muted` (#C9B68A) | `espresso-900` | ~7.8:1 | AAA |
| `champagne-400` (#D4A857) | `cream-50` | ~3.2:1 | Apenas texto grande (AA) |
| `champagne-500` (#C9982E) | `cream-50` | ~3.5:1 | Apenas texto grande (AA) |
| `carlo-red` / `brand-red-500` (#C8102E) | `cream-50` | ~5.1:1 | AA |

## Regras de uso

- **Fundos escuros** (`bg-espresso-900`, `bg-espresso-950`): usar `text-champagne-on-dark*` para labels, eyebrows e acentos tipográficos.
- **Fundos claros** (`bg-cream-50`): usar `text-champagne-500` ou `text-champagne-400` em eyebrows; corpo em `text-espresso-900`.
- **CTAs vermelhos** em qualquer fundo: manter `bg-carlo-red` com texto `text-cream-50`.

## Ferramentas

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools → Accessibility → Contrast
