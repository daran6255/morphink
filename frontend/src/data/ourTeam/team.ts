export interface LeadershipMember {
  id: string
  name: string
  role: string
  degrees: string
  title: string
  bio: string
  specialties: string[]
  achievements: string[]
  quote: string
  toneIndex: number
}

export const foundersList: LeadershipMember[] = [
  {
    id: 'bharathi-g-s',
    name: 'Bharathi G S',
    role: 'Principal Architect',
    degrees: 'M.Arch (Environmental Architecture), B.Arch',
    title: 'Principal Architect & Concrete Innovator',
    bio: 'Renowned for his pioneering ideas and structural inventions in concrete, sustainable architecture, master planning, project management, and site execution. As an accomplished graphic designer and illustrator, he crafts iconic spatial identities and branding for top enterprises.',
    specialties: [
      'Invention in Concrete & Earthen Slabs',
      'Sustainable & Environmental Architecture',
      'Master Planning & Site Management',
      'Graphic Design, Illustration & Enterprise Branding',
    ],
    achievements: [
      'Certified in Sustainable Architecture',
      'Pioneered Repurposed Material Ceilings & Jaali Systems',
      'Brand Strategist for Major Franchises',
    ],
    quote: 'Architecture must express our signature Midas touch and be loved at the very first nuance.',
    toneIndex: 0,
  },
  {
    id: 'divya-shree-j',
    name: 'Divya Shree J',
    role: 'Chief Architect',
    degrees: 'M.Arch (Environmental Architecture), B.Arch',
    title: 'Chief Architect & 3D Spatial Visualizer',
    bio: 'An expert in spatial design and 3D architectural visualization who transforms client dreams into tangible, buildable reality. A certified visualizer and master in landscape architecture, she is also a prolific fine artist who expresses architectural beauty through painting, sketching, and graphic arts.',
    specialties: [
      'Photorealistic 3D Spatial Visualisation',
      'Landscape Architecture & Microclimates',
      'Architectural Interior Scenography',
      'Fine Art, Sketching & Conceptual Painting',
    ],
    achievements: [
      'Certified Architectural Visualizer',
      'Master of Environmental Landscape Design',
      'Pro Artist & Fine Arts Exhibitor',
    ],
    quote: 'We study every space to turn the dream into reality with precise 3D visualization and environmental soul.',
    toneIndex: 1,
  },
]

export interface TeamMember {
  id: string
  name: string
  role: string
}

export const leadershipTeam: TeamMember[] = [
  { id: 'bharathi-g-s', name: 'Bharathi G S', role: 'Principal Architect, M.Arch (Env), B.Arch' },
  { id: 'divya-shree-j', name: 'Divya Shree J', role: 'Chief Architect, M.Arch (Env), B.Arch' },
]

export const coreTeam: TeamMember[] = [
  { id: 'site-mgmt-team', name: 'Morphink Site Management Unit', role: 'Karur & Hosur Project Engineers' },
  { id: 'visual-design-unit', name: '3D Spatial & Render Lab', role: 'BIM & Parametric Modeling Team' },
  { id: 'branding-craft-unit', name: 'Spatial Graphics & Craft Unit', role: 'Custom Millwork & Identity Designers' },
]
