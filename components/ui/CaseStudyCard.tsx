import Link from 'next/link';
import type { CaseStudy } from '@/data/caseStudies';

type Props = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: Props) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block h-full bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-xl"
    >
      <div
        aria-hidden
        className="aspect-[16/9] w-full"
        style={{ backgroundColor: caseStudy.coverColor }}
      >
        <div className="w-full h-full flex items-end p-6">
          <span
            className={`text-label uppercase ${
              caseStudy.coverColor === '#F5C000'
                ? 'text-brand-ink'
                : 'text-brand-yellow'
            }`}
          >
            {caseStudy.industry}
          </span>
        </div>
      </div>
      <div className="p-7">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-ink/60">
          {caseStudy.client}
        </div>
        <h3 className="mt-2 text-h2 text-brand-ink group-hover:text-brand-ink/80 transition-colors">
          {caseStudy.title}
        </h3>
        <p className="mt-3 text-sm text-brand-ink/75 leading-relaxed">
          {caseStudy.summary}
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
  );
}
