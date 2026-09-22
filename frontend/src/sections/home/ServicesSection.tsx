import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {
  Leaf,
  Home,
  UtensilsCrossed,
  Store,
  Box as BoxIcon,
  Palette,
  Sparkles,
  Compass,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react'
import { Button, SectionHeading } from '../../components'
import { servicesTeaser } from '../../data/home/services'
import { palette } from '../../themes/palette'
import { FONT_SUBTITLE, FONT_BODY } from '../../themes'
import discipline1Img from '../../assets/disciplines/discipline_1.png'

interface ServiceSpec {
  label: string
  value: string
}

interface ServiceData {
  id: string
  number: string
  title: string
  shortTitle: string
  tagline: string
  badge: string
  icon: React.ReactNode
  image: string
  accentColor: string
  accentLight: string
  description: string
  deliverables: string[]
  specs: ServiceSpec[]
}

const SERVICES_CATALOG: ServiceData[] = [
  {
    id: 'sustainable-environmental-architecture',
    number: '01',
    title: 'Sustainable & Earth Architecture',
    shortTitle: 'Sustainable & Earth',
    tagline: 'Filler slabs, terracotta jaali breezeways & passive microclimates',
    badge: 'M.Arch Certified',
    icon: <Leaf className="w-5 h-5" />,
    image: discipline1Img,
    accentColor: palette.brand.lime,
    accentLight: palette.brand.limeLight,
    description:
      'Certified environmental architecture utilizing earthen filler slabs, terracotta jaali breezeways, passive solar orientation, and 24/7 North-light harvesting to keep interiors naturally cool.',
    deliverables: [
      'Filler Slab Construction',
      'Terracotta Jaali Screening',
      'Passive Daylighting & Microclimate',
    ],
    specs: [
      { label: 'Thermal Efficiency', value: '~35% Passive Cooling' },
      { label: 'Primary Materials', value: 'Earthen Slabs & Terracotta' },
      { label: 'Solar Strategy', value: '24/7 North-Light Harvesting' },
    ],
  },
  {
    id: 'bespoke-residential-villas',
    number: '02',
    title: 'Bespoke Residential & Urban Villas',
    shortTitle: 'Bespoke Residential',
    tagline: 'Signature multi-tier private sanctuaries & Vastu Shastra engineering',
    badge: 'Signature Craft',
    icon: <Home className="w-5 h-5" />,
    image: discipline1Img,
    accentColor: palette.brand.amber,
    accentLight: palette.brand.amberLight,
    description:
      'From signature multi-tier urban homes like "The Circle House" to expansive outskirts villas—meticulously engineered with Vastu Shastra, double-height atriums, and custom millwork.',
    deliverables: [
      'Custom Facade Apertures',
      'Vastu Shastra Compliance',
      'Double-Height Living Spaces',
    ],
    specs: [
      { label: 'Typology', value: 'Multi-Tier Private Estates' },
      { label: 'Spatial Core', value: 'Double-Height Light Atriums' },
      { label: 'Compliance', value: '100% Vastu Shastra Engineered' },
    ],
  },
  {
    id: 'hospitality-cafe-architecture',
    number: '03',
    title: 'Hospitality, Cafes & Restaurants',
    shortTitle: 'Hospitality & Dining',
    tagline: 'High-energy culinary destinations & traffic-diverting streetscapes',
    badge: 'Turnkey Design',
    icon: <UtensilsCrossed className="w-5 h-5" />,
    image: discipline1Img,
    accentColor: '#10B981',
    accentLight: '#6EE7B7',
    description:
      'Transforming compact commercial spaces into high-energy destinations (e.g. Hotwings & Amrutha)—featuring repurposed cane-basket ceilings, cobblestone partitions, and traffic-diverting streetscapes.',
    deliverables: [
      'Repurposed Organic Ceilings',
      'Cobblestone & Rope Screening',
      'Crowd-Flow Street Facades',
    ],
    specs: [
      { label: 'Venue Typology', value: 'High-Energy Culinary Dining' },
      { label: 'Circulation', value: 'Traffic-Diverting Streetscape' },
      { label: 'Craft Feature', value: 'Repurposed Cane Ceilings' },
    ],
  },
  {
    id: 'adaptive-reuse-retail-boutiques',
    number: '04',
    title: 'Adaptive Reuse & Boutique Retail',
    shortTitle: 'Adaptive Reuse',
    tagline: 'Transforming legacy structures with exposed brick & Bauhaus aesthetics',
    badge: 'Material Innovation',
    icon: <Store className="w-5 h-5" />,
    image: discipline1Img,
    accentColor: '#6366F1',
    accentLight: '#A5B4FC',
    description:
      'Transforming residential units into vibrant retail destinations like The Style Stag, using cost-effective custom rope weave ceilings, Bauhaus color schemes, and exposed brick aesthetics.',
    deliverables: [
      'Bespoke Rope Weave Ceilings',
      'Bauhaus Spatial Themes',
      'Cost-Optimized Fitouts',
    ],
    specs: [
      { label: 'Retrofit Scope', value: 'Residential to Commercial' },
      { label: 'Color Theory', value: 'Bauhaus Spatial Coding' },
      { label: 'Cost Efficiency', value: 'Optimized Material Fitout' },
    ],
  },
  {
    id: '3d-visualization-landscape',
    number: '05',
    title: '3D Spatial Visualisation & Landscape',
    shortTitle: '3D & Landscape',
    tagline: 'Photorealistic walkthroughs & environmental outdoor sanctuaries',
    badge: 'Fine Art Led',
    icon: <BoxIcon className="w-5 h-5" />,
    image: discipline1Img,
    accentColor: '#06B6D4',
    accentLight: '#67E8F9',
    description:
      'Photorealistic 3D rendering and environmental landscape design led by our Chief Architect—simulating real-world lighting, greenwalls, pergola canopies, and lush outdoor sanctuaries.',
    deliverables: [
      'Photorealistic 3D Walkthroughs',
      'Vertical Greenwall Engineering',
      'Pergola & Garden Architecture',
    ],
    specs: [
      { label: 'Visual Engine', value: 'Photorealistic Raytracing' },
      { label: 'Biophilic Design', value: 'Vertical Living Greenwalls' },
      { label: 'Landscape Scope', value: 'Pergola & Garden Sanctuaries' },
    ],
  },
  {
    id: 'spatial-branding-architectural-graphics',
    number: '06',
    title: 'Spatial Branding & Environmental Graphics',
    shortTitle: 'Spatial Branding',
    tagline: 'Holistic physical identities, CNC architectural packaging & ACP facades',
    badge: 'Full Identity',
    icon: <Palette className="w-5 h-5" />,
    image: discipline1Img,
    accentColor: '#8B5CF6',
    accentLight: '#C4B5FD',
    description:
      'Holistic identity design tailored for businesses, including custom CNC signage, ACP exterior elevations, custom logo narratives, and branded architectural packaging.',
    deliverables: [
      'Architectural Brand Identities',
      'CNC & WPC Acoustic Partitions',
      'ACP Commercial Elevation',
    ],
    specs: [
      { label: 'Facade Engineering', value: 'Commercial ACP Elevations' },
      { label: 'Partitions', value: 'CNC & WPC Acoustic Screens' },
      { label: 'Brand Asset', value: 'Physical & Spatial Packaging' },
    ],
  },
]

export const ServicesSection: React.FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const shouldReduceMotion = useReducedMotion()

  const [activeId, setActiveId] = useState<string>(SERVICES_CATALOG[0].id)

  const currentIndex = SERVICES_CATALOG.findIndex((item) => item.id === activeId)
  const activeService =
    SERVICES_CATALOG[currentIndex] ?? SERVICES_CATALOG[0]

  const handlePrev = () => {
    const prevIdx =
      (currentIndex - 1 + SERVICES_CATALOG.length) % SERVICES_CATALOG.length
    setActiveId(SERVICES_CATALOG[prevIdx].id)
  }

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % SERVICES_CATALOG.length
    setActiveId(SERVICES_CATALOG[nextIdx].id)
  }

  return (
    <Box
      component="section"
      aria-labelledby="services-heading"
      sx={{
        py: { xs: 9, md: 15 },
        position: 'relative',
        backgroundColor: isDark ? '#090A10' : '#F8FAFC',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0'}`,
        overflow: 'hidden',
      }}
    >
      {/* Ambient Blueprint Architectural Radial Glow */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: isDark
            ? `radial-gradient(circle at 20% 30%, ${alpha(activeService.accentColor, 0.09)} 0%, transparent 50%),
               radial-gradient(circle at 80% 70%, ${alpha(palette.brand.amber, 0.06)} 0%, transparent 50%),
               linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`
            : `radial-gradient(circle at 20% 30%, ${alpha(activeService.accentColor, 0.07)} 0%, transparent 45%),
               radial-gradient(circle at 80% 70%, ${alpha(palette.brand.amber, 0.04)} 0%, transparent 45%),
               linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
          transition: 'all 0.5s ease',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <SectionHeading
            headingId="services-heading"
            eyebrow={servicesTeaser.eyebrow}
            heading={servicesTeaser.heading}
            description={servicesTeaser.subheading}
            maxWidth={860}
          />
        </Box>

        {/* ============================================================ */}
        {/* HORIZONTAL ARCHITECTURAL DISCIPLINE NAVIGATOR (NO TRUNCATION)*/}
        {/* ============================================================ */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: { xs: 'nowrap', md: 'wrap' },
            overflowX: { xs: 'auto', md: 'visible' },
            justifyContent: { xs: 'flex-start', md: 'center' },
            alignItems: 'center',
            gap: { xs: 1.25, sm: 1.5 },
            pb: { xs: 2, md: 0 },
            mb: { xs: 4, md: 5.5 },
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {SERVICES_CATALOG.map((service) => {
            const isActive = service.id === activeId

            return (
              <Box
                key={service.id}
                component="button"
                onClick={() => setActiveId(service.id)}
                sx={{
                  appearance: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  borderRadius: '999px',
                  px: { xs: 2, sm: 2.75 },
                  py: { xs: 1.1, sm: 1.35 },
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.25,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  backgroundColor: isActive
                    ? isDark
                      ? '#161726'
                      : '#FFFFFF'
                    : isDark
                    ? 'rgba(255, 255, 255, 0.04)'
                    : 'rgba(241, 245, 249, 0.85)',
                  borderStyle: 'solid',
                  borderWidth: isActive ? '1.5px' : '1px',
                  borderColor: isActive
                    ? service.accentColor
                    : isDark
                    ? 'rgba(255, 255, 255, 0.09)'
                    : 'rgba(203, 213, 225, 0.8)',
                  boxShadow: isActive
                    ? isDark
                      ? `0 0 20px -2px ${alpha(service.accentColor, 0.45)}, 0 8px 20px -4px rgba(0, 0, 0, 0.5)`
                      : `0 0 18px -2px ${alpha(service.accentColor, 0.35)}, 0 8px 20px -4px rgba(26, 26, 46, 0.1)`
                    : 'none',
                  '&:hover': {
                    borderColor: alpha(service.accentColor, 0.6),
                    backgroundColor: isDark
                      ? 'rgba(255, 255, 255, 0.08)'
                      : '#FFFFFF',
                    transform: shouldReduceMotion ? 'none' : 'translateY(-2px)',
                  },
                }}
              >
                {/* Index Numeral Badge */}
                <Typography
                  sx={{
                    fontFamily: FONT_SUBTITLE,
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    px: 1,
                    py: 0.25,
                    borderRadius: '6px',
                    backgroundColor: isActive
                      ? service.accentColor
                      : isDark
                      ? 'rgba(255, 255, 255, 0.08)'
                      : '#E2E8F0',
                    color: isActive
                      ? '#1A1A2E'
                      : isDark
                      ? 'rgba(255, 255, 255, 0.6)'
                      : '#64748B',
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {service.number}
                </Typography>

                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: FONT_SUBTITLE,
                    fontSize: { xs: '0.88rem', sm: '0.94rem' },
                    fontWeight: isActive ? 700 : 600,
                    color: isActive
                      ? isDark
                        ? '#FFFFFF'
                        : '#0F172A'
                      : isDark
                      ? 'rgba(255, 255, 255, 0.72)'
                      : '#475569',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {service.shortTitle}
                </Typography>
              </Box>
            )
          })}
        </Box>

        {/* ============================================================ */}
        {/* MASTER ARCHITECTURAL SHOWCASE STAGE: BALANCED 50/50 SPLIT   */}
        {/* ============================================================ */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: { xs: '24px', md: '32px' },
            p: { xs: 2.5, sm: 3.5, md: 4.5 },
            backgroundColor: isDark ? '#11121E' : '#FFFFFF',
            border: isDark
              ? `1px solid ${alpha(activeService.accentColor, 0.3)}`
              : `1px solid ${alpha(activeService.accentColor, 0.4)}`,
            boxShadow: isDark
              ? `0 28px 65px -15px rgba(0, 0, 0, 0.85), 0 0 45px ${alpha(activeService.accentColor, 0.12)}`
              : `0 28px 65px -15px rgba(26, 26, 46, 0.12), 0 0 35px ${alpha(activeService.accentColor, 0.08)}`,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Background Corner Glow */}
          <Box
            sx={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(activeService.accentColor, 0.18)} 0%, transparent 70%)`,
              pointerEvents: 'none',
              transition: 'background 0.5s ease',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -18 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                  gap: { xs: 4, lg: 5.5 },
                  alignItems: 'stretch',
                }}
              >
                {/* ---------------------------------------------------- */}
                {/* LEFT COLUMN: CINEMATIC ARCHITECTURAL VISUAL STAGE   */}
                {/* ---------------------------------------------------- */}
                <Box
                  sx={{
                    position: 'relative',
                    minHeight: { xs: 300, sm: 380, md: 460, lg: '100%' },
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: isDark
                      ? '1px solid rgba(255, 255, 255, 0.12)'
                      : '1px solid #E2E8F0',
                    boxShadow: isDark
                      ? '0 16px 40px -10px rgba(0, 0, 0, 0.7)'
                      : '0 16px 36px -10px rgba(26, 26, 46, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover img': {
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  {/* High-Resolution Architectural Render */}
                  <Box
                    component="img"
                    src={activeService.image}
                    alt={activeService.title}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />

                  {/* Dark Gradient Veils for Top & Bottom Controls */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.05) 45%, rgba(0, 0, 0, 0.75) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top Floating Glass Badges */}
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      p: { xs: 2, sm: 2.5 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 0.65,
                        borderRadius: '999px',
                        backdropFilter: 'blur(16px)',
                        backgroundColor: 'rgba(10, 11, 20, 0.75)',
                        border: `1px solid ${alpha(activeService.accentColor, 0.45)}`,
                        color: activeService.accentColor,
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontFamily: FONT_SUBTITLE,
                      }}
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Discipline {activeService.number} / 06</span>
                    </Box>

                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.75,
                        px: 2,
                        py: 0.65,
                        borderRadius: '999px',
                        backdropFilter: 'blur(16px)',
                        backgroundColor: 'rgba(10, 11, 20, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontFamily: FONT_SUBTITLE,
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{activeService.badge}</span>
                    </Box>
                  </Box>

                  {/* Bottom Controls & Visual Caption Bar */}
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      p: { xs: 2, sm: 2.5 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 0.75,
                        borderRadius: '12px',
                        backdropFilter: 'blur(16px)',
                        backgroundColor: 'rgba(10, 11, 20, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontFamily: FONT_SUBTITLE,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: activeService.accentColor,
                          boxShadow: `0 0 8px ${activeService.accentColor}`,
                        }}
                      />
                      <span>{activeService.shortTitle} Study</span>
                    </Box>

                    {/* Next / Prev Quick Switcher */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="button"
                        aria-label="Previous discipline"
                        onClick={handlePrev}
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
                          backdropFilter: 'blur(16px)',
                          backgroundColor: 'rgba(10, 11, 20, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: activeService.accentColor,
                            color: '#1A1A2E',
                            borderColor: activeService.accentColor,
                          },
                        }}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Box>
                      <Box
                        component="button"
                        aria-label="Next discipline"
                        onClick={handleNext}
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
                          backdropFilter: 'blur(16px)',
                          backgroundColor: 'rgba(10, 11, 20, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: activeService.accentColor,
                            color: '#1A1A2E',
                            borderColor: activeService.accentColor,
                          },
                        }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* ---------------------------------------------------- */}
                {/* RIGHT COLUMN: ARCHITECTURAL MONOGRAPH & SPEC SHEET  */}
                {/* ---------------------------------------------------- */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    {/* Discipline Category Tag */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 1.75,
                        py: 0.45,
                        borderRadius: '8px',
                        backgroundColor: alpha(activeService.accentColor, 0.12),
                        border: `1px solid ${alpha(activeService.accentColor, 0.3)}`,
                        color: activeService.accentColor,
                        fontFamily: FONT_SUBTITLE,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        mb: 2,
                      }}
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Morphink Architectural Atelier</span>
                    </Box>

                    {/* Discipline Full Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: FONT_SUBTITLE,
                        fontSize: { xs: '1.75rem', sm: '2.15rem', md: '2.45rem' },
                        fontWeight: 700,
                        lineHeight: 1.15,
                        color: isDark ? '#FFFFFF' : '#0F172A',
                        letterSpacing: '-0.02em',
                        mb: 1.5,
                      }}
                    >
                      {activeService.title}
                    </Typography>

                    {/* Tagline */}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: FONT_SUBTITLE,
                        fontSize: { xs: '0.98rem', md: '1.08rem' },
                        fontWeight: 600,
                        color: activeService.accentColor,
                        lineHeight: 1.5,
                        mb: 2.75,
                      }}
                    >
                      {activeService.tagline}
                    </Typography>

                    {/* Narrative Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: FONT_BODY,
                        fontSize: { xs: '0.95rem', md: '1.02rem' },
                        lineHeight: 1.8,
                        color: isDark ? 'rgba(226, 232, 240, 0.88)' : '#334155',
                        mb: 3.5,
                      }}
                    >
                      {activeService.description}
                    </Typography>

                    {/* Architectural Specifications Grid (3 Parameters) */}
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                        gap: 1.5,
                        p: 2.25,
                        mb: 3.5,
                        borderRadius: '16px',
                        backgroundColor: isDark ? 'rgba(10, 10, 18, 0.75)' : '#F8FAFC',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
                      }}
                    >
                      {activeService.specs.map((spec, i) => (
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
                              color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B',
                              mb: 0.5,
                            }}
                          >
                            {spec.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: FONT_SUBTITLE,
                              fontWeight: 700,
                              fontSize: '0.88rem',
                              color: isDark ? '#FFFFFF' : '#0F172A',
                            }}
                          >
                            {spec.value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Key Execution Deliverables */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontWeight: 700,
                          color: isDark ? 'rgba(255, 255, 255, 0.55)' : '#64748B',
                          fontSize: '0.75rem',
                          mb: 1.5,
                        }}
                      >
                        Signature Methodologies & Deliverables:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
                        {activeService.deliverables.map((item, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 1,
                              px: 1.75,
                              py: 0.7,
                              borderRadius: '10px',
                              bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
                            }}
                          >
                            <ShieldCheck
                              className="w-4 h-4 shrink-0"
                              style={{ color: activeService.accentColor }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                fontFamily: FONT_BODY,
                                fontWeight: 600,
                                fontSize: '0.86rem',
                                color: isDark ? '#FFFFFF' : '#0F172A',
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {/* Contextual Consultation CTA Button */}
                  <Button
                    variant="default"
                    tone="primary"
                    size="lg"
                    href={servicesTeaser.cta.href}
                    endIcon={<ArrowRight className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1" />}
                    className="w-full font-bold text-base py-4 h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01]"
                    style={{
                      background: `linear-gradient(135deg, ${activeService.accentLight} 0%, ${activeService.accentColor} 100%)`,
                      color: '#1A1A2E',
                      boxShadow: `0 10px 25px -5px ${alpha(activeService.accentColor, 0.5)}`,
                    }}
                  >
                    Consult on {activeService.shortTitle}
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Bottom Consultation Banner */}
        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            p: { xs: 3.5, sm: 4.5, md: 5 },
            borderRadius: '24px',
            bgcolor: isDark ? 'rgba(20, 21, 32, 0.85)' : '#FFFFFF',
            border: `1px solid ${isDark ? alpha(palette.brand.lime, 0.25) : alpha(palette.brand.lime, 0.4)}`,
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 3.5,
            boxShadow: isDark
              ? '0 15px 35px -10px rgba(0, 0, 0, 0.6)'
              : '0 15px 35px -10px rgba(26, 26, 46, 0.08)',
          }}
        >
          <Box sx={{ maxWidth: 780 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: FONT_SUBTITLE,
                fontSize: { xs: '1.4rem', sm: '1.65rem', md: '1.9rem' },
                fontWeight: 700,
                color: isDark ? '#FFFFFF' : '#0F172A',
                lineHeight: 1.25,
                mb: 1,
              }}
            >
              Looking for Bespoke Architectural or Turnkey Engineering?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: FONT_BODY,
                color: isDark ? 'rgba(226, 232, 240, 0.82)' : '#475569',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.65,
              }}
            >
              Our Principal Architects in Karur & Hosur lead projects from initial conceptual sketches through structural execution and interior handover.
            </Typography>
          </Box>

          <Box sx={{ shrink: 0, width: { xs: '100%', sm: 'auto' } }}>
            <Button
              variant="default"
              tone="primary"
              size="lg"
              href={servicesTeaser.cta.href}
              endIcon={<ArrowRight className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1" />}
              className="w-full sm:w-auto font-bold text-base px-8 py-4 h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_-4px_rgba(141,194,31,0.55)]"
              style={{
                background: 'linear-gradient(135deg, #9BD326 0%, #8DC21F 100%)',
                color: '#1A1A2E',
              }}
            >
              {servicesTeaser.cta.label}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
