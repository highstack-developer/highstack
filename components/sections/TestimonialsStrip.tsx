import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export function TestimonialsStrip() {
  const featured = testimonials.filter((t) => t.featured);

  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>What clients say</Eyebrow>
          <h2 className="mt-3 text-h1 max-w-2xl text-brand-ink">
            The kind of trust you don’t earn from slide decks.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 0.08}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
