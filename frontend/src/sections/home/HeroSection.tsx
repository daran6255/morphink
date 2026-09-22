import { styled, keyframes } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { Hero } from '@/components/ui/animated-hero'
import { heroContent } from '../../data'

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
