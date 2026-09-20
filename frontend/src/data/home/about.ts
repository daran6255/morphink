export interface AboutTeaserContent {
  eyebrow: string
  heading: string
  body: string
  highlight: string
  cta: { label: string; href: string }
}

export const aboutTeaser: AboutTeaserContent = {
  eyebrow: 'Who We Are',
  heading: 'Architecture That Shapes the Future.',
  body: "Morphink Architecture was founded on a belief that great spaces are born from the intersection of bold design and purposeful engineering. We are an architecture and building design studio specializing in parametric design, sustainable construction, and intelligent spatial planning — creating structures that are as beautiful as they are functional.",
  highlight:
    "Every project we take on reflects our commitment to precision, innovation, and spaces that genuinely enhance the way people live and work.",
  cta: { label: 'Read Our Story', href: '/about/our-story' },
}
