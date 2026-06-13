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
  accountUrl: 'https://account.clientcove.io',
  subscribeUrl: 'https://account.clientcove.io/subscribe',
  // NOTE: confirm the live AffiliateWP signup path on account.clientcove.io
  affiliateUrl: 'https://account.clientcove.io/affiliates',
  // Legacy shape — kept so the archived /v1 homepage still builds.
  // Live pages read CORE_LICENSES / CURRENT_TIERS below.
  pricing: {
    single: { name: 'Single Site', price: 349, yearlyUpdates: 99 },
    agency: { name: 'Agency / Unlimited', price: 949, yearlyUpdates: 199 },
  },
};

// Founder launch window — introductory core pricing + first month of Wave free.
const LAUNCH_ENDS_ISO = '2026-09-01';
export const LAUNCH = {
  // Computed at build time (midnight Pacific on the end date). Any deploy on or
  // after the cutoff reverts the site to regular pricing automatically — a
  // scheduled job triggers a rebuild on that date so it flips without a manual push.
  active: Date.now() < Date.parse(`${LAUNCH_ENDS_ISO}T00:00:00-07:00`),
  endsISO: LAUNCH_ENDS_ISO,
  endsLabel: 'September 1, 2026',
  endsShort: 'Sep 1, 2026',
  bonus: 'First month of Current Wave free',
};

// ── Core software (one-time license + optional annual renewal) ──────────────
export const CORE_LICENSES = [
  {
    id: 'single',
    name: 'Single Site',
    regular: 349,
    launch: 249,
    renewal: 149,
    sites: '1 website',
    blurb: 'Best for freelancers & small teams.',
  },
  {
    id: 'three',
    name: '3-Site License',
    regular: 749,
    launch: 549,
    renewal: 199,
    sites: 'Up to 3 websites',
    blurb: 'Strong value versus three single licenses.',
  },
  {
    id: 'developer',
    name: 'Developer License',
    regular: 799,
    launch: 599,
    renewal: 199,
    sites: 'Up to 12 sites',
    blurb: 'Up to 12 client sites you build for others (not for resale).',
    recommended: true,
  },
  {
    id: 'agency',
    name: 'Agency / Unlimited',
    regular: 949,
    launch: 749,
    renewal: 299,
    sites: 'Unlimited sites',
    blurb: 'White-label & agency use across unlimited installs.',
  },
] as const;

// Scarce founder anchor — one-time, unlimited, resale, lifetime Core updates
// (no annual renewal). Shown only while LAUNCH.active, so it retires with the
// launch window. Current (the AI layer) stays a separate monthly subscription.
export const FOUNDERS_LIFETIME = {
  id: 'founders',
  name: 'Unlimited Founders',
  price: 1299,
  sites: 'Unlimited sites',
  feats: [
    'Unlimited production sites',
    'White-label resale rights',
    'Lifetime Core updates — no annual renewal, ever',
    'First month of Current Wave free',
  ],
  note: 'Limited founder edition — retires when the launch window closes.',
};

// ── Current — recurring AI-powered utility services (stacked tiers) ─────────
// Each tier includes everything in the tier below it. Wave is the hero:
// the MCP server + AI agent that does real work inside the portal.
export const CURRENT_TIERS = [
  {
    id: 'ripple',
    name: 'Ripple',
    monthly: 19,
    annual: 190,
    positioning: 'Entry level',
    tagline: 'Email that delivers, real-time that just works.',
    feats: [
      'Transactional email (deliverability handled)',
      'Real-time updates & presence (Pusher)',
      'In-app + email notifications',
    ],
  },
  {
    id: 'wave',
    name: 'Wave',
    monthly: 39,
    annual: 390,
    positioning: 'Recommended for most',
    hero: true,
    tagline: 'The AI that lives inside your portal and does the work.',
    feats: [
      'Everything in Ripple',
      'Full MCP server — Claude works inside your portal',
      'AI agent: create tickets, manage assets, update projects',
      'Global Notes persistent memory',
      'Multi-client intelligence & scoping',
    ],
  },
  {
    id: 'surge',
    name: 'Surge',
    monthly: 89,
    annual: 890,
    positioning: 'Power users & teams',
    tagline: 'Maximum throughput and priority everything.',
    highlight: 'Priority support',
    feats: [
      'Everything in Wave',
      'Highest AI rate limits',
      'Priority AI queue',
      'Advanced memory',
      'Priority support',
    ],
  },
] as const;

// ── Affiliate & Ambassador programs (managed in account.clientcove.io) ──────
export const AFFILIATE = {
  coreCommission: 30, // % on one-time Core licenses
  currentCommission: 20, // % recurring on Current subscriptions (for the life of the subscription)
  cookieDays: 60,
  ambassador: {
    freeWaveMonths: 12,
    commissionLow: 35,
    commissionHigh: 40,
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
