export interface StoryCtaContent {
  heading: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export const storyCta: StoryCtaContent = {
  heading: 'Meet the Architects & Designers Behind Our Studio',
  primaryCta: { label: 'Meet the Team', href: '/about/our-team' },
  secondaryCta: { label: 'View Our Projects', href: '/impact/success-stories' },
}
