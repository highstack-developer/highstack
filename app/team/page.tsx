import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { TeamGrid } from '@/components/sections/TeamGrid';
import { Culture } from '@/components/sections/Culture';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the senior consultants, engineers, and architects behind Highstack — the people you’ll actually work with on every engagement.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="The people behind every engagement."
        intro="Highstack is a small, senior team by design. The principals you meet in the sales conversation are the ones who run the work — and stay close long after we’re gone."
      />
      <TeamGrid />
      <Culture />
      <FinalCTA />
    </>
  );
}
