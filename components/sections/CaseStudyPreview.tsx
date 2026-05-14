import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
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
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group block h-full bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-xl"
              >
                <div
                  aria-hidden
                  className="aspect-[16/9] w-full"
                  style={{ backgroundColor: cs.coverColor }}
                >
                  <div className="w-full h-full flex items-end p-6">
                    <span
                      className={`text-label uppercase ${
                        cs.coverColor === '#F5C000'
                          ? 'text-brand-ink'
                          : 'text-brand-yellow'
                      }`}
                    >
                      {cs.industry}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-ink/60">
                    {cs.client}
                  </div>
                  <h3 className="mt-2 text-h2 text-brand-ink group-hover:text-brand-ink/80 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-ink/75 leading-relaxed">
                    {cs.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink">
                    Read case study
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
