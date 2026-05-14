import { Eyebrow } from '@/components/ui/Eyebrow';
import { NeedleIcon } from '@/components/ui/NeedleIcon';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <NeedleIcon orientation="vertical" size={80} ariaLabel="Highstack" />
        </div>
        <Eyebrow className="justify-center mb-4">Phase 1 · Foundation</Eyebrow>
        <h1 className="text-display text-brand-ink">Highstack</h1>
        <p className="text-body text-brand-ink/70 mt-4 max-w-md mx-auto">
          Design system live. Components inheriting Outfit + brand tokens. Pages incoming.
        </p>
      </div>
    </main>
  );
}
