import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Process } from '@/components/sections/Process';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Highstack delivers technology strategy, software development, digital transformation, cloud, data, and IT consulting — with senior people from end to end.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Six practice areas. One way of working."
        intro="We don’t do everything — we do the hard, slow-to-fix work that gets short-changed by larger firms. Each practice stands alone, and they’re strongest when they work together."
      />
      <ServicesGrid />
      <Process />
      <FinalCTA />
    </>
  );
}
