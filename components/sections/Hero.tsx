'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { NeedleIcon } from '@/components/ui/NeedleIcon';

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: reduce
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative overflow-hidden bg-brand-ink text-brand-offwhite -mt-16 pt-16">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none flex items-center"
      >
        <NeedleIcon
          orientation="horizontal"
          size={1400}
          inkColor="#F5C000"
          eyeColor="#F5F4F0"
          className="-ml-32"
        />
      </div>

      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(245,192,0,0.18) 0%, rgba(245,192,0,0) 60%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:py-40"
      >
        <motion.div variants={item}>
          <Eyebrow tone="light" className="text-brand-yellow">
            Technology Consulting · Since 2009
          </Eyebrow>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-display max-w-4xl leading-[1.05]"
        >
          Transformative technology that{' '}
          <span className="text-brand-yellow">accelerates</span> your goals.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-body md:text-lg text-brand-offwhite/80"
        >
          Highstack partners with ambitious teams to turn complex business goals
          into software, platforms, and operating models that ship — and keep
          shipping long after we’re gone.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button href="/case-studies" variant="primary">
            View Our Work
          </Button>
          <Button href="/contact" variant="ghost">
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
