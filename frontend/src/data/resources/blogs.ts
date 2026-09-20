export interface BlogContentSection {
  heading?: string
  paragraphs: string[]
  quoteCallout?: {
    text: string
    author?: string
  }
  takeaways?: string[]
}

export interface BlogPostItem {
  id: string
  slug: string
  aliases?: string[]
  title: string
  excerpt: string
  category: 'sustainable-design' | 'parametric-architecture' | 'urban-planning' | 'interior-design' | 'construction-tech'
  categoryLabel: string
  author: string
  authorRole: string
  publishedDate: string
  readTime: string
  tileImage: string
  bannerImage: string
  isFeatured?: boolean
  tags: string[]
  highlightBadge?: string
  coverCaption?: string
  sections: BlogContentSection[]
}

export interface BlogCategoryFilter {
  id: string
  label: string
}

export const blogCategories: BlogCategoryFilter[] = [
  { id: 'all', label: 'All Articles' },
  { id: 'sustainable-design', label: 'Sustainable Design' },
  { id: 'parametric-architecture', label: 'Parametric Architecture' },
  { id: 'urban-planning', label: 'Urban Planning' },
  { id: 'interior-design', label: 'Interior Design' },
  { id: 'construction-tech', label: 'Construction Technology' },
]

export const blogsHeroData = {
  eyebrow: 'Thought Leadership • Design Notes • Architecture Insights',
  headline: 'The Morphink',
  headlineHighlight: 'Journal',
  subheadline:
    'Ideas, field notes, and design thinking from our studio — exploring sustainable architecture, parametric design, urban environments, and the future of built spaces.',
}

export const featuredBlogPost: BlogPostItem = {
  id: 'future-of-sustainable-architecture',
  slug: 'the-future-of-sustainable-architecture-in-india',
  aliases: ['sustainable-architecture-india-future', 'net-zero-buildings-india'],
  title: 'The Future of Sustainable Architecture in India: Building for Net-Zero by 2047',
  excerpt:
    'India's construction boom is accelerating — but so is its energy consumption. How do architects design buildings that are ambitious, beautiful, and genuinely responsible? Here is what the path to net-zero looks like in the Indian context.',
  category: 'sustainable-design',
  categoryLabel: 'Sustainable Design',
  author: 'Morphink Architecture Editorial',
  authorRole: 'Architecture & Sustainability Research',
  publishedDate: '15 Aug 2026',
  readTime: '5 min read',
  tileImage:
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
  bannerImage:
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
  isFeatured: true,
  highlightBadge: 'Featured Article',
  tags: ['Sustainable Design', 'Net-Zero Buildings', 'Green Architecture', 'India 2047', 'Passive Design'],
  coverCaption: 'The intersection of parametric design and sustainable energy strategies in Indian architecture.',
  sections: [
    {
      heading: 'The Scale of India's Built Environment Challenge',
      paragraphs: [
        'India is in the midst of an unprecedented urbanization surge. By 2047, it is projected that nearly 50% of India's population will live in cities — meaning that the equivalent of an entire new urban India must be built over the next two decades. The buildings constructed in this window will determine India's carbon trajectory for the rest of the century.',
        'Yet the majority of construction today — both residential and commercial — still prioritizes cost and speed over energy performance, material lifecycle, or occupant health. Conventional brick-and-mortar structures with inadequate insulation and poor natural light access are being replicated at scale, locking in decades of inefficiency.',
      ],
      quoteCallout: {
        text: 'The buildings we design today are commitments that last 50 to 100 years. Embedding sustainability into their DNA is not optional — it is the only responsible form of practice.',
        author: 'Morphink Architecture, Design Philosophy Statement',
      },
    },
    {
      heading: 'What Net-Zero Architecture Actually Means in Practice',
      paragraphs: [
        'Net-zero buildings balance the energy they consume with the energy they generate on-site, typically through solar photovoltaics, wind, or biomass systems. But net-zero is not just about bolting solar panels onto a conventionally-designed roof — it requires a fundamentally different design process.',
        'Passive strategies come first: building orientation to maximize winter sun and minimize summer heat gain, high-performance insulation, thermally broken façade systems, and natural ventilation cross-sections designed into the schematic phase. Only after passive loads are minimized do active systems — solar, HVAC, smart controls — deliver maximum impact.',
      ],
      takeaways: [
        'Passive Solar Design: Orient buildings to capture winter sun while using overhangs and screens to block peak summer angles.',
        'High-Performance Envelopes: Insulated walls, double-glazed low-E glass, and thermal bridges eliminated at slab edges and columns.',
        'Natural Ventilation: Cross-ventilation pathways and stack-effect atria that reduce mechanical cooling loads by 30–50%.',
        'Integrated Renewables: On-site solar designed from day one as part of the architectural composition, not as an afterthought.',
      ],
    },
    {
      heading: 'Morphink's Approach to Sustainable Design',
      paragraphs: [
        'At Morphink Architecture, we begin every project with an energy model. Before a single wall is drawn, we simulate building performance across seasonal conditions using parametric energy analysis. This allows us to test dozens of design configurations — roof pitch, window-to-wall ratio, material choices, ventilation paths — and optimize for both energy performance and spatial quality simultaneously.',
        'Our residential projects consistently achieve 40–60% reductions in operational energy compared to conventional construction. Our institutional projects incorporate rainwater harvesting, greywater recycling, and biophilic landscaping systems that reduce both energy and water consumption significantly.',
        'The result is buildings that are not just sustainably certified on paper, but genuinely comfortable, low-cost to operate, and resilient to the climate variability that is already reshaping India's built environment.',
      ],
    },
  ],
}

export const blogPosts: BlogPostItem[] = [
  {
    id: 'parametric-design-revolution',
    slug: 'how-parametric-design-is-reshaping-architecture',
    aliases: ['parametric-architecture-revolution'],
    title: 'How Parametric Design Is Reshaping the Possibilities of Architecture',
    excerpt:
      'From the swooping curves of the Sydney Opera House to the faceted towers of contemporary skylines, parametric design has moved from avant-garde experiment to mainstream practice. Here is what it means for Indian architecture.',
    category: 'parametric-architecture',
    categoryLabel: 'Parametric Architecture',
    author: 'Morphink Design Studio',
    authorRole: 'Parametric Design Research',
    publishedDate: '02 Aug 2026',
    readTime: '4 min read',
    tileImage:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    bannerImage:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80',
    isFeatured: false,
    tags: ['Parametric Design', 'Computational Architecture', 'BIM', 'Grasshopper', 'Rhino'],
    sections: [
      {
        heading: 'What Parametric Design Actually Is',
        paragraphs: [
          'Parametric design is the practice of building architectural forms using algorithms and variable inputs rather than fixed geometric shapes. Instead of drawing a wall, a parametric designer defines a rule: "The wall follows this curve, and the openings are spaced at intervals determined by solar angle and privacy requirements." Change an input, and the entire system responds coherently.',
          'Tools like Rhino with Grasshopper, Autodesk Dynamo, and emerging AI-assisted platforms have made parametric design accessible to studios of all sizes — not just the experimental boutiques with computational specialists on staff.',
        ],
      },
      {
        heading: 'Applications in Indian Architecture',
        paragraphs: [
          'In the Indian context, parametric design is proving particularly powerful for three applications: façade optimization for solar shading, structural efficiency in irregular site conditions, and master planning of complex mixed-use developments where pedestrian flow, solar access, and service routing must all be balanced simultaneously.',
          'Morphink Architecture has used parametric tools on commercial façade design, residential massing studies, and institutional roof structures — achieving both formal richness and measurable performance improvements that would have been impossible through conventional drafting.',
        ],
        takeaways: [
          'Façade Design: Algorithmically optimized shading fins that respond to specific solar angles for each façade orientation.',
          'Structural Form-Finding: Parametric tools that identify minimum-material structural configurations for complex roof spans.',
          'Site Massing: Rapid generation and evaluation of dozens of massing options optimized for solar access, views, and density.',
        ],
      },
    ],
  },
  {
    id: 'urban-density-human-scale',
    slug: 'urban-density-at-human-scale-the-design-challenge-of-indias-cities',
    aliases: ['urban-density-human-scale-india'],
    title: 'Urban Density at Human Scale: The Design Challenge of India's Cities',
    excerpt:
      'Indian cities are dense — and getting denser. The question is not whether to build vertically, but how to do so while preserving the street-level vitality, social texture, and environmental comfort that make cities worth living in.',
    category: 'urban-planning',
    categoryLabel: 'Urban Planning',
    author: 'Morphink Urban Studio',
    authorRole: 'Urban Design & Planning Research',
    publishedDate: '19 Jul 2026',
    readTime: '6 min read',
    tileImage:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    bannerImage:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80',
    isFeatured: false,
    tags: ['Urban Planning', 'Density', 'Mixed-Use', 'Transit-Oriented Development', 'Street Design'],
    sections: [
      {
        heading: 'The Density Paradox',
        paragraphs: [
          'High-density urban development gets a bad reputation. The instinctive image is of cramped, poorly-lit apartments stacked behind blank concrete podiums, with no connection to street life, community, or greenery. This is the result not of density itself, but of poorly-designed density.',
          'The evidence from the world's most livable dense cities — Tokyo, Amsterdam, Singapore, Barcelona — shows that density can produce vibrant, walkable, environmentally responsible urban environments when designed with care. The challenge for Indian architects and planners is learning from these precedents while adapting to Indian social patterns, climate, and urban structure.',
        ],
      },
      {
        heading: 'Design Strategies for Human-Scale Density',
        paragraphs: [
          'The most important design moves happen at the ground floor and street edge. Active frontages — shops, cafes, community spaces — that open directly onto footpaths create pedestrian life. Setback towers that leave the ground plane open for landscaping and public use avoid the canyon effect of sheer street walls.',
        ],
        takeaways: [
          'Active Ground Floors: Retail and community uses at street level to generate pedestrian vitality.',
          'Sky Gardens: Landscaped terraces and green roofs at mid-height breaks to provide community outdoor space.',
          'Permeable Blocks: Through-block pedestrian connections that break large developments into walkable micro-neighborhoods.',
          'Mixed-Income Programming: Integration of varied unit sizes and tenures to support diverse communities.',
        ],
      },
    ],
  },
  {
    id: 'biophilic-design-workplace',
    slug: 'biophilic-design-transforming-the-modern-workplace',
    aliases: ['biophilic-office-design'],
    title: 'Biophilic Design: Transforming the Modern Workplace With Nature',
    excerpt:
      'Post-pandemic, employees have higher expectations of their workplaces. Biophilic design — integrating natural light, materials, plants, and views into interior environments — is emerging as one of the most effective tools for creating spaces that support productivity and wellbeing.',
    category: 'interior-design',
    categoryLabel: 'Interior Design',
    author: 'Morphink Interiors Studio',
    authorRole: 'Interior Design Research',
    publishedDate: '05 Jul 2026',
    readTime: '4 min read',
    tileImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    bannerImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    isFeatured: false,
    tags: ['Biophilic Design', 'Workplace Design', 'Interior Architecture', 'WELL Standard', 'Employee Wellbeing'],
    sections: [
      {
        heading: 'Why Biophilia in the Office Works',
        paragraphs: [
          'Research consistently demonstrates that access to natural light, plants, wood textures, and outdoor views significantly reduces workplace stress, improves cognitive performance, and increases reported employee satisfaction. The WELL Building Standard has formalized many of these principles into measurable design criteria.',
          'For corporate clients, biophilic design is increasingly a talent and retention strategy as much as a design statement — particularly in technology and knowledge industries where the quality of the workplace environment is a key differentiator in attracting and retaining skilled professionals.',
        ],
        quoteCallout: {
          text: 'A workspace that connects people with natural systems is not a luxury — it is a productivity investment with measurable returns.',
          author: 'Morphink Interiors Studio',
        },
      },
    ],
  },
  {
    id: 'mass-timber-construction',
    slug: 'mass-timber-construction-the-material-transforming-modern-architecture',
    aliases: ['mass-timber-architecture-india'],
    title: 'Mass Timber: The Material Quietly Transforming Modern Architecture',
    excerpt:
      'Cross-laminated timber, glulam beams, and mass timber construction are moving from niche experimental material to mainstream structural system. For architects committed to sustainable design, understanding this shift is essential.',
    category: 'construction-tech',
    categoryLabel: 'Construction Technology',
    author: 'Morphink Architecture Editorial',
    authorRole: 'Construction Technology Research',
    publishedDate: '22 Jun 2026',
    readTime: '5 min read',
    tileImage:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80',
    bannerImage:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80',
    isFeatured: false,
    tags: ['Mass Timber', 'CLT', 'Sustainable Construction', 'Wood Architecture', 'Carbon Sequestration'],
    sections: [
      {
        heading: 'The Carbon Case for Timber',
        paragraphs: [
          'Concrete and steel account for roughly 8% and 7% of global CO₂ emissions respectively. Mass timber — engineered wood products like cross-laminated timber (CLT) and glued laminated timber (glulam) — offers a structurally competitive alternative with a dramatically lower carbon footprint.',
          'Unlike steel and concrete, sustainably-sourced timber is carbon-negative during its growing phase, sequestering atmospheric CO₂ in its cellular structure. When the wood is harvested and used in long-life structural applications, that carbon remains locked in the building for its entire service life — often a century or more.',
        ],
        takeaways: [
          'CLT Structures: Cross-laminated timber panels that can replace concrete floor slabs and shear walls.',
          'Glulam Frames: Laminated beams and columns with structural performance comparable to steel.',
          'Hybrid Systems: Timber-concrete composite floors that combine the tensile strength of concrete with the warmth and carbon benefit of wood.',
          'Speed of Construction: Mass timber components are prefabricated off-site, reducing construction time and site waste significantly.',
        ],
      },
    ],
  },
]
