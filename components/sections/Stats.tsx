'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: 'Years in business', value: 15, suffix: '+' },
  { label: 'Engagements delivered', value: 140, suffix: '+' },
  { label: 'Senior consultants', value: 32 },
  { label: 'Client repeat rate', value: 87, suffix: '%' },
];

function CountUp({ to, suffix, duration = 1.4 }: { to: number; suffix?: string; duration?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix ?? ''}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-brand-ink text-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow tone="light" className="text-brand-yellow">
          By the numbers
        </Eyebrow>
        <h2 className="mt-3 text-h1 max-w-2xl">
          Quiet, measurable proof of how we work.
        </h2>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-brand-yellow pl-5">
              <dt className="text-label uppercase text-brand-offwhite/75">
                {s.label}
              </dt>
              <dd className="mt-2 text-display text-brand-yellow leading-none">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
