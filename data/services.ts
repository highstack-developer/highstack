export type ServiceIcon =
  | 'strategy'
  | 'software'
  | 'transformation'
  | 'cloud'
  | 'data'
  | 'consulting';

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  outcome: string;
  icon: ServiceIcon;
  featured: boolean;
};

export const services: Service[] = [
  {
    id: 'strategy',
    slug: 'strategy',
    title: 'Technology Strategy',
    description:
      'We help executive teams turn ambitious business goals into clear, sequenced technology roadmaps — with the trade-offs surfaced, not buried.',
    outcome: 'A roadmap your board, engineers, and customers can all rally behind.',
    icon: 'strategy',
    featured: true,
  },
  {
    id: 'software',
    slug: 'software',
    title: 'Software Development',
    description:
      'Pragmatic, modern software built by senior engineers — from rapid prototypes that prove market fit to production systems that scale.',
    outcome: 'Software that ships on time and stays maintainable years later.',
    icon: 'software',
    featured: true,
  },
  {
    id: 'transformation',
    slug: 'transformation',
    title: 'Digital Transformation',
    description:
      'Modernize legacy systems and operating models without halting the business. We work alongside your team to deliver, not parachute in and disappear.',
    outcome: 'Lower run cost, faster delivery, and teams that can build on their own.',
    icon: 'transformation',
    featured: true,
  },
  {
    id: 'cloud',
    slug: 'cloud',
    title: 'Cloud Solutions',
    description:
      'AWS, Azure, and GCP architectures designed for reliability and cost discipline. Lift-and-shift, refactor, or greenfield — we right-size the approach.',
    outcome: 'Predictable cloud bills and platforms that scale with demand.',
    icon: 'cloud',
    featured: true,
  },
  {
    id: 'data',
    slug: 'data',
    title: 'Data & Analytics',
    description:
      'Modern data platforms, warehouses, and analytics that give your leaders one trusted source of truth — and your product teams the signals they need.',
    outcome: 'Decisions backed by data your team actually trusts.',
    icon: 'data',
    featured: false,
  },
  {
    id: 'consulting',
    slug: 'consulting',
    title: 'IT Consulting',
    description:
      'Independent technical advice when you need an outside perspective: vendor selection, architecture reviews, due diligence, and team coaching.',
    outcome: 'Confident decisions on the calls that are hardest to walk back.',
    icon: 'consulting',
    featured: false,
  },
];
