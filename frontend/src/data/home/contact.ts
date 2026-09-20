export interface FinalCtaContent {
  eyebrow: string
  heading: string
  body: string
  cta: { label: string; href: string }
  benefits: string[]
}

export const finalCta: FinalCtaContent = {
  eyebrow: 'Start Your Architectural Journey',
  heading: 'Let’s Bring Your Dream Project to Tangible Life.',
  body: 'Connect directly with our Karur and Hosur studios. Whether you speak Tamil, Telugu, Kannada, Hindi, or English, we collaborate in your native touch to resurrect your dream space with the Midas touch.',
  cta: { label: 'Connect With Our Design Team', href: '/contact-us' },
  benefits: [
    'Karur & Hosur Design Studios',
    'Free Architectural Discovery Session',
    'Polyglot South Indian Delivery',
  ],
}
