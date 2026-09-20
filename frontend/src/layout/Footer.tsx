import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import ArchitectureIcon from '@mui/icons-material/Architecture'

import { Button } from '../components'
import {
  footerLinkGroups,
  legalLinks,
  socialLinks,
  footerTagline,
  studioContact,
  studioAccreditations,
} from '../data'
import { palette, typography, tokens } from '../themes'

const SOCIAL_ICONS: Record<string, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
}

const FooterRoot = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? palette.dark.background.default : palette.light.background.surface,
  color: theme.palette.text.primary,
  position: 'relative',
  borderTop: `${tokens.borderWidth.thin} solid ${
    theme.palette.mode === 'dark'
      ? alpha(palette.brand.lime, 0.2)
      : alpha(palette.brand.lime, 0.3)
  }`,
  transition: `background-color ${tokens.transition.slow}, border-color ${tokens.transition.slow}`,
}))

const FooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontFamily: typography.bodySm.fontFamily,
  fontSize: typography.bodySm.fontSize,
  fontWeight: typography.bodySm.fontWeight,
  transition: `color ${tokens.transition.fast}, transform ${tokens.transition.fast}`,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  '&:hover': {
    color: palette.brand.lime,
    transform: 'translateX(3px)',
  },
  '&:focus-visible': {
    outline: `${tokens.borderWidth.medium} solid ${palette.brand.lime}`,
    outlineOffset: 3,
    borderRadius: tokens.radius.xs,
  },
}))

/**
 * MORPHINK ARCHITECTS — Architectural Studio Editorial Footer
 * Fully driven by the theme token system (palette, typography, tokens).
 * Clean solid brand colors across light and dark modes with zero gradients.
 */
export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterRoot>
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 9 } }}>
        {/* Top Consultation Hero Banner */}
        <Box
          sx={(theme) => ({
            p: { xs: 3.5, md: 5 },
            mb: { xs: 7, md: 9 },
            borderRadius: tokens.radius.xl,
            backgroundColor: theme.palette.mode === 'dark' ? palette.dark.background.paper : palette.light.background.paper,
            border: `${tokens.borderWidth.base} solid ${alpha(palette.brand.lime, 0.35)}`,
            boxShadow: theme.palette.mode === 'dark' ? tokens.dark.shadow.lg : tokens.shadow.lg,
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { xs: 'flex-start', lg: 'center' },
            justifyContent: 'space-between',
            gap: 3.5,
            position: 'relative',
            overflow: 'hidden',
          })}
        >
          <Stack spacing={1} sx={{ maxWidth: 680 }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 0.5 }}>
              <Chip
                label="STUDIO OPEN FOR Q4 2026 ENGAGEMENTS"
                size="small"
                sx={{
                  ...typography.overline,
                  fontSize: '0.725rem',
                  background: alpha(palette.brand.lime, 0.15),
                  color: palette.brand.lime,
                  border: `${tokens.borderWidth.thin} solid ${alpha(palette.brand.lime, 0.4)}`,
                }}
              />
            </Stack>
            <Typography
              sx={{
                ...typography.h3,
                color: 'text.primary',
                fontSize: { xs: '1.35rem', sm: '1.65rem', md: '1.85rem' },
                lineHeight: 1.25,
              }}
            >
              Designing Sustainable & Iconic Built Environments
            </Typography>
            <Typography sx={{ ...typography.body, color: 'text.secondary' }}>
              Partner with Morphink Architecture to transform your vision into award-winning commercial high-rises, residences, institutional campuses, or urban master plans.
            </Typography>
          </Stack>

          {/* Solid Clean CTA Button (No Gradients) */}
          <Button
            tone="accent"
            variant="contained"
            href="/contact-us"
            sx={(theme) => ({
              ...typography.buttonSm,
              px: 3.5,
              py: 1.4,
              borderRadius: tokens.radius.pill,
              backgroundColor: theme.palette.mode === 'dark' ? palette.brand.limeLight : palette.brand.lime,
              color: palette.brand.ink,
              boxShadow: tokens.shadow.lime,
              border: 'none',
              flexShrink: 0,
              transition: `all ${tokens.transition.base}`,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? palette.brand.lime : palette.brand.limeLight,
                boxShadow: tokens.shadow.limeLg,
                transform: 'translateY(-2px)',
              },
            })}
          >
            Schedule Consultation <ArrowForwardIcon sx={{ ml: 1, fontSize: 18 }} />
          </Button>
        </Box>

        {/* Main Footer Content Grid */}
        <Grid container spacing={{ xs: 5, lg: 6 }}>
          {/* Brand & Studio Location Info */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={3}>
              {/* Brand Logo Lockup */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: tokens.radius.md,
                    backgroundColor: palette.brand.lime,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArchitectureIcon sx={{ color: palette.brand.ink, fontSize: 22 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      ...typography.h5,
                      color: 'text.primary',
                      lineHeight: 1,
                    }}
                  >
                    MORPHINK
                  </Typography>
                  <Typography
                    sx={{
                      ...typography.overline,
                      color: palette.brand.lime,
                      display: 'block',
                      fontSize: '0.625rem',
                      mt: 0.3,
                    }}
                  >
                    STUDIO ARCHITECTURE
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ ...typography.bodySm, color: 'text.secondary', maxWidth: 360 }}>
                {footerTagline}
              </Typography>

              {/* Studio Coordinates & Contact info */}
              <Stack spacing={1.25}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', ...typography.bodySm }}>
                  <LocationOnOutlinedIcon sx={{ fontSize: 18, color: palette.brand.lime }} />
                  <span>{studioContact.address}, {studioContact.city}</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: palette.brand.amber, ...typography.label, pl: 3.25 }}>
                  <span>GPS: {studioContact.coordinates}</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', ...typography.bodySm }}>
                  <EmailOutlinedIcon sx={{ fontSize: 18, color: palette.brand.lime }} />
                  <a href={`mailto:${studioContact.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {studioContact.email}
                  </a>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', ...typography.bodySm }}>
                  <PhoneOutlinedIcon sx={{ fontSize: 18, color: palette.brand.lime }} />
                  <a href={`tel:${studioContact.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {studioContact.phone}
                  </a>
                </Box>
              </Stack>

              {/* Studio Social Links */}
              <Stack direction="row" spacing={1.5} aria-label="Social media">
                {socialLinks.map((social) => {
                  const Icon = SOCIAL_ICONS[social.id] || LinkedInIcon
                  return (
                    <IconButton
                      key={social.id}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      size="small"
                      sx={(theme) => ({
                        color: 'text.primary',
                        backgroundColor: alpha(theme.palette.text.primary, 0.05),
                        border: `${tokens.borderWidth.thin} solid ${alpha(theme.palette.text.primary, 0.12)}`,
                        borderRadius: tokens.radius.circle,
                        p: 1.1,
                        transition: `all ${tokens.transition.base}`,
                        '&:hover': {
                          color: palette.brand.lime,
                          borderColor: palette.brand.lime,
                          backgroundColor: alpha(palette.brand.lime, 0.1),
                          transform: 'translateY(-3px)',
                          boxShadow: tokens.shadow.lime,
                        },
                      })}
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  )
                })}
              </Stack>
            </Stack>
          </Grid>

          {/* Numbered Editorial Navigation Columns */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={{ xs: 4, sm: 3 }}>
              {footerLinkGroups.map((group) => (
                <Grid key={group.id} size={{ xs: 12, sm: 4 }}>
                  <Stack spacing={2.5} component="nav" aria-label={group.title}>
                    <Box sx={{ pb: 1, borderBottom: `${tokens.borderWidth.medium} solid ${alpha(palette.brand.lime, 0.3)}`, display: 'inline-block' }}>
                      <Typography
                        component="span"
                        sx={{
                          ...typography.overline,
                          color: palette.brand.lime,
                          mr: 1,
                        }}
                      >
                        {group.number}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{
                          ...typography.overline,
                          color: 'text.primary',
                        }}
                      >
                        {group.title}
                      </Typography>
                    </Box>

                    <Stack spacing={1.5}>
                      {group.links.map((link) => (
                        <FooterLink key={link.id} href={link.href}>
                          <span>{link.label}</span>
                        </FooterLink>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            {/* Accreditations Badges Bar */}
            <Box
              sx={{
                mt: 5,
                pt: 3,
                borderTop: (theme) => `${tokens.borderWidth.thin} dashed ${alpha(theme.palette.divider, 0.6)}`,
              }}
            >
              <Typography sx={{ ...typography.overline, color: 'text.secondary', display: 'block', mb: 1.5 }}>
                Studio Accreditations & Ratings
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', gap: 1 }}>
                {studioAccreditations.map((badge, idx) => (
                  <Chip
                    key={idx}
                    label={badge}
                    size="small"
                    variant="outlined"
                    sx={{
                      ...typography.caption,
                      color: 'text.secondary',
                      borderColor: (theme) => alpha(theme.palette.text.primary, 0.15),
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={(theme) => ({ my: { xs: 5, md: 6 }, borderColor: alpha(theme.palette.divider, 0.6) })} />

        {/* Bottom Copyright & Legal Links */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between' }}
        >
          <Typography sx={{ ...typography.caption, color: 'text.secondary' }}>
            © {year} Morphink Architecture Studio Pvt Ltd. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            {legalLinks.map((link) => (
              <FooterLink key={link.id} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </FooterRoot>
  )
}
