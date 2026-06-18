"use client";

import { motion } from "framer-motion";
import { CakeSlice, Gift, QrCode, Share2, Smartphone, Star, User } from "lucide-react";

import { cn } from "@/lib/utils";

export type AppScreen = "home" | "rewards" | "card" | "profile" | "birthday" | "drops" | "referral";

type PhoneMockupProps = {
  screen: AppScreen;
  variant?: "iphone" | "android";
  rotation?: number;
  className?: string;
};

const FLOAT = {
  y: [-8, 8, -8],
};

export function PhoneMockup({
  screen,
  variant = "iphone",
  rotation = -4,
  className,
}: PhoneMockupProps) {
  return (
    <motion.div
      className={cn("relative mx-auto w-[230px] sm:w-[270px] lg:w-[300px]", className)}
      animate={FLOAT}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ rotate: rotation }}
      whileHover={{ rotate: 0, scale: 1.02 }}
    >
      <div className="relative aspect-[9/19.5] rounded-[3rem] bg-gradient-to-br from-[#3f3f46] via-[#111114] to-black p-3 shadow-[0_30px_80px_-20px_rgba(15,11,8,0.42)]">
        <div className="absolute -left-1 top-24 h-8 w-1 rounded-r-md bg-zinc-700" />
        <div className="absolute -left-1 top-40 h-16 w-1 rounded-r-md bg-zinc-700" />
        <div className="absolute -right-1 top-32 h-16 w-1 rounded-l-md bg-zinc-700" />
        <div className="relative size-full overflow-hidden rounded-[2.45rem] bg-cream-50">
          {variant === "iphone" ? (
            <div className="absolute left-1/2 top-3 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-cream-100" />
          <div className="relative z-10 flex h-full flex-col px-4 pb-5 pt-12">
            <StatusBar />
            <AppHeader />
            <div className="mt-4 min-h-0 flex-1 overflow-hidden">
              {screen === "home" ? <HomeScreen /> : null}
              {screen === "rewards" ? <RewardsScreen /> : null}
              {screen === "card" ? <CardScreen /> : null}
              {screen === "profile" ? <ProfileScreen /> : null}
              {screen === "birthday" ? <BirthdayScreen /> : null}
              {screen === "drops" ? <DropsScreen /> : null}
              {screen === "referral" ? <ReferralScreen /> : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-2 font-sans text-[0.65rem] font-semibold text-espresso-900">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-2 w-3 rounded-sm bg-espresso-900/80" />
        <span className="h-2 w-5 rounded-sm border border-espresso-900/70">
          <span className="block h-full w-4 rounded-sm bg-espresso-900/80" />
        </span>
      </span>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="mt-5 flex items-center justify-between">
      <div>
        <p className="font-display text-lg leading-none text-carlo-red">Carlo&apos;s</p>
        <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-espresso-600">
          Buddy&apos;s Club
        </p>
      </div>
      <div className="flex size-9 items-center justify-center rounded-full bg-espresso-900 text-cream-50">
        <User className="size-4" aria-hidden />
      </div>
    </div>
  );
}

function PointsCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-carlo-red to-carlo-red-dark p-4 text-cream-50 shadow-[0_16px_35px_rgba(200,16,46,0.25)]">
      <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-cream-50/75">
        Seus pontos
      </p>
      <p className="mt-1 font-display text-5xl leading-none">2.847</p>
      <p className="mt-2 font-sans text-[0.7rem] text-cream-50/78">
        Faltam 153 pontos para seu próximo brinde
      </p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-cream-50/20">
        <motion.div
          className="h-full rounded-full bg-carlo-gold"
          initial={{ width: "20%" }}
          animate={{ width: "84%" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div>
      <PointsCard />
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          ["Recompensas", Gift],
          ["Carteira", Smartphone],
          ["Aniversário", CakeSlice],
          ["Indique", Star],
        ].map(([label, Icon]) => (
          <div key={String(label)} className="rounded-2xl bg-white p-3 shadow-sm">
            <Icon className="size-5 text-carlo-red" aria-hidden />
            <p className="mt-2 font-sans text-[0.72rem] font-semibold text-espresso-900">
              {String(label)}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-espresso-600">
        Ofertas para você
      </p>
      <div className="mt-3 flex gap-3">
        {["Cannoli", "Cupcake"].map((item) => (
          <div key={item} className="min-w-28 rounded-2xl bg-cream-100 p-3">
            <div className="h-14 rounded-xl bg-carlo-gold/30" />
            <p className="mt-2 font-sans text-xs font-semibold">{item}</p>
            <p className="font-sans text-[0.65rem] text-espresso-600">500 pts</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RewardsScreen() {
  return (
    <div>
      <p className="font-display text-3xl leading-tight text-espresso-900">Recompensas</p>
      <div className="mt-4 space-y-3">
        {["Cannoli clássico", "Cupcake aniversário", "15% em bolos"].map((item, i) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
            <div className="flex size-12 items-center justify-center rounded-xl bg-carlo-gold/20">
              <Gift className="size-5 text-carlo-red" aria-hidden />
            </div>
            <div>
              <p className="font-sans text-xs font-bold text-espresso-900">{item}</p>
              <p className="font-sans text-[0.65rem] text-espresso-600">{(i + 1) * 500} pts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardScreen() {
  return (
    <div>
      <p className="font-display text-3xl leading-tight text-espresso-900">Carteira</p>
      <div className="mt-4 rounded-3xl bg-espresso-900 p-5 text-cream-50">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-carlo-gold">Gold</p>
        <p className="mt-8 font-display text-4xl">2.847</p>
        <p className="font-sans text-xs text-cream-50/60">Buddy&apos;s points</p>
      </div>
      <div className="mt-4 rounded-3xl bg-white p-5 text-center shadow-sm">
        <QrCode className="mx-auto size-24 text-espresso-900" aria-hidden />
        <p className="mt-2 font-sans text-xs text-espresso-600">Apresente no caixa</p>
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div>
      <p className="font-display text-3xl leading-tight text-espresso-900">Perfil Gold</p>
      <div className="mt-5 rounded-3xl bg-white p-5 text-center shadow-sm">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-carlo-gold/25">
          <Star className="size-8 fill-carlo-gold text-carlo-gold" aria-hidden />
        </div>
        <p className="mt-3 font-sans text-sm font-bold">Cake Boss Status</p>
        <p className="mt-1 font-sans text-xs text-espresso-600">Benefícios VIP ativos</p>
      </div>
    </div>
  );
}

function BirthdayScreen() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-carlo-gold/30 to-cream-50 p-5 text-center">
      <CakeSlice className="mx-auto size-16 text-carlo-red" aria-hidden />
      <p className="mt-4 font-display text-3xl leading-tight text-espresso-900">
        Seu cupcake chegou
      </p>
      <p className="mt-2 font-sans text-xs text-espresso-600">Resgate em qualquer unidade</p>
    </div>
  );
}

function DropsScreen() {
  return (
    <div>
      <p className="font-display text-3xl leading-tight text-espresso-900">Drops</p>
      <div className="mt-4 rounded-3xl bg-carlo-red p-5 text-cream-50">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-cream-50/70">
          Acesso 48h antes
        </p>
        <p className="mt-3 font-display text-3xl leading-tight">Rainbow Cannoli</p>
        <button className="mt-5 rounded-full bg-cream-50 px-5 py-2 font-sans text-xs font-bold text-carlo-red">
          Reservar
        </button>
      </div>
    </div>
  );
}

function ReferralScreen() {
  return (
    <div>
      <p className="font-display text-3xl leading-tight text-espresso-900">Indique</p>
      <div className="mt-4 rounded-3xl bg-white p-5 shadow-sm">
        <Share2 className="size-8 text-carlo-red" aria-hidden />
        <p className="mt-4 font-sans text-xs uppercase tracking-[0.18em] text-espresso-600">
          Seu código
        </p>
        <p className="mt-2 rounded-2xl bg-cream-100 px-4 py-3 text-center font-display text-3xl tracking-widest">
          BUDDY500
        </p>
        <p className="mt-3 font-sans text-xs text-espresso-600">Vocês dois ganham 500 pontos</p>
      </div>
    </div>
  );
}
