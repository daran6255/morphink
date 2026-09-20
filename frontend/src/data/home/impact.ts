export interface FeaturedProject {
  id: string
  title: string
  client: string
  location: string
  typology: string
  summary: string
  highlight: string
  keyInnovations: string[]
  metrics: { label: string; value: string }[]
  href: string
}

export interface ImpactContent {
  eyebrow: string
  heading: string
  subheading: string
  projects: FeaturedProject[]
  cta: { label: string; href: string }
}

export const impactContent: ImpactContent = {
  eyebrow: 'Landmark Portfolio',
  heading: 'Built Realities Crafted With Vision & Native Soul',
  subheading:
    'Explore our completed architectural interventions across Karur, Hosur, and South India—each showcasing material invention and spatial elegance.',
  cta: { label: 'Explore All Detailed Case Studies', href: '/impact/success-stories' },
  projects: [
    {
      id: 'circle-house-basker-residency',
      title: 'The Circle House (Basker Residency)',
      client: 'Basker Family',
      location: 'Hosur, Tamil Nadu',
      typology: 'Bespoke Multi-Tier Residential & Rental',
      summary:
        'A landmark 2,000 sq.ft (40x50 plot) residence featuring dual ground-floor rentals, double-height living room, circular facade & roof apertures, 24/7 North-light attic study, and handcrafted peacock carvings.',
      highlight: 'Signature circular facade punctures, greenwall balcony & filler slab construction',
      keyInnovations: ['Circular Roof & Facade Apertures', '24/7 North Lights Studio', 'Curved Cement Breakfast Bar'],
      metrics: [
        { label: 'Site Footprint', value: '40 x 50 ft' },
        { label: 'Units Integrated', value: '1 Villa + 2 Rentals' },
        { label: 'Daylight Efficiency', value: '24/7 North Ambient' },
      ],
      href: '/impact/success-stories#circle-house-basker-residency',
    },
    {
      id: 'hotwings-restaurant-cafe',
      title: 'Hotwings Restaurant & Cafe',
      client: 'Hotwings Hospitality',
      location: 'Karur, Tamil Nadu',
      typology: 'Hospitality Cafe & Complete Branding',
      summary:
        'Compact urban cafe transformed with repurposed native hen-cane basket ceiling chandeliers, semi-open cobblestone & rope partition walls, custom raw furniture, exterior glass pergola, and full identity branding.',
      highlight: 'Repurposed native cane basket lighting & raw cobblestone-rope partitions',
      keyInnovations: ['Hen-Cane Basket Ceiling Pattern', 'Cobblestone & Rope Partition', 'Exterior Glass Pergola'],
      metrics: [
        { label: 'Space Type', value: 'Cafe & Bistro' },
        { label: 'Ceiling Innovation', value: 'Handmade Cane & Rope' },
        { label: 'Execution', value: 'Full Turnkey + Branding' },
      ],
      href: '/impact/success-stories#hotwings-restaurant-cafe',
    },
    {
      id: 'thirumal-residency',
      title: 'Thirumal Residency',
      client: 'Thirumal Family',
      location: 'Hosur Outskirts, Tamil Nadu',
      typology: 'Contemporary Rigid Earth Villa',
      summary:
        'Our inaugural residential commission built with monolithic rigidity. Features ground-floor office, foyer with jaali blocks, custom teak door with Sun & Moon carvings, double-height living, and children ladder-bed lofts.',
      highlight: 'Custom Sun & Moon carved teak door, jaali breezeway foyer & ladder-bed lofts',
      keyInnovations: ['Sun & Moon Teak Carving', 'Terracotta Jaali Ventilation', 'Integrated Loft Beds'],
      metrics: [
        { label: 'Milestone', value: "Firm's 1st Villa" },
        { label: 'Airflow', value: '100% Cross Ventilated' },
        { label: 'Materials', value: 'Jaali & Filler Slabs' },
      ],
      href: '/impact/success-stories#thirumal-residency',
    },
    {
      id: 'style-stag-clothing-boutique',
      title: 'The Style Stag Boutique',
      client: 'The Style Stag',
      location: 'Karur Textile Hub, Tamil Nadu',
      typology: 'Adaptive Reuse Commercial Retail',
      summary:
        'A 1BHK rental apartment creatively converted into a chic clothing boutique. Features custom rope false ceilings reflecting textile weave threads at a fraction of gypsum cost, with bold Bauhaus primary palettes.',
      highlight: 'Custom rope false ceiling mimicking textile weaves & Bauhaus color theme',
      keyInnovations: ['Textile-Weave Rope Ceiling', 'Bauhaus Primary Color Palette', 'Low-Cost Rental Conversion'],
      metrics: [
        { label: 'Conversion', value: '1BHK to Boutique' },
        { label: 'Cost Saving', value: '40% vs Gypsum' },
        { label: 'Theme', value: 'Bauhaus Aesthetic' },
      ],
      href: '/impact/success-stories#style-stag-clothing-boutique',
    },
    {
      id: 'amrutha-residency-restaurant',
      title: 'Amrutha Restaurant Renovation',
      client: 'Amrutha Hospitality',
      location: 'Hosur City Center, Tamil Nadu',
      typology: 'High-Density Restaurant & Identity Design',
      summary:
        'Renovation of a bustling center-city restaurant. Streetfront juice & chat counter to manage pedestrian traffic, artificial greenery facade, CNC-cut WPC decorative partitions, wood false ceiling, and Telugu "A" coffee logo branding.',
      highlight: 'Traffic-diverting front facade, WPC CNC acoustic partitions & brand redesign',
      keyInnovations: ['Crowd-Diverting Street Counter', 'WPC CNC Acoustic Panels', 'Custom Telugu "A" Logo'],
      metrics: [
        { label: 'Location', value: 'Hosur Town Center' },
        { label: 'Interior Acoustic', value: 'WPC CNC Partitions' },
        { label: 'Branding', value: 'Mother’s Love Logo' },
      ],
      href: '/impact/success-stories#amrutha-residency-restaurant',
    },
  ],
}
