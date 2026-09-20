export interface HeroCta {
  label: string
  href: string
}

export interface HeroBadge {
  label: string
  sublabel: string
}

export interface HeroStatCard {
  value: string
  label: string
  subtext: string
  iconType: 'compliance' | 'lived_experience' | 'audit'
}

export interface HeroContent {
  eyebrow: string
  headline: string
  headlineHighlight: string
  subheadline: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
  badges: HeroBadge[]
  stats: HeroStatCard[]
  locations: string[]
  languages: string[]
}

export const heroContent: HeroContent = {
  eyebrow: 'Karur • Hosur • South India',
  headline: 'Where Dreams Are Visualized',
  headlineHighlight: '& Built With Precision',
  subheadline:
    'From ancient mythology Morpheus (God of Dreams) to Ink (the tool to visualize): Morphink Architects bridges contemporary design with sustainable earth architecture. Crafting iconic residential, commercial, and landscape spaces with our signature Midas touch.',
  primaryCta: { label: 'Explore Landmark Projects', href: '/impact/success-stories' },
  secondaryCta: { label: 'Schedule Consultation', href: '/contact-us' },
  locations: ['Karur Studio', 'Hosur Studio', 'Projects Across South India'],
  languages: ['Tamil', 'Telugu', 'Kannada', 'Hindi', 'English'],
  badges: [
    { label: 'M.Arch Environmental', sublabel: 'Sustainable Earth Architecture' },
    { label: 'Polyglot Design Studio', sublabel: 'Tamil • Telugu • Kannada • Hindi • English' },
    { label: 'End-to-End Execution', sublabel: 'Architecture • Interior • Landscape • Branding' },
  ],
  stats: [
    {
      value: '100%',
      label: 'Native Touch',
      subtext: '5 South Indian Languages',
      iconType: 'lived_experience',
    },
    {
      value: 'M.Arch',
      label: 'Environmental Certified',
      subtext: 'Sustainable Green Architecture',
      iconType: 'compliance',
    },
    {
      value: 'Turnkey',
      label: 'Design to Execution',
      subtext: 'Bespoke Material Inventions',
      iconType: 'audit',
    },
  ],
}
