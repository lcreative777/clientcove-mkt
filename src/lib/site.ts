export const SITE = {
  name: 'ClientCove',
  domain: 'clientcove.io',
  url: 'https://clientcove.io',
  tagline: 'The #1 Client Management Portal',
  description:
    'The licensed, self-hosted client portal for service businesses. One branded portal for every client, every project, every invoice. Pay once. Own forever.',
  twitter: '@clientcove',
  email: 'hello@clientcove.io',
  defaultOgImage: '/og-default.svg',
  pricing: {
    single: { name: 'Single Site', price: 497, yearlyUpdates: 97 },
    agency: { name: 'Agency License', price: 997, yearlyUpdates: 297 },
  },
};

export const NAV_PRIMARY = [
  { label: 'Features', href: '/features' },
  { label: 'Industries', href: '/industries' },
  { label: 'Current', href: '/current' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export const SOLUTIONS = [
  { slug: 'agencies', name: 'Marketing & creative agencies', body: 'Show clients the work, not the back-end.', icon: '◐' },
  { slug: 'msps', name: 'IT & MSP providers', body: 'Tickets, assets, locations, contracts.', icon: '⌘' },
  { slug: 'law-firms', name: 'Law firms', body: 'Document custody and signature workflows.', icon: '§' },
  { slug: 'accountants', name: 'Accountants & bookkeepers', body: 'Engagements, deliverables, secure docs.', icon: '$' },
  { slug: 'property-managers', name: 'Property & facilities', body: 'Locations, work orders, recurring schedules.', icon: '◇' },
  { slug: 'consultants', name: 'Consultants & coaches', body: 'Engagements, deliverables, time logs.', icon: '◎' },
];
