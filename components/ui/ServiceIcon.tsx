import type { ServiceIcon as ServiceIconName } from '@/data/services';

type Props = {
  name: ServiceIconName;
  size?: number;
  className?: string;
};

const STROKE = 1.5;

export function ServiceIcon({ name, size = 28, className }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: STROKE,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className,
  };

  switch (name) {
    case 'strategy':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      );
    case 'software':
      return (
        <svg {...common}>
          <path d="M8 6 L3 12 L8 18" />
          <path d="M16 6 L21 12 L16 18" />
          <path d="M14 4 L10 20" />
        </svg>
      );
    case 'transformation':
      return (
        <svg {...common}>
          <path d="M4 7h12a4 4 0 0 1 0 8H8" />
          <path d="M7 4 L4 7 L7 10" />
          <path d="M17 14 L20 17 L17 20" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7 18 a5 5 0 0 1 0 -10 a6 6 0 0 1 11 1 a4 4 0 0 1 1 9 z" />
        </svg>
      );
    case 'data':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5 v6 a8 3 0 0 0 16 0 V5" />
          <path d="M4 11 v6 a8 3 0 0 0 16 0 V11" />
        </svg>
      );
    case 'consulting':
      return (
        <svg {...common}>
          <path d="M12 2 v3" />
          <path d="M5 9 a7 7 0 0 1 14 0 v3 a7 7 0 0 1 -14 0 z" />
          <path d="M9 18 h6" />
          <path d="M10 21 h4" />
        </svg>
      );
  }
}
