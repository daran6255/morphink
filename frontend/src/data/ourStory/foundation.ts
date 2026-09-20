export interface StoryFoundationContent {
  eyebrow: string
  heading: string
  paragraphs: string[]
  cta: { label: string; href: string }
}

export const storyFoundation: StoryFoundationContent = {
  eyebrow: 'The Philosophy That Shapes Everything',
  heading: 'Sustainable Design, Built Into How We Work',
  paragraphs: [
    'At Morphink Architecture, sustainability is not an afterthought — it is embedded into every design decision from the first sketch. We use parametric modeling, passive energy strategies, and locally sourced materials to create buildings that are as responsible as they are remarkable.',
    "Our projects span residential, commercial, and institutional typologies, with each design shaped by its unique environmental context, the needs of its occupants, and the character of the surrounding community. Great architecture listens before it speaks.",
  ],
  cta: { label: 'Explore Our Design Philosophy', href: '/about/our-story' },
}
