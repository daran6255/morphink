export interface ImpactStat {
  id: string
  value: string
  label: string
}

export interface ImpactTestimonial {
  quote: string
  name: string
  role: string
  organization: string
}

export interface ImpactContent {
  eyebrow: string
  heading: string
  subheading: string
  stats: ImpactStat[]
  testimonial: ImpactTestimonial
  cta: { label: string; href: string }
}

export const impact: ImpactContent = {
  eyebrow: 'Our Impact & Track Record',
  heading: 'Architecture That Delivers Results',
  subheading: 'Delivering landmark projects, sustainable designs, and environments that stand the test of time.',
  stats: [
    { id: 'years', value: '12+', label: 'Years of Design Excellence' },
    { id: 'projects', value: '200+', label: 'Projects Completed' },
    { id: 'sqft', value: '5M+', label: 'Sq. Ft. Designed & Delivered' },
    { id: 'clients', value: '100+', label: 'Happy Clients & Partners' },
  ],
  testimonial: {
    quote:
      'Morphink Architecture transformed our vision into a breathtaking commercial complex. Their parametric design approach and attention to sustainability were exceptional. Delivered on time and beyond expectations.',
    name: 'Head of Real Estate Development',
    role: 'Commercial Projects Division',
    organization: 'Prestige Group',
  },
  cta: { label: 'Explore Our Success Stories', href: '/impact/success-stories' },
}
