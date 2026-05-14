export type TeamMember = {
  id: string;
  name: string;
  title: string;
  initials: string;
  bio: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    id: 'sm-1',
    name: 'David Chen',
    title: 'Managing Partner',
    initials: 'DC',
    bio: 'Founded Highstack in 2009 after 12 years leading platform engineering at large enterprises. Plays a player-coach role on every engagement.',
    linkedin: 'https://linkedin.com/in/example',
  },
  {
    id: 'sm-2',
    name: 'Rachel Okafor',
    title: 'Partner, Strategy',
    initials: 'RO',
    bio: 'Leads our technology strategy practice. Former CTO of two scale-ups, with deep experience in financial services and healthcare.',
    linkedin: 'https://linkedin.com/in/example',
  },
  {
    id: 'sm-3',
    name: 'Jonas Lindberg',
    title: 'Principal Engineer',
    initials: 'JL',
    bio: 'Cloud and platform engineering lead. Holds AWS Solutions Architect Professional and has shipped infrastructure for some of Canada’s largest data migrations.',
    linkedin: 'https://linkedin.com/in/example',
  },
  {
    id: 'sm-4',
    name: 'Mei Tanaka',
    title: 'Principal, Data & Analytics',
    initials: 'MT',
    bio: 'Heads the data practice. Twelve years building warehouses, semantic layers, and analytics teams at firms that needed answers, not dashboards.',
    linkedin: 'https://linkedin.com/in/example',
  },
  {
    id: 'sm-5',
    name: 'Andre Beaulieu',
    title: 'Director, Delivery',
    initials: 'AB',
    bio: 'Keeps every engagement on the rails. Twenty-year veteran of complex tech programs, with a knack for surfacing the issue everyone’s avoiding.',
    linkedin: 'https://linkedin.com/in/example',
  },
  {
    id: 'sm-6',
    name: 'Priya Sharma',
    title: 'Lead Architect',
    initials: 'PS',
    bio: 'Architecture lead for our most complex platform engagements. Specializes in legacy modernization and bounded-context migrations that don’t stall.',
    linkedin: 'https://linkedin.com/in/example',
  },
];
