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
}

export const heroContent: HeroContent = {
  eyebrow: 'Redefining Architectural & Building Excellence',
  headline: 'Innovative Structures Designed',
  headlineHighlight: 'With Vision & Precision',
  subheadline:
    'Morphink Architecture is a premier architectural and building design company. We blend visionary aesthetics, sustainable materials, and precise structural engineering to craft iconic commercial, residential, and urban landscapes.',
  primaryCta: { label: 'Explore Our Portfolio', href: '/impact/success-stories' },
  secondaryCta: { label: 'Schedule Design Consultation', href: '/contact-us' },
  badges: [
    { label: 'Sustainable Architecture', sublabel: 'Green Building Certified' },
    { label: 'Parametric 3D Modeling', sublabel: 'Advanced BIM Workflow' },
    { label: 'End-to-End Execution', sublabel: 'Concept to Completion' },
  ],
  stats: [
    {
      value: '150+',
      label: 'Projects Designed',
      subtext: 'Commercial & Luxury Residential',
      iconType: 'compliance',
    },
    {
      value: '100%',
      label: 'Sustainable Design',
      subtext: 'Energy Efficient Systems',
      iconType: 'lived_experience',
    },
    {
      value: '15+',
      label: 'Design Awards',
      subtext: 'Excellence in Architecture',
      iconType: 'audit',
    },
  ],
}
