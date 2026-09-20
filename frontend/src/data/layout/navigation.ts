export interface NavChildItem {
  id: string
  label: string
  href: string
  /** Short context shown under the label in the dropdown. */
  description?: string
  topDivider?: boolean
}

export interface MegaMenuGroup {
  id: string
  title: string
  href?: string
  items: NavChildItem[]
}

export interface MegaMenuColumn {
  id: string
  title: string
  subtitle?: string
  badge?: string
  groups: MegaMenuGroup[]
}

export interface NavItem {
  id: string
  label: string
  href?: string
  children?: NavChildItem[]
  isMegaMenu?: boolean
  megaMenuColumns?: MegaMenuColumn[]
}

/** Primary navbar items, left to right. */
export const primaryNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'about',
    label: 'About',
    children: [
      { id: 'our-story', label: 'Our Story', href: '/about/our-story' },
      { id: 'our-team', label: 'Our Team', href: '/about/our-team' },
    ],
  },
  {
    id: 'impact',
    label: 'Projects & Impact',
    children: [
      { id: 'success-stories', label: 'Success Stories', href: '/impact/success-stories' },
      { id: 'testimonials', label: 'Testimonials', href: '/impact/testimonials' },
      { id: 'clients-partners', label: 'Clients & Partners', href: '/impact/clients-partners' },
    ],
  },
  { id: 'blogs', label: 'Blogs', href: '/resources/blogs' },
  { id: 'careers', label: 'Careers', href: '/careers' },
]

/** The standalone CTA button rendered at the end of the navbar (never a dropdown). */
export const contactNavItem: NavChildItem = { id: 'contact-us', label: 'Contact Us', href: '/contact-us' }

/** Look up a top-level nav item (and its children) by id. */
export const findNavItem = (id: string): NavItem | undefined => primaryNavItems.find((item) => item.id === id)
