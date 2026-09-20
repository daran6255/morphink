export interface StoryProofItem {
  id: string
  title: string
  description: string
}

export interface StoryProofContent {
  eyebrow: string
  heading: string
  items: StoryProofItem[]
}

export const storyProof: StoryProofContent = {
  eyebrow: 'Proof in Practice',
  heading: 'Our Design Principles in Action',
  items: [
    {
      id: 'sustainable-high-rise',
      title: 'Net-Zero Commercial Towers',
      description:
        'Iconic corporate skyscrapers engineered with biophilic sky terraces, high-performance thermal envelopes, and 35% reduced carbon footprints.',
    },
    {
      id: 'luxury-residential',
      title: 'Bespoke Residential Enclaves',
      description:
        'Luxury villas and eco-residences designed with seamless indoor-outdoor spatial transitions, natural illumination, and passive cooling.',
    },
    {
      id: 'urban-masterplanning',
      title: 'Integrated Urban Masterplans',
      description:
        'Large-scale urban developments incorporating sustainable drainage, public green plazas, and eco-friendly pedestrian corridors.',
    },
  ],
}
