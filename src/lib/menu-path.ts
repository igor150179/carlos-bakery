/** Rotas do cardápio em todos os locales (next-intl pathname) */
const MENU_PATHS = new Set(["/cardapio", "/menu"]);

export function isMenuPathname(pathname: string): boolean {
  return MENU_PATHS.has(pathname);
}
