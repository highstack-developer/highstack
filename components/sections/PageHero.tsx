import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { NeedleIcon } from '@/components/ui/NeedleIcon';

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-brand-offwhite -mt-16 pt-16">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-end"
      >
        <NeedleIcon
          orientation="horizontal"
          size={1200}
          inkColor="#F5C000"
          eyeColor="#F5F4F0"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow tone="light" className="text-brand-yellow">
            {eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 text-display max-w-3xl leading-[1.05]">{title}</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-body text-brand-offwhite/80">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
