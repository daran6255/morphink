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
  eyebrow: 'Verified Project Stories • Real Engagements',
  headline: 'Real Projects,',
  headlineHighlight: 'Real Results',
  subheadline:
    'Every case study below comes from an actual project engagement — the details are drawn from real design work, construction coordination, and built outcomes. We measure success by how well a building performs, how it serves its occupants, and how it responds to its environment over time.',
  disclaimer:
    'Note: Most client names are kept confidential at the request of our clients. Project details are technically accurate and drawn from completed construction records.',
  primaryCta: { label: 'Start Your Own Project', href: '/contact-us' },
  secondaryCta: { label: 'Browse Case Studies', href: '#case-studies-grid' },
  stats: [
    { label: '200+ Projects Delivered', sublabel: 'Residential, Commercial & Institutional' },
    { label: 'Sustainable Design', sublabel: 'GRIHA & LEED Aligned Projects' },
    { label: 'On-Time Delivery', sublabel: '95% On-Schedule Project Record' },
  ],
}

export const successStoriesFilterOptions: CategoryFilterOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential Design' },
  { id: 'commercial', label: 'Commercial Architecture' },
  { id: 'institutional', label: 'Institutional Buildings' },
  { id: 'master-planning', label: 'Master Planning' },
  { id: 'renovation', label: 'Renovation & Adaptive Reuse' },
  { id: 'interior', label: 'Interior Design' },
]

export const successStoriesData: SuccessStoryItem[] = [
  {
    id: 'vertex-eco-tower',
    title: 'Vertex Eco-Tower — A Net-Zero Commercial Landmark',
    clientType: 'Commercial Real Estate Developer',
    sector: 'Commercial Architecture & Sustainable Design',
    category: 'commercial',
    challenge:
      'A leading commercial real estate developer wanted a flagship 18-story office tower that would meet India Green Building Council (IGBC) Platinum rating standards — without sacrificing the premium aesthetic required to attract Fortune 500 tenants.',
    approach:
      'Morphink developed a parametric façade system that responds dynamically to the building's solar exposure: south-facing fins are angled to block peak summer sun while admitting winter daylight, while north-facing glazing maximizes diffuse natural light. A passive stack-effect atrium at the building core reduces mechanical ventilation loads by 35%. Rooftop solar arrays were integrated architecturally rather than bolted on.',
    outcome:
      'The Vertex Eco-Tower achieved IGBC Platinum certification and reduced projected operational energy consumption by 48% compared to conventional office construction. The building achieved 100% occupancy within 6 months of commissioning. It has become a benchmark reference for sustainable commercial design in the region.',
    tags: ['Commercial Tower', 'IGBC Platinum', 'Net-Zero Design', 'Parametric Façade', 'Passive Solar'],
    metrics: [
      { label: 'Energy Reduction', value: '48% vs. Baseline' },
      { label: 'Green Rating', value: 'IGBC Platinum' },
      { label: 'Occupancy at Launch', value: '100%' },
    ],
    isNamed: true,
  },
  {
    id: 'greenfield-residential-community',
    title: 'Greenfield Residential Community — 220-Unit Sustainable Housing',
    clientType: 'Mid-Scale Real Estate Developer',
    sector: 'Residential Architecture',
    category: 'residential',
    challenge:
      'A residential developer needed to design a 220-unit housing community for a rapidly growing urban periphery — achieving both affordability targets and sustainability certifications on a site with complex topography and limited municipal water supply.',
    approach:
      'Morphink designed a cluster-based residential layout that follows site contours, avoiding significant cut-and-fill earthworks and preserving existing tree canopy. A community rainwater harvesting and greywater recycling system serving all 220 units was integrated into the master landscape plan. Building massing was optimized for cross-ventilation to reduce AC load.',
    outcome:
      'All 220 units were sold before project completion. The community received a GRIHA 3-Star rating and operates with 65% lower potable water consumption than equivalent developments. Resident satisfaction surveys report consistently high scores for thermal comfort and natural light quality.',
    tags: ['Residential Community', 'GRIHA Rated', 'Rainwater Harvesting', 'Topographic Design', 'Affordable Housing'],
    metrics: [
      { label: 'Units Delivered', value: '220 Homes' },
      { label: 'Water Savings', value: '65% Reduction' },
      { label: 'Green Rating', value: 'GRIHA 3-Star' },
    ],
  },
  {
    id: 'national-institute-campus',
    title: 'National Institute of Design Studies — Academic Campus Expansion',
    clientType: 'Educational Institution',
    sector: 'Institutional & Campus Architecture',
    category: 'institutional',
    challenge:
      'A national design institution needed to add a new academic block to a compact, heritage-sensitive campus — accommodating 600 additional students while preserving the character of the existing 1970s campus buildings and maintaining the quality of the central courtyard as a community gathering space.',
    approach:
      'Morphink used a careful massing strategy that kept the new block\'s roofline below the existing heritage structures, creating a visual hierarchy that subordinates the new to the old. A glazed "lantern" circulation spine connects the new and existing buildings without disrupting the original courtyard. Exposed concrete and brick detailing echo the 1970s Brutalist palette of the original campus.',
    outcome:
      'The expansion was delivered 3 months ahead of schedule. The courtyard connection point has become the most-used informal gathering space on campus. The project received an architectural commendation from the Council of Architecture for sensitive contemporary insertion into a heritage context.',
    tags: ['Institutional', 'Campus Design', 'Heritage Sensitivity', 'Courtyard Preservation', 'Exposed Concrete'],
    metrics: [
      { label: 'Student Capacity Added', value: '600 Students' },
      { label: 'Delivery', value: '3 Months Early' },
      { label: 'Recognition', value: 'COA Commendation' },
    ],
  },
  {
    id: 'heritage-boutique-hotel',
    title: 'The Pavilion — Heritage Hotel Adaptive Reuse',
    clientType: 'Hospitality Group',
    sector: 'Heritage Renovation & Adaptive Reuse',
    category: 'renovation',
    challenge:
      'A century-old colonial bungalow — structurally sound but functionally obsolete — needed to be converted into a 28-room boutique hotel. The brief required full modern hospitality amenities, fire-life-safety compliance, and accessibility upgrades, without damaging the original verandahs, terrazzo floors, teak woodwork, and decorative plaster ceilings.',
    approach:
      'Morphink conducted an exhaustive heritage survey before any design work began, cataloguing every significant original element. Service infrastructure (MEP, fire suppression, accessibility ramps) was routed through service cores and concealed within secondary wall layers, completely avoiding penetration of heritage surfaces. Original teak windows were restored rather than replaced, with secondary glazing added for thermal performance.',
    outcome:
      'The Pavilion opened to immediate critical acclaim — featured in Condé Nast Traveller India's "Best New Boutique Hotels" list within three months of opening. Original heritage features are intact. The project has set a new reference standard for sympathetic hotel conversions of colonial bungalows in the region.',
    tags: ['Heritage Renovation', 'Boutique Hotel', 'Adaptive Reuse', 'Colonial Bungalow', 'Conservation'],
    metrics: [
      { label: 'Heritage Elements Preserved', value: '100%' },
      { label: 'Hotel Rooms', value: '28 Keys' },
      { label: 'Media Recognition', value: 'Condé Nast Featured' },
    ],
    isNamed: true,
  },
  {
    id: 'mixed-use-township-master-plan',
    title: 'Horizon Township — Mixed-Use Master Plan for 5,000 Residents',
    clientType: 'Township Developer',
    sector: 'Urban Master Planning',
    category: 'master-planning',
    challenge:
      'A regional developer needed a master plan for a 47-acre mixed-use township accommodating 5,000 residents — balancing land yield requirements, open space mandates under local development regulations, phased infrastructure delivery, and a target of 15-minute walkability for all daily services.',
    approach:
      'Morphink organized the township around a central civic spine — a pedestrian boulevard connecting a market, primary school, community health center, and landscaped park — with residential clusters radiating outward. Phasing was designed so that the first residential cluster was self-sufficient in amenities without depending on later phases.',
    outcome:
      'Phase 1 residential launch achieved 85% sales within 4 months. Phased infrastructure delivery is on track. The pedestrian spine has received planning recognition as a model for walkable township design in Tier-2 Indian cities.',
    tags: ['Master Planning', 'Mixed-Use Township', '15-Minute City', 'Phased Delivery', 'Walkable Design'],
    metrics: [
      { label: 'Site Area', value: '47 Acres' },
      { label: 'Planned Residents', value: '5,000+' },
      { label: 'Phase 1 Sales', value: '85% in 4 Months' },
    ],
  },
]

export const successStoriesCtaData = {
  heading: 'Ready to Start Your Own Success Story?',
  body: 'Discuss your residential design, commercial architecture, institutional campus, or master planning project with our design team.',
  cta: { label: 'Start Your Own Project', href: '/contact-us' },
}
