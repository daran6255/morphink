import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined'
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined'
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined'
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import { Button, SectionHeading } from '../../components'
import { servicesTeaser } from '../../data/home/services'
import { palette } from '../../themes/palette'

const SERVICE_ICONS: Record<string, ReactNode> = {
  'sustainable-environmental-architecture': <EnergySavingsLeafOutlinedIcon />,
  'bespoke-residential-villas': <VillaOutlinedIcon />,
  'hospitality-cafe-architecture': <RestaurantOutlinedIcon />,
  'adaptive-reuse-retail-boutiques': <StorefrontOutlinedIcon />,
  '3d-visualization-landscape': <ViewInArOutlinedIcon />,
  'spatial-branding-architectural-graphics': <PaletteOutlinedIcon />,
}

const ServiceCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform', 'background-color']),
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    borderColor: alpha(palette.brand.lime, 0.5),
    boxShadow: `0 14px 32px ${alpha(palette.brand.lime, 0.14)}`,
    transform: 'translateY(-4px)',
    '& .icon-box': {
      backgroundColor: alpha(palette.brand.lime, 0.2),
      transform: 'scale(1.05)',
    },
  },
}))

export const ServicesSection = () => (
  <Box
    component="section"
    aria-labelledby="services-heading"
    sx={(theme) => ({
      bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.default, 0.95) : '#FFFFFF',
      borderTop: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="services-heading"
          eyebrow={servicesTeaser.eyebrow}
          heading={servicesTeaser.heading}
          description={servicesTeaser.subheading}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {servicesTeaser.items.map((service) => (
            <Grid key={service.id} size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: 'flex' }}>
              <ServiceCard>
                <Stack spacing={2.5}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box
                      className="icon-box"
                      sx={(theme) => ({
                        p: 1.5,
                        borderRadius: Number(theme.shape.borderRadius) * 1.2,
                        bgcolor: alpha(palette.brand.lime, 0.12),
                        color: palette.brand.lime,
                        display: 'flex',
                        transition: theme.transitions.create(['background-color', 'transform']),
                        border: `1px solid ${alpha(palette.brand.lime, 0.25)}`,
                      })}
                    >
                      {SERVICE_ICONS[service.id] ?? <VillaOutlinedIcon />}
                    </Box>
                    {service.badge && (
                      <Box
                        sx={(theme) => ({
                          px: 1.25,
                          py: 0.5,
                          borderRadius: 999,
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          bgcolor: alpha(palette.brand.amber, 0.12),
                          color: theme.palette.mode === 'dark' ? palette.brand.amberLight : palette.brand.amberDark,
                          border: `1px solid ${alpha(palette.brand.amber, 0.3)}`,
                        })}
                      >
                        {service.badge}
                      </Box>
                    )}
                  </Stack>

                  <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.35 }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {service.description}
                  </Typography>

                  <Box sx={{ pt: 1 }}>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1 }}>
                      Key Architectural Methods:
                    </Typography>
                    <Stack spacing={0.75}>
                      {service.deliverables.map((item, idx) => (
                        <Stack key={idx} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <CheckCircleOutlineOutlinedIcon sx={{ fontSize: '0.95rem', color: palette.brand.lime }} />
                          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ pt: 2 }}>
          <Button tone="primary" variant="contained" size="large" href={servicesTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
            {servicesTeaser.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
