export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  featured: boolean;
  coverColor: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-northwind',
    slug: 'northwind-logistics-platform',
    title: 'Rebuilding a freight platform without stopping the trucks',
    client: 'Northwind Logistics',
    industry: 'Logistics',
    summary:
      'A six-year-old dispatch platform was buckling under growth. We replaced it module by module while operations ran 24/7 across five terminals.',
    challenge:
      'Northwind’s dispatch system had reached its limits — outages were monthly, every change took weeks of QA, and three previous rebuild attempts had stalled. The business could not afford a hard cutover.',
    solution:
      'We worked alongside Northwind’s engineers to strangle the legacy monolith one bounded context at a time. New services shipped behind feature flags; routing, billing, and EDI moved over in six waves over nine months. Every wave shipped with rollback rehearsals.',
    results: [
      'Zero customer-facing outages during the migration',
      '83% reduction in dispatch latency at peak load',
      '6× faster release cycle (weekly → multiple per day)',
      '$2.4M annual infrastructure savings',
    ],
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Kafka', 'Terraform'],
    testimonial: {
      quote:
        'Highstack walked into a five-year platform problem and had a credible roadmap in three weeks.',
      author: 'Priya Anand',
      title: 'CTO, Northwind Logistics',
    },
    featured: true,
    coverColor: '#1C1C2E',
  },
  {
    id: 'cs-aurora',
    slug: 'aurora-financial-data-platform',
    title: 'A trusted data platform for a 40-year-old asset manager',
    client: 'Aurora Financial',
    industry: 'Financial Services',
    summary:
      'Aurora’s analysts spent half their week reconciling spreadsheets. We delivered a regulator-ready data warehouse and a self-serve analytics layer.',
    challenge:
      'Aurora ran on dozens of overlapping spreadsheets and a tangled mesh of ad-hoc SQL. Compliance was getting harder, audits more painful, and analysts were leaving over the manual work.',
    solution:
      'A single, governed warehouse with lineage from source to dashboard. We designed the data model collaboratively with the analyst team, automated the daily reconciliation, and built a semantic layer so reports stayed consistent across teams.',
    results: [
      'Audit prep down from 6 weeks to 4 days',
      '92% of routine analyst queries now self-serve',
      'One source of truth for AUM, NAV, and exposure reporting',
      'Two senior analysts retained who had been close to leaving',
    ],
    technologies: ['Snowflake', 'dbt', 'Airflow', 'Looker', 'Python', 'AWS'],
    testimonial: {
      quote:
        'The clearest thinking we’ve had on the table in years. Highstack’s strategy work paid for itself before the first quarter of execution was done.',
      author: 'Marcus Trent',
      title: 'VP Engineering, Aurora Financial',
    },
    featured: true,
    coverColor: '#F5C000',
  },
  {
    id: 'cs-cedar',
    slug: 'cedar-health-cloud-migration',
    title: 'Moving a regional hospital system to the cloud without disruption',
    client: 'Cedar Health Systems',
    industry: 'Healthcare',
    summary:
      'A four-data-center footprint consolidated to AWS over eight months — HIPAA-compliant, under budget, and with no clinical downtime.',
    challenge:
      'Cedar’s data centers were aging out, leases were expiring, and clinical applications could not tolerate downtime. Two prior migration attempts had been called off mid-flight.',
    solution:
      'We led a phased migration with infrastructure-as-code from day one, ran identical staging environments for every workload, and rehearsed every cutover with the clinical operations team. Compliance and audit trails were baked in, not bolted on.',
    results: [
      'Zero unplanned clinical downtime',
      'Migration completed five weeks ahead of schedule',
      '38% lower total cost of ownership year-one',
      'Disaster recovery RTO reduced from 48h to 90 min',
    ],
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Datadog', 'HIPAA controls'],
    testimonial: {
      quote:
        'They embedded with our engineers like teammates, not consultants. The migration came in under budget and finished a month early.',
      author: 'Elena Vasquez',
      title: 'Director of Platform, Cedar Health',
    },
    featured: false,
    coverColor: '#F5F4F0',
  },
];
