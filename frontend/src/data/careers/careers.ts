export interface InternshipDomain {
  id: string
  title: string
  skills: string[]
  description: string
}

export const careersHeroData = {
  eyebrow: 'Careers & Internships • Work With Purpose',
  headline: 'Shape the Future of',
  headlineHighlight: 'Sustainable Architecture',
  subheadline:
    'Join our studio designing landmark commercial structures, luxury residential spaces, and eco-responsive urban landscapes across India.',
}

export const internshipProgramData = {
  badge: 'Architecture Students & Recent Graduates',
  heading: 'Architectural & Building Design Internship Program',
  subheading:
    'Gain hands-on experience in 3D BIM modeling, parametric facade design, structural drafting, and site administration on live projects.',
  
  importantNotice: {
    title: 'Important Note Regarding Our Architectural Internship',
    points: [
      'Skill-Intensive Studio Experience: Work directly alongside senior architects and principal designers.',
      'Live Architectural Projects: Interns contribute directly to Morphink’s active commercial, residential, and urban planning developments.',
      'Portfolio-Driven: Interns build a professional portfolio of verified 3D renders, BIM models, and construction drawings.',
    ],
  },

  domains: [
    {
      id: 'architectural-design',
      title: 'Architectural & BIM Design',
      skills: ['AutoCAD', 'Revit', 'Rhino 3D', 'BIM', 'Parametric Modeling'],
      description:
        'Develop 3D architectural models, conceptual floorplans, and structural details for landmark developments.',
    },
    {
      id: 'interior-spatial',
      title: 'Interior Architecture & Spatial Design',
      skills: ['SketchUp', 'V-Ray', '3ds Max', 'Lighting Design', 'Material Selection'],
      description:
        'Transform interior volumes into high-end environments with customized joinery drawings, lighting, and material palettes.',
    },
    {
      id: 'sustainable-building',
      title: 'Sustainable & Landscape Architecture',
      skills: ['Green Building Standards', 'Biophilic Design', 'Landscape Masterplanning'],
      description:
        'Design climate-responsive facades, passive solar layouts, and eco-certified landscape masterplans.',
    },
  ],

  benefits: [
    {
      title: 'Official Certificate & Recommendation',
      description:
        'Receive an official Certificate of Internship Completion and performance-based Letter of Recommendation.',
    },
    {
      title: 'Verified Design Portfolio',
      description:
        'Build a real-world portfolio of high-end architectural renders, BIM models, and construction drawings.',
    },
    {
      title: 'Principal Designer Mentorship',
      description:
        'Work directly with senior architects and principal partners with decades of design experience.',
    },
  ],

  eligibility: {
    title: 'Eligibility & Requirements',
    items: [
      'Pre-final or final year students pursuing B.Arch, M.Arch, or Interior Architecture.',
      'Proficiency in CAD software, 3D modeling tools, and architectural rendering engines.',
      'Strong passion for sustainable design, structural elegance, and spatial innovation.',
    ],
  },

  applyEmail: 'careers@morphink.com',
  applySubject: 'Application for Architectural Internship - [Your Name] - [Domain of Interest]',
}

export const openRolesData = {
  badge: 'Full-Time & Studio Opportunities',
  heading: 'Current Full-Time Architectural Openings',
  noRolesTitle: 'Always Looking for Exceptional Design Talent',
  noRolesDescription:
    'While active openings vary by project cycle, we welcome portfolios from passionate architects, BIM specialists, and interior designers.',
  talentNetworkTitle: 'Join Our Architectural Talent Network',
  talentNetworkDescription:
    'Send your design portfolio and CV to our team to be considered for upcoming studio projects.',
  contactEmail: 'careers@morphink.com',
  emailSubject: 'Architectural Portfolio Submission - [Your Name] - [Role/Specialization]',
}

export const careersCultureData = {
  heading: 'Why Build Your Architectural Career at Morphink?',
  subheading:
    'We foster a collaborative design environment where artistic vision meets engineering precision.',
  pillars: [
    {
      title: 'Design Excellence First',
      description:
        'Every project is an opportunity to create timeless, functional, and aesthetically captivating architecture.',
    },
    {
      title: 'Sustainable Innovation',
      description:
        'We pioneer carbon-neutral building techniques, energy-efficient HVAC integration, and biophilic design principles.',
    },
    {
      title: 'Collaborative Studio Culture',
      description:
        'Work in a dynamic studio environment alongside structural engineers, landscape architects, and interior specialists.',
    },
  ],
}
