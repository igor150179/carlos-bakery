"use client";

import type { ReactNode } from "react";

type DepartmentCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  email: string;
  cta: string;
  href?: string;
};

export function DepartmentCard({
  icon,
  title,
  description,
  email,
  cta,
  href,
}: DepartmentCardProps) {
  return (
    <a
      href={href ?? `mailto:${email}`}
      className="group block rounded-sm border border-espresso-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-carlo-gold hover:shadow-[0_24px_60px_rgba(15,11,8,0.1)] md:p-8"
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-carlo-red/10 text-carlo-red">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-2xl text-espresso-900">{title}</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-espresso-700">
        {description}
      </p>
      <p className="mt-5 break-all font-sans text-sm font-semibold text-espresso-900">
        {email}
      </p>
      <span className="mt-6 inline-flex font-sans text-sm font-semibold text-carlo-red">
        {cta}
      </span>
    </a>
  );
}
