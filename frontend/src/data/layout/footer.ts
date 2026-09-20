import type { NavChildItem } from './navigation'

export interface FooterLinkGroup {
  id: string
  number: string
  title: string
  links: NavChildItem[]
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: 'practice',
    number: '01',
    title: 'The Studio',
    links: [
      { id: 'our-story', label: 'Our Story', href: '/about/our-story' },
      { id: 'our-team', label: 'Design Team', href: '/about/our-team' },
      { id: 'careers', label: 'Open Roles & Careers', href: '/careers' },
    ],
  },
  {
    id: 'portfolio',
    number: '02',
    title: 'Projects & Impact',
    links: [
      { id: 'success-stories', label: 'Featured Project Stories', href: '/impact/success-stories' },
      { id: 'testimonials', label: 'Client Testimonials', href: '/impact/testimonials' },
      { id: 'clients-partners', label: 'Clients & Institutional Partners', href: '/impact/clients-partners' },
    ],
  },
  {
    id: 'resources',
    number: '03',
    title: 'Journal & Media',
    links: [
      { id: 'blogs', label: 'Architecture Journal', href: '/resources/blogs' },
      { id: 'contact-us', label: 'Design Consultations', href: '/contact-us' },
    ],
  },
]

export const legalLinks: NavChildItem[] = [
  { id: 'privacy-policy', label: 'Privacy Policy', href: '/privacy-policy' },
  { id: 'terms-of-service', label: 'Terms of Service', href: '/terms-of-service' },
  { id: 'cookie-policy', label: 'Cookie Policy', href: '/cookie-policy' },
]

export interface SocialLink {
  id: string
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { id: 'twitter', label: 'X (Twitter)', href: 'https://twitter.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
]

export const studioContact = {
  address: '25/3 Brindavan, 3rd Cross, Post, Nyanappana Halli, Hulimavu',
  city: 'Bengaluru, Karnataka 560076',
  coordinates: '12.9716° N, 77.5946° E',
  phone: '+91 99805 25374',
  email: 'contact@morphink.com',
  workingHours: 'Mon – Fri: 09:00 AM – 06:30 PM IST',
}

export const studioAccreditations = [
  'GRIHA Certified Studio',
  'IGBC Platinum Aligned',
  'Council of Architecture Reg. #CA/2018/98421',
]

export const footerTagline =
  'Morphink Architecture is an architectural and building design studio crafting sustainable commercial towers, bespoke residences, institutional campuses, and master plans across India.'
