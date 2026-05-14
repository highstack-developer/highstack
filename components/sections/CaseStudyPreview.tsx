import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

export function CaseStudyPreview() {
  const featured = caseStudies.filter((c) => c.featured).slice(0, 2);

  return (
    <section className="bg-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-3 text-h1 max-w-2xl text-brand-ink">
                Real engagements. Measurable outcomes.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-brand-ink hover:text-brand-yellow transition-colors inline-flex items-center gap-2 self-start md:self-end"
            >
              All case studies
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((cs, idx) => (
            <Reveal key={cs.id} delay={idx * 0.08}>
              <CaseStudyCard caseStudy={cs} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
