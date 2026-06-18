export interface Store {
  id: string;
  name: string;
  shortName: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  whatsapp: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  isFlagship?: boolean;
  image: string;
  googleMapsUrl: string;
  wazeUrl: string;
}

export const STORES: Store[] = [
  {
    id: "jardins",
    name: "Carlo's Bakery Jardins",
    shortName: "Jardins",
    address: "R. Bela Cintra, 2182",
    neighborhood: "Jardim Paulista",
    city: "São Paulo",
    state: "SP",
    zipCode: "01415-002",
    phone: "(11) 91567-9346",
    whatsapp: "5511915679346",
    hours: {
      weekdays: "10h às 22h",
      saturday: "10h às 22h",
      sunday: "10h às 21h",
    },
    coordinates: { lat: -23.5615, lng: -46.6695 },
    features: ["Flagship", "Loja Original 2016"],
    isFlagship: true,
    image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=1200&q=80",
    googleMapsUrl: "https://maps.google.com/?q=R.+Bela+Cintra,+2182,+São+Paulo",
    wazeUrl: "https://waze.com/ul?q=R.+Bela+Cintra,+2182,+São+Paulo",
  },
  {
    id: "vila-leopoldina",
    name: "Carlo's Bakery Vila Leopoldina",
    shortName: "Vila Leopoldina",
    address: "R. Aroaba, 309",
    neighborhood: "Vila Leopoldina",
    city: "São Paulo",
    state: "SP",
    zipCode: "05315-020",
    phone: "(11) 93505-3108",
    whatsapp: "5511935053108",
    hours: {
      weekdays: "10h às 22h",
      saturday: "10h às 22h",
      sunday: "10h às 22h",
    },
    coordinates: { lat: -23.5311, lng: -46.7295 },
    features: ["Workshop Mini Confeiteiros", "Cozinha Show", "Estacionamento"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80",
    googleMapsUrl: "https://maps.google.com/?q=R.+Aroaba,+309,+São+Paulo",
    wazeUrl: "https://waze.com/ul?q=R.+Aroaba,+309,+São+Paulo",
  },
  {
    id: "shopping-eldorado",
    name: "Carlo's Bakery Shopping Eldorado",
    shortName: "Shopping Eldorado",
    address: "Av. Rebouças, 3970",
    neighborhood: "Pinheiros",
    city: "São Paulo",
    state: "SP",
    zipCode: "05402-600",
    phone: "(11) 91567-9619",
    whatsapp: "5511915679619",
    hours: {
      weekdays: "10h às 22h",
      saturday: "10h às 22h",
      sunday: "14h às 20h",
    },
    coordinates: { lat: -23.5708, lng: -46.6997 },
    features: ["Espaço Instagramável", "Cozinha Show", "Shopping"],
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=1200&q=80",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Rebouças,+3970,+São+Paulo",
    wazeUrl: "https://waze.com/ul?q=Av.+Rebouças,+3970,+São+Paulo",
  },
  {
    id: "shopping-center-norte",
    name: "Carlo's Bakery Shopping Center Norte",
    shortName: "Center Norte",
    address: "Av. Otto Baumgart, 245",
    neighborhood: "Vila Guilherme",
    city: "São Paulo",
    state: "SP",
    zipCode: "02049-000",
    phone: "(11) 91567-9566",
    whatsapp: "5511915679566",
    hours: {
      weekdays: "10h às 22h",
      saturday: "10h às 22h",
      sunday: "14h às 20h",
    },
    coordinates: { lat: -23.5126, lng: -46.6217 },
    features: ["Shopping", "Estacionamento"],
    image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?w=1200&q=80",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Otto+Baumgart,+245,+São+Paulo",
    wazeUrl: "https://waze.com/ul?q=Av.+Otto+Baumgart,+245,+São+Paulo",
  },
  {
    id: "morumbi-shopping",
    name: "Carlo's Bakery Morumbi Shopping",
    shortName: "Morumbi Shopping",
    address: "Av. Roque Petroni Júnior, 1089",
    neighborhood: "Jardim das Acácias",
    city: "São Paulo",
    state: "SP",
    zipCode: "04707-900",
    phone: "(11) 94398-9104",
    whatsapp: "5511943989104",
    hours: {
      weekdays: "10h às 22h",
      saturday: "10h às 22h",
      sunday: "14h às 20h",
    },
    coordinates: { lat: -23.6224, lng: -46.697 },
    features: ["Shopping", "Estacionamento"],
    image: "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?w=1200&q=80",
    googleMapsUrl:
      "https://maps.google.com/?q=Av.+Roque+Petroni+Júnior,+1089,+São+Paulo",
    wazeUrl: "https://waze.com/ul?q=Av.+Roque+Petroni+Júnior,+1089,+São+Paulo",
  },
  {
    id: "bourbon-shopping",
    name: "Carlo's Bakery Bourbon Shopping",
    shortName: "Bourbon Shopping",
    address: "R. Palestra Itália, 500",
    neighborhood: "Perdizes",
    city: "São Paulo",
    state: "SP",
    zipCode: "05005-030",
    phone: "(11) 97524-0146",
    whatsapp: "5511975240146",
    hours: {
      weekdays: "10h às 22h",
      saturday: "10h às 22h",
      sunday: "14h às 20h",
    },
    coordinates: { lat: -23.5274, lng: -46.6776 },
    features: ["Shopping", "Estacionamento"],
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=80",
    googleMapsUrl: "https://maps.google.com/?q=R.+Palestra+Itália,+500,+São+Paulo",
    wazeUrl: "https://waze.com/ul?q=R.+Palestra+Itália,+500,+São+Paulo",
  },
  {
    id: "metro-tatuape",
    name: "Carlo's Bakery Shopping Metrô Tatuapé",
    shortName: "Metrô Tatuapé",
    address: "R. Domingos Agostim, 91",
    neighborhood: "Cidade Mãe do Céu",
    city: "São Paulo",
    state: "SP",
    zipCode: "03306-010",
    phone: "(11) 91567-9337",
    whatsapp: "5511915679337",
    hours: {
      weekdays: "10h às 22h",
      saturday: "10h às 22h",
      sunday: "14h às 20h",
    },
    coordinates: { lat: -23.54, lng: -46.5764 },
    features: ["Shopping", "Próximo ao Metrô"],
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1200&q=80",
    googleMapsUrl: "https://maps.google.com/?q=R.+Domingos+Agostim,+91,+São+Paulo",
    wazeUrl: "https://waze.com/ul?q=R.+Domingos+Agostim,+91,+São+Paulo",
  },
  {
    id: "shopping-tambore",
    name: "Carlo's Bakery Shopping Tamboré",
    shortName: "Tamboré",
    address: "Av. Piracema, 669",
    neighborhood: "Tamboré",
    city: "Barueri",
    state: "SP",
    zipCode: "06460-030",
    phone: "(11) 91567-9392",
    whatsapp: "5511915679392",
    hours: {
      weekdays: "10h às 22h",
      saturday: "10h às 22h",
      sunday: "14h às 20h",
    },
    coordinates: { lat: -23.5089, lng: -46.8261 },
    features: ["Shopping", "Estacionamento", "Região Metropolitana"],
    image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=1200&q=80",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Piracema,+669,+Barueri",
    wazeUrl: "https://waze.com/ul?q=Av.+Piracema,+669,+Barueri",
  },
];

export const TOTAL_STORES = STORES.length;
export const FLAGSHIP_STORE = STORES.find((store) => store.isFlagship) ?? STORES[0];
export const WORKSHOP_STORE =
  STORES.find((store) => store.id === "vila-leopoldina") ?? STORES[1];
