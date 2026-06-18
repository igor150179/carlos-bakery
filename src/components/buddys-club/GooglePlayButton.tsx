"use client";

type GooglePlayButtonProps = {
  href?: string;
  eyebrow: string;
  label: string;
};

export function GooglePlayButton({
  href = "#",
  eyebrow,
  label,
}: GooglePlayButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex min-w-48 items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-[0_12px_30px_rgba(15,11,8,0.18)] transition-transform duration-300 hover:scale-105"
      aria-label={`${eyebrow} ${label}`}
    >
      <svg className="size-8" viewBox="0 0 48 48" aria-hidden>
        <path fill="#00f0ff" d="M8 5.5v37l20.5-18.6L8 5.5Z" />
        <path fill="#00d46a" d="m28.5 23.9 6.1-5.5L10.5 4.7c-1.3-.7-2.5-.1-2.5.8l20.5 18.4Z" />
        <path fill="#ffd400" d="m28.5 23.9-20.5 18.6c0 .9 1.2 1.5 2.5.8l24.1-13.7-6.1-5.7Z" />
        <path fill="#ff4b55" d="m34.6 18.4-6.1 5.5 6.1 5.7 4.5-2.6c2.2-1.3 2.2-4.4 0-5.7l-4.5-2.9Z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block font-sans text-xs text-white/80">{eyebrow}</span>
        <span className="block font-sans text-lg font-semibold">{label}</span>
      </span>
    </a>
  );
}
