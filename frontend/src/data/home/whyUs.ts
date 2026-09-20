export interface WhyUsItem {
  id: string
  title: string
  description: string
}

export interface WorkflowStep {
  stepNumber: string
  title: string
  description: string
}

export interface WhyUsContent {
  eyebrow: string
  heading: string
  items: WhyUsItem[]
  workflowHeading: string
  workflowSteps: WorkflowStep[]
}

export const whyUs: WhyUsContent = {
  eyebrow: 'Why Morphink',
  heading: 'Visionary Architecture Rooted in Engineering Excellence',
  items: [
    {
      id: 'lived-expertise',
      title: 'Architectural Innovation',
      description:
        'Our design lab combines cutting-edge BIM modeling, spatial ergonomics, and organic aesthetics to deliver inspiring physical spaces.',
    },
    {
      id: 'standards',
      title: 'Sustainable Engineering',
      description:
        'We incorporate passive solar orientation, rainwater harvesting, and low-carbon construction materials for green building certifications.',
    },
    {
      id: 'compliant-and-usable',
      title: 'Structural Precision',
      description:
        'Rigorous structural analysis and building code compliance ensure safe, enduring, and resilient structures built to last generations.',
    },
    {
      id: 'one-partner',
      title: 'Single Design Partner',
      description:
        'From master planning and conceptual 3D renders to interior spatial design and site supervision — all under one unified studio.',
    },
  ],
  workflowHeading: 'Our Proven 4-Step Architectural Design Process',
  workflowSteps: [
    {
      stepNumber: '01',
      title: 'Discovery & Masterplan',
      description: 'Comprehensive site analysis, client vision alignment, and preliminary zoning masterplanning.',
    },
    {
      stepNumber: '02',
      title: '3D Modeling & BIM',
      description: 'Parametric 3D visual renderings, structural simulations, and detailed building information modeling.',
    },
    {
      stepNumber: '03',
      title: 'Engineering & Approvals',
      description: 'Meticulous structural drafting, MEP engineering integration, and municipal permit processing.',
    },
    {
      stepNumber: '04',
      title: 'Execution & Delivery',
      description: 'On-site construction supervision, material quality audits, and flawless interior handover.',
    },
  ],
}
