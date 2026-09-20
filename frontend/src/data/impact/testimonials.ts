export interface TestimonialItem {
  id: string
  quote: string
  author: string
  title: string
  organization: string
  serviceCategory: 'residential' | 'commercial' | 'institutional' | 'interior' | 'master-planning' | 'renovation'
  serviceLabel: string
  outcomeBadge: string
  avatarInitials: string
  tags: string[]
  isVerified?: boolean
}

export interface TestimonialCategoryOption {
  id: string
  label: string
}

export interface SourcingCandidateItem {
  id: string
  partner: string
  engagement: string
  keyOutcome: string
  badge: string
}

export const testimonialsHeroData = {
  eyebrow: 'Authentic Voices • Real Projects',
  headline: 'Real Words From',
  headlineHighlight: 'Real Clients',
  subheadline:
    'A real testimonial speaks to concrete design outcomes — the experience of working with our team, the quality of the built result, and the long-term satisfaction of living and working in a Morphink-designed space.',
  note:
    'Our Philosophy: Specific outcomes beat generic praise. A quote about a successful project handover or a space that transformed daily operations reflects genuine impact.',
  primaryCta: { label: 'Read Success Stories', href: '/impact/success-stories' },
  secondaryCta: { label: 'Explore Testimonials', href: '#testimonials-grid' },
  stats: [
    { label: 'Project-Specific', sublabel: 'Concrete Deliverables & Results' },
    { label: 'Service-Mapped', sublabel: 'Residential, Commercial & Institutional' },
    { label: 'Long-Term Partners', sublabel: 'Multi-Project Repeat Clients' },
  ],
}

export const testimonialFilterOptions: TestimonialCategoryOption[] = [
  { id: 'all', label: 'All Testimonials' },
  { id: 'residential', label: 'Residential Design' },
  { id: 'commercial', label: 'Commercial Projects' },
  { id: 'institutional', label: 'Institutional Buildings' },
  { id: 'interior', label: 'Interior Design' },
  { id: 'master-planning', label: 'Master Planning' },
  { id: 'renovation', label: 'Renovation & Adaptive Reuse' },
]

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'prestige-commercial',
    quote:
      'Morphink transformed our vision for a flagship commercial complex into a landmark building. Their parametric approach allowed us to explore forms we had never imagined, and the delivered structure has become one of the most photographed commercial properties in the city.',
    author: 'Head of Real Estate Development',
    title: 'Director of Projects',
    organization: 'Prestige Group',
    serviceCategory: 'commercial',
    serviceLabel: 'Commercial Architecture & Design',
    outcomeBadge: 'Award-Worthy Commercial Build',
    avatarInitials: 'PG',
    tags: ['Commercial', 'Parametric Design', 'Flagship Project', 'On-Time Delivery'],
    isVerified: true,
  },
  {
    id: 'eco-residential-client',
    quote:
      'We came to Morphink with a sustainability mandate: net-zero energy for our residential community. They delivered passive solar design, rainwater harvesting integration, and biophilic landscaping that exceeded every benchmark we had set. Our residents love it.',
    author: 'Rohan & Priya Mehta',
    title: 'Villa Project Clients',
    organization: 'Green Living Residences, Pune',
    serviceCategory: 'residential',
    serviceLabel: 'Sustainable Residential Design',
    outcomeBadge: 'Net-Zero Certified Home',
    avatarInitials: 'RM',
    tags: ['Passive Solar', 'Net-Zero', 'Biophilic Design', 'Rainwater Harvesting'],
    isVerified: true,
  },
  {
    id: 'university-campus',
    quote:
      'The new academic block Morphink designed has fundamentally changed how our students and faculty experience the campus. Natural light, flexible collaborative spaces, and an open courtyard that encourages interaction — it is architecture that serves pedagogy.',
    author: 'Vice Chancellor',
    title: 'Academic Leadership',
    organization: 'National Institute of Design Studies',
    serviceCategory: 'institutional',
    serviceLabel: 'Institutional & Campus Architecture',
    outcomeBadge: 'Campus Transformation Project',
    avatarInitials: 'NI',
    tags: ['Campus Design', 'Institutional', 'Daylight Optimization', 'Collaborative Spaces'],
    isVerified: true,
  },
  {
    id: 'corporate-hq-interior',
    quote:
      'The interior design program Morphink delivered for our new headquarters struck a perfect balance between brand identity and employee wellness. Ergonomic layouts, acoustic zoning, and material choices that reflect our values — exceptional execution throughout.',
    author: 'Chief People Officer',
    title: 'HR & Workplace Strategy Lead',
    organization: 'TechPark Solutions Pvt. Ltd.',
    serviceCategory: 'interior',
    serviceLabel: 'Corporate Interior Design',
    outcomeBadge: 'WELL Building Standard Aligned',
    avatarInitials: 'TP',
    tags: ['Workplace Design', 'WELL Standard', 'Acoustic Design', 'Brand Integration'],
    isVerified: true,
  },
  {
    id: 'urban-master-plan',
    quote:
      'Morphink\'s master planning for our mixed-use township was thorough, thoughtful, and community-centric. Their phased approach allowed us to deliver early residential blocks while future commercial infrastructure was integrated seamlessly.',
    author: 'Township Development Director',
    title: 'Project Director',
    organization: 'Lodha Urban Developments',
    serviceCategory: 'master-planning',
    serviceLabel: 'Urban Master Planning',
    outcomeBadge: 'Mixed-Use Township Delivery',
    avatarInitials: 'LU',
    tags: ['Master Planning', 'Mixed-Use', 'Township', 'Phased Delivery'],
    isVerified: true,
  },
  {
    id: 'heritage-renovation',
    quote:
      'Adapting a century-old building into a modern boutique hotel without losing its soul is incredibly difficult. Morphink did it with sensitivity and skill. The heritage elements are celebrated, not buried — and our guests notice.',
    author: 'Managing Director',
    title: 'Hospitality Group Owner',
    organization: 'The Heritage Stays Collection',
    serviceCategory: 'renovation',
    serviceLabel: 'Heritage Renovation & Adaptive Reuse',
    outcomeBadge: 'Heritage Conservation Award',
    avatarInitials: 'HS',
    tags: ['Heritage Renovation', 'Adaptive Reuse', 'Boutique Hotel', 'Conservation'],
    isVerified: true,
  },
]

export const sourcingFrameworkData = {
  eyebrow: 'Our Feedback Standard',
  heading: 'How We Capture Authentic Client Feedback',
  description:
    'We believe in asking specific questions about concrete project outcomes rather than soliciting generic impressions. Here is the framework we use to ensure feedback reflects real design value.',
  steps: [
    {
      step: '01',
      title: 'Focus on Concrete Deliverables',
      description: 'We ask clients how specific design decisions — a spatial layout, a material choice, a structural innovation — changed the way they use and experience the space.',
    },
    {
      step: '02',
      title: 'Measure Post-Handover Satisfaction',
      description: 'We check in with clients 6, 12, and 24 months after completion to understand how the space performs in real daily use.',
    },
    {
      step: '03',
      title: 'Feed Feedback Into Design Practice',
      description: 'Every piece of client input directly informs our next project — refining our approach to sustainability, spatial efficiency, and material performance.',
    },
  ],
  candidates: [
    {
      id: 'prestige',
      partner: 'Prestige Group',
      engagement: 'Commercial Complex Architecture',
      keyOutcome: 'Delivered landmark building that became a city icon',
      badge: 'Commercial',
    },
    {
      id: 'residential',
      partner: 'Green Living Residences, Pune',
      engagement: 'Net-Zero Residential Community',
      keyOutcome: 'Net-zero energy certification with 100% passive solar integration',
      badge: 'Residential',
    },
    {
      id: 'institutional',
      partner: 'National Institute of Design Studies',
      engagement: 'Campus Academic Block',
      keyOutcome: 'Transformed campus experience with pedagogy-driven design',
      badge: 'Institutional',
    },
    {
      id: 'interior',
      partner: 'TechPark Solutions Pvt. Ltd.',
      engagement: 'Corporate HQ Interior Design',
      keyOutcome: 'WELL-aligned workplace with measurable employee satisfaction improvement',
      badge: 'Interior',
    },
  ] as SourcingCandidateItem[],
}

export const testimonialsCtaData = {
  heading: 'Ready to Experience Our Design Approach on Your Project?',
  body: 'Connect with our team to discuss residential design, commercial architecture, master planning, or interior fitout for your next project.',
  cta: { label: 'Start a Project With Us', href: '/contact-us' },
  secondaryCta: { label: 'Read Full Success Stories', href: '/impact/success-stories' },
}
