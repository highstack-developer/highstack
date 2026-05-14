import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'ink';

const BASE =
  'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-none transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-brand-yellow text-brand-ink hover:bg-brand-yellow/90',
  secondary:
    'bg-brand-offwhite text-brand-ink hover:bg-white',
  ghost:
    'bg-transparent text-brand-offwhite border border-brand-offwhite/40 hover:border-brand-yellow hover:text-brand-yellow',
  ink:
    'bg-brand-ink text-brand-offwhite hover:bg-brand-ink/90',
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  variant = 'primary',
  children,
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${BASE} ${VARIANTS[variant]} ${className ?? ''}`}
    >
      {children}
    </Link>
  );
}
