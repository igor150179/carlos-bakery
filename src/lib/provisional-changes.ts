/**
 * Mudanças provisórias — registro central do que está oculto no site.
 *
 * Regra: nunca apagar código de funcionalidades provisoriamente desativadas.
 * Só marcar `hidden: true` aqui e condicionar a renderização com os helpers abaixo.
 *
 * Para restaurar: mude `hidden` para `false` (ou remova a entrada quando voltar ao normal).
 * Para saber o que está escondido: use getHiddenProvisionalChanges() ou pergunte ao agente.
 */

export type ProvisionalChange = {
  /** Identificador estável — use nos helpers isProvisionalHidden / isProvisionalVisible */
  id: string;
  /** Nome legível para consultas ("o que está escondido?") */
  label: string;
  /** O que o visitante deixa de ver */
  description: string;
  /** true = oculto provisoriamente */
  hidden: boolean;
  /** Data em que foi ocultado (ISO, ex: "2026-06-26") */
  hiddenSince?: string;
  /** Onde afeta o site (rotas, seções, arquivos) */
  locations: string[];
  /** Notas para reativar, se necessário */
  restoreNotes?: string;
};

export const PROVISIONAL_CHANGES = {
  buddysClub: {
    id: "buddys-club",
    label: "Buddy's Club",
    description:
      "Seção na home, item no menu, página /buddys-club e entrada no sitemap.",
    hidden: true,
    hiddenSince: "2026-06-18",
    locations: [
      "src/app/[locale]/page.tsx — BuddysClubSection",
      "src/lib/navigation.ts — item club",
      "src/app/[locale]/buddys-club/page.tsx — retorna 404",
      "src/app/sitemap.ts — rota removida",
    ],
    restoreNotes: "Defina hidden: false em buddysClub.",
  },
  storePhotos: {
    id: "store-photos",
    label: "Fotos das lojas",
    description:
      "Imagens nos cards da lista/grid, fundo do hero e foto da seção flagship em /lojas.",
    hidden: true,
    hiddenSince: "2026-06-26",
    locations: [
      "src/components/stores/StoreCard.tsx — thumbnail de cada loja",
      "src/components/stores/StoresPageContent.tsx — hero e FlagshipSection",
    ],
    restoreNotes: "Defina hidden: false em storePhotos.",
  },
  customCakesTestimonials: {
    id: "custom-cakes-testimonials",
    label: "Depoimentos — Bolos Personalizados",
    description:
      'Seção "O que dizem / Histórias que viraram memórias" em /bolos-personalizados.',
    hidden: true,
    hiddenSince: "2026-06-26",
    locations: [
      "src/components/custom-cakes/CustomCakesPageContent.tsx — TestimonialsSection",
    ],
    restoreNotes: "Defina hidden: false em customCakesTestimonials.",
  },
  customCakesQuoteForm: {
    id: "custom-cakes-quote-form",
    label: "Formulário de orçamento — Bolos Personalizados",
    description:
      "Formulário na seção Solicite seu orçamento em /bolos-personalizados (substituído por contatos da Vila Leopoldina).",
    hidden: true,
    hiddenSince: "2026-06-26",
    locations: [
      "src/components/custom-cakes/QuoteSection.tsx — QuoteForm",
    ],
    restoreNotes: "Defina hidden: false em customCakesQuoteForm.",
  },
  contactDepartments: {
    id: "contact-departments",
    label: "Departamentos por e-mail — Contato",
    description:
      "Cards Imprensa, Parcerias, Trabalhe Conosco e SAC em /contato (e-mails ainda não ativos).",
    hidden: true,
    hiddenSince: "2026-06-26",
    locations: [
      "src/components/contact/ContactPageContent.tsx — seção departments",
    ],
    restoreNotes: "Defina hidden: false em contactDepartments quando os e-mails estiverem ativos.",
  },
  story: {
    id: "story",
    label: "A História",
    description:
      "Item no menu, seção família na home, CTA do hero, página /a-historia e entrada no sitemap.",
    hidden: true,
    hiddenSince: "2026-06-26",
    locations: [
      "src/lib/navigation.ts — item story",
      "src/app/[locale]/page.tsx — FamilySection",
      "src/components/sections/HeroSection.tsx — CTA Nossa história",
      "src/app/[locale]/a-historia/page.tsx — retorna 404",
      "src/app/sitemap.ts — rota removida",
    ],
    restoreNotes: "Defina hidden: false em story.",
  },
} as const satisfies Record<string, ProvisionalChange>;

export type ProvisionalChangeKey = keyof typeof PROVISIONAL_CHANGES;

export function isProvisionalHidden(key: ProvisionalChangeKey): boolean {
  return PROVISIONAL_CHANGES[key].hidden;
}

export function isProvisionalVisible(key: ProvisionalChangeKey): boolean {
  return !PROVISIONAL_CHANGES[key].hidden;
}

/** Lista tudo que está oculto — use para responder "o que foi retirado?" */
export function getHiddenProvisionalChanges(): ProvisionalChange[] {
  return Object.values(PROVISIONAL_CHANGES).filter((change) => change.hidden);
}

/** Resumo em texto para consulta rápida */
export function getProvisionalChangesSummary(): string {
  const hidden = getHiddenProvisionalChanges();
  if (hidden.length === 0) {
    return "Nenhuma mudança provisória ativa — tudo visível no site.";
  }
  return hidden
    .map(
      (change, index) =>
        `${index + 1}. ${change.label} (desde ${change.hiddenSince ?? "data não registrada"})\n   ${change.description}\n   Onde: ${change.locations.join("; ")}`,
    )
    .join("\n\n");
}
