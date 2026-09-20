export interface FoundationTeaserContent {
  eyebrow: string
  heading: string
  body: string
  cta: { label: string; href: string }
}

export const foundationTeaser: FoundationTeaserContent = {
  eyebrow: 'Morphink Vision',
  heading: 'Design With a Built-In Purpose',
  body: 'At Morphink Architecture, every project is guided by a commitment to sustainable design, community benefit, and long-term environmental responsibility. We believe buildings should serve not just their owners, but the neighborhoods and cities they inhabit.',
  cta: { label: 'Learn About Our Values', href: '/about/our-story' },
}
