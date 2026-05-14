'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

const ALL = 'All' as const;

export function CaseStudiesIndex() {
  const industries = useMemo(
    () => [ALL, ...Array.from(new Set(caseStudies.map((c) => c.industry)))],
    [],
  );
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(
    () =>
      active === ALL
        ? caseStudies
        : caseStudies.filter((c) => c.industry === active),
    [active],
  );

  return (
    <section className="bg-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          role="tablist"
          aria-label="Filter case studies by industry"
          className="flex flex-wrap gap-2"
        >
          {industries.map((ind) => {
            const selected = ind === active;
            return (
              <button
                key={ind}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(ind)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  selected
                    ? 'bg-brand-ink text-brand-offwhite'
                    : 'bg-white text-brand-ink/80 hover:text-brand-ink'
                }`}
              >
                {ind}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((cs, idx) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.05 } }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <CaseStudyCard caseStudy={cs} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-brand-ink/70">
            No case studies match this filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
