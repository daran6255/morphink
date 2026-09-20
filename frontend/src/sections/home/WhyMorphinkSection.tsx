import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined'
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import { Card, SectionHeading } from '../../components'
import { whyUs } from '../../data/home/whyUs'
import { palette } from '../../themes/palette'

const WHY_US_ICONS: Record<string, ReactNode> = {
  'polyglot-advantage': <TranslateOutlinedIcon />,
  'environmental-leadership': <EnergySavingsLeafOutlinedIcon />,
  'material-invention': <ConstructionOutlinedIcon />,
  'unified-studio': <HandshakeOutlinedIcon />,
}

const StepCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.75),
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: palette.brand.lime,
    boxShadow: `0 14px 30px ${alpha(palette.brand.lime, 0.14)}`,
  },
}))

export const WhyMorphinkSection = () => (
  <Box component="section" aria-labelledby="why-us-heading" sx={{ borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 8, md: 10 }} sx={{ alignItems: 'center' }}>
        {/* Top: 4 Core Differentiators */}
        <Stack spacing={{ xs: 6, md: 8 }} sx={{ width: '100%', alignItems: 'center' }}>
          <SectionHeading
            headingId="why-us-heading"
            eyebrow={whyUs.eyebrow}
            heading={whyUs.heading}
            description={whyUs.subheading}
            maxWidth={760}
          />

          <Grid container spacing={3} sx={{ width: '100%' }}>
            {whyUs.items.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex' }}>
                <Card
                  fullHeight
                  icon={WHY_US_ICONS[item.id] || <ConstructionOutlinedIcon />}
                  iconTone="accent"
                  title={item.title}
                  subtitle={item.description}
                  eyebrow={item.highlight}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Bottom: 4-Step Engagement Process */}
        <Stack spacing={4} sx={{ width: '100%', alignItems: 'center' }}>
          <SectionHeading
            eyebrow="OUR METHODOLOGY"
            heading={whyUs.workflowHeading}
            headingVariant="h3"
            description="From initial soil analysis and 3D visualization to on-site structural management and millwork handover."
            maxWidth={700}
          />

          <Grid container spacing={3} sx={{ width: '100%' }}>
            {whyUs.workflowSteps.map((step) => (
              <Grid key={step.stepNumber} size={{ xs: 12, sm: 6, md: 3 }}>
                <StepCard>
                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: Number(theme.shape.borderRadius) * 1.2,
                      bgcolor: alpha(palette.brand.lime, 0.12),
                      color: palette.brand.lime,
                      fontWeight: 800,
                      fontSize: '1rem',
                      border: `1px solid ${alpha(palette.brand.lime, 0.25)}`,
                    })}
                  >
                    {step.stepNumber}
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, flexGrow: 1 }}>
                    {step.description}
                  </Typography>
                  <Box
                    sx={(theme) => ({
                      pt: 1,
                      borderTop: `1px dashed ${theme.palette.divider}`,
                    })}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 700, color: palette.brand.limeDark }}>
                      {step.detail}
                    </Typography>
                  </Box>
                </StepCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
