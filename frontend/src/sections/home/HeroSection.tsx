import { styled, keyframes, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { Hero } from '@/components/ui/animated-hero'
import { heroContent } from '../../data'
import heroVideo from '@/assets/hero/Cinematic_architectural_walkth.mp4'

const bounceCue = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(6px); opacity: 1; }
`

// Full-viewport hero shell — height accounts for the sticky header (68px on
// mobile, 80px from md up per Navbar's Bar styles) so content is never
// pushed below the fold on load.
const HeroRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 68px)',
  paddingBlock: theme.spacing(4, 4),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  '@supports (height: 100svh)': {
    minHeight: 'calc(100svh - 68px)',
  },
  [theme.breakpoints.up('md')]: {
    minHeight: 'calc(100vh - 80px)',
    paddingBlock: theme.spacing(6, 6),
    '@supports (height: 100svh)': {
      minHeight: 'calc(100svh - 80px)',
    },
  },
}))

// Background video container
const VideoBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  '& video': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
})

// Curated overlay:
// - Dark mode: keeps the exact deep ink gradient loved by the user
// - Light mode: uses a subtle architectural framing vignette so the video stays vibrant without milky washout
const VideoOverlay = styled(Box)(({ theme }) => {
  const isDark = theme.palette.mode === 'dark'
  return {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    pointerEvents: 'none',
    background: isDark
      ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.40)} 0%, ${alpha(theme.palette.background.default, 0.55)} 50%, ${alpha(theme.palette.background.default, 0.78)} 100%)`
      : `linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.10) 25%, rgba(255, 255, 255, 0.08) 70%, rgba(255, 255, 255, 0.75) 100%), radial-gradient(ellipse 75% 60% at 50% 50%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)`,
  }
})

const ScrollCue = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  bottom: theme.spacing(3),
  transform: 'translateX(-50%)',
  zIndex: 2,
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(0.25),
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('md')]: { display: 'flex' },
  '& .cue-icon': {
    animation: `${bounceCue} 1.8s ease-in-out infinite`,
    '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
  },
}))

export const HeroSection = () => {
  return (
    <HeroRoot aria-labelledby="hero-heading">
      {/* 1. Cinematic Architectural Walkthrough Background Video (Muted, Autoplay, Looping) */}
      <VideoBackground aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </VideoBackground>

      {/* 2. Legibility Overlay */}
      <VideoOverlay aria-hidden="true" />

      {/* 3. Foreground Hero Content */}
      <div className="relative z-10 w-full flex justify-center">
        <Hero
          headlinePrefix={heroContent.headlinePrefix}
          titles={heroContent.animatedTitles}
          description={heroContent.subheadline}
          launchBadgeText={`MORPHINK ARCHITECTS • ${heroContent.eyebrow}`}
          launchBadgeHref="/our-story"
          primaryCtaText={heroContent.primaryCta.label}
          primaryCtaHref={heroContent.primaryCta.href}
          secondaryCtaText={heroContent.secondaryCta.label}
          secondaryCtaHref={heroContent.secondaryCta.href}
        />
      </div>

      {/* Scroll cue — desktop only, purely decorative */}
      <ScrollCue aria-hidden="true">
        <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
          Scroll
        </Typography>
        <KeyboardArrowDownRoundedIcon className="cue-icon" />
      </ScrollCue>
    </HeroRoot>
  )
}
