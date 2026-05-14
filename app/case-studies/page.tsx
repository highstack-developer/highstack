import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CaseStudiesIndex } from '@/components/sections/CaseStudiesIndex';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Selected Highstack engagements: platform modernization, cloud migrations, data warehouses, and the outcomes they delivered for our clients.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Real engagements, written up honestly."
        intro="A small selection of the projects we’re proudest of. We share what worked, what we’d do differently, and the measurable outcomes our clients can point to."
      />
      <CaseStudiesIndex />
      <FinalCTA />
    </>
  );
}
