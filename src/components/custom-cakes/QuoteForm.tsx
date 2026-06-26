"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { EVENT_TYPES, GUEST_RANGES } from "@/data/custom-cakes";
import { cn } from "@/lib/utils";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="mb-2 block font-sans text-xs font-medium uppercase tracking-[0.2em] text-carlo-gold"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 font-sans text-xs text-carlo-red" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClassName =
  "w-full border-b border-espresso-300 bg-transparent py-3 font-sans text-espresso-900 outline-none transition-colors placeholder:text-espresso-600/50 focus:border-carlo-red";

export function QuoteForm() {
  const t = useTranslations("customCakes.form");
  const [submitted, setSubmitted] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        fullName: z.string().min(2, t("errors.fullName")),
        email: z.string().email(t("errors.email")),
        phone: z
          .string()
          .min(14, t("errors.phone"))
          .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, t("errors.phone")),
        eventType: z.enum(EVENT_TYPES, { message: t("errors.eventType") }),
        eventDate: z
          .string()
          .min(1, t("errors.eventDate"))
          .refine((value) => {
            const selected = new Date(value);
            const min = new Date();
            min.setDate(min.getDate() + 14);
            min.setHours(0, 0, 0, 0);
            return selected >= min;
          }, t("errors.eventDateMin")),
        guests: z.enum(GUEST_RANGES, { message: t("errors.guests") }),
        message: z.string().max(500, t("errors.message")),
        lgpd: z.boolean().refine((value) => value === true, {
          message: t("errors.lgpd"),
        }),
      }),
    [t],
  );

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      eventType: "wedding",
      guests: "30to80",
      message: "",
      lgpd: false,
    },
  });

  const phoneValue = watch("phone") ?? "";

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-sm border border-espresso-900/10 bg-cream-50/80 p-10 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-carlo-red text-cream-50">
          <Check className="size-8" strokeWidth={2} aria-hidden />
        </span>
        <h3 className="mt-6 font-display text-2xl text-espresso-900">
          {t("success.title")}
        </h3>
        <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-espresso-700">
          {t("success.body")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-sm border border-espresso-900/10 bg-cream-50/50 p-6 md:p-10"
      noValidate
    >
      <Field id="fullName" label={t("fields.fullName")} error={errors.fullName?.message}>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          className={inputClassName}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName")}
        />
      </Field>

      <Field id="email" label={t("fields.email")} error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClassName}
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </Field>

      <Field id="phone" label={t("fields.phone")} error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          inputMode="numeric"
          value={phoneValue}
          onChange={(e) => setValue("phone", formatPhone(e.target.value), { shouldValidate: true })}
          className={inputClassName}
          aria-invalid={!!errors.phone}
        />
      </Field>

      <div className="grid gap-8 md:grid-cols-2">
        <Field id="eventType" label={t("fields.eventType")} error={errors.eventType?.message}>
          <select
            id="eventType"
            className={cn(inputClassName, "cursor-pointer")}
            {...register("eventType")}
          >
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {t(`eventTypes.${type}`)}
              </option>
            ))}
          </select>
        </Field>

        <Field id="eventDate" label={t("fields.eventDate")} error={errors.eventDate?.message}>
          <input
            id="eventDate"
            type="date"
            className={inputClassName}
            {...register("eventDate")}
          />
        </Field>
      </div>

      <Field id="guests" label={t("fields.guests")} error={errors.guests?.message}>
        <select id="guests" className={cn(inputClassName, "cursor-pointer")} {...register("guests")}>
          {GUEST_RANGES.map((range) => (
            <option key={range} value={range}>
              {t(`guestRanges.${range}`)}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label={t("fields.message")} error={errors.message?.message}>
        <textarea
          id="message"
          rows={4}
          maxLength={500}
          placeholder={t("fields.messagePlaceholder")}
          className={cn(inputClassName, "resize-none")}
          {...register("message")}
        />
      </Field>

      <Field id="references" label={t("fields.references")}>
        <input
          id="references"
          type="file"
          accept="image/*"
          multiple
          className="w-full font-sans text-sm text-espresso-700 file:mr-4 file:rounded-full file:border-0 file:bg-carlo-red-900/5 file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-wider file:text-espresso-900"
        />
        <p className="mt-2 font-sans text-xs text-espresso-600">{t("fields.referencesHint")}</p>
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 size-4 rounded border-espresso-300 text-carlo-red focus:ring-carlo-gold"
            {...register("lgpd")}
          />
          <span className="font-sans text-sm leading-relaxed text-espresso-700">
            {t("fields.lgpd")}
          </span>
        </label>
        {errors.lgpd ? (
          <p className="mt-2 font-sans text-xs text-carlo-red" role="alert">
            {errors.lgpd.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-carlo-red py-5 font-sans text-sm font-semibold uppercase tracking-wider text-cream-50 transition-colors hover:bg-carlo-red-dark disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden />
            {t("submitting")}
          </>
        ) : (
          <>
            {t("submit")}
            <ArrowRight className="size-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
