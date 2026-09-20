export interface FinalCtaContent {
  heading: string
  body: string
  cta: { label: string; href: string }
  phone?: { label: string; href: string }
  email?: { label: string; href: string }
}

export const finalCta: FinalCtaContent = {
  heading: "Let's Build Something Extraordinary Together",
  body: "Whether it's a residential home, a commercial complex, or an urban master plan — bring us your vision and we'll bring it to life.",
  cta: { label: 'Get in Touch', href: '/contact-us' },
  phone: { label: '+91-99805-25374', href: 'tel:+919980525374' },
  email: { label: 'info@morphink.com', href: 'mailto:info@morphink.com' },
}
