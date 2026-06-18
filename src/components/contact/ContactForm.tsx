"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { CustomSelect } from "@/components/ui/CustomSelect";
import { cn } from "@/lib/utils";

const SUBJECTS = ["press", "partnerships", "careers", "support", "other"] as const;

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const inputClassName =
  "w-full border-0 border-b border-champagne-on-dark-muted/40 bg-transparent py-3 font-sans text-cream-50 outline-none transition-colors placeholder:text-cream-50/40 focus-visible:border-b-brand-red-500";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        fullName: z.string().min(2, t("errors.fullName")),
        email: z.string().email(t("errors.email")),
        phone: z.string().optional(),
        subject: z.enum(SUBJECTS, { message: t("errors.subject") }),
        message: z.string().min(10, t("errors.message")).max(1000, t("errors.messageMax")),
        lgpd: z.boolean().refine((value) => value === true, {
          message: t("errors.lgpd"),
        }),
      }),
    [t],
  );

  type FormValues = z.infer<typeof schema>;

  const subjectOptions = useMemo(
    () =>
      SUBJECTS.map((subject) => ({
        value: subject,
        label: t(`subjects.${subject}`),
      })),
    [t],
  );

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      subject: "support",
      message: "",
      lgpd: false,
    },
  });

  const phoneValue = watch("phone") ?? "";
  const messageValue = watch("message") ?? "";

  const onSubmit = async (_data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex min-h-[520px] flex-col items-center justify-center rounded-sm border border-cream-50/10 bg-cream-50/5 p-10 text-center"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-carlo-red text-cream-50">
          <Check className="size-8" aria-hidden />
        </span>
        <h3 className="mt-6 font-display text-3xl text-cream-50">
          {t("success.title")}
        </h3>
        <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-cream-50/70">
          {t("success.body")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>
      <Field label={t("fields.fullName")} error={errors.fullName?.message}>
        <input className={inputClassName} autoComplete="name" {...register("fullName")} />
      </Field>
      <div className="grid gap-7 md:grid-cols-2">
        <Field label={t("fields.email")} error={errors.email?.message}>
          <input type="email" className={inputClassName} autoComplete="email" {...register("email")} />
        </Field>
        <Field label={t("fields.phone")} error={errors.phone?.message}>
          <input
            type="tel"
            inputMode="numeric"
            value={phoneValue}
            onChange={(event) => setValue("phone", formatPhone(event.target.value))}
            className={inputClassName}
            autoComplete="tel"
          />
        </Field>
      </div>
      <Field label={t("fields.subject")} error={errors.subject?.message}>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <CustomSelect
              value={field.value}
              onValueChange={field.onChange}
              options={subjectOptions}
              aria-invalid={!!errors.subject}
            />
          )}
        />
      </Field>
      <Field label={t("fields.message")} error={errors.message?.message}>
        <textarea
          rows={5}
          maxLength={1000}
          className={cn(inputClassName, "resize-none")}
          {...register("message")}
        />
        <p className="mt-2 text-right font-sans text-xs text-cream-50/50">
          {messageValue.length}/1000
        </p>
      </Field>
      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 size-4 rounded border-champagne-on-dark-muted/40 bg-transparent text-carlo-red focus-visible:ring-2 focus-visible:ring-champagne-on-dark"
            {...register("lgpd")}
          />
          <span className="font-sans text-sm leading-relaxed text-cream-50/70">
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-carlo-red px-8 py-5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-on-dark focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-900 disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
        {t("submit")}
        {!isSubmitting ? <ArrowRight className="size-4" aria-hidden /> : null}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-xs font-medium uppercase tracking-[0.2em] text-champagne-on-dark">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-2 block font-sans text-xs text-carlo-red" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
