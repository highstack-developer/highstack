type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
};

/**
 * Section eyebrow — short horizontal yellow rule + uppercase label in Outfit 700.
 * Used above section headings throughout the site to establish hierarchy.
 */
export function Eyebrow({ children, className, tone = 'dark' }: EyebrowProps) {
  const textColor = tone === 'dark' ? 'text-brand-ink' : 'text-brand-offwhite';
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <span
        aria-hidden="true"
        className="inline-block h-[2px] w-5 bg-brand-yellow"
      />
      <span
        className={`text-label uppercase tracking-[0.10em] font-bold ${textColor}`}
      >
        {children}
      </span>
    </div>
  );
}
