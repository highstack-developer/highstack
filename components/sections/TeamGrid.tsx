import { Reveal } from '@/components/ui/Reveal';
import { team } from '@/data/team';

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-3.96V9z" />
    </svg>
  );
}

export function TeamGrid() {
  return (
    <section className="bg-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, idx) => (
            <Reveal key={member.id} delay={idx * 0.06}>
              <article className="group h-full bg-white rounded-xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
                <div
                  aria-hidden
                  className="w-24 h-24 rounded-full bg-brand-ink text-brand-yellow flex items-center justify-center text-2xl font-bold transition-transform group-hover:scale-105"
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 text-h3 text-brand-ink">{member.name}</h3>
                <div className="mt-1 text-sm font-semibold text-brand-yellow uppercase tracking-wide">
                  {member.title}
                </div>
                <p className="mt-4 text-sm text-brand-ink/75 leading-relaxed">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-ink/5 text-brand-ink hover:bg-brand-ink hover:text-brand-yellow transition-colors"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
