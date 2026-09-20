export interface WhyUsItem {
  id: string
  title: string
  description: string
  highlight: string
}

export interface WorkflowStep {
  stepNumber: string
  title: string
  description: string
  detail: string
}

export interface WhyUsContent {
  eyebrow: string
  heading: string
  subheading: string
  philosophy: string
  items: WhyUsItem[]
  workflowHeading: string
  workflowSteps: WorkflowStep[]
}

export const whyUs: WhyUsContent = {
  eyebrow: 'The Morphink Advantage',
  heading: 'Architecture Engineered with the "Midas Touch"',
  subheading:
    'Need is the mother of invention. Your search for purposeful design brings you to a studio where dream homes and commercial spaces are resurrected exactly as envisioned.',
  philosophy:
    'In our firm, we follow a foundational rule: every project must express our signature Midas touch and be loved at first nuance.',
  items: [
    {
      id: 'polyglot-advantage',
      title: 'Indie Language Fluency',
      description:
        'We seamlessly consult and collaborate across Tamil, Telugu, Kannada, Hindi, and English so your dream project is conceived with your true native cultural touch.',
      highlight: '5 Languages • South India Wide',
    },
    {
      id: 'environmental-leadership',
      title: 'M.Arch Environmental Leadership',
      description:
        'Both our Principal and Chief Architects hold Master of Architecture degrees in Environmental Architecture, ensuring science-backed thermal comfort and green building efficiency.',
      highlight: 'Certified Sustainable Design',
    },
    {
      id: 'material-invention',
      title: 'Raw Material & Concrete Invention',
      description:
        'We innovate with raw concrete, repurposed native cane baskets, handcrafted rope ceilings, terracotta jaali blocks, and earthen filler slabs to drastically reduce cost and elevate aesthetic soul.',
      highlight: 'Bespoke Structural Details',
    },
    {
      id: 'unified-studio',
      title: 'Single-Window Turnkey Delivery',
      description:
        'From site soil testing, municipal approvals, and Vastu planning to 3D spatial visualization, on-site construction management, custom furniture, and commercial branding.',
      highlight: 'Concept to Handover',
    },
  ],
  workflowHeading: 'Our 4-Stage Architectural Journey',
  workflowSteps: [
    {
      stepNumber: '01',
      title: 'Spatial Study & Soil Analysis',
      description: 'Comprehensive site visits, land soil testing, microclimate mapping, and deep client requirement gathering.',
      detail: 'Site Analysis & Vastu Consultation',
    },
    {
      stepNumber: '02',
      title: 'Parametric 3D & Material Formulation',
      description: '3D spatial visualization, daylight studies, sustainable material palette selection (jaali, fillers, rope, concrete).',
      detail: 'Photorealistic VR Renders',
    },
    {
      stepNumber: '03',
      title: 'Structural Drafting & Millwork Detailing',
      description: 'Precise MEP integration, custom door/facade carving blueprints, CNC partition drafting, and municipal approvals.',
      detail: 'Meticulous Working Drawings',
    },
    {
      stepNumber: '04',
      title: 'Site Supervision & "Midas Touch" Handover',
      description: 'Hands-on site management by our licensed architects ensuring flawless craftsmanship, custom furniture install, and brand elevation.',
      detail: 'Turnkey Handover',
    },
  ],
}
