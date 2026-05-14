import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { MissionVision } from '@/components/sections/MissionVision';
import { Timeline } from '@/components/sections/Timeline';
import { Values } from '@/components/sections/Values';
import { Stats } from '@/components/sections/Stats';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Highstack is an independent technology consultancy founded in 2009. Senior people doing senior work — mission, values, and history.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Highstack"
        title="A consultancy built around the work, not the org chart."
        intro="Founded in 2009, Highstack is an independent technology partner for ambitious teams. We do senior work, end to end, and we stick around long enough to make sure it lands."
      />
      <MissionVision />
      <Timeline />
      <Values />
      <Stats />
      <FinalCTA />
    </>
  );
}
