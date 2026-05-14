import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { services } from '@/data/services';

export function ServicesTeaser() {
  const featured = services.filter((s) => s.featured).slice(0, 4);

  return (
    <section className="bg-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-3 text-h1 max-w-2xl text-brand-ink">
            Senior teams solving the work that doesn’t outsource well.
          </h2>
          <p className="mt-4 max-w-2xl text-body text-brand-ink/70">
            Four practice areas that work together when the problem is big, and
            stand alone when it isn’t.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.08}>
              <article className="h-full bg-white rounded-xl p-7 transition-shadow hover:shadow-lg flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow/15 rounded-md text-brand-ink">
                  <ServiceIcon name={service.icon} size={26} />
                </div>
                <h3 className="mt-5 text-h3 text-brand-ink">{service.title}</h3>
                <p className="mt-3 text-sm text-brand-ink/75 leading-relaxed">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-ink">
                  {service.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-ink hover:text-brand-yellow transition-colors inline-flex items-center gap-2"
            >
              See all services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
