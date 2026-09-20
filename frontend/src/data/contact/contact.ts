export interface ContactReasonOption {
  value: string
  label: string
}

export const contactHeroData = {
  eyebrow: 'Get in Touch • Let’s Design Together',
  headline: 'Contact',
  headlineHighlight: 'Morphink Architecture',
  subheadline:
    'Have a commercial architectural project, residential design inquiry, masterplanning requirement, or career question? Our design studio is ready to assist you.',
}

export const contactInfoData = {
  address: {
    title: 'Architectural Studio & Design Hub',
    line1: '25/3 Brindavan, 3rd Cross, Nyanappana Halli,',
    line2: 'Hulimavu, Bengaluru, Karnataka 560076',
    full: '25/3 Brindavan, 3rd Cross, Nyanappana Halli, Hulimavu, Bengaluru, Karnataka 560076',
    mapUrl: 'https://maps.google.com/?q=25/3+Brindavan,+3rd+Cross,+Nyanappana+Halli,+Hulimavu,+Bengaluru,+Karnataka+560076',
  },
  email: {
    title: 'General & Design Inquiries',
    address: 'contact@morphink.com',
    href: 'mailto:contact@morphink.com',
  },
  phone: {
    title: 'Direct Call / Consultation',
    number: '+91-99805-25374',
    href: 'tel:+919980525374',
  },
  hours: {
    title: 'Studio Hours',
    text: 'Monday – Friday: 9:30 AM – 6:30 PM IST',
    responseTime: 'We typically respond within 1 business day.',
  },
}

export const contactReasonOptions: ContactReasonOption[] = [
  { value: 'commercial-architecture', label: 'Commercial Building & High-Rise Design' },
  { value: 'residential-architecture', label: 'Luxury Residential & Villa Architecture' },
  { value: 'interior-spatial-design', label: 'Interior Architecture & Spatial Planning' },
  { value: 'sustainable-building', label: 'Sustainable Architecture & Green Certification' },
  { value: 'urban-landscape', label: 'Urban Masterplanning & Landscape Design' },
  { value: 'career-inquiry', label: 'Architectural Internship & Career Opportunities' },
  { value: 'general-inquiry', label: 'General Design Inquiry' },
]

export const contactFaqData = [
  {
    question: 'How quickly can Morphink begin schematic architectural design for our project?',
    answer:
      'We schedule an initial design discovery workshop within 24 to 48 hours of contact. Conceptual masterplanning and 3D volumetric studies typically begin within 3 to 5 business days after scope finalization.',
  },
  {
    question: 'Does Morphink handle municipal building approvals and structural engineering compliance?',
    answer:
      'Yes. Our full-service studio coordinates structural engineering, MEP drafting, and municipal sanction drawings to ensure total regulatory compliance.',
  },
  {
    question: 'Do you design sustainable and green-certified buildings?',
    answer:
      'Absolutely. Sustainable design is core to our philosophy. We integrate passive solar planning, rainwater harvesting, energy-efficient HVAC, and eco-certified building materials into every development.',
  },
  {
    question: 'How can young architects or students apply for internships at Morphink?',
    answer:
      'Applicants can select "Architectural Internship" in our contact form or send their portfolio directly to careers@morphink.com.',
  },
]
