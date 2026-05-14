import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

type Step = {
  num: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    num: '01',
    title: 'Discover',
    description:
      'We listen first. Time with leadership, time with operators, and a clear-eyed look at the system as it is — not the version on the architecture diagram.',
  },
  {
    num: '02',
    title: 'Design',
    description:
      'Options, trade-offs, and a recommendation we’re willing to defend. We surface what we’re unsure about, not just what we are.',
  },
  {
    num: '03',
    title: 'Build',
    description:
      'Senior engineers shipping working software in short cycles. Your team is in the room — and increasingly running the room — from day one.',
  },
  {
    num: '04',
    title: 'Deliver',
    description:
      'Handover that holds up. Documentation, runbooks, and a team that can keep the system healthy long after our last week on the engagement.',
  },
];

export function Process() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-3 text-h1 max-w-2xl text-brand-ink">
            Four phases. No surprises.
          </h2>
          <p className="mt-4 max-w-2xl text-body text-brand-ink/70">
            Every engagement follows the same shape so you always know where we
            are and what comes next.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-brand-ink/15"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.08}>
                <li className="relative">
                  <div className="relative w-14 h-14 rounded-full bg-brand-yellow text-brand-ink flex items-center justify-center font-bold text-lg z-10">
                    {step.num}
                  </div>
                  <h3 className="mt-5 text-h2 text-brand-ink">{step.title}</h3>
                  <p className="mt-3 text-sm text-brand-ink/75 leading-relaxed">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
