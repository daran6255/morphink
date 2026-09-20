export interface ServiceDetail {
  id: string
  title: string
  href: string
  description: string
  deliverables: string[]
  icon: string
  badge?: string
}

export interface ServicesTeaserContent {
  eyebrow: string
  heading: string
  subheading: string
  cta: { label: string; href: string }
  items: ServiceDetail[]
}

export const servicesTeaser: ServicesTeaserContent = {
  eyebrow: 'Our Architectural Disciplines',
  heading: 'Comprehensive Design, Engineering & Spatial Craft',
  subheading:
    'Collaging contemporary architecture with environmental sustainability to maintain perfect equilibrium between future innovation and rooted heritage.',
  cta: { label: 'Consult With Our Architects', href: '/contact-us' },
  items: [
    {
      id: 'sustainable-environmental-architecture',
      title: 'Sustainable & Earth Architecture',
      href: '/services/sustainable-architecture',
      description:
        'Certified environmental architecture utilizing earthen filler slabs, terracotta jaali breezeways, passive solar orientation, and 24/7 North-light harvesting.',
      deliverables: ['Filler Slab Construction', 'Terracotta Jaali Screening', 'Passive Daylighting & Microclimate'],
      icon: 'eco',
      badge: 'M.Arch Certified',
    },
    {
      id: 'bespoke-residential-villas',
      title: 'Bespoke Residential & Urban Villas',
      href: '/services/residential-architecture',
      description:
        'From signature multi-tier urban homes like "The Circle House" to expansive outskirts villas—meticulously engineered with Vastu Shastra, double-height atriums, and custom millwork.',
      deliverables: ['Custom Facade Apertures', 'Vastu Shastra Compliance', 'Double-Height Living Spaces'],
      icon: 'home',
      badge: 'Signature Craft',
    },
    {
      id: 'hospitality-cafe-architecture',
      title: 'Hospitality, Cafes & Restaurants',
      href: '/services/hospitality-design',
      description:
        'Transforming compact commercial spaces into high-energy destinations (e.g. Hotwings & Amrutha)—featuring repurposed cane-basket ceilings, cobblestone partitions, and traffic-diverting streetscapes.',
      deliverables: ['Repurposed Organic Ceilings', 'Cobblestone & Rope Screening', 'Crowd-Flow Street Facades'],
      icon: 'restaurant',
      badge: 'Turnkey Design',
    },
    {
      id: 'adaptive-reuse-retail-boutiques',
      title: 'Adaptive Reuse & Boutique Retail',
      href: '/services/adaptive-reuse',
      description:
        'Transforming residential units into vibrant retail destinations like The Style Stag, using cost-effective custom rope weave ceilings, Bauhaus color schemes, and exposed brick aesthetics.',
      deliverables: ['Bespoke Rope Weave Ceilings', 'Bauhaus Spatial Themes', 'Cost-Optimized Fitouts'],
      icon: 'store',
      badge: 'Material Innovation',
    },
    {
      id: '3d-visualization-landscape',
      title: '3D Spatial Visualisation & Landscape',
      href: '/services/visualization-landscape',
      description:
        'Photorealistic 3D rendering and environmental landscape design led by our Chief Architect—simulating real-world lighting, greenwalls, pergola canopies, and lush outdoor sanctuaries.',
      deliverables: ['Photorealistic 3D Walkthroughs', 'Vertical Greenwall Engineering', 'Pergola & Garden Architecture'],
      icon: 'view_in_ar',
      badge: 'Fine Art Led',
    },
    {
      id: 'spatial-branding-architectural-graphics',
      title: 'Spatial Branding & Environmental Graphics',
      href: '/services/spatial-branding',
      description:
        'Holistic identity design tailored for businesses, including custom CNC signage, ACP exterior elevations, custom logo narratives, and branded architectural packaging.',
      deliverables: ['Architectural Brand Identities', 'CNC & WPC Acoustic Partitions', 'ACP Commercial Elevation'],
      icon: 'palette',
      badge: 'Full Identity',
    },
  ],
}
