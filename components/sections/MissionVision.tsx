import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function MissionVision() {
  return (
    <section className="bg-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="h-full bg-white rounded-xl p-8 md:p-10">
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-3 text-h1 text-brand-ink">
              Relentless innovation, in service of our clients.
            </h2>
            <p className="mt-5 text-body text-brand-ink/75">
              At Highstack, our mission is to relentlessly innovate to empower
              our clients with transformative technology solutions. By placing
              our clients at the center of everything we do, we accelerate
              their success and redefine what’s possible.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full bg-brand-ink text-brand-offwhite rounded-xl p-8 md:p-10">
            <Eyebrow tone="light" className="text-brand-yellow">
              Vision
            </Eyebrow>
            <h2 className="mt-3 text-h1">
              Independent. Senior. Built to outlast the engagement.
            </h2>
            <p className="mt-5 text-body text-brand-offwhite/80">
              We aspire to be the partner clients call when the stakes are
              highest and the problem is genuinely hard — and the firm whose
              fingerprints they’re proud to point to ten years later.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
