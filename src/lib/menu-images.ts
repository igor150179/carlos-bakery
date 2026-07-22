/** Local product photography — `/public/images/menu/` */
const img = (file: string) => `/images/menu/${file}`;

export const MENU_IMAGES = {
  rainbowCookies: img(
    "1155-Edit-Edit-769770b5-c8b7-43dd-a3d4-f7a6f7f01e7a.png",
  ),
  lobsterTail: img("folhado-cauda-lagosta-classica.png"),
  /** Sfogliatelle & Cauda de Lagosta (massa folhada doce) */
  folhadoSfogliatellaRicota: img("folhado-sfogliatella-ricota.png"),
  folhadoSfogliatellaChocolate: img("folhado-sfogliatella-chocolate.png"),
  folhadoSfogliatellaPistache: img("folhado-sfogliatella-pistache.png"),
  folhadoCaudaLagostaDoceLeite: img("lobster-tail-limao-siciliano.png"),
  folhadoCaudaLagostaCacau: img("folhado-cauda-lagosta-cacau.png"),
  folhadoSfogliatellaFondente: img("folhado-sfogliatella-fondente.png"),
  /** Cannoli */
  cannoliTradizionale: img("cannoli-tradizionale-ricota.png"),
  cannoliSiciliano: img("cannoli-classico.png"),
  cannoliPistachio: img("cannoli-pistachio.png"),
  cannoliPistachioFondente: img("cannoli-pistachio-fondente.png"),
  cannoliCioccolato: img("cannoli-cioccolato.png"),
  cannoliChocolateZero: img("cannoli-chocolate-zero.png"),
  cannoliCioccolatoChip: img("cannoli-cioccolato-chip.png"),
  cannoliCioccolatoPremium: img("cannoli-cioccolato-premium.png"),
  cannoliFondente: img("cannoli-fondente.png"),
  cannoliFondenteCrema: img("cannoli-fondente-crema.png"),
  /** Bolos */
  boloRedVelvet: img("bolo-red-velvet.png"),
  boloChocolateBrigadeiro: img("bolo-chocolate-brigadeiro.png"),
  boloBlackWhite: img("bolo-black-white.png"),
  boloCannoli: img("bolo-cannoli.png"),
  boloStrawberryShortcake: img("bolo-strawberry-shortcake.png"),
  /** Fatias de bolo */
  fatiaBoloRainbow: img("fatia-bolo-rainbow.png"),
  fatiaBoloCoco: img("fatia-bolo-coco.png"),
  fatiaBoloChocolate: img("fatia-bolo-chocolate.png"),
  fatiaBoloRedVelvet: img("fatia-bolo-red-velvet.png"),
  fatiaBoloCenoura: img("fatia-bolo-cenoura.png"),
  /** Cookies */
  cookieChocolateChip: img("cookie-chocolate-chip.png"),
  cookiePistache: img("cookie-pistache.png"),
  /** Croissants */
  croissantClassico: img("croissant-classico.png"),
  croissantGergelim: img("croissant-gergelim.png"),
  /** Salgados */
  salgadoCoxinha: img("salgado-coxinha.png"),
  salgadoCoxinhaCatupiry: img("salgado-coxinha-catupiry.png"),
  salgadoPaoDeQueijo: img("salgado-pao-de-queijo.png"),
  /** Cupcakes */
  cupcakeRedVelvet: img("especial-cupcake-red-velvet.png"),
  cupcakeBrigadeiro: img("especial-cupcake-brigadeiro.png"),
  /** Bebidas quentes */
  bebidaEspresso: img("bebida-espresso.png"),
  bebidaCafeAmericano: img("bebida-cafe-americano.png"),
  bebidaChocolateQuente: img("bebida-chocolate-quente.png"),
  bebidaCappuccino: img("bebida-cappuccino.png"),
  bebidaLatte: img("bebida-latte.png"),
  bebidaMacchiato: img("bebida-macchiato.png"),
  bebidaFlatWhite: img("bebida-flat-white.png"),
  bebidaCafeComLeite: img("bebida-cafe-com-leite.png"),
  bebidaCortado: img("bebida-cortado.png"),
  bebidaLatteMacchiato: img("bebida-latte-macchiato.png"),
  /** Bebidas frias */
  bebidaFriaLatteCaramelo: img("bebida-fria-latte-caramelo.png"),
  bebidaFriaIcedLatte: img("bebida-fria-iced-latte.png"),
  bebidaFriaChaFrutas: img("bebida-fria-cha-frutas.png"),
  /** Doces especiais */
  especialEclairMorangoCreme: img("especial-eclair-morango-creme.png"),
  especialEclairChocolate: img("especial-eclair-chocolate.png"),
  especialEclairPistache: img("especial-eclair-pistache.png"),
  especialEclairChocolateMorango: img("especial-eclair-chocolate-morango.png"),
  miniBoloBlackWhite: img("mini-bolo-black-white.png"),
  miniBoloCenoura: img("mini-bolo-cenoura.png"),
  miniBoloRedVelvet: img("mini-bolo-red-velvet.png"),
  miniBoloChocolateBrigadeiro: img("mini-bolo-chocolate-brigadeiro.png"),
  especialCupcakeBrigadeiro: img("especial-cupcake-brigadeiro.png"),
  especialCupcakeRedVelvet: img("especial-cupcake-red-velvet.png"),
  especialBrigadeiro: img("especial-brigadeiro.png"),
  especialMorangoChocolate: img("morango-com-chocolate.png"),
  especialConeMorangoChocolate: img("cone-morango-chocolate.png"),
  especialCheesecakeFrutas: img("especial-cheesecake-frutas-vermelhas.png"),
  especialBrownieChocolate: img("especial-brownie-chocolate.png"),
  especialBrowniePistache: img("especial-brownie-pistache.png"),
  especialTiramisu: img("especial-tiramisu.png"),
  especialMousseMaracuja: img("mousse-maracuja.png"),
  especialMousseChocolate: img("mousse-chocolate.png"),
  /** Donuts */
  donutConfete: img("donut-confete.png"),
  donutSonhoMorango: img("donut-sonho-morango.png"),
  /** Souvenirs */
  souvenirCanecaIlustrada: img("souvenir-caneca-ilustrada.png"),
  souvenirCanecaCarlosFaixa: img("souvenir-caneca-carlos-faixa.png"),
  souvenirCanecaCarlosClassica: img("souvenir-caneca-carlos-classica.png"),
  souvenirCanecaBuddy: img("souvenir-caneca-buddy.png"),
  souvenirGarrafaCarlosVermelha: img("souvenir-garrafa-carlos-vermelha.png"),
  souvenirGarrafaBuddyVermelha: img("souvenir-garrafa-buddy-vermelha.png"),
  souvenirGarrafaCarlosTransparente: img("souvenir-garrafa-carlos-transparente.png"),
  ingredients: img("ingredientes-confeitaria.png"),
  heroTexture:
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&q=80",
} as const;
