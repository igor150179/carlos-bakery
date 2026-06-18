export function ChapterDivider() {
  return (
    <div
      className="flex items-center justify-center py-3 md:py-4"
      aria-hidden
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-carlo-gold/35 md:w-16" />
        <span className="font-display text-sm text-carlo-gold">✦</span>
        <span className="h-px w-12 bg-carlo-gold/35 md:w-16" />
      </div>
    </div>
  );
}
