import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'
import { impactContent } from '../../data/home/impact'
import { palette } from '../../themes/palette'

const ProjectCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  '&:hover': {
    borderColor: alpha(palette.brand.lime, 0.5),
    boxShadow: `0 16px 36px ${alpha(palette.brand.lime, 0.15)}`,
    transform: 'translateY(-4px)',
  },
}))

export const ImpactSection = () => (
  <Box
    component="section"
    aria-labelledby="impact-heading"
    sx={(theme) => ({
      bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.default, 0.95) : '#FFFFFF',
      borderTop: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="impact-heading"
          eyebrow={impactContent.eyebrow}
          heading={impactContent.heading}
          description={impactContent.subheading}
          maxWidth={760}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {impactContent.projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: 'flex' }}>
              <ProjectCard>
                <Stack spacing={2.5}>
                  {/* Location & Typology Tag */}
                  <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
                      <LocationOnOutlinedIcon sx={{ fontSize: '1rem', color: palette.brand.lime }} />
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {project.location}
                      </Typography>
                    </Stack>
                    <Box
                      sx={(theme) => ({
                        px: 1.25,
                        py: 0.35,
                        borderRadius: 999,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        bgcolor: alpha(palette.brand.amber, 0.12),
                        color: theme.palette.mode === 'dark' ? palette.brand.amberLight : palette.brand.amberDark,
                        border: `1px solid ${alpha(palette.brand.amber, 0.3)}`,
                      })}
                    >
                      {project.client}
                    </Box>
                  </Stack>

                  <Box>
                    <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 800, mb: 0.5, lineHeight: 1.3 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: palette.brand.lime, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {project.typology}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {project.summary}
                  </Typography>

                  {/* Innovations */}
                  <Box sx={{ pt: 1 }}>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1 }}>
                      Material Inventions:
                    </Typography>
                    <Stack spacing={0.75}>
                      {project.keyInnovations.map((inv, idx) => (
                        <Stack key={idx} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <CheckCircleOutlineOutlinedIcon sx={{ fontSize: '0.95rem', color: palette.brand.lime }} />
                          <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 600 }}>
                            {inv}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>

                  {/* Metrics Bar */}
                  <Grid container spacing={1.5} sx={{ pt: 1.5, borderTop: '1px dashed', borderColor: 'divider' }}>
                    {project.metrics.map((m, idx) => (
                      <Grid key={idx} size={{ xs: 4 }}>
                        <Stack spacing={0.25} sx={{ textAlign: 'center' }}>
                          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.68rem' }}>
                            {m.label}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '0.82rem' }}>
                            {m.value}
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ pt: 2 }}>
          <Button tone="primary" variant="contained" size="large" href={impactContent.cta.href} endIcon={<ArrowForwardIcon />}>
            {impactContent.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
