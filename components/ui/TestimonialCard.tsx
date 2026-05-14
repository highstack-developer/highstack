import type { Testimonial } from '@/data/testimonials';

type Props = {
  testimonial: Testimonial;
  variant?: 'card' | 'sidebar';
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? '#F5C000' : 'none'}
          stroke="#F5C000"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 2 L15 9 L22 10 L17 15 L18 22 L12 18 L6 22 L7 15 L2 10 L9 9 Z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial, variant = 'card' }: Props) {
  return (
    <figure
      className={
        variant === 'card'
          ? 'h-full bg-white rounded-xl p-7 border-l-4 border-brand-yellow flex flex-col'
          : 'bg-brand-offwhite rounded-xl p-6 border-l-4 border-brand-yellow'
      }
    >
      <div
        aria-hidden
        className="text-brand-yellow text-5xl font-bold leading-none -mt-1"
      >
        &ldquo;
      </div>
      <blockquote className="mt-2 text-brand-ink/85 italic leading-relaxed text-sm">
        {testimonial.quote}
      </blockquote>
      <Stars count={testimonial.rating} />
      <figcaption className="mt-5 flex items-center gap-3">
        <div
          aria-hidden
          className="w-10 h-10 rounded-full bg-brand-ink text-brand-yellow flex items-center justify-center text-sm font-bold"
        >
          {testimonial.avatarInitials}
        </div>
        <div>
          <div className="text-sm font-semibold text-brand-ink leading-tight">
            {testimonial.author}
          </div>
          <div className="text-xs text-brand-ink/60">
            {testimonial.title} · {testimonial.company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
