import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

type CultureStatement = {
  title: string;
  description: string;
  icon: 'people' | 'craft' | 'balance';
};

const statements: CultureStatement[] = [
  {
    title: 'Senior people, end to end',
    description:
      'No bait-and-switch. The principals who scope your engagement are the ones who deliver it — and the ones who pick up the phone three years later.',
    icon: 'people',
  },
  {
    title: 'Craft over volume',
    description:
      'We turn down work that isn’t a fit so we can do the work that is. Slower hiring, longer engagements, fewer logos on the wall.',
    icon: 'craft',
  },
  {
    title: 'Hard conversations early',
    description:
      'We’d rather have the uncomfortable conversation in week one than in month six. Honesty is faster — and it’s the only way the relationship survives.',
    icon: 'balance',
  },
];

function Icon({ name }: { name: CultureStatement['icon'] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'people':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 19 a6 6 0 0 1 12 0" />
          <path d="M14 19 a5 5 0 0 1 8 0" />
        </svg>
      );
    case 'craft':
      return (
        <svg {...common}>
          <path d="M12 3 v3" />
          <path d="M5 9 a7 7 0 0 1 14 0 v3 a7 7 0 0 1 -14 0 z" />
          <path d="M9 18 h6" />
          <path d="M10 21 h4" />
        </svg>
      );
    case 'balance':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12 h18" />
          <path d="M12 3 v18" />
        </svg>
      );
  }
}

export function Culture() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>How we work together</Eyebrow>
          <h2 className="mt-3 text-h1 max-w-2xl text-brand-ink">
            The culture behind the work.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {statements.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.08}>
              <article className="flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow/15 rounded-md text-brand-ink">
                  <Icon name={s.icon} />
                </div>
                <h3 className="mt-5 text-h3 text-brand-ink">{s.title}</h3>
                <p className="mt-3 text-sm text-brand-ink/75 leading-relaxed">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
