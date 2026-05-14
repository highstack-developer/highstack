'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { timeline } from '@/data/timeline';

export function Timeline() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <Eyebrow>Our history</Eyebrow>
          <h2 className="mt-3 text-h1 max-w-2xl text-brand-ink">
            Fifteen years of shipping work we’re proud of.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <motion.span
            aria-hidden
            initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-brand-yellow"
          />

          <ul className="space-y-12">
            {timeline.map((m, idx) => {
              const isRight = idx % 2 === 0;
              return (
                <li key={m.year} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1 w-8 h-8 rounded-full bg-brand-yellow md:left-1/2 md:-translate-x-1/2 md:top-1 ring-4 ring-white flex items-center justify-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-ink" />
                  </span>

                  <Reveal
                    delay={idx * 0.05}
                    className={
                      isRight
                        ? 'md:col-start-2 md:pl-10'
                        : 'md:col-start-1 md:text-right md:pr-10'
                    }
                  >
                    <div className="text-label uppercase text-brand-yellow font-bold">
                      {m.year}
                    </div>
                    <h3 className="mt-2 text-h3 text-brand-ink">{m.title}</h3>
                    <p className="mt-2 text-sm text-brand-ink/75 leading-relaxed">
                      {m.description}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
