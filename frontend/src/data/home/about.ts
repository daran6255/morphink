export interface AboutTeaserContent {
  eyebrow: string
  heading: string
  body: string
  highlight: string
  morpheusMeaning: {
    origin: string
    inkTool: string
    slogan: string
  }
  logoStory: string
  languages: string[]
  hubs: string[]
  cta: { label: string; href: string }
}

export const aboutTeaser: AboutTeaserContent = {
  eyebrow: 'Our Origin & Identity',
  heading: 'From "Morpheus" (God of Dreams) to "Ink" (The Medium of Creation).',
  body: 'In ancient Greek mythology, Morpheus is the god of dreams. Beholding his root name "Morph" and combining it with the ultimate material that helps us visualize our thoughts—"Ink"—MORPHINK is the key to getting your deepest dreams visualized and built.',
  highlight:
    'Every project we craft carries our signature "Midas touch"—designed with contemporary sustainability, earth materials, and crafted to be loved at first nuance.',
  morpheusMeaning: {
    origin: 'Morpheus — Ancient Greek God of Dreams (To Morph / Shape)',
    inkTool: 'Ink — The ultimate medium to draw, calculate & visualize',
    slogan: 'MORPHINK: The key to bringing architectural dreams into tangible reality.',
  },
  logoStory:
    'Our logo symbolizes the sacred connectivity between the client and the architect as we collaborate on your dream project. It embodies the structural "M" from Morph and the precise pen nib for Ink.',
  languages: ['Tamil', 'Telugu', 'Kannada', 'Hindi', 'English'],
  hubs: ['Karur Studio', 'Hosur Studio', 'South India Region'],
  cta: { label: 'Explore Our Story & Philosophy', href: '/about/our-story' },
}
