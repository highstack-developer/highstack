import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { caseStudies } from '@/data/caseStudies';
import { testimonials } from '@/data/testimonials';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return { title: 'Case Study Not Found' };
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: cs.title,
      description: cs.summary,
      type: 'article',
      url: `/case-studies/${cs.slug}`,
    },
  };
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0 mt-0.5 text-brand-yellow"
    >
      <path d="M4 12 L10 18 L20 6" />
    </svg>
  );
}

export default function CaseStudyDetail({ params }: { params: Params }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const related = caseStudies
    .filter((c) => c.slug !== cs.slug)
    .slice(0, 2);

  const testimonial = cs.testimonialId
    ? testimonials.find((t) => t.id === cs.testimonialId)
    : undefined;

  return (
    <>
      <section className="bg-brand-ink text-brand-offwhite -mt-16 pt-16">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-brand-offwhite/70 hover:text-brand-yellow transition-colors"
          >
            <span aria-hidden>←</span> Back to Case Studies
          </Link>
        </div>
      </section>

      <section
        aria-hidden
        className="h-[280px] md:h-[400px] w-full"
        style={{ backgroundColor: cs.coverColor }}
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex items-end pb-8">
          <span
            className={`text-label uppercase ${
              cs.coverColor === '#F5C000' ? 'text-brand-ink' : 'text-brand-yellow'
            }`}
          >
            {cs.industry}
          </span>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-ink/70">
              {cs.client}
            </div>
            <h1 className="mt-3 text-display max-w-4xl text-brand-ink leading-[1.1]">
              {cs.title}
            </h1>
            <p className="mt-6 max-w-3xl text-body text-brand-ink/75">
              {cs.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <Reveal>
              <article>
                <Eyebrow>Challenge</Eyebrow>
                <h2 className="mt-3 text-h1 text-brand-ink">
                  Where they were stuck.
                </h2>
                <p className="mt-5 text-body text-brand-ink/75 leading-relaxed">
                  {cs.challenge}
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <Eyebrow>Solution</Eyebrow>
                <h2 className="mt-3 text-h1 text-brand-ink">
                  How we approached it.
                </h2>
                <p className="mt-5 text-body text-brand-ink/75 leading-relaxed">
                  {cs.solution}
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <Eyebrow>Results</Eyebrow>
                <h2 className="mt-3 text-h1 text-brand-ink">
                  What changed for them.
                </h2>
                <ul className="mt-6 space-y-3">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-body text-brand-ink/85">
                      <CheckIcon />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <Eyebrow>Technologies</Eyebrow>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.technologies.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1 text-sm bg-brand-offwhite text-brand-ink rounded-full border border-brand-ink/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-brand-offwhite rounded-xl p-6">
              <div className="text-label uppercase text-brand-ink/70 mb-2">
                Client
              </div>
              <div className="text-h3 text-brand-ink">{cs.client}</div>
              <div className="mt-4 text-label uppercase text-brand-ink/70 mb-2">
                Industry
              </div>
              <div className="text-sm font-semibold text-brand-ink">
                {cs.industry}
              </div>
            </div>

            {testimonial && (
              <TestimonialCard testimonial={testimonial} variant="sidebar" />
            )}
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-offwhite py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <Eyebrow>More work</Eyebrow>
              <h2 className="mt-3 text-h1 text-brand-ink">Related case studies</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((r, idx) => (
                <Reveal key={r.id} delay={idx * 0.08}>
                  <CaseStudyCard caseStudy={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
