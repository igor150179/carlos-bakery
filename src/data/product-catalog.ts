/**
 * Base oficial de produtos e preços Carlo's Bakery Brasil.
 * Preço principal = vitrine; pricePromo = preço promocional quando informado.
 * menuItemId liga ao item do site (`src/data/menu.ts`) quando existir.
 */
export type ProductCatalogEntry = {
  name: string;
  category: string;
  description?: string;
  price?: number;
  pricePromo?: number;
  productId?: string;
  menuItemId?: string;
};

export const PRODUCT_CATALOG: ProductCatalogEntry[] = [
  // Bolos
  {
    name: "Bolo Red Velvet 13 cm",
    category: "Bolos",
    description:
      "Bolo inteiro (13 cm - serve aprox. 12 fatias). Bolo feito com camadas de massa Red Velvet, que possui sabor de baunilha e um toque de cacau. Recheio e cobertura de cream cheese adocicado com farelo red velvet. Mantenha em refrigeração.",
    price: 180,
    pricePromo: 150,
    menuItemId: "red-velvet-cake",
  },
  {
    name: "Bolo Brigadeiro 13 cm",
    category: "Bolos",
    description:
      "Bolo inteiro (13 cm - serve aprox. 12 fatias). Camadas de massa de chocolate, intercaladas com recheio de brigadeiro cremoso, finalizado com muito granulado de chocolate e mini brigadeiros no topo. Mantenha em refrigeração.",
    price: 180,
    pricePromo: 150,
    menuItemId: "bolo-chocolate-brigadeiro",
  },
  {
    name: "Bolo Cannoli 13 cm",
    category: "Bolos",
    description:
      "Bolo inteiro (13 cm - serve aprox. 12 fatias). Bolo com massa de baunilha, recheio de creme de ricota adocicado (o mesmo do Cannoli), coberto por Chantilly, amêndoas torradas laminadas, e mini Cannolis no topo. Mantenha em refrigeração.",
    price: 180,
    pricePromo: 150,
    menuItemId: "bolo-cannoli",
  },
  {
    name: "Bolo Black and White 13 cm",
    category: "Bolos",
    description:
      "Bolo inteiro (13 cm - serve aprox. 12 fatias). Bolo com massa de chocolate intercalada com massa de baunilha e recheio de mousse de Nutella. Cobertura de Chantilly e granulados branco e preto na lateral. Mantenha em refrigeração.",
    price: 180,
    pricePromo: 150,
    menuItemId: "black-white-cake",
  },
  {
    name: "Bolo Strawberry Shortcake 13 cm",
    category: "Bolos",
    description:
      "Bolo inteiro (13 cm - serve aprox. 12 fatias). Bolo com massa de baunilha, recheio com camada de leite condensado, intercalada com Chantilly e morangos frescos. Mantenha em refrigeração. Sob encomenda.",
    price: 180,
    pricePromo: 150,
    menuItemId: "bolo-strawberry-shortcake",
  },
  // Baby Bolos
  {
    name: "Baby Bolo Red Velvet",
    category: "Baby Bolos",
    description:
      "Massa Red Velvet, que possui sabor de baunilha e um toque de cacau. Recheio e cobertura de cream cheese adocicado com farelo red velvet. 11 cm de diametro. Aprox 300g",
    price: 79.99,
    pricePromo: 69.9,
    menuItemId: "mini-bolo-red-velvet",
  },
  {
    name: "Baby Bolo Brigadeiro",
    category: "Baby Bolos",
    description:
      "Massa de chocolate com recheio de brigadeiro cremoso, finalizado com muito granulado de chocolate e mini brigadeiros no topo. 11 cm de diametro. Aprox 400g",
    price: 79.99,
    pricePromo: 69.9,
    menuItemId: "mini-bolo-chocolate",
  },
  {
    name: "Baby Bolo Black and White",
    category: "Baby Bolos",
    description:
      "Bolo com massa de chocolate intercalada com massa de baunilha e recheio de mousse de chocolate. Cobertura de Chantilly e granulados branco e preto na lateral. 11 cm de diametro. Aprox 300g",
    price: 79.99,
    pricePromo: 69.9,
    menuItemId: "mini-bolo-black-white",
  },
  {
    name: "Baby Carrot Cake",
    category: "Baby Bolos",
    description:
      "Bolo de cenoura americano, com um toque Carlo's Bakery. A massa tem cenoura ralada, pedaços de abacaxi, nozes, coco ralado e especiarias. Recheio de creme de cream cheese adocicado. 11 cm de diametro. Aprox 300g",
    price: 79.99,
    pricePromo: 69.9,
    menuItemId: "mini-bolo-cenoura",
  },
  // Cannoli
  {
    name: "Cannoli Tradicional",
    category: "Cannoli",
    description:
      "Casquinha dourada e crocante recheada com um creme exclusivo de ricota levemente adocicado, gotas de chocolate meio amargo, baunilha e um toque de canela. Ideal para consumo imediato.",
    price: 23.99,
    pricePromo: 21.9,
    menuItemId: "cannoli-tradizionale",
  },
  {
    name: "Cannoli Chocolate",
    category: "Cannoli",
    description:
      "Casquinha dourada e crocante, banhada em chocolate meio amargo, recheada com um creme exclusivo de ricota levemente adocicado, gotas de chocolate meio amargo, baunilha e um toque de canela. Ideal para consumo imediato.",
    price: 23.99,
    pricePromo: 21.9,
    menuItemId: "cannoli-siciliano",
  },
  {
    name: "Cannoli Pistache Dubai Casca Tradicional",
    category: "Cannoli",
    description:
      "Casquinha dourada e crocante com recheio de creme de pistache com muito crocante de massa folhada. Finalizado com pistache nas pontas.",
    price: 27.99,
    pricePromo: 24.9,
    menuItemId: "cannoli-pistachio-fondente",
  },
  {
    name: "Cannoli Pistache Dubai Casca Chocolate",
    category: "Cannoli",
    description:
      "Casquinha dourada e crocante, banhada em chocolate meio amargo, com recheio de creme de pistache com muito crocante de massa folhada. Finalizado com pistache nas pontas.",
    price: 27.99,
    pricePromo: 24.9,
  },
  {
    name: "Cannoli Brigadeiro de Panela Casca Tradicional",
    category: "Cannoli",
    description:
      "Casquinha dourada e crocante, recheada com creme de brigadeiro, finalizada com granulado de chocolate.",
    price: 24.99,
    pricePromo: 22.9,
    productId: "4000098",
    menuItemId: "cannoli-cioccolato",
  },
  {
    name: "Cannoli Brigadeiro de Panela Casca Chocolate",
    category: "Cannoli",
    description:
      "Casquinha dourada e crocante, banhada em chocolate meio amargo, recheada com creme de brigadeiro, finalizada com granulado de chocolate.",
    price: 24.99,
    pricePromo: 22.9,
    productId: "4000101",
    menuItemId: "cannoli-cioccolato-chip",
  },
  {
    name: "Cannoli de Limão Casca Tradicional",
    category: "Cannoli",
    description: "Casquinha dourada e crocante, recheada com creme de limão siciliano.",
    price: 24.99,
    pricePromo: 22.9,
    menuItemId: "cannoli-limao-siciliano",
  },
  {
    name: "Cannoli de Limão Chocolate",
    category: "Cannoli",
    description:
      "Casquinha dourada e crocante, banhada em chocolate meio amargo, recheada com creme de limão siciliano.",
    price: 24.99,
    pricePromo: 22.9,
    menuItemId: "cannoli-fondente-crema",
  },
  {
    name: "Cannoli Cookies and Cream",
    category: "Cannoli",
    description:
      "O clássico americano. Casquinha crocante banhada em chocolate branco, recheada com creme de baunilha e pedaços do nosso famoso Cookie Chocolate Chips— receita original do Buddy.",
    price: 25.99,
    productId: "4000156",
  },
  {
    name: "Cannoli Doce de Leite Casca Branca",
    category: "Cannoli",
    description: "Casquinha crocante banhada em chocolate branco e recheio de doce de leite.",
    price: 25.99,
    productId: "4000155",
  },
  {
    name: "Cannoli Doce de Leite Casca Chocolate",
    category: "Cannoli",
    description:
      "Casquinha crocante banhada em chocolate meio amargo e recheio de doce de leite.",
    price: 25.99,
    productId: "4000195",
  },
  {
    name: "Cannoli Pastel de Nata",
    category: "Cannoli",
    description:
      "Transformamos o doce português mais famoso em Cannoli: casquinha crocante, creme de confeiteiro com muita baunilha, finalizado com açúcar e canela. Aveludado por dentro, crocante por fora.",
    price: 25.99,
    productId: "4000157",
  },
  {
    name: "Cannoli Caramelo Salgado Casca Tradicional",
    category: "Cannoli",
    description:
      "O ícone da confeitaria francesa no Cannoli: casquinha crocante, recheio cremoso de caramelo com toque de flor de sal e fios de caramelo salgado finalizando.",
    price: 25.99,
    productId: "4000165",
  },
  {
    name: "Cannoli Caramelo Salgado Casca Chocolate",
    category: "Cannoli",
    description:
      "O ícone da confeitaria francesa no Cannoli: casquinha crocante banhada em chocolate, recheio cremoso de caramelo com toque de flor de sal e fios de caramelo salgado finalizando.",
    price: 25.99,
    productId: "4000166",
  },
  {
    name: "Cannoli Zero",
    category: "Cannoli",
    description:
      "Casquinha crocante com um toque de cacau e canela e recheio de ricota adocicado. Adoçado com Maltitol.",
    price: 24.99,
    pricePromo: 22.9,
    menuItemId: "cannoli-cioccolato-premium",
  },
  {
    name: "Cannoli Chocolate Zero",
    category: "Cannoli",
    description:
      "Casquinha de chocolate crocante recheada com creme de ricota. Adoçado com Maltitol.",
    price: 24.99,
    menuItemId: "cannoli-chocolate-zero",
  },
  // Lobster Tail (preço mini — exibido como "a partir de" no site)
  {
    name: "Lobster Tail Tradicional Tamanho Mini",
    category: "Lobster Tail",
    description:
      "Massa folhada extremamente crocante e leve, recheada com um delicioso creme de baunilha exclusivo da Carlo's Bakery. Consumo imediato.",
    price: 25.99,
    pricePromo: 22.9,
    menuItemId: "lobster-tail",
  },
  {
    name: "Lobster Tail Tradicional Tamanho Clássico",
    category: "Lobster Tail",
    price: 27.99,
    pricePromo: 26.9,
  },
  {
    name: "Lobster Tail Tradicional Tamanho Super",
    category: "Lobster Tail",
    price: 29.99,
    pricePromo: 28.9,
  },
  {
    name: "Lobster Tail Avelã Tamanho Mini",
    category: "Lobster Tail",
    description:
      "Massa folhada extremamente crocante e leve, recheada com um delicioso creme de avelã exclusivo da Carlo's Bakery, com finalização de Nutella® pura no topo. Consumo imediato.",
    price: 25.99,
    pricePromo: 22.9,
    menuItemId: "sfogliatella-chocolate",
  },
  {
    name: "Lobster Tail Avelã Tamanho Clássico",
    category: "Lobster Tail",
    price: 27.99,
    pricePromo: 26.9,
  },
  {
    name: "Lobster Tail Avelã Tamanho Super",
    category: "Lobster Tail",
    price: 29.99,
    pricePromo: 28.9,
  },
  {
    name: "Lobster Tail Caramelo Flor de Sal Tam. Mini",
    category: "Lobster Tail",
    description:
      "Massa folhada extremamente crocante e leve, recheada com um delicioso creme de caramelo artesanal com toque de flor de sal e finalização de caramelo salgado puro no topo. Consumo imediato.",
    price: 25.99,
    pricePromo: 22.9,
    menuItemId: "sfogliatella-fondente",
  },
  {
    name: "Lobster Tail Caramelo Flor de Sal Tam. Clássico",
    category: "Lobster Tail",
    price: 27.99,
    pricePromo: 26.9,
  },
  {
    name: "Lobster Tail Caramelo Flor de Sal Tam. Super",
    category: "Lobster Tail",
    price: 29.99,
    pricePromo: 28.9,
  },
  {
    name: "Lobster Tail Chocolate Sem Açúcar Mini",
    category: "Lobster Tail",
    price: 27.99,
    pricePromo: 24.9,
    menuItemId: "cauda-lagosta-cacau",
  },
  {
    name: "Lobster Tail Pistache Dubai Tamanho Mini",
    category: "Lobster Tail",
    price: 26.99,
    pricePromo: 24.9,
    menuItemId: "sfogliatella-pistache",
  },
  {
    name: "Lobster Tail Pistache Dubai Tamanho Clássico",
    category: "Lobster Tail",
    price: 29.99,
    pricePromo: 28.9,
  },
  {
    name: "Lobster Tail Pistache Dubai Tamanho Super",
    category: "Lobster Tail",
    price: 34.99,
    pricePromo: 28.9,
  },
  {
    name: "Lobster Tail Limão Siciliano Tamanho Mini",
    category: "Lobster Tail",
    price: 25.99,
    menuItemId: "cauda-lagosta-doce-leite",
  },
  {
    name: "Lobster Tail Limão Siciliano Tamanho Clássico",
    category: "Lobster Tail",
    price: 27.99,
  },
  {
    name: "Lobster Tail Limão Siciliano Tamanho Super",
    category: "Lobster Tail",
    price: 32.99,
  },
  // Fatias
  {
    name: "Fatia Bolo Red Velvet",
    category: "Fatias",
    price: 26.99,
    pricePromo: 25.9,
    menuItemId: "fatia-bolo-red-velvet",
  },
  {
    name: "Fatia Bolo Arco-íris Chocolate",
    category: "Fatias",
    price: 26.99,
    pricePromo: 25.9,
    menuItemId: "fatia-bolo-rainbow",
  },
  {
    name: "Fatia Carrot Cake",
    category: "Fatias",
    price: 26.99,
    pricePromo: 25.9,
    menuItemId: "fatia-bolo-cenoura",
  },
  {
    name: "Fatia Bolo Brigadeiro",
    category: "Fatias",
    price: 26.99,
    pricePromo: 25.9,
    menuItemId: "fatia-bolo-chocolate",
  },
  // Doces especiais
  {
    name: "Cupcake Red Velvet",
    category: "Doces especiais",
    price: 22.99,
    pricePromo: 20.9,
    menuItemId: "red-velvet-cupcake",
  },
  {
    name: "Cupcake Brigadeiro",
    category: "Doces especiais",
    price: 22.99,
    pricePromo: 20.9,
    menuItemId: "cupcake-brigadeiro-menu",
  },
  {
    name: "Tiramisu",
    category: "Doces especiais",
    price: 24.99,
    pricePromo: 21.9,
    menuItemId: "tiramisu-potinho",
  },
  {
    name: "Cheesecake Frutas Vermelhas",
    category: "Doces especiais",
    price: 24.99,
    pricePromo: 21.9,
    menuItemId: "cheesecake-frutas-vermelhas",
  },
  {
    name: "Eclair Chocolate",
    category: "Doces especiais",
    price: 24.99,
    pricePromo: 21.9,
    menuItemId: "eclair-chocolate",
  },
  {
    name: "Eclair Pistache Dubai",
    category: "Doces especiais",
    price: 26.99,
    pricePromo: 24.9,
    menuItemId: "eclair-pistache",
  },
  {
    name: "Eclair morango",
    category: "Doces especiais",
    price: 24.99,
    pricePromo: 22.9,
    menuItemId: "eclair-morango-creme",
  },
  {
    name: "Mousse chocolate",
    category: "Doces especiais",
    price: 24.99,
    pricePromo: 22.9,
    productId: "4000154",
    menuItemId: "mousse-chocolate",
  },
  {
    name: "Mousse maracujá",
    category: "Doces especiais",
    price: 24.99,
    pricePromo: 22.9,
    menuItemId: "mousse-maracuja",
  },
  {
    name: "Brownie",
    category: "Doces especiais",
    price: 21.99,
    pricePromo: 19.9,
    menuItemId: "brownie-chocolate",
  },
  {
    name: "Brownie de Pistache",
    category: "Doces especiais",
    price: 23.99,
    menuItemId: "brownie-pistache",
  },
  {
    name: "Donut Simpsons",
    category: "Doces especiais",
    price: 22.99,
    pricePromo: 19.9,
    menuItemId: "donut-confete",
  },
  {
    name: "Donut de Morango",
    category: "Doces especiais",
    price: 26.99,
    pricePromo: 24.9,
    menuItemId: "donut-sonho-morango",
  },
  {
    name: "Cookie Chocolate Chips",
    category: "Doces especiais",
    price: 21.99,
    pricePromo: 19.9,
    menuItemId: "chocolate-chip-cookie",
  },
  {
    name: "Morango com chocolate (unidade)",
    category: "Doces especiais",
    price: 11.99,
    pricePromo: 9.9,
    menuItemId: "morango-com-chocolate",
  },
  {
    name: "Cone Morango com chocolate (4 unidades)",
    category: "Doces especiais",
    price: 37.99,
    pricePromo: 35.9,
    menuItemId: "cone-morango-chocolate",
  },
  {
    name: "Brigadeiro Belga",
    category: "Doces especiais",
    price: 10.99,
    pricePromo: 9.9,
    menuItemId: "brigadeiro-gourmet",
  },
  // Bebidas frias
  {
    name: "Iced Coffee Tradicional",
    category: "Bebidas frias",
    price: 19.99,
    pricePromo: 18.9,
    menuItemId: "iced-latte",
  },
  {
    name: "Iced Coffee Caramelo",
    category: "Bebidas frias",
    price: 20.99,
    pricePromo: 19.9,
    menuItemId: "iced-latte-caramelo",
  },
  {
    name: "Pink Lemonade",
    category: "Bebidas frias",
    price: 20.99,
    pricePromo: 19.9,
    menuItemId: "cha-frutas-vermelhas",
  },
  // Cafeteria
  {
    name: "Chocolate Quente",
    category: "Cafeteria",
    price: 22.99,
    pricePromo: 21.9,
    menuItemId: "signature-hot-chocolate",
  },
  {
    name: "Cappuccino",
    category: "Cafeteria",
    price: 22.99,
    pricePromo: 21.9,
    menuItemId: "cappuccino",
  },
  {
    name: "Café expresso",
    category: "Cafeteria",
    price: 10.99,
    pricePromo: 9.9,
    menuItemId: "italian-espresso",
  },
  // Salgados
  {
    name: "Pão de queijo do Buddy (porção 5 un)",
    category: "Salgados",
    price: 17.99,
    pricePromo: 15.9,
    menuItemId: "pao-de-queijo-copo",
  },
  {
    name: "Croissant Simples",
    category: "Salgados",
    price: 15.99,
    pricePromo: 14.9,
    menuItemId: "croissant-classico",
  },
  {
    name: "Croissant Peito de Peru",
    category: "Salgados",
    price: 21.99,
    pricePromo: 20.9,
    menuItemId: "croissant-gergelim",
  },
  {
    name: "Coxinha de frango",
    category: "Salgados",
    price: 15.99,
    pricePromo: 14.9,
    menuItemId: "coxinha",
  },
  {
    name: "Coxinha de frango com catupiry",
    category: "Salgados",
    price: 16.99,
    pricePromo: 15.9,
    menuItemId: "coxinha-catupiry",
  },
  // Souvenirs (sem preço na base — mantidos no catálogo sem menuItemId)
  {
    name: "Garrafa vermelha brilho 500ML",
    category: "Souvenir e presentes",
    pricePromo: 59.9,
    menuItemId: "garrafa-carlos-vermelha",
  },
  {
    name: "Garrafa transparente",
    category: "Souvenir e presentes",
    pricePromo: 64.9,
    menuItemId: "garrafa-carlos-transparente",
  },
  // —— Produtos fora do site (base de referência) ——
  {
    name: "Fatia Bolo Arco-íris Buttercream",
    category: "Fatias",
    description:
      "Bolo arco-íris com 6 camadas coloridas, com sabor de baunilha e recheio de Buttercream de limão (creme de manteiga). Consumo imediato.",
    price: 26.99,
    pricePromo: 25.9,
  },
  {
    name: "Mousse de Limão",
    category: "Doces especiais",
    price: 24.99,
    pricePromo: 22.9,
  },
  {
    name: "Cookie Red Velvet (TESTE)",
    category: "Doces especiais",
    price: 21.99,
  },
  {
    name: "Brigadeiro de Pistache",
    category: "Doces especiais",
    price: 12.99,
  },
  {
    name: "Donut Pistache",
    category: "Doces especiais",
    price: 24.99,
  },
  {
    name: "Donut Chocolate",
    category: "Doces especiais",
    price: 23.99,
  },
  {
    name: "Croissant Queijo",
    category: "Salgados",
    price: 21.99,
  },
  {
    name: "Croissant Presunto",
    category: "Salgados",
    price: 21.99,
  },
  {
    name: "Água",
    category: "Bebidas frias",
    price: 9.99,
    pricePromo: 8.9,
  },
  {
    name: "Água com gás",
    category: "Bebidas frias",
    price: 9.99,
    pricePromo: 8.9,
  },
  {
    name: "Coca-cola sem açúcar",
    category: "Bebidas frias",
    price: 9.99,
    pricePromo: 8.9,
  },
  {
    name: "Coca-cola",
    category: "Bebidas frias",
    price: 9.99,
    pricePromo: 8.9,
  },
  {
    name: "Fanta Guaraná",
    category: "Bebidas frias",
    price: 9.99,
    pricePromo: 8.9,
  },
  {
    name: "Café expresso duplo",
    category: "Cafeteria",
    price: 13.99,
    pricePromo: 12.9,
  },
  {
    name: "Café expresso com espuma",
    category: "Cafeteria",
    price: 11.99,
    pricePromo: 10.9,
  },
  {
    name: "Café expresso duplo com espuma",
    category: "Cafeteria",
    price: 16.99,
    pricePromo: 15.9,
  },
  {
    name: "Café expresso com leite P",
    category: "Cafeteria",
    price: 11.99,
    pricePromo: 10.9,
  },
  {
    name: "Café expresso com leite P claro",
    category: "Cafeteria",
    price: 13.99,
    pricePromo: 10.9,
  },
  {
    name: "Café expresso com leite G",
    category: "Cafeteria",
    price: 16.99,
    pricePromo: 15.9,
  },
  {
    name: "Café expresso com leite G claro",
    category: "Cafeteria",
    price: 18.99,
    pricePromo: 10.9,
  },
  {
    name: "Leite Quente P",
    category: "Cafeteria",
    price: 5.99,
    pricePromo: 5.9,
  },
  {
    name: "Leite Quente M",
    category: "Cafeteria",
    price: 8.99,
    pricePromo: 8.9,
  },
  {
    name: "Vela estrela",
    category: "Souvenir e presentes",
    price: 9.99,
    pricePromo: 9.9,
  },
  {
    name: "Vela Fonte Luminosa",
    category: "Souvenir e presentes",
    price: 12.99,
    pricePromo: 11.9,
  },
  {
    name: "Peanut Popcorn",
    category: "Souvenir e presentes",
    price: 44.99,
    pricePromo: 39.9,
  },
  {
    name: "Peanut Popcorn Chocolate",
    category: "Souvenir e presentes",
    price: 49.99,
    pricePromo: 45.9,
  },
  {
    name: "Caneca Biruta",
    category: "Souvenir e presentes",
    pricePromo: 69.9,
  },
  {
    name: "Mega Caneca São Paulo",
    category: "Souvenir e presentes",
    pricePromo: 69.9,
  },
  {
    name: "Copo Bambu 380ML",
    category: "Souvenir e presentes",
    pricePromo: 34.9,
  },
  {
    name: "Kit Cannoli congelado",
    category: "Congelados",
    price: 79.99,
  },
  {
    name: "Cannoli leve 3 e ganhe 1",
    category: "Promoções",
    description: "Total: 4un. Escolha seus sabores",
    price: 102.62,
    pricePromo: 76.97,
  },
  {
    name: "Cannoli leve 9 e ganhe 3",
    category: "Promoções",
    description: "Total: 12un. Escolha seus sabores",
    price: 307.88,
    pricePromo: 230.93,
  },
  {
    name: "Fatias leve 3 e ganhe 1",
    category: "Promoções",
    description: "Total: 4un. Escolha seus sabores",
    price: 107.96,
    pricePromo: 80.97,
  },
  {
    name: "Eclair leve 3 e ganhe 1",
    category: "Promoções",
    description: "Total: 4un. Escolha seus sabores",
    price: 103.96,
    pricePromo: 77.97,
  },
  {
    name: "Brigadeiro leve 3 e ganhe 1",
    category: "Promoções",
    description: "Total: 4un.",
    price: 43.96,
    pricePromo: 32.97,
  },
  {
    name: "Kit Festa pequeno",
    category: "Promoções",
    price: 253.85,
    pricePromo: 199,
  },
  {
    name: "Kit Festa grande",
    category: "Promoções",
    price: 627.63,
    pricePromo: 499,
  },
  {
    name: "Casquinha 3 sabores",
    category: "Gelatos",
    price: 21.99,
    pricePromo: 21.99,
  },
  {
    name: "Copinho P 2 sabores",
    category: "Gelatos",
    price: 18.99,
    pricePromo: 18.99,
  },
  {
    name: "Copinho G 3 sabores",
    category: "Gelatos",
    pricePromo: 20.99,
  },
  {
    name: "Brownie com Gelato",
    category: "Gelatos",
    pricePromo: 15.99,
  },
];

/** Índice rápido por ID do item do cardápio do site. */
export const CATALOG_BY_MENU_ITEM_ID = Object.fromEntries(
  PRODUCT_CATALOG.filter((entry) => entry.menuItemId).map((entry) => [
    entry.menuItemId!,
    entry,
  ]),
) as Record<string, ProductCatalogEntry>;

export function getCatalogEntryForMenuItem(
  menuItemId: string,
): ProductCatalogEntry | undefined {
  return CATALOG_BY_MENU_ITEM_ID[menuItemId];
}
