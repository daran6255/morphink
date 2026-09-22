import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {
  PenTool,
  Sparkles,
  MapPin,
  Languages,
  ArrowRight,
  Building2,
  Compass,
  CheckCircle2,
  Layers,
} from 'lucide-react'
import { Button, SectionHeading } from '../../components'
import { aboutTeaser } from '../../data/home/about'
import { palette } from '../../themes/palette'
import { FONT_HEADING, FONT_SUBTITLE, FONT_BODY } from '../../themes'

// Native script mapping for South Indian polyglot collaboration
const LANGUAGE_META: Record<string, { native: string; script: string }> = {
  Tamil: { native: 'தமிழ்', script: 'Primary Studio' },
  Telugu: { native: 'తెలుగు', script: 'Regional Fluency' },
  Kannada: { native: 'ಕನ್ನಡ', script: 'Bengaluru Border' },
  Hindi: { native: 'हिंदी', script: 'National Reach' },
  English: { native: 'English', script: 'Global Standards' },
}

export const AboutTeaserSection: React.FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  }

  const cardVariants: Record<string, any> = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  // Base card surface styles
  const cardStyle = {
    borderRadius: '24px',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    backgroundColor: isDark
      ? 'rgba(26, 26, 46, 0.65)'
      : 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: isDark
      ? '1px solid rgba(255, 255, 255, 0.08)'
      : '1px solid rgba(226, 232, 240, 0.85)',
    boxShadow: isDark
      ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
      : '0 12px 32px -8px rgba(26, 26, 46, 0.06), 0 1px 3px rgba(26, 26, 46, 0.03)',
    '&:hover': {
      transform: shouldReduceMotion ? 'none' : 'translateY(-4px)',
      borderColor: isDark
        ? alpha(palette.brand.lime, 0.4)
        : alpha(palette.brand.lime, 0.55),
      boxShadow: isDark
        ? `0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 25px ${alpha(palette.brand.lime, 0.15)}`
        : `0 20px 40px -12px rgba(26, 26, 46, 0.12), 0 0 20px ${alpha(palette.brand.lime, 0.12)}`,
    },
  }

  return (
    <Box
      component="section"
      aria-labelledby="about-heading"
      sx={{
        py: { xs: 9, md: 14 },
        position: 'relative',
        backgroundColor: isDark ? '#0D0D17' : '#F8FAFC',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0'}`,
        overflow: 'hidden',
      }}
    >
      {/* Ambient Architectural Grid Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: isDark
            ? `radial-gradient(circle at 15% 20%, ${alpha(palette.brand.lime, 0.06)} 0%, transparent 40%),
               radial-gradient(circle at 85% 80%, ${alpha(palette.brand.amber, 0.05)} 0%, transparent 45%),
               linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`
            : `radial-gradient(circle at 15% 20%, ${alpha(palette.brand.lime, 0.05)} 0%, transparent 35%),
               radial-gradient(circle at 85% 80%, ${alpha(palette.brand.amber, 0.04)} 0%, transparent 40%),
               linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
          opacity: 0.8,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 9 } }}>
          <SectionHeading
            headingId="about-heading"
            eyebrow={aboutTeaser.eyebrow}
            heading={aboutTeaser.heading}
            description="In ancient Greek mythology, Morpheus is the god of dreams. Combined with Ink—the ultimate tool to visualize and draft—MORPHINK is the key to getting your dream spaces built."
            maxWidth={880}
          />
        </Box>

        {/* 21st.dev Magic & UI/UX Pro Max Architectural Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
          }}
        >
          {/* ============================================================ */}
          {/* CARD 1: HERO ORIGIN STORY (Span 8 cols on desktop)          */}
          {/* ============================================================ */}
          <Box
            component={motion.div}
            {...({ variants: cardVariants } as any)}
            sx={{
              ...cardStyle,
              gridColumn: { xs: 'span 12', lg: 'span 8' },
              p: { xs: 3.5, sm: 4.5, md: 5.5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Blueprint watermark pattern */}
            <Box
              sx={{
                position: 'absolute',
                top: -30,
                right: -30,
                width: 240,
                height: 240,
                borderRadius: '50%',
                background: isDark
                  ? `radial-gradient(circle, ${alpha(palette.brand.lime, 0.12)} 0%, transparent 70%)`
                  : `radial-gradient(circle, ${alpha(palette.brand.lime, 0.15)} 0%, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            <Box>
              {/* Eyebrow badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  borderRadius: '999px',
                  bgcolor: isDark ? alpha(palette.brand.lime, 0.12) : alpha(palette.brand.lime, 0.1),
                  border: `1px solid ${alpha(palette.brand.lime, 0.3)}`,
                  color: isDark ? palette.brand.limeLight : '#497D04',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: FONT_SUBTITLE,
                  mb: 3,
                }}
              >
                <Compass className="w-4 h-4" />
                <span>Foundational Genesis</span>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '1.75rem', sm: '2.15rem', md: '2.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  letterSpacing: '-0.02em',
                  mb: 2.5,
                }}
              >
                From "Morpheus"{' '}
                <Box
                  component="span"
                  sx={{
                    color: isDark ? palette.brand.lime : '#4D7C0F',
                    fontWeight: 700,
                  }}
                >
                  (God of Dreams)
                </Box>{' '}
                to "Ink"{' '}
                <Box
                  component="span"
                  sx={{
                    color: isDark ? palette.brand.amber : '#D97706',
                    fontWeight: 700,
                  }}
                >
                  (Precision Reality)
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: FONT_BODY,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.8,
                  color: isDark ? 'rgba(226, 232, 240, 0.88)' : '#334155',
                  maxWidth: 720,
                  mb: 4,
                }}
              >
                {aboutTeaser.body}
              </Typography>
            </Box>

            {/* Interactive Origin Formula Equation */}
            <Box
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: '18px',
                bgcolor: isDark ? 'rgba(15, 15, 26, 0.75)' : '#F1F5F9',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'}`,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '10px',
                    bgcolor: alpha(palette.brand.lime, 0.15),
                    color: palette.brand.lime,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Building2 className="w-5 h-5" />
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 700,
                      color: isDark ? 'rgba(255,255,255,0.6)' : '#64748B',
                      fontSize: '0.75rem',
                    }}
                  >
                    Origin (Greek)
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, color: isDark ? '#FFFFFF' : '#0F172A' }}
                  >
                    Morpheus • To Shape
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontFamily: FONT_HEADING,
                  fontSize: '1.25rem',
                  color: isDark ? 'rgba(255,255,255,0.4)' : '#94A3B8',
                  fontWeight: 600,
                }}
              >
                +
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '10px',
                    bgcolor: alpha(palette.brand.amber, 0.15),
                    color: palette.brand.amber,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PenTool className="w-5 h-5" />
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 700,
                      color: isDark ? 'rgba(255,255,255,0.6)' : '#64748B',
                      fontSize: '0.75rem',
                    }}
                  >
                    Medium
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, color: isDark ? '#FFFFFF' : '#0F172A' }}
                  >
                    Ink • 3D BIM Drafting
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontFamily: FONT_HEADING,
                  fontSize: '1.25rem',
                  color: isDark ? 'rgba(255,255,255,0.4)' : '#94A3B8',
                  fontWeight: 600,
                }}
              >
                =
              </Typography>

              <Box
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: '12px',
                  bgcolor: alpha(palette.brand.lime, 0.15),
                  border: `1px solid ${alpha(palette.brand.lime, 0.35)}`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: FONT_HEADING,
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: isDark ? palette.brand.limeLight : '#3A6305',
                  }}
                >
                  MORPHINK
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ============================================================ */}
          {/* CARD 2: THE MIDAS TOUCH PHILOSOPHY (Span 4 cols on desktop) */}
          {/* ============================================================ */}
          <Box
            component={motion.div}
            {...({ variants: cardVariants } as any)}
            sx={{
              ...cardStyle,
              gridColumn: { xs: 'span 12', lg: 'span 4' },
              p: { xs: 3.5, sm: 4.5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: isDark
                ? `linear-gradient(145deg, rgba(26, 26, 46, 0.8) 0%, rgba(38, 30, 18, 0.4) 100%)`
                : `linear-gradient(145deg, #FFFFFF 0%, #FFFDF5 100%)`,
              borderColor: isDark ? alpha(palette.brand.amber, 0.25) : alpha(palette.brand.amber, 0.3),
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  borderRadius: '999px',
                  bgcolor: alpha(palette.brand.amber, 0.12),
                  border: `1px solid ${alpha(palette.brand.amber, 0.3)}`,
                  color: isDark ? palette.brand.amberLight : '#B45309',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: FONT_SUBTITLE,
                  mb: 3,
                }}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Signature Philosophy</span>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '1.45rem', md: '1.75rem' },
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                The "Midas Touch" Philosophy
              </Typography>

              <Box
                sx={{
                  borderLeft: `3px solid ${palette.brand.amber}`,
                  pl: 2.5,
                  py: 1,
                  my: 2.5,
                  bgcolor: isDark ? alpha(palette.brand.amber, 0.08) : alpha(palette.brand.amber, 0.05),
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    fontSize: '0.98rem',
                    color: isDark ? '#F1F5F9' : '#1E293B',
                    fontWeight: 500,
                  }}
                >
                  "{aboutTeaser.highlight}"
                </Typography>
              </Box>
            </Box>

            {/* Architectural Pillars Checklist */}
            <Box sx={{ mt: 3, pt: 2, borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0'}` }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  'Sustainable Earth Architecture',
                  'Contemporary Structural Grace',
                  'Loved at Very First Nuance',
                ].map((pillar) => (
                  <Box key={pillar} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: FONT_BODY,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: isDark ? 'rgba(255,255,255,0.85)' : '#475569',
                      }}
                    >
                      {pillar}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* ============================================================ */}
          {/* CARD 3: THE LOGO EMBLEM STORY (Span 4 cols on desktop)      */}
          {/* ============================================================ */}
          <Box
            component={motion.div}
            {...({ variants: cardVariants } as any)}
            sx={{
              ...cardStyle,
              gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 4' },
              p: { xs: 3.5, sm: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '14px',
                  bgcolor: alpha(palette.brand.lime, 0.12),
                  border: `1px solid ${alpha(palette.brand.lime, 0.3)}`,
                  color: palette.brand.lime,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                }}
              >
                <Layers className="w-6 h-6" />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                The Logo Emblem: "M" + Pen Nib
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: FONT_BODY,
                  color: isDark ? 'rgba(226, 232, 240, 0.82)' : '#475569',
                  lineHeight: 1.7,
                  fontSize: '0.9375rem',
                }}
              >
                {aboutTeaser.logoStory}
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 3,
                pt: 2,
                borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontWeight: 600,
                  color: isDark ? palette.brand.lime : '#4D7C0F',
                  letterSpacing: '0.04em',
                }}
              >
                The Client ⇄ Architect Sacred Bridge
              </Typography>
            </Box>
          </Box>

          {/* ============================================================ */}
          {/* CARD 4: DUAL REGIONAL STUDIOS (Span 4 cols on desktop)      */}
          {/* ============================================================ */}
          <Box
            component={motion.div}
            {...({ variants: cardVariants } as any)}
            sx={{
              ...cardStyle,
              gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 4' },
              p: { xs: 3.5, sm: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '14px',
                  bgcolor: alpha(theme.palette.info.main, 0.12),
                  border: `1px solid ${alpha(theme.palette.info.main, 0.3)}`,
                  color: theme.palette.info.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                }}
              >
                <MapPin className="w-6 h-6" />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                Dual Studios: Karur & Hosur
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: FONT_BODY,
                  color: isDark ? 'rgba(226, 232, 240, 0.82)' : '#475569',
                  lineHeight: 1.7,
                  fontSize: '0.9375rem',
                  mb: 2.5,
                }}
              >
                Anchored with dedicated physical design studios in Karur and Hosur, actively delivering landmark turnkey projects across Tamil Nadu, Karnataka, and South India.
              </Typography>
            </Box>

            {/* Active Studio Radar Badges */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, mt: 1 }}>
              {[
                { name: 'Karur Studio', detail: 'Design HQ & Central Works' },
                { name: 'Hosur Studio', detail: 'Bengaluru Tech & Industrial Corridor' },
              ].map((studio) => (
                <Box
                  key={studio.name}
                  sx={{
                    px: 2,
                    py: 1.2,
                    borderRadius: '12px',
                    bgcolor: isDark ? 'rgba(15, 15, 26, 0.7)' : '#F8FAFC',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#E2E8F0'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: palette.brand.lime,
                        display: 'inline-block',
                        boxShadow: `0 0 8px ${palette.brand.lime}`,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, color: isDark ? '#FFFFFF' : '#0F172A' }}
                    >
                      {studio.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: isDark ? 'rgba(255,255,255,0.55)' : '#64748B', fontSize: '0.75rem' }}
                  >
                    Active
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ============================================================ */}
          {/* CARD 5: POLYGLOT CLIENT EXPERIENCE (Span 4 cols on desktop) */}
          {/* ============================================================ */}
          <Box
            component={motion.div}
            {...({ variants: cardVariants } as any)}
            sx={{
              ...cardStyle,
              gridColumn: { xs: 'span 12', lg: 'span 4' },
              p: { xs: 3.5, sm: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '14px',
                  bgcolor: alpha(palette.brand.lime, 0.12),
                  border: `1px solid ${alpha(palette.brand.lime, 0.3)}`,
                  color: palette.brand.lime,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                }}
              >
                <Languages className="w-6 h-6" />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                Speak In Your Native Tongue
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: FONT_BODY,
                  color: isDark ? 'rgba(226, 232, 240, 0.82)' : '#475569',
                  lineHeight: 1.7,
                  fontSize: '0.9375rem',
                  mb: 2.5,
                }}
              >
                Architectural visions are deeply personal. Our principals collaborate fluently in South India's native languages, eliminating any communication barriers.
              </Typography>
            </Box>

            {/* Polyglot Script Pills */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
              {aboutTeaser.languages.map((lang) => {
                const meta = LANGUAGE_META[lang]
                return (
                  <Box
                    key={lang}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2,
                      py: 1,
                      borderRadius: '999px',
                      bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0'}`,
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        borderColor: palette.brand.lime,
                        bgcolor: alpha(palette.brand.lime, 0.12),
                        transform: 'scale(1.04)',
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: isDark ? '#FFFFFF' : '#0F172A',
                        fontSize: '0.85rem',
                      }}
                    >
                      {lang}
                    </Typography>
                    {meta && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: isDark ? palette.brand.limeLight : '#497D04',
                          fontWeight: 600,
                          fontSize: '0.78rem',
                        }}
                      >
                        {meta.native}
                      </Typography>
                    )}
                  </Box>
                )
              })}
            </Box>
          </Box>

          {/* ============================================================ */}
          {/* CARD 6: FULL-WIDTH CTA ACTION BANNER (Span 12 cols)          */}
          {/* ============================================================ */}
          <Box
            component={motion.div}
            {...({ variants: cardVariants } as any)}
            sx={{
              ...cardStyle,
              gridColumn: 'span 12',
              p: { xs: 3.5, sm: 4.5, md: 5 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 3.5,
              background: isDark
                ? `linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(18, 18, 32, 0.95) 100%)`
                : `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)`,
              border: `1px solid ${isDark ? alpha(palette.brand.lime, 0.25) : alpha(palette.brand.lime, 0.35)}`,
            }}
          >
            <Box sx={{ maxWidth: 740 }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: FONT_SUBTITLE,
                  fontSize: { xs: '1.45rem', sm: '1.75rem', md: '2rem' },
                  fontWeight: 700,
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  lineHeight: 1.25,
                  mb: 1,
                }}
              >
                Ready to Bring Your Deepest Architectural Dreams into Tangible Reality?
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
                Explore our full design methodology, sustainable construction techniques, and leadership team behind Morphink Architects.
              </Typography>
            </Box>

            <Box sx={{ shrink: 0, width: { xs: '100%', sm: 'auto' } }}>
              <Button
                variant="default"
                tone="primary"
                size="lg"
                href={aboutTeaser.cta.href}
                endIcon={<ArrowRight className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1" />}
                className="w-full sm:w-auto font-bold text-base px-8 py-4 h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_-4px_rgba(141,194,31,0.55)]"
                style={{
                  background: 'linear-gradient(135deg, #9BD326 0%, #8DC21F 100%)',
                  color: '#1A1A2E',
                }}
              >
                {aboutTeaser.cta.label}
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
