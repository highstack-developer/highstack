import type { CoreValueIcon as IconName } from '@/data/values';

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export function CoreValueIcon({ name, size = 26, className }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className,
  };

  switch (name) {
    case 'customer':
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6 A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
        </svg>
      );
    case 'innovation':
      return (
        <svg {...common}>
          <path d="M9 18 h6" />
          <path d="M10 21 h4" />
          <path d="M12 3 a6 6 0 0 1 4 10.5 V15 H8 v-1.5 A6 6 0 0 1 12 3 z" />
          <path d="M9 9 l3 3 l3 -3" />
        </svg>
      );
    case 'excellence':
      return (
        <svg {...common}>
          <path d="M12 2 L15 9 L22 10 L17 15 L18 22 L12 18 L6 22 L7 15 L2 10 L9 9 Z" />
        </svg>
      );
    case 'simplicity':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      );
    case 'collaboration':
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="3" />
          <circle cx="16" cy="9" r="3" />
          <path d="M3 20 a5 5 0 0 1 10 0" />
          <path d="M11 20 a5 5 0 0 1 10 0" />
        </svg>
      );
  }
}
