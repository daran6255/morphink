import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {
  Languages,
  Leaf,
  Layers,
  Compass,
  Boxes,
  CheckCircle2,
  Sparkles,
  Building2,
  FileCode2,
  HardHat,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { SectionHeading } from '../../components'
import { whyUs } from '../../data/home/whyUs'
import { palette } from '../../themes/palette'
import { FONT_SUBTITLE, FONT_BODY } from '../../themes'

interface MethodologyDetail {
  stepNumber: string
  phaseName: string
  title: string
  tagline: string
  description: string
  milestoneTitle: string
  icon: React.ReactNode
  accentColor: string
  deliverables: {
    title: string
    description: string
  }[]
  specs: {
    label: string
    value: string
  }[]
}

const METHODOLOGY_STAGES: MethodologyDetail[] = [
  {
    stepNumber: '01',
    phaseName: 'Phase 01: Investigation',
    title: 'Spatial Study & Soil Analysis',
    tagline: 'Scientific geo-technical soil testing, Vastu solar mapping & microclimate surveys',
    description:
      'Every purposeful project begins below ground. Our licensed architects conduct comprehensive on-site soil bearing capacity testing, digital topographical surveys, solar azimuth tracking, and native wind-flow studies to establish a flawless ecological foundation.',
    milestoneTitle: 'Site Intelligence Dossier',
    icon: <Compass className="w-5 h-5" />,
    accentColor: palette.brand.lime,
    deliverables: [
      {
        title: 'Geo-Technical Soil Testing',
        description: 'Laboratory stratum analysis for optimal structural footing and foundation design.',
      },
      {
        title: 'Vastu Shastra Solar Alignment',
        description: 'Solar angle and cardinal axis orientation for natural energy equilibrium.',
      },
      {
        title: 'Microclimate Wind & Sun Mapping',
        description: '24/7 North-light capture analysis and passive ventilation wind-path charts.',
      },
    ],
    specs: [
      { label: 'Supervising Lead', value: 'Principal Environmental Architect' },
      { label: 'Primary Output', value: 'Comprehensive Site Dossier' },
      { label: 'Compliance', value: '100% Vastu & GRIHA Benchmarked' },
    ],
  },
  {
    stepNumber: '02',
    phaseName: 'Phase 02: Synthesis',
    title: 'Parametric 3D & Material Formulation',
    tagline: 'Virtual reality walkthroughs, daylight raytracing & tactile material formulation',
    description:
      'We bring your space to life before the first brick is laid. Led by our Chief Architect, we engineer photorealistic 3D spatial models, simulate real-time sun shadows, and formulate sustainable tactile material palettes using terracotta jaali, raw concrete, and earthen filler slabs.',
    milestoneTitle: 'Photorealistic VR Renders',
    icon: <Boxes className="w-5 h-5" />,
    accentColor: '#10B981',
    deliverables: [
      {
        title: 'Photorealistic 3D Walkthroughs',
        description: 'Real-time raytraced simulation of daylight, shadows, and spatial volumes.',
      },
      {
        title: 'Tactile Material Palette',
        description: 'Physical prototyping of terracotta jaali blocks, earthen slabs & exposed brick.',
      },
      {
        title: 'Thermal Microclimate Simulation',
        description: 'Passive heat reduction modeling targeting up to ~35% cooling efficiency.',
      },
    ],
    specs: [
      { label: 'Supervising Lead', value: 'Chief 3D Spatial Visualizer' },
      { label: 'Primary Output', value: 'Interactive VR & Material Board' },
      { label: 'Visual Precision', value: '1:1 True-Scale Photorealism' },
    ],
  },
  {
    stepNumber: '03',
    phaseName: 'Phase 03: Engineering',
    title: 'Structural Drafting & Millwork Detailing',
    tagline: 'Precise MEP coordination, municipal statutory clearances & CNC millwork drafting',
    description:
      'A seamless bridge between architectural concept and structural execution. We generate millimeter-accurate structural working drawings, integrated electrical and plumbing (MEP) schematics, custom carved door profiles, and secure all statutory municipal corporation approvals.',
    milestoneTitle: 'Meticulous Working Drawings',
    icon: <FileCode2 className="w-5 h-5" />,
    accentColor: '#6366F1',
    deliverables: [
      {
        title: 'Coordinated MEP Blueprints',
        description: 'Conflict-free electrical, plumbing, structural, and HVAC architectural drawings.',
      },
      {
        title: 'Municipal Statutory Sanctions',
        description: 'Complete regulatory documentation, plan approvals, and civic clearances.',
      },
      {
        title: 'Custom Millwork & CNC Schematics',
        description: 'Bespoke drafting for acoustic partitions, exterior ACP facades, and doors.',
      },
    ],
    specs: [
      { label: 'Supervising Lead', value: 'Senior Structural & MEP Team' },
      { label: 'Primary Output', value: 'Complete Construction Blueprints' },
      { label: 'Regulatory Scope', value: 'Turnkey Municipal Clearances' },
    ],
  },
  {
    stepNumber: '04',
    phaseName: 'Phase 04: Realization',
    title: 'Site Supervision & "Midas Touch" Handover',
    tagline: 'Hands-on site oversight, artisan craft execution & turnkey defect-free delivery',
    description:
      'We do not delegate site supervision to third-party contractors. Our licensed architects personally manage construction milestones on-site, supervising artisanal cobblestone work, rope weave ceilings, custom furniture installation, and culminating in our signature "Midas Touch" key handover.',
    milestoneTitle: 'Turnkey Handover',
    icon: <HardHat className="w-5 h-5" />,
    accentColor: palette.brand.amber,
    deliverables: [
      {
        title: 'Daily Principal Architect Supervision',
        description: 'Strict on-site quality control, structural verification, and material compliance.',
      },
      {
        title: 'Artisan Installation & Millwork',
        description: 'Custom cane ceiling fittings, cobblestone partitions, and lighting fixtures.',
      },
      {
        title: 'Defect-Free "Midas Touch" Handover',
        description: 'Full key handover, client orientation, and comprehensive post-build warranty.',
      },
    ],
    specs: [
      { label: 'Supervising Lead', value: 'Principal Architect In Person' },
      { label: 'Primary Output', value: 'Turnkey Physical Handover' },
      { label: 'Quality Guarantee', value: 'Signature "Midas Touch" Assurance' },
    ],
  },
]

export const WhyMorphinkSection: React.FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const shouldReduceMotion = useReducedMotion()

  const [activeStep, setActiveStep] = useState<number>(0)

  const languagesList = ['தமிழ் (Tamil)', 'తెలుగు (Telugu)', 'ಕನ್ನಡ (Kannada)', 'हिंदी (Hindi)', 'English']
  const materialsList = ['Terracotta Jaali', 'Earthen Filler Slabs', 'Exposed Concrete', 'Repurposed Cane', 'Jute Rope Ceilings']

  const currentStage = METHODOLOGY_STAGES[activeStep] ?? METHODOLOGY_STAGES[0]

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev - 1 + METHODOLOGY_STAGES.length) % METHODOLOGY_STAGES.length)
  }

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % METHODOLOGY_STAGES.length)
  }

  return (
    <Box
      component="section"
      aria-labelledby="why-us-heading"
      sx={{
        py: { xs: 9, md: 15 },
        position: 'relative',
        backgroundColor: isDark ? '#08090F' : '#F8FAFC',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0'}`,
        overflow: 'hidden',
      }}
    >
      {/* Ambient Blueprint Architectural Background Grid */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: isDark
            ? `radial-gradient(circle at 15% 20%, ${alpha(palette.brand.lime, 0.07)} 0%, transparent 45%),
               radial-gradient(circle at 85% 80%, ${alpha(palette.brand.amber, 0.05)} 0%, transparent 50%),
               linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`
            : `radial-gradient(circle at 15% 20%, ${alpha(palette.brand.lime, 0.06)} 0%, transparent 40%),
               radial-gradient(circle at 85% 80%, ${alpha(palette.brand.amber, 0.04)} 0%, transparent 45%),
               linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* ============================================================ */}
        {/* PART 1: SECTION HEADER & ARCHITECTURAL BENTO GRID           */}
        {/* ============================================================ */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <SectionHeading
            headingId="why-us-heading"
            eyebrow={whyUs.eyebrow}
            heading={whyUs.heading}
            description={whyUs.subheading}
            maxWidth={840}
          />
        </Box>

        {/* 21st.dev Asymmetric Architectural Bento Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
            gap: { xs: 2.5, sm: 3 },
            mb: { xs: 10, md: 16 },
          }}
        >
          {/* BENTO CARD 1: M.Arch Environmental Leadership (Wide Hero, 7 cols) */}
          <Box
            component={motion.div}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            transition={{ duration: 0.25 }}
            sx={{
              gridColumn: { xs: 'span 1', md: 'span 7' },
              p: { xs: 3.5, sm: 4.5 },
              borderRadius: '24px',
              backgroundColor: isDark ? 'rgba(17, 18, 30, 0.85)' : '#FFFFFF',
              border: isDark
                ? `1px solid ${alpha(palette.brand.lime, 0.25)}`
                : `1px solid ${alpha(palette.brand.lime, 0.35)}`,
              backdropFilter: 'blur(16px)',
              boxShadow: isDark
                ? `0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 30px ${alpha(palette.brand.lime, 0.08)}`
                : `0 20px 40px -10px rgba(26, 26, 46, 0.08), 0 0 25px ${alpha(palette.brand.lime, 0.06)}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${alpha(palette.brand.lime, 0.18)} 0%, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.75,
                    py: 0.5,
                    borderRadius: '999px',
                    bgcolor: alpha(palette.brand.lime, 0.12),
                    border: `1px solid ${alpha(palette.brand.lime, 0.3)}`,
                    color: palette.brand.lime,
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Dual M.Arch Principals</span>
                </Box>
                <Typography
                  sx={{
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: isDark ? 'rgba(255, 255, 255, 0.45)' : '#64748B',
                    letterSpacing: '0.06em',
                  }}
                >
                  01 / DIFFERENTIATOR
                </Typography>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '1.45rem', sm: '1.75rem', md: '1.95rem' },
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                M.Arch Environmental Leadership
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: FONT_BODY,
                  fontSize: { xs: '0.95rem', md: '1.02rem' },
                  color: isDark ? 'rgba(226, 232, 240, 0.88)' : '#334155',
                  lineHeight: 1.75,
                  mb: 3.5,
                }}
              >
                Both our Principal and Chief Architects hold specialized Master of Architecture degrees in Environmental Architecture, ensuring science-backed thermal comfort, daylight harvesting, and passive microclimate engineering.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 1.5,
                p: 2,
                borderRadius: '16px',
                backgroundColor: isDark ? 'rgba(10, 11, 20, 0.65)' : '#F8FAFC',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
              }}
            >
              <Box>
                <Typography sx={{ fontFamily: FONT_SUBTITLE, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B', mb: 0.25 }}>
                  Thermal Gain
                </Typography>
                <Typography sx={{ fontFamily: FONT_SUBTITLE, fontWeight: 700, fontSize: '0.95rem', color: palette.brand.lime }}>
                  ~35% Passive Cooling
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: FONT_SUBTITLE, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B', mb: 0.25 }}>
                  Daylight Strategy
                </Typography>
                <Typography sx={{ fontFamily: FONT_SUBTITLE, fontWeight: 700, fontSize: '0.95rem', color: isDark ? '#FFFFFF' : '#0F172A' }}>
                  24/7 North Light
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: FONT_SUBTITLE, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B', mb: 0.25 }}>
                  Sustainability
                </Typography>
                <Typography sx={{ fontFamily: FONT_SUBTITLE, fontWeight: 700, fontSize: '0.95rem', color: isDark ? '#FFFFFF' : '#0F172A' }}>
                  LEED & GRIHA Benchmarked
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* BENTO CARD 2: Indie Language Fluency (5 cols) */}
          <Box
            component={motion.div}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            transition={{ duration: 0.25 }}
            sx={{
              gridColumn: { xs: 'span 1', md: 'span 5' },
              p: { xs: 3.5, sm: 4 },
              borderRadius: '24px',
              backgroundColor: isDark ? 'rgba(17, 18, 30, 0.85)' : '#FFFFFF',
              border: isDark
                ? `1px solid ${alpha(palette.brand.amber, 0.25)}`
                : `1px solid ${alpha(palette.brand.amber, 0.35)}`,
              backdropFilter: 'blur(16px)',
              boxShadow: isDark
                ? `0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 30px ${alpha(palette.brand.amber, 0.08)}`
                : `0 20px 40px -10px rgba(26, 26, 46, 0.08), 0 0 25px ${alpha(palette.brand.amber, 0.06)}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.75,
                    py: 0.5,
                    borderRadius: '999px',
                    bgcolor: alpha(palette.brand.amber, 0.12),
                    border: `1px solid ${alpha(palette.brand.amber, 0.3)}`,
                    color: palette.brand.amber,
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span>Pan-South India Fluency</span>
                </Box>
                <Typography
                  sx={{
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: isDark ? 'rgba(255, 255, 255, 0.45)' : '#64748B',
                    letterSpacing: '0.06em',
                  }}
                >
                  02 / DIFFERENTIATOR
                </Typography>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '1.35rem', sm: '1.6rem' },
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                Indie Language Fluency
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: FONT_BODY,
                  fontSize: '0.94rem',
                  color: isDark ? 'rgba(226, 232, 240, 0.85)' : '#475569',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                We seamlessly consult and collaborate across 5 regional languages so your dream home or commercial space is conceived with your authentic native cultural touch.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {languagesList.map((lang, idx) => (
                <Box
                  key={idx}
                  sx={{
                    px: 1.5,
                    py: 0.6,
                    borderRadius: '8px',
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
                    color: isDark ? '#FFFFFF' : '#0F172A',
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.78rem',
                    fontWeight: 600,
                  }}
                >
                  {lang}
                </Box>
              ))}
            </Box>
          </Box>

          {/* BENTO CARD 3: Raw Material & Concrete Invention (5 cols) */}
          <Box
            component={motion.div}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            transition={{ duration: 0.25 }}
            sx={{
              gridColumn: { xs: 'span 1', md: 'span 5' },
              p: { xs: 3.5, sm: 4 },
              borderRadius: '24px',
              backgroundColor: isDark ? 'rgba(17, 18, 30, 0.85)' : '#FFFFFF',
              border: isDark
                ? '1px solid rgba(16, 185, 129, 0.25)'
                : '1px solid rgba(16, 185, 129, 0.35)',
              backdropFilter: 'blur(16px)',
              boxShadow: isDark
                ? '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.08)'
                : '0 20px 40px -10px rgba(26, 26, 46, 0.08), 0 0 25px rgba(16, 185, 129, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.75,
                    py: 0.5,
                    borderRadius: '999px',
                    bgcolor: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10B981',
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Bespoke Structural Details</span>
                </Box>
                <Typography
                  sx={{
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: isDark ? 'rgba(255, 255, 255, 0.45)' : '#64748B',
                    letterSpacing: '0.06em',
                  }}
                >
                  03 / DIFFERENTIATOR
                </Typography>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '1.35rem', sm: '1.6rem' },
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                Raw Material & Concrete Invention
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: FONT_BODY,
                  fontSize: '0.94rem',
                  color: isDark ? 'rgba(226, 232, 240, 0.85)' : '#475569',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                We innovate with raw concrete, terracotta jaali breezeways, earthen filler slabs, and cane rope ceilings to drastically reduce structural cost while infusing rich tactile soul.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {materialsList.map((mat, idx) => (
                <Box
                  key={idx}
                  sx={{
                    px: 1.4,
                    py: 0.5,
                    borderRadius: '8px',
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
                    color: isDark ? 'rgba(255, 255, 255, 0.9)' : '#334155',
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  {mat}
                </Box>
              ))}
            </Box>
          </Box>

          {/* BENTO CARD 4: Single-Window Turnkey Delivery (Wide Hero, 7 cols) */}
          <Box
            component={motion.div}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            transition={{ duration: 0.25 }}
            sx={{
              gridColumn: { xs: 'span 1', md: 'span 7' },
              p: { xs: 3.5, sm: 4.5 },
              borderRadius: '24px',
              backgroundColor: isDark ? 'rgba(17, 18, 30, 0.85)' : '#FFFFFF',
              border: isDark
                ? '1px solid rgba(99, 102, 241, 0.25)'
                : '1px solid rgba(99, 102, 241, 0.35)',
              backdropFilter: 'blur(16px)',
              boxShadow: isDark
                ? '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.08)'
                : '0 20px 40px -10px rgba(26, 26, 46, 0.08), 0 0 25px rgba(99, 102, 241, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.75,
                    py: 0.5,
                    borderRadius: '999px',
                    bgcolor: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    color: '#818CF8',
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Concept to Handover</span>
                </Box>
                <Typography
                  sx={{
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: isDark ? 'rgba(255, 255, 255, 0.45)' : '#64748B',
                    letterSpacing: '0.06em',
                  }}
                >
                  04 / DIFFERENTIATOR
                </Typography>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '1.45rem', sm: '1.75rem', md: '1.95rem' },
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                Single-Window Turnkey Delivery
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: FONT_BODY,
                  fontSize: { xs: '0.95rem', md: '1.02rem' },
                  color: isDark ? 'rgba(226, 232, 240, 0.88)' : '#334155',
                  lineHeight: 1.75,
                  mb: 3.5,
                }}
              >
                From soil testing, municipal approvals, and Vastu planning to 3D spatial VR, structural supervision, custom millwork, and spatial branding—we eliminate contractor finger-pointing under one unified studio.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1.25,
              }}
            >
              {['Soil Analysis', 'Municipal Sanctions', '3D VR', 'Site Supervision', 'Handover'].map((stage, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    px: 1.5,
                    py: 0.6,
                    borderRadius: '8px',
                    backgroundColor: isDark ? 'rgba(10, 11, 20, 0.65)' : '#F1F5F9',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
                    color: isDark ? '#FFFFFF' : '#0F172A',
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.78rem',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{stage}</span>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ============================================================ */}
        {/* PART 2: THE 4-STAGE ARCHITECTURAL JOURNEY (PIPELINE & INSPECTOR) */}
        {/* ============================================================ */}
        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <SectionHeading
            eyebrow="OUR METHODOLOGY"
            heading={whyUs.workflowHeading}
            headingVariant="h3"
            description="From initial soil strata testing and daylight raytracing to on-site structural supervision and turnkey handover."
            maxWidth={760}
          />
        </Box>

        {/* 4-Stage Interactive Pipeline Ribbon / Stepper Tabs */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: { xs: 1.75, sm: 2 },
            mb: { xs: 3.5, md: 4.5 },
          }}
        >
          {METHODOLOGY_STAGES.map((stage, index) => {
            const isSelected = activeStep === index

            return (
              <Box
                key={stage.stepNumber}
                component="button"
                onClick={() => setActiveStep(index)}
                sx={{
                  appearance: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  p: { xs: 2.25, sm: 2.75 },
                  borderRadius: '18px',
                  backgroundColor: isDark
                    ? isSelected
                      ? '#161726'
                      : 'rgba(15, 16, 26, 0.55)'
                    : isSelected
                    ? '#FFFFFF'
                    : 'rgba(248, 250, 252, 0.85)',
                  borderStyle: 'solid',
                  borderWidth: isSelected ? '1.5px' : '1px',
                  borderColor: isSelected
                    ? stage.accentColor
                    : isDark
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(226, 232, 240, 0.9)',
                  boxShadow: isSelected
                    ? isDark
                      ? `0 0 24px -2px ${alpha(stage.accentColor, 0.4)}, 0 10px 25px -4px rgba(0, 0, 0, 0.6)`
                      : `0 0 20px -2px ${alpha(stage.accentColor, 0.3)}, 0 10px 25px -4px rgba(26, 26, 46, 0.1)`
                    : 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    borderColor: alpha(stage.accentColor, 0.6),
                    transform: shouldReduceMotion ? 'none' : 'translateY(-2px)',
                  },
                }}
              >
                {isSelected && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: stage.accentColor,
                      boxShadow: `0 0 10px ${stage.accentColor}`,
                    }}
                  />
                )}

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      px: 1.25,
                      py: 0.35,
                      borderRadius: '6px',
                      backgroundColor: isSelected
                        ? stage.accentColor
                        : isDark
                        ? 'rgba(255, 255, 255, 0.08)'
                        : '#E2E8F0',
                      color: isSelected
                        ? '#1A1A2E'
                        : isDark
                        ? 'rgba(255, 255, 255, 0.65)'
                        : '#64748B',
                      fontFamily: FONT_SUBTITLE,
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {stage.stepNumber}
                  </Box>

                  <Box
                    sx={{
                      color: isSelected ? stage.accentColor : isDark ? 'rgba(255, 255, 255, 0.4)' : '#64748B',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {stage.icon}
                  </Box>
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isSelected ? stage.accentColor : isDark ? 'rgba(255, 255, 255, 0.45)' : '#64748B',
                    mb: 0.5,
                  }}
                >
                  {stage.phaseName}
                </Typography>

                <Typography
                  variant="subtitle1"
                  noWrap
                  sx={{
                    fontFamily: FONT_SUBTITLE,
                    fontSize: { xs: '0.94rem', sm: '1rem' },
                    fontWeight: isSelected ? 700 : 600,
                    color: isSelected
                      ? isDark
                        ? '#FFFFFF'
                        : '#0F172A'
                      : isDark
                      ? 'rgba(255, 255, 255, 0.8)'
                      : '#334155',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {stage.title}
                </Typography>
              </Box>
            )
          })}
        </Box>

        {/* DEEP ARCHITECTURAL STAGE INSPECTOR CONSOLE */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: { xs: '24px', md: '32px' },
            p: { xs: 3, sm: 4, md: 5 },
            backgroundColor: isDark ? '#11121E' : '#FFFFFF',
            border: isDark
              ? `1px solid ${alpha(currentStage.accentColor, 0.3)}`
              : `1px solid ${alpha(currentStage.accentColor, 0.4)}`,
            boxShadow: isDark
              ? `0 28px 65px -15px rgba(0, 0, 0, 0.85), 0 0 45px ${alpha(currentStage.accentColor, 0.12)}`
              : `0 28px 65px -15px rgba(26, 26, 46, 0.12), 0 0 35px ${alpha(currentStage.accentColor, 0.08)}`,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Blueprint Glow */}
          <Box
            sx={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(currentStage.accentColor, 0.18)} 0%, transparent 70%)`,
              pointerEvents: 'none',
              transition: 'background 0.5s ease',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.stepNumber}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
            >
              {/* Top Bar: Phase Identifier & Quality Badge */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.6,
                    borderRadius: '999px',
                    bgcolor: alpha(currentStage.accentColor, 0.12),
                    border: `1px solid ${alpha(currentStage.accentColor, 0.35)}`,
                    color: currentStage.accentColor,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontFamily: FONT_SUBTITLE,
                  }}
                >
                  {currentStage.icon}
                  <span>{currentStage.phaseName} • Step {currentStage.stepNumber} of 04</span>
                </Box>

                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    px: 2,
                    py: 0.6,
                    borderRadius: '999px',
                    bgcolor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#F1F5F9',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0'}`,
                    color: isDark ? '#FFFFFF' : '#0F172A',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontFamily: FONT_SUBTITLE,
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentStage.milestoneTitle}</span>
                </Box>
              </Box>

              {/* Stage Headline & Tagline */}
              <Typography
                variant="h3"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '1.75rem', sm: '2.15rem', md: '2.45rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  letterSpacing: '-0.02em',
                  mb: 1.25,
                }}
              >
                {currentStage.title}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '0.98rem', md: '1.08rem' },
                  fontWeight: 600,
                  color: currentStage.accentColor,
                  lineHeight: 1.5,
                  mb: 2.75,
                }}
              >
                {currentStage.tagline}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: FONT_BODY,
                  fontSize: { xs: '0.95rem', md: '1.02rem' },
                  lineHeight: 1.8,
                  color: isDark ? 'rgba(226, 232, 240, 0.88)' : '#334155',
                  mb: 4,
                  maxWidth: 1000,
                }}
              >
                {currentStage.description}
              </Typography>

              {/* 2-Column Inspector Grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '1.4fr 1fr' },
                  gap: { xs: 3.5, lg: 4.5 },
                  alignItems: 'start',
                }}
              >
                {/* Left: 3 Tangible Milestone Deliverables */}
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                      color: isDark ? 'rgba(255, 255, 255, 0.55)' : '#64748B',
                      fontSize: '0.75rem',
                      mb: 2,
                    }}
                  >
                    Key Tangible Outputs for this Stage:
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                    {currentStage.deliverables.map((del, i) => (
                      <Box
                        key={i}
                        sx={{
                          p: 2.25,
                          borderRadius: '14px',
                          backgroundColor: isDark ? 'rgba(10, 11, 20, 0.7)' : '#F8FAFC',
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: alpha(currentStage.accentColor, 0.15),
                            color: currentStage.accentColor,
                            shrink: 0,
                            mt: 0.25,
                          }}
                        >
                          <ShieldCheck className="w-4 h-4" />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: FONT_SUBTITLE,
                              fontWeight: 700,
                              fontSize: '0.94rem',
                              color: isDark ? '#FFFFFF' : '#0F172A',
                              mb: 0.25,
                            }}
                          >
                            {del.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: FONT_BODY,
                              fontSize: '0.86rem',
                              color: isDark ? 'rgba(226, 232, 240, 0.75)' : '#64748B',
                              lineHeight: 1.5,
                            }}
                          >
                            {del.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Right: Technical Parameters & Navigation Controls */}
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    backgroundColor: isDark ? 'rgba(10, 11, 20, 0.75)' : '#F1F5F9',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 3,
                  }}
                >
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        fontFamily: FONT_SUBTITLE,
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B',
                        mb: 2,
                      }}
                    >
                      Architectural Execution Protocol
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {currentStage.specs.map((spec, i) => (
                        <Box key={i}>
                          <Typography
                            variant="caption"
                            sx={{
                              display: 'block',
                              fontFamily: FONT_SUBTITLE,
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              color: isDark ? 'rgba(255, 255, 255, 0.45)' : '#64748B',
                              mb: 0.35,
                            }}
                          >
                            {spec.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: FONT_SUBTITLE,
                              fontWeight: 700,
                              fontSize: '0.92rem',
                              color: isDark ? '#FFFFFF' : '#0F172A',
                            }}
                          >
                            {spec.value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Navigation Controls: Prev / Next */}
                  <Box
                    sx={{
                      pt: 2.5,
                      borderTop: `1px dashed ${isDark ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 1.5,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="button"
                        aria-label="Previous methodology phase"
                        onClick={handlePrevStep}
                        sx={{
                          appearance: 'none',
                          outline: 'none',
                          cursor: 'pointer',
                          width: 38,
                          height: 38,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#FFFFFF',
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1'}`,
                          color: isDark ? '#FFFFFF' : '#0F172A',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: currentStage.accentColor,
                            color: '#1A1A2E',
                            borderColor: currentStage.accentColor,
                          },
                        }}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Box>
                      <Box
                        component="button"
                        aria-label="Next methodology phase"
                        onClick={handleNextStep}
                        sx={{
                          appearance: 'none',
                          outline: 'none',
                          cursor: 'pointer',
                          width: 38,
                          height: 38,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#FFFFFF',
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1'}`,
                          color: isDark ? '#FFFFFF' : '#0F172A',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: currentStage.accentColor,
                            color: '#1A1A2E',
                            borderColor: currentStage.accentColor,
                          },
                        }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: FONT_SUBTITLE,
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B',
                      }}
                    >
                      Step {activeStep + 1} of 4
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  )
}

