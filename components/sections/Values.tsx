import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { CoreValueIcon } from '@/components/ui/CoreValueIcon';
import { coreValues } from '@/data/values';

export function Values() {
  return (
    <section className="bg-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-3 text-h1 max-w-2xl text-brand-ink">
            Five principles that shape how we work.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((v, idx) => (
            <Reveal key={v.id} delay={idx * 0.06}>
              <article className="h-full bg-white rounded-xl p-6 flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow/15 rounded-md text-brand-ink">
                  <CoreValueIcon name={v.icon} size={24} />
                </div>
                <h3 className="mt-4 text-h3 text-brand-ink">{v.title}</h3>
                <p className="mt-3 text-sm text-brand-ink/70 leading-relaxed">
                  {v.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
