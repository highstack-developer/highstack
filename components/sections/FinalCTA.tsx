import { Button } from '@/components/ui/Button';
import { NeedleIcon } from '@/components/ui/NeedleIcon';
import { Reveal } from '@/components/ui/Reveal';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow text-brand-ink py-24 md:py-32">
      <div
        aria-hidden
        className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none"
      >
        <NeedleIcon orientation="vertical" size={420} inkColor="#1C1C2E" eyeColor="#1C1C2E" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <h2 className="text-display max-w-3xl mx-auto leading-[1.05]">
            Ready to accelerate your goals?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-body text-brand-ink/80">
            Tell us where you’re trying to get to. We’ll tell you, honestly,
            whether we can help — and if so, what the first three months look
            like.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="ink">
              Start a conversation
            </Button>
            <Button href="/case-studies" variant="secondary">
              See how we work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
