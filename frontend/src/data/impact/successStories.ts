export interface SuccessStoryItem {
  id: string
  title: string
  clientType: string
  sector: string
  category: 'residential' | 'commercial' | 'institutional' | 'master-planning' | 'renovation' | 'interior'
  challenge: string
  approach: string
  outcome: string
  tags: string[]
  metrics?: { label: string; value: string }[]
  link?: { label: string; href: string }
  isNamed?: boolean
}

export interface CategoryFilterOption {
  id: string
  label: string
}

export const successStoriesHeroData = {
  eyebrow: 'Karur & Hosur Studios • South India Projects',
  headline: 'Where Dreams Are Built,',
  headlineHighlight: 'Nuance by Nuance',
  subheadline:
    'Every architectural project below is a real, built engagement from Karur to Hosur and across South India. Explore how our Midas touch, raw material inventions, and M.Arch environmental expertise transform constraints into iconic spaces.',
  disclaimer:
    'All case studies reflect completed projects with verified spatial innovations, custom millwork, and turnkey execution records.',
  primaryCta: { label: 'Start Your Own Project', href: '/contact-us' },
  secondaryCta: { label: 'Browse Real Case Studies', href: '#case-studies-grid' },
  stats: [
    { label: 'Karur & Hosur Studios', sublabel: 'South India Wide Reach' },
    { label: '5 Regional Languages', sublabel: 'Native Client Collaboration' },
    { label: 'M.Arch Environmental', sublabel: 'Climate & Material Inventions' },
  ],
}

export const successStoriesFilterOptions: CategoryFilterOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential & Villas' },
  { id: 'commercial', label: 'Commercial & Cafes' },
  { id: 'renovation', label: 'Adaptive Reuse & Retail' },
  { id: 'interior', label: 'Interiors & Millwork' },
]

export const successStoriesData: SuccessStoryItem[] = [
  {
    id: 'basker-residency-circle-house',
    title: 'The Circle House — Basker Residency (Hosur)',
    clientType: 'Private Urban Residence & Rental Units',
    sector: 'Bespoke Residential Architecture',
    category: 'residential',
    challenge:
      'The client Basker approached us with a 40x50 ft (2,000 sq.ft) corner site in a bustling urban zone of Hosur. The requirement was to design two independent rental units on the ground floor while creating an expansive, open, and luxurious multi-level private residence for a family of four above.',
    approach:
      'We solved the ground floor with rental units, dedicated parking, and a jaali ceiling capped with glass for natural daylighting. For the first-floor residence, we crafted an expansive balcony with vertical greenwalls and circular apertures on the facade and roofs—composed with filler slabs, structural steel, lacquered glass, precast pipes, and toughened glass. We designed a double-height living room with wall cladding, a Vastu-compliant open kitchen with a curved cement breakfast bar, and an attic with 24/7 north lights for family storytelling and study.',
    outcome:
      'The entire facade stands as an iconic landmark known as "The Circle House" in Hosur. Meticulously curated interiors—from the custom peacock leaf carvings and pooja room doors to bespoke toddler ladder-beds and glassbrick headroom leading to solar panels—delivered both high rental yield and an exquisite family sanctuary.',
    tags: ['Circle House', 'Double-Height Living', '24/7 North Lights', 'Curved Cement Bar', 'Filler Slabs', 'Hosur'],
    metrics: [
      { label: 'Site Footprint', value: '40 x 50 ft' },
      { label: 'Units Integrated', value: '1 Villa + 2 Rentals' },
      { label: 'Daylight Efficiency', value: '24/7 Ambient North' },
    ],
    isNamed: true,
  },
  {
    id: 'hotwings-restaurant-cafe',
    title: 'Hotwings Restaurant & Cafe (Karur)',
    clientType: 'Hospitality Brand & Cafe',
    sector: 'Commercial Cafe Architecture & Branding',
    category: 'commercial',
    challenge:
      'A compact commercial space in Karur with a minimal budget, requiring an un-congested, airy ambiance despite having no windows or exterior side openings.',
    approach:
      'Morphink created a semi-open ropewall with a raw cobblestone base to divide the kitchen and dining areas without blocking air and vision. We designed handmade custom raw furniture and repurposed native cane baskets (traditionally used to shelter hens in the region) into an inverted ceiling light installation that scatters beautiful ambient shadow patterns across the painted back-roof. The cash counter features a handcrafted rope false ceiling, while the exterior entrance features a steel pergola with glass, hanging greenery, and warm illumination.',
    outcome:
      'The project achieved full turnkey transformation—including complete brand identity and logo crafted in-house. Customers enjoy an un-congested, modern etiquette space rich with traditional texture at a fraction of standard commercial interior cost.',
    tags: ['Hospitality Cafe', 'Repurposed Cane Baskets', 'Cobblestone Wall', 'Rope False Ceiling', 'Turnkey Branding', 'Karur'],
    metrics: [
      { label: 'Ceiling Innovation', value: 'Native Cane Baskets' },
      { label: 'Partition Craft', value: 'Cobblestone & Rope' },
      { label: 'Branding', value: '100% In-House Crafted' },
    ],
    isNamed: true,
  },
  {
    id: 'thirumal-residency',
    title: 'Thirumal Residency — Monolithic Earth Villa (Hosur)',
    clientType: 'Private Family Villa',
    sector: 'Sustainable Residential Architecture',
    category: 'residential',
    challenge:
      'As our inaugural residential commission, the client entrusted our team to design a beautiful, structurally rigid, and climatically responsive family home on the outskirts of Hosur.',
    approach:
      'Following comprehensive land soil testing, we emphasized rigidity through a self-oriented monolithic facade. The ground floor accommodates parking and the client’s private office. The first floor opens into a foyer greeted by terracotta jaali blocks and a custom teak door carved with Sun & Moon motifs. The interior features a double-height living room with an integrated glass-partitioned pooja room, an elegant modular kitchen, and children’s bedrooms with bespoke ladder-beds and study units.',
    outcome:
      'The home delivers 100% free cross-ventilation and natural daylight across every corner. By integrating earth materials like terracotta jaalis and filler slabs, the residence achieves contemporary elegance with deep passive cooling.',
    tags: ['Rigid Earth Facade', 'Sun & Moon Carving', 'Double-Height Atrium', 'Jaali Breezeway', 'Ladder Beds', 'Hosur Outskirts'],
    metrics: [
      { label: 'Firm Milestone', value: '1st Residential Project' },
      { label: 'Ventilation', value: '100% Cross-Breeze' },
      { label: 'Materiality', value: 'Jaali & Filler Slabs' },
    ],
    isNamed: true,
  },
  {
    id: 'style-stag-clothing-boutique',
    title: 'The Style Stag — Boutique Conversion (Karur)',
    clientType: 'Fashion & Textile Retailer',
    sector: 'Adaptive Reuse & Boutique Retail',
    category: 'renovation',
    challenge:
      'Converting a standard 1BHK rental apartment in the heart of Karur’s bustling textile district into an upscale, minimalist clothing boutique on a tight budget.',
    approach:
      'To celebrate Karur’s textile heritage without high gypsum ceiling costs, Morphink custom-designed a ceiling made of locally sourced ropes patterned to echo woven fabric threads. Walls were treated with exposed brick textures alongside clean plaster, with minimalist metal and glass display shelving. The interior private rooms were painted in a bold Bauhaus primary palette (red, blue, yellow) against the clothing displays, and the former kitchen was converted into an intimate VIP trial room.',
    outcome:
      'A striking fusion of Bauhaus color theory and textile craftsmanship that cost 40% less than conventional gypsum renovations while setting a new visual benchmark for Karur boutique retail.',
    tags: ['Adaptive Reuse', 'Rope Weave Ceiling', 'Bauhaus Color Scheme', '1BHK Conversion', 'Exposed Brick', 'Karur'],
    metrics: [
      { label: 'Conversion', value: '1BHK to Boutique' },
      { label: 'Cost Efficiency', value: '40% vs Gypsum' },
      { label: 'Theme', value: 'Bauhaus Spatial Theme' },
    ],
    isNamed: true,
  },
  {
    id: 'amrutha-residency-restaurant',
    title: 'Amrutha Restaurant — High-Density Urban Renovation (Hosur)',
    clientType: 'Restaurant & Dining Group',
    sector: 'Commercial Restaurant Renovation & Branding',
    category: 'commercial',
    challenge:
      'A legacy restaurant in the high-density center of Hosur with congested foot traffic, outdated seating, and compact floor space that needed modern revitalization without long business downtime.',
    approach:
      'We redesigned the street interface with an exterior roadside juice, tea, and chat kiosk to separate quick-takeaway crowds from sit-down diners. The restaurant entrance was wrapped in calming artificial greenery facades. Internally, dining booths were partitioned using custom CNC-cut WPC acoustic panels to optimize both privacy and space. Linear wood false ceilings emphasize spatial length, while AC dining zones feature plush sofas. The exterior received a modern ACP elevation and a custom logo combining the Telugu letter "A" and a steaming coffee cup representing mother’s love.',
    outcome:
      'Foot traffic flow improved dramatically, dining capacity increased with superior acoustics, and the modular wallpaper and partition system allows future aesthetic refreshes with zero structural disruption.',
    tags: ['Restaurant Renovation', 'CNC WPC Partitions', 'Traffic Management', 'Wood Linear Ceiling', 'Mother’s Love Logo', 'Hosur Center'],
    metrics: [
      { label: 'Flow Optimization', value: 'Streetfront Split Counter' },
      { label: 'Acoustics', value: 'WPC CNC Panels' },
      { label: 'Branding', value: 'Telugu "A" Motif' },
    ],
    isNamed: true,
  },
]

export const successStoriesCtaData = {
  heading: 'Ready to Experience the Morphink "Midas Touch"?',
  body: 'Whether planning a bespoke residence, an environmental villa, a commercial cafe, or a retail transformation in South India, consult directly with our Principal and Chief Architects.',
  cta: { label: 'Start Your Project With Us', href: '/contact-us' },
}
