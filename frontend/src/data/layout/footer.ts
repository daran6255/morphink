import { primaryNavItems } from './navigation'
import type { NavChildItem } from './navigation'

export interface FooterLinkGroup {
  id: string
  title: string
  links: NavChildItem[]
}

const sectionLinks = (id: string): NavChildItem[] => primaryNavItems.find((item) => item.id === id)?.children ?? []

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: 'company',
    title: 'Company',
    links: [...sectionLinks('about'), { id: 'careers', label: 'Careers', href: '/careers' }],
  },
  { id: 'impact', title: 'Portfolio & Impact', links: sectionLinks('impact') },
  { id: 'resources', title: 'Resources', links: [{ id: 'blogs', label: 'Blogs', href: '/resources/blogs' }] },
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
  { id: 'linkedin', label: 'LinkedIn', href: '#' },
  { id: 'twitter', label: 'X (Twitter)', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
]

export const footerTagline = 'Architectural Excellence & Sustainable Building Design.'
