import { Hero } from '@/components/sections/Hero';
import { ServicesTeaser } from '@/components/sections/ServicesTeaser';
import { TestimonialsStrip } from '@/components/sections/TestimonialsStrip';
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/JsonLd';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Highstack Inc.',
  legalName: 'Highstack Inc.',
  url: 'https://highstack.ca',
  logo: 'https://highstack.ca/assets/Highstack Logo Dark.png',
  description:
    'Highstack is a technology consulting firm helping clients accelerate their goals with transformative software, cloud, and data solutions.',
  foundingDate: '2009',
  email: 'info@highstack.ca',
  areaServed: 'CA',
  sameAs: ['https://www.linkedin.com/company/highstack'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Highstack',
  url: 'https://highstack.ca',
  publisher: { '@type': 'Organization', name: 'Highstack Inc.' },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />
      <Hero />
      <ServicesTeaser />
      <TestimonialsStrip />
      <CaseStudyPreview />
      <FinalCTA />
    </>
  );
}
