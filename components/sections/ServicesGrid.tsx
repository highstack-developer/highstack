import { Reveal } from '@/components/ui/Reveal';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { services } from '@/data/services';

export function ServicesGrid() {
  return (
    <section className="bg-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.06}>
              <article
                id={service.slug}
                className="group h-full bg-white rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-brand-yellow/15 rounded-md text-brand-ink">
                    <ServiceIcon name={service.icon} size={28} />
                  </div>
                  <div>
                    <h3 className="text-h2 text-brand-ink">{service.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-body text-brand-ink/75 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-5 border-t border-brand-ink/10">
                  <div className="text-label uppercase text-brand-ink/50 mb-1">
                    Outcome
                  </div>
                  <p className="text-sm font-semibold text-brand-ink">
                    {service.outcome}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
