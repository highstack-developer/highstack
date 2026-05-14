export type CoreValueIcon =
  | 'customer'
  | 'innovation'
  | 'excellence'
  | 'simplicity'
  | 'collaboration';

export type CoreValue = {
  id: string;
  title: string;
  description: string;
  icon: CoreValueIcon;
};

export const coreValues: CoreValue[] = [
  {
    id: 'customer',
    title: 'Customer Obsession',
    description:
      'Every decision starts with the client outcome. We push back when we have to, follow through when it matters, and measure ourselves on results — not deliverables.',
    icon: 'customer',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'We treat technology choices as a craft. New patterns, mature tools, and the willingness to say "we don’t know yet" are how we keep our recommendations honest.',
    icon: 'innovation',
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description:
      'Senior people doing senior work. We hold ourselves to the standards we’d want from a partner we trusted with a critical project — and we don’t apologize for being slower when slower is right.',
    icon: 'excellence',
  },
  {
    id: 'simplicity',
    title: 'Simplicity',
    description:
      'Complexity is a tax our clients pay every day. We design for what can be removed, not what can be added — fewer moving parts, clearer ownership, smaller blast radius.',
    icon: 'simplicity',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description:
      'We work alongside your teams, not in parallel to them. The best outcomes come when the client team can keep building long after our engagement ends.',
    icon: 'collaboration',
  },
];
