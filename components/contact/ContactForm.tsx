'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';

const SERVICES = [
  'Technology Strategy',
  'Software Development',
  'Digital Transformation',
  'Cloud Solutions',
  'Data & Analytics',
  'IT Consulting',
  'Not sure yet',
];

const SOURCES = [
  'Referral',
  'Search engine',
  'LinkedIn',
  'Existing client',
  'Conference / event',
  'Other',
];

function fieldClass(invalid: boolean) {
  return [
    'w-full rounded-sm border bg-white px-4 py-3 text-sm text-brand-ink',
    'transition-colors placeholder:text-brand-ink/40',
    'focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent',
    invalid ? 'border-red-500' : 'border-brand-ink/15',
  ].join(' ');
}

function Spinner() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className="animate-spin"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M22 12 A10 10 0 0 0 12 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function SuccessCheck() {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <motion.path
        d="M7 12 L11 16 L17 9"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
      />
    </motion.svg>
  );
}

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID || 'placeholder');
  const [touched, setTouched] = useState({
    name: false,
    company: false,
    email: false,
    message: false,
  });

  if (state.succeeded) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-brand-yellow/20 text-brand-ink flex items-center justify-center">
          <SuccessCheck />
        </div>
        <h3 className="mt-5 text-h2 text-brand-ink">Thanks — message received.</h3>
        <p className="mt-3 text-body text-brand-ink/75">
          We typically respond within one business day. We’ll be in touch
          shortly at the email address you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-white p-7 md:p-9 space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-label uppercase text-brand-ink/70 mb-2">
            Full name <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            className={fieldClass(false)}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-label uppercase text-brand-ink/70 mb-2">
            Company <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            aria-required="true"
            onBlur={() => setTouched((t) => ({ ...t, company: true }))}
            className={fieldClass(false)}
            placeholder="Acme Inc."
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-label uppercase text-brand-ink/70 mb-2">
            Email <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={fieldClass(false)}
            placeholder="jane@acme.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-label uppercase text-brand-ink/70 mb-2">
            Phone <span className="text-brand-ink/40 normal-case">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass(false)}
            placeholder="+1 416 555 0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-label uppercase text-brand-ink/70 mb-2">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className={fieldClass(false)}
        >
          <option value="" disabled>Choose one</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-label uppercase text-brand-ink/70 mb-2">
          Message <span aria-hidden className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={5}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          className={fieldClass(false)}
          placeholder="What are you trying to do? What’s gotten in the way so far?"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label htmlFor="source" className="block text-label uppercase text-brand-ink/70 mb-2">
          How did you hear about us? <span className="text-brand-ink/40 normal-case">(optional)</span>
        </label>
        <select
          id="source"
          name="source"
          defaultValue=""
          className={fieldClass(false)}
        >
          <option value="" disabled>Choose one</option>
          {SOURCES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <AnimatePresence>
        {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
          <motion.div
            role="alert"
            aria-live="polite"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-600"
          >
            Something went wrong sending your message. Please try again or
            email us directly at info@highstack.ca.
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-ink text-brand-offwhite text-sm font-semibold rounded-none hover:bg-brand-ink/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <>
            <Spinner />
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </button>

      {!FORMSPREE_ID && (
        <p className="text-xs text-brand-ink/70 italic">
          Note: Formspree is not yet configured. Submissions will fail until
          NEXT_PUBLIC_FORMSPREE_ID is set in <code>.env.local</code>.
        </p>
      )}
    </form>
  );
}
