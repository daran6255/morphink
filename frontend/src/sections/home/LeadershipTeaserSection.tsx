import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'
import { foundersList } from '../../data/ourTeam/team'
import { palette } from '../../themes/palette'

const FounderCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    borderColor: alpha(palette.brand.lime, 0.5),
    boxShadow: `0 16px 36px ${alpha(palette.brand.lime, 0.14)}`,
    transform: 'translateY(-4px)',
  },
}))

const QuoteBox = styled(Box)(({ theme }) => ({
  borderLeft: `3px solid ${palette.brand.amber}`,
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: theme.palette.mode === 'dark' ? alpha(palette.brand.amber, 0.08) : alpha(palette.brand.amber, 0.05),
  borderRadius: `0 ${Number(theme.shape.borderRadius) * 1.2}px ${Number(theme.shape.borderRadius) * 1.2}px 0`,
}))

export const LeadershipTeaserSection = () => (
  <Box
    component="section"
    aria-labelledby="leadership-heading"
    sx={(theme) => ({
      bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.3) : '#FFFFFF',
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="leadership-heading"
          eyebrow="STUDIO LEADERSHIP"
          heading="Guided by M.Arch Environmental Architects & Artists"
          description="Direct founder engagement on every project from conceptual 3D visualization and concrete engineering to turnkey on-site supervision."
          maxWidth={760}
        />

        <Grid container spacing={4} sx={{ width: '100%' }}>
          {foundersList.map((leader) => (
            <Grid key={leader.id} size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
              <FounderCard>
                <Stack spacing={3}>
                  {/* Header & Badges */}
                  <Stack spacing={1}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' }, fontWeight: 800 }}>
                          {leader.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: palette.brand.lime, fontWeight: 700, mt: 0.25 }}>
                          {leader.role}
                        </Typography>
                      </Box>
                      <Box
                        sx={(theme) => ({
                          px: 1.5,
                          py: 0.6,
                          borderRadius: 999,
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          bgcolor: alpha(palette.brand.lime, 0.12),
                          color: theme.palette.mode === 'dark' ? palette.brand.limeLight : palette.brand.limeDark,
                          border: `1px solid ${alpha(palette.brand.lime, 0.3)}`,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.75,
                        })}
                      >
                        <SchoolOutlinedIcon sx={{ fontSize: '1rem' }} />
                        M.Arch (Env)
                      </Box>
                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      {leader.degrees}
                    </Typography>
                  </Stack>

                  {/* Bio */}
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {leader.bio}
                  </Typography>

                  {/* Quote */}
                  <QuoteBox>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', fontWeight: 600, color: 'text.primary' }}>
                      "{leader.quote}"
                    </Typography>
                  </QuoteBox>

                  {/* Core Specialties */}
                  <Box>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1.25 }}>
                      Core Disciplines & Inventions:
                    </Typography>
                    <Stack spacing={1}>
                      {leader.specialties.map((spec, idx) => (
                        <Stack key={idx} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <CheckCircleOutlineOutlinedIcon sx={{ fontSize: '1rem', color: palette.brand.lime }} />
                          <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                            {spec}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </FounderCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ pt: 2 }}>
          <Button tone="primary" variant="contained" size="large" href="/about/our-team" endIcon={<ArrowForwardIcon />}>
            Meet Our Full Team & Studio
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
