export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatarInitials: string;
  rating: 1 | 2 | 3 | 4 | 5;
  featured: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: 'tm-1',
    quote:
      'Highstack walked into a five-year platform problem and had a credible roadmap in three weeks. They didn’t just deliver — they made our team better at delivering, too.',
    author: 'Priya Anand',
    title: 'Chief Technology Officer',
    company: 'Northwind Logistics',
    avatarInitials: 'PA',
    rating: 5,
    featured: true,
  },
  {
    id: 'tm-2',
    quote:
      'The clearest thinking we’ve had on the table in years. Highstack’s strategy work paid for itself before the first quarter of execution was done.',
    author: 'Marcus Trent',
    title: 'VP, Engineering',
    company: 'Aurora Financial',
    avatarInitials: 'MT',
    rating: 5,
    featured: true,
  },
  {
    id: 'tm-3',
    quote:
      'They embedded with our engineers like teammates, not consultants. The cloud migration came in under budget and finished a month early.',
    author: 'Elena Vasquez',
    title: 'Director of Platform',
    company: 'Cedar Health Systems',
    avatarInitials: 'EV',
    rating: 5,
    featured: true,
  },
  {
    id: 'tm-4',
    quote:
      'Highstack is the rare consulting partner that says no when no is the right answer. That trust is why we keep bringing them back.',
    author: 'James Okonkwo',
    title: 'Head of Product',
    company: 'Lattice Robotics',
    avatarInitials: 'JO',
    rating: 5,
    featured: false,
  },
  {
    id: 'tm-5',
    quote:
      'Our data team had been promising dashboards for two years. Highstack shipped a working warehouse and a clear handoff plan in ten weeks.',
    author: 'Sara Lindqvist',
    title: 'COO',
    company: 'Beacon Energy',
    avatarInitials: 'SL',
    rating: 5,
    featured: false,
  },
];
