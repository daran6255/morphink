export interface StoryMilestone {
  year: string
  label: string
  description?: string
}

export interface StoryHeroContent {
  eyebrow: string
  heading: string
  body: string
  milestones: StoryMilestone[]
}

export const storyHero: StoryHeroContent = {
  eyebrow: 'Our Story',
  heading: 'Crafting Iconic Spaces With Vision',
  body: 'Morphink Architecture was founded with a singular mission: to redefine the built environment by blending artistic form, structural precision, and sustainable innovation. What began as a boutique architectural studio has grown into an acclaimed design firm behind landmark commercial towers, luxury residential enclaves, and masterplanned urban developments.',
  milestones: [
    {
      year: '2015',
      label: 'Studio Founded',
      description: 'Pioneered parametric 3D modeling and sustainable building design.',
    },
    {
      year: '2019',
      label: 'Urban & Commercial Expansion',
      description: 'Expanded into high-rise corporate headquarters and masterplanned communities.',
    },
    {
      year: 'Today',
      label: 'Net-Zero & Biophilic Design',
      description: 'Delivering carbon-neutral, green-certified architectural masterpieces across India.',
    },
  ],
}
