import { alpha, styled, keyframes, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, GradientWaves } from '../../components'
import { heroContent } from '../../data'
import { palette } from '../../themes/palette'

const pulseGlow = keyframes`
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
`

const HeroRoot = styled('section')({
  minHeight: 'calc(100vh - 72px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

// Background Waves Full Canvas Container
const WavesBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  overflow: 'hidden',
  pointerEvents: 'auto',
})

// Eyebrow Badge Pill
const EyebrowPill = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  padding: theme.spacing(0.75, 2.25),
  borderRadius: 999,
  backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.8) : '#FFFFFF',
  backdropFilter: theme.palette.mode === 'dark' ? 'blur(16px)' : 'none',
  WebkitBackdropFilter: theme.palette.mode === 'dark' ? 'blur(16px)' : 'none',
  border: `1px solid ${theme.palette.mode === 'dark' ? alpha(palette.brand.lime, 0.35) : theme.palette.divider}`,
  boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.08 : 0.04)}`,
  transition: theme.transitions.create(['background-color', 'border-color', 'transform', 'box-shadow']),
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.95) : '#FFFFFF',
    borderColor: palette.brand.lime,
    transform: 'translateY(-1px)',
  },
}))

const PulseDot = styled(Box)({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: palette.brand.lime,
  animation: `${pulseGlow} 2s ease-in-out infinite`,
})

// Highlight text
const HighlightText = styled('span')(({ theme }) => {
  const isDark = theme.palette.mode === 'dark'
  return {
    color: isDark ? palette.brand.limeLight : palette.brand.limeDark,
    display: 'inline-block',
    position: 'relative',
    fontWeight: 800,
  }
})

export const HeroSection = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <HeroRoot aria-labelledby="hero-heading">
      {/* 1. Full-bleed Background Gradient Waves Component (active in Dark Mode) */}
      {isDark && (
        <WavesBackground aria-hidden="true">
          <GradientWaves
            horizonColor="#5227FF"
            waveColor="#FF9FFC"
            crestColor="#FFFFFF"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1.0}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1.0}
            opacity={1.0}
            mouseInteraction={true}
            parallaxStrength={0.5}
            grain={true}
            grainIntensity={0.05}
          />
        </WavesBackground>
      )}

      {/* 2. Main Hero Editorial Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 8, sm: 10, md: 12 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack spacing={{ xs: 3, md: 4 }} sx={{ alignItems: 'center', maxWidth: 940 }}>
          {/* Eyebrow Badge */}
          <EyebrowPill>
            <PulseDot />
            <Typography
              variant="caption"
              sx={(theme) => ({
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: { xs: '0.72rem', sm: '0.78rem' },
                fontWeight: 700,
                color: theme.palette.text.primary,
              })}
            >
              MORPHINK ARCHITECTS • {heroContent.eyebrow}
            </Typography>
          </EyebrowPill>

          {/* Majestic Hero Headline */}
          <Typography
            id="hero-heading"
            variant="display"
            component="h1"
            sx={(theme) => ({
              color: theme.palette.text.primary,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.25rem', lg: '4.75rem' },
              lineHeight: { xs: 1.15, sm: 1.12, md: 1.08 },
              fontWeight: 800,
              letterSpacing: '-0.03em',
              textWrap: 'balance',
            })}
          >
            {heroContent.headline}{' '}
            <HighlightText>{heroContent.headlineHighlight}</HighlightText>
          </Typography>

          {/* Subheadline Narrative */}
          <Typography
            variant="body1"
            sx={(theme) => ({
              fontSize: { xs: '1.0625rem', sm: '1.2rem', md: '1.25rem' },
              lineHeight: 1.75,
              color: theme.palette.text.secondary,
              maxWidth: 780,
              fontWeight: 450,
            })}
          >
            {heroContent.subheadline}
          </Typography>

          {/* Dual High-Conversion CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2.5}
            sx={{ pt: 1, width: { xs: '100%', sm: 'auto' }, justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              href={heroContent.primaryCta.href}
              size="large"
              endIcon={<ArrowForwardIcon className="cta-arrow" />}
              sx={(theme) => {
                const isDark = theme.palette.mode === 'dark'
                return {
                  px: 4.5,
                  py: 1.75,
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  backgroundColor: palette.brand.lime,
                  color: palette.brand.ink,
                  boxShadow: `0 8px 24px ${alpha(palette.brand.lime, isDark ? 0.35 : 0.25)}`,
                  '& .cta-arrow': {
                    transition: theme.transitions.create('transform'),
                  },
                  '&:hover': {
                    backgroundColor: palette.brand.limeLight,
                    boxShadow: `0 12px 32px ${alpha(palette.brand.lime, 0.45)}`,
                    transform: 'translateY(-2px)',
                    '& .cta-arrow': {
                      transform: 'translateX(4px)',
                    },
                  },
                }
              }}
            >
              {heroContent.primaryCta.label}
            </Button>

            <Button
              variant="outlined"
              size="large"
              href={heroContent.secondaryCta.href}
              sx={(theme) => ({
                px: 4,
                py: 1.75,
                fontSize: '1.0625rem',
                fontWeight: 700,
                color: theme.palette.text.primary,
                borderColor: theme.palette.divider,
                backgroundColor: alpha(theme.palette.background.paper, 0.7),
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                '&:hover': {
                  borderColor: palette.brand.lime,
                  backgroundColor: alpha(theme.palette.background.paper, 0.95),
                  transform: 'translateY(-2px)',
                },
              })}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </HeroRoot>
  )
}
