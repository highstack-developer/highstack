import { Eyebrow } from '@/components/ui/Eyebrow';
import { NeedleIcon } from '@/components/ui/NeedleIcon';

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <NeedleIcon orientation="vertical" size={80} ariaLabel="Highstack" />
        </div>
        <Eyebrow className="justify-center mb-4">Phase 1 · Foundation</Eyebrow>
        <h1 className="text-display text-brand-ink">Highstack</h1>
        <p className="text-body text-brand-ink/70 mt-4 max-w-md mx-auto">
          Navigation, layout, and design system live. Core pages incoming in Phase 2.
        </p>
      </div>
    </section>
  );
}
