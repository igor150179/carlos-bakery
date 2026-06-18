# Manual do Cliente — Carlo's Bakery Brasil

## Como editar textos do site

Os textos ficam em `src/messages/`:

- `pt.json` — Português (padrão)
- `en.json` — Inglês
- `it.json` — Italiano

Altere a mesma chave nos três arquivos para manter os idiomas sincronizados. Após o deploy na Vercel, as mudanças entram em produção em cerca de 1 minuto.

## Como adicionar uma loja

Edite `src/data/stores.ts` e adicione um objeto seguindo o padrão das lojas existentes.

## Como atualizar o cardápio

Edite `src/data/menu.ts`.

## Como adicionar fotos de bolos personalizados

1. Envie as imagens para `public/images/cakes/`
2. Atualize `src/data/custom-cakes.ts` com o caminho da nova imagem

## Analytics e SEO

- **Google Analytics**: configure `NEXT_PUBLIC_GA_ID` na Vercel
- **Meta Pixel**: configure `NEXT_PUBLIC_FB_PIXEL_ID`
- **Search Console**: [search.google.com/search-console](https://search.google.com/search-console)
- **Rich Results**: [Google Rich Results Test](https://search.google.com/test/rich-results)

## Deploy

Push na branch `main` → produção automática.  
Outras branches → URL de preview na Vercel para revisão.

## Suporte técnico

Entre em contato com a equipe de desenvolvimento responsável pelo projeto.
