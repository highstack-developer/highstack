import { Hero } from '@/components/sections/Hero';
import { ServicesTeaser } from '@/components/sections/ServicesTeaser';
import { TestimonialsStrip } from '@/components/sections/TestimonialsStrip';
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <TestimonialsStrip />
      <CaseStudyPreview />
      <FinalCTA />
    </>
  );
}
