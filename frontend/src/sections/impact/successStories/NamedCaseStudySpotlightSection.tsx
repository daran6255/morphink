import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { SectionHeading } from '../../../components'

const SpotlightContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2.4,
  padding: theme.spacing(4.5),
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${alpha(theme.palette.primary.main, 0.35)}`,
  boxShadow: `0 20px 44px -8px ${alpha(theme.palette.primary.main, 0.14)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const SPOTLIGHT_HIGHLIGHTS = [
  '24-story net-zero carbon skyscraper engineered with parametric thermal facades',
  'Biophilic sky garden terraces optimizing natural air circulation and occupant wellness',
  'Integrated rainwater harvesting and solar photovoltaic grid generating 35% clean power',
  'Full BIM Level 2 execution delivering seamless structural and MEP coordination',
]

export const NamedCaseStudySpotlightSection = () => (
  <Box component="section" aria-labelledby="named-spotlight-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="named-spotlight-heading"
          eyebrow="Featured Live Project Spotlight"
          heading="Vertex Eco-Tower: A Landmark Carbon-Neutral Headquarters"
          description="Designed and delivered by Morphink Architecture, Vertex Eco-Tower stands as a testament to sustainable engineering, parametric beauty, and urban performance."
          maxWidth={800}
        />

        <SpotlightContainer sx={{ width: '100%', maxWidth: 1100 }}>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.5}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      px: 1.5,
                      py: 0.4,
                      borderRadius: 99,
                      bgcolor: alpha(theme.palette.accent.main, 0.15),
                      color: theme.palette.accent.dark,
                      fontSize: '0.75rem',
                      fontWeight: 800,
                    })}
                  >
                    <VerifiedUserIcon sx={{ fontSize: 16 }} />
                    COMPLETED LANDMARK PROJECT
                  </Box>
                  <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700 })}>
                    Morphink Architecture Studio
                  </Typography>
                </Stack>

                <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '1.875rem' }, fontWeight: 800, color: 'text.primary', lineHeight: 1.25 }}>
                  Vertex Eco-Tower — Net-Zero Commercial Headquarters
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.975rem' }}>
                  Great architectural design goes beyond drawings — it creates enduring spaces. Morphink designed Vertex Eco-Tower to deliver a high-density, carbon-neutral commercial environment with panoramic city views and energy-efficient building management.
                </Typography>

                <Stack spacing={1.25} sx={{ pt: 1 }}>
                  {SPOTLIGHT_HIGHLIGHTS.map((item, idx) => (
                    <Stack key={idx} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
                      <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'primary.main', flexShrink: 0, mt: 0.3 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55, fontSize: '0.8875rem' }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Right Column: Visual Metrics Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={(theme) => ({
                  p: 3.5,
                  borderRadius: Number(theme.shape.borderRadius) * 1.8,
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                })}
              >
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main' }}>
                      35%
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      Energy Reduction
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Achieved through double-skin thermal facades & smart HVAC controls.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'accent.main' }}>
                      24 Stories
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      Commercial Space
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Over 450,000 sq.ft. of Grade-A office infrastructure.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'success.main' }}>
                      LEED Platinum
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      Green Building Standard
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Certified sustainable architecture & zero-waste design.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </SpotlightContainer>
      </Stack>
    </Container>
  </Box>
)
