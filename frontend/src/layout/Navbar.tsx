import { Fragment, useState } from 'react'
import type { MouseEvent } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import { Button, ThemeToggle } from '../components'
import { primaryNavItems, contactNavItem } from '../data'
import type { NavItem } from '../data'
import { useIsScrolled } from '../hooks'
import { palette, typography, tokens } from '../themes'

const HeaderRoot = styled('header', {
  shouldForwardProp: (prop) => prop !== 'elevated',
})<{ elevated: boolean }>(({ theme, elevated }) => ({
  position: 'sticky',
  top: 0,
  zIndex: tokens.zIndex.sticky + 10,
  backgroundColor: elevated
    ? alpha(theme.palette.background.paper, theme.palette.mode === 'dark' ? 0.90 : 0.94)
    : 'transparent',
  backdropFilter: elevated ? 'blur(16px)' : 'none',
  WebkitBackdropFilter: elevated ? 'blur(16px)' : 'none',
  borderBottom: `${tokens.borderWidth.thin} solid ${
    elevated
      ? alpha(theme.palette.divider, 0.6)
      : 'transparent'
  }`,
  boxShadow: elevated
    ? theme.palette.mode === 'dark'
      ? tokens.dark.shadow.md
      : tokens.shadow.md
    : 'none',
  transition: `background-color ${tokens.transition.base}, border-color ${tokens.transition.base}, box-shadow ${tokens.transition.base}, backdrop-filter ${tokens.transition.base}`,
}))

const Bar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 80,
  [theme.breakpoints.down('md')]: {
    height: 68,
  },
}))

const LogoLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textDecoration: 'none',
  flexShrink: 0,
  transition: `transform ${tokens.transition.fast}`,
  '&:hover': {
    transform: 'translateY(-1px)',
  },
})

const NavLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontFamily: typography.subtitle1.fontFamily,
  fontWeight: 600,
  fontSize: '1.0625rem',
  letterSpacing: '0.015em',
  padding: theme.spacing(1, 1.75),
  borderRadius: tokens.radius.md,
  position: 'relative',
  textShadow:
    theme.palette.mode === 'dark'
      ? '0 1px 4px rgba(0, 0, 0, 0.55)'
      : '0 1px 3px rgba(255, 255, 255, 0.75)',
  transition: `color ${tokens.transition.fast}, background-color ${tokens.transition.fast}, transform ${tokens.transition.fast}`,
  '&:hover': {
    color: palette.brand.lime,
    backgroundColor: alpha(palette.brand.lime, 0.12),
    transform: 'translateY(-1px)',
  },
  '&:focus-visible': {
    outline: `${tokens.borderWidth.medium} solid ${palette.brand.lime}`,
    outlineOffset: 3,
  },
}))

const NavTrigger = styled('button', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  background: open ? alpha(palette.brand.lime, 0.12) : 'none',
  border: 'none',
  borderRadius: tokens.radius.md,
  cursor: 'pointer',
  color: open ? palette.brand.lime : theme.palette.text.primary,
  fontFamily: typography.subtitle1.fontFamily,
  fontWeight: 600,
  fontSize: '1.0625rem',
  letterSpacing: '0.015em',
  padding: theme.spacing(1, 1.75),
  textShadow:
    theme.palette.mode === 'dark'
      ? '0 1px 4px rgba(0, 0, 0, 0.55)'
      : '0 1px 3px rgba(255, 255, 255, 0.75)',
  transition: `color ${tokens.transition.fast}, background-color ${tokens.transition.fast}, transform ${tokens.transition.fast}`,
  '&:hover': {
    color: palette.brand.lime,
    backgroundColor: alpha(palette.brand.lime, 0.12),
    transform: 'translateY(-1px)',
  },
  '&:focus-visible': {
    outline: `${tokens.borderWidth.medium} solid ${palette.brand.lime}`,
    outlineOffset: 3,
  },
  '& svg': {
    fontSize: 20,
    transform: open ? 'rotate(180deg)' : 'none',
    transition: `transform ${tokens.transition.base}`,
  },
}))

const MobileNavLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontFamily: typography.subtitle1.fontFamily,
  fontWeight: 600,
  fontSize: '1.125rem',
  padding: theme.spacing(1.5, 1.25),
  borderRadius: tokens.radius.md,
  transition: `color ${tokens.transition.fast}, background-color ${tokens.transition.fast}`,
  '&:hover': {
    color: palette.brand.lime,
    backgroundColor: alpha(palette.brand.lime, 0.08),
  },
}))

const DesktopNavItem = ({ item }: { item: NavItem }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const triggerId = `nav-trigger-${item.id}`
  const menuId = `nav-menu-${item.id}`

  if (!item.children && !item.megaMenuColumns) {
    return (
      <NavLink key={item.id} href={item.href}>
        {item.label}
      </NavLink>
    )
  }

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <NavTrigger
        id={triggerId}
        type="button"
        open={open}
        aria-haspopup="menu"
        aria-controls={open ? menuId : undefined}
        aria-expanded={open || undefined}
        onClick={handleOpen}
      >
        {item.label}
        <ExpandMoreIcon aria-hidden="true" />
      </NavTrigger>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          list: { 'aria-labelledby': triggerId, sx: { minWidth: 260, py: 1.25 } },
          paper: {
            sx: (theme) => ({
              mt: 1.5,
              borderRadius: tokens.radius.lg,
              backgroundColor: alpha(theme.palette.background.paper, 0.98),
              backdropFilter: 'blur(16px)',
              border: `${tokens.borderWidth.thin} solid ${alpha(palette.brand.lime, 0.2)}`,
              boxShadow: theme.palette.mode === 'dark' ? tokens.dark.shadow.xl : tokens.shadow.xl,
              overflow: 'hidden',
            }),
          },
        }}
      >
        {item.children?.map((child) => (
          <Fragment key={child.id}>
            {child.topDivider && <Divider sx={{ my: 1 }} />}
            <MenuItem
              component="a"
              href={child.href}
              onClick={handleClose}
              sx={{
                py: 1.2,
                px: 2.25,
                borderRadius: tokens.radius.md,
                mx: 1,
                transition: `all ${tokens.transition.fast}`,
                '&:hover': {
                  backgroundColor: alpha(palette.brand.lime, 0.1),
                  '& .child-label': { color: palette.brand.lime },
                  '& .child-arrow': { opacity: 1, transform: 'translateX(3px)' },
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Box>
                  <Typography
                    className="child-label"
                    sx={{
                      ...typography.subtitle2,
                      fontWeight: 600,
                      color: 'text.primary',
                      transition: `color ${tokens.transition.fast}`,
                    }}
                  >
                    {child.label}
                  </Typography>
                  {child.description && (
                    <Typography
                      sx={{
                        ...typography.caption,
                        color: 'text.secondary',
                        display: 'block',
                        mt: 0.2,
                      }}
                    >
                      {child.description}
                    </Typography>
                  )}
                </Box>
                <ArrowForwardIcon
                  className="child-arrow"
                  sx={{
                    fontSize: 16,
                    color: palette.brand.lime,
                    opacity: 0,
                    transition: `opacity ${tokens.transition.fast}, transform ${tokens.transition.fast}`,
                  }}
                />
              </Box>
            </MenuItem>
          </Fragment>
        ))}
      </Menu>
    </>
  )
}

const MobileNavSection = ({ item, onClose }: { item: NavItem; onClose: () => void }) => {
  if (!item.children && !item.megaMenuColumns) {
    return (
      <MobileNavLink key={item.id} href={item.href} onClick={onClose}>
        {item.label}
        <ArrowForwardIcon sx={{ fontSize: 16, color: palette.brand.lime, opacity: 0.7 }} />
      </MobileNavLink>
    )
  }

  return (
    <Accordion
      key={item.id}
      disableGutters
      elevation={0}
      square
      sx={{
        '&:before': { display: 'none' },
        backgroundColor: 'transparent',
        borderBottom: (theme) => `${tokens.borderWidth.thin} solid ${alpha(theme.palette.divider, 0.4)}`,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: palette.brand.lime }} />} sx={{ px: 1, minHeight: 48 }}>
        <Typography sx={{ ...typography.subtitle1, fontWeight: 600 }}>
          {item.label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 1, pb: 2, pt: 0 }}>
        <Stack spacing={0.75}>
          {item.children?.map((child) => (
            <Box
              key={child.id}
              component="a"
              href={child.href}
              onClick={onClose}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 1,
                px: 1.5,
                borderRadius: tokens.radius.sm,
                textDecoration: 'none',
                color: 'text.secondary',
                ...typography.subtitle2,
                transition: `all ${tokens.transition.fast}`,
                '&:hover': {
                  color: palette.brand.lime,
                  backgroundColor: alpha(palette.brand.lime, 0.08),
                },
              }}
            >
              <Typography sx={{ ...typography.bodySm, fontWeight: 500 }}>
                {child.label}
              </Typography>
              <ArrowForwardIcon sx={{ fontSize: 14, color: palette.brand.lime }} />
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}

/**
 * MORPHINK ARCHITECTS — Unified Studio Navigation Bar
 * Uses design system typography and solid brand color palette.
 */
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const elevated = useIsScrolled(20)

  return (
    <HeaderRoot elevated={elevated}>
      <Container maxWidth="xl">
        <Bar>
          {/* Studio Brand Logo */}
          <LogoLink href="/" aria-label="Morphink Architects home">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: tokens.radius.md,
                backgroundColor: palette.brand.lime,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: tokens.shadow.lime,
              }}
            >
              <ArchitectureIcon sx={{ color: palette.brand.ink, fontSize: 24 }} />
            </Box>
            <Box>
              <Typography
                sx={(theme) => ({
                  fontFamily: typography.h4.fontFamily,
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: 'text.primary',
                  lineHeight: 1.1,
                  textShadow:
                    theme.palette.mode === 'dark'
                      ? '0 1px 4px rgba(0, 0, 0, 0.55)'
                      : '0 1px 3px rgba(255, 255, 255, 0.75)',
                })}
              >
                MORPHINK
              </Typography>
              <Typography
                sx={{
                  ...typography.overline,
                  color: palette.brand.lime,
                  display: 'block',
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  mt: 0.25,
                }}
              >
                STUDIO ARCHITECTURE
              </Typography>
            </Box>
          </LogoLink>

          {/* Desktop Navigation Links */}
          <Stack
            component="nav"
            direction="row"
            spacing={1.5}
            aria-label="Primary"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {primaryNavItems.map((item) => (
              <DesktopNavItem key={item.id} item={item} />
            ))}
          </Stack>

          {/* Desktop Right Controls: Theme Toggle & Solid Clean CTA */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <ThemeToggle size="medium" />
            <Button
              tone="accent"
              href={contactNavItem.href}
              sx={(theme) => ({
                fontFamily: typography.button.fontFamily,
                fontSize: '0.985rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                px: 3.5,
                py: 1.25,
                borderRadius: tokens.radius.pill,
                backgroundColor: theme.palette.mode === 'dark' ? palette.brand.limeLight : palette.brand.lime,
                color: palette.brand.ink,
                boxShadow: tokens.shadow.lime,
                border: 'none',
                transition: `all ${tokens.transition.base}`,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? palette.brand.lime : palette.brand.limeLight,
                  boxShadow: tokens.shadow.limeLg,
                  transform: 'translateY(-1px)',
                },
              })}
            >
              {contactNavItem.label}
              <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.8 }} />
            </Button>
          </Stack>

          {/* Mobile Right Controls: Theme Toggle & Menu Icon */}
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <ThemeToggle size="small" />
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              sx={(theme) => ({
                color: 'text.primary',
                backgroundColor: alpha(theme.palette.text.primary, 0.06),
                borderRadius: tokens.radius.md,
                p: 1,
              })}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          </Stack>
        </Bar>
      </Container>

      {/* Mobile Touch Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: (theme) => ({
              width: 340,
              maxWidth: '85vw',
              p: 3,
              backgroundColor: alpha(theme.palette.background.paper, 0.96),
              backdropFilter: 'blur(20px)',
              borderLeft: `${tokens.borderWidth.thin} solid ${alpha(palette.brand.lime, 0.2)}`,
            }),
          },
        }}
      >
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3, pb: 2, borderBottom: (theme) => `${tokens.borderWidth.thin} solid ${theme.palette.divider}` }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: tokens.radius.sm,
                backgroundColor: palette.brand.lime,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArchitectureIcon sx={{ color: palette.brand.ink, fontSize: 18 }} />
            </Box>
            <Typography sx={{ ...typography.h6 }}>
              MORPHINK
            </Typography>
          </Stack>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close navigation menu" sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack component="nav" aria-label="Mobile primary navigation" spacing={0.5}>
          {primaryNavItems.map((item) => (
            <MobileNavSection key={item.id} item={item} onClose={() => setMobileOpen(false)} />
          ))}
        </Stack>

        <Box sx={{ mt: 'auto', pt: 4 }}>
          <Box sx={{ p: 2, borderRadius: tokens.radius.md, backgroundColor: (theme) => alpha(theme.palette.text.primary, 0.04), mb: 2 }}>
            <ThemeToggle showLabel size="small" />
          </Box>
          <Button
            tone="accent"
            href={contactNavItem.href}
            onClick={() => setMobileOpen(false)}
            sx={(theme) => ({
              width: '100%',
              py: 1.25,
              borderRadius: tokens.radius.pill,
              ...typography.buttonSm,
              backgroundColor: theme.palette.mode === 'dark' ? palette.brand.limeLight : palette.brand.lime,
              color: palette.brand.ink,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? palette.brand.lime : palette.brand.limeLight,
              },
            })}
          >
            {contactNavItem.label} <ArrowForwardIcon sx={{ fontSize: 16, ml: 1 }} />
          </Button>
        </Box>
      </Drawer>
    </HeaderRoot>
  )
}
