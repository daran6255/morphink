import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'
import { aboutTeaser } from '../../data/home/about'
import { palette } from '../../themes/palette'

const Highlight = styled(Box)(({ theme }) => ({
  borderLeft: `4px solid ${palette.brand.lime}`,
  paddingLeft: theme.spacing(2.5),
  backgroundColor: theme.palette.mode === 'dark' ? alpha(palette.brand.lime, 0.08) : alpha(palette.brand.lime, 0.06),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(2.5),
  borderRadius: `0 ${Number(theme.shape.borderRadius) * 1.2}px ${Number(theme.shape.borderRadius) * 1.2}px 0`,
}))

const BrandStoryCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.25),
  padding: theme.spacing(2.75),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px -4px ${alpha(theme.palette.text.primary, 0.05)}`,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: alpha(palette.brand.lime, 0.45),
    boxShadow: `0 14px 28px -6px ${alpha(palette.brand.lime, 0.15)}`,
    transform: 'translateY(-3px)',
  },
}))

const LanguagePill = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.75, 1.75),
  borderRadius: 999,
  fontSize: '0.875rem',
  fontWeight: 700,
  backgroundColor: theme.palette.mode === 'dark' ? alpha(palette.brand.lime, 0.12) : alpha(palette.brand.lime, 0.08),
  color: theme.palette.mode === 'dark' ? palette.brand.limeLight : palette.brand.limeDark,
  border: `1px solid ${alpha(palette.brand.lime, 0.3)}`,
  transition: theme.transitions.create(['background-color', 'border-color', 'transform']),
  '&:hover': {
    backgroundColor: alpha(palette.brand.lime, 0.2),
    transform: 'translateY(-1px)',
  },
}))

export const AboutTeaserSection = () => (
  <Box
    component="section"
    aria-labelledby="about-heading"
    sx={(theme) => ({
      bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.4) : '#FFFFFF',
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="about-heading"
          eyebrow={aboutTeaser.eyebrow}
          heading={aboutTeaser.heading}
          description="In ancient Greek mythology, Morpheus is the god of dreams. Combined with Ink—the ultimate tool to visualize and draft—MORPHINK is the key to getting your dream spaces built."
          maxWidth={820}
        />

        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ width: '100%', alignItems: 'center' }}>
          {/* Left Column: Story & Narrative */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3.5}>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                {aboutTeaser.body}
              </Typography>

              <Highlight>
                <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.primary', fontWeight: 600, lineHeight: 1.6 }}>
                  "{aboutTeaser.highlight}"
                </Typography>
              </Highlight>

              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {aboutTeaser.logoStory}
              </Typography>

              {/* Native Language Polyglot Block */}
              <Box sx={{ pt: 1 }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1.5 }}>
                  Collaborate In Your Native Tongue:
                </Typography>
                <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap' }}>
                  {aboutTeaser.languages.map((lang) => (
                    <LanguagePill key={lang}>
                      {lang}
                    </LanguagePill>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ pt: 1 }}>
                <Button tone="primary" variant="contained" href={aboutTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
                  {aboutTeaser.cta.label}
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: 3 Strategic Pillars */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.75}>
              <BrandStoryCard>
                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(palette.brand.lime, 0.12),
                    color: palette.brand.lime,
                    display: 'flex',
                    alignSelf: 'flex-start',
                    border: `1px solid ${alpha(palette.brand.lime, 0.2)}`,
                  })}
                >
                  <ArchitectureOutlinedIcon />
                </Box>
                <Stack spacing={0.75}>
                  <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                    The Logo Story: "M" + Pen Nib
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Our emblem symbolizes the unbreakable bridge between client and architect, fusing the 'M' of Morph with the precision pen nib for Ink.
                  </Typography>
                </Stack>
              </BrandStoryCard>

              <BrandStoryCard>
                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(palette.brand.amber, 0.12),
                    color: palette.brand.amber,
                    display: 'flex',
                    alignSelf: 'flex-start',
                    border: `1px solid ${alpha(palette.brand.amber, 0.2)}`,
                  })}
                >
                  <AutoAwesomeOutlinedIcon />
                </Box>
                <Stack spacing={0.75}>
                  <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                    The "Midas Touch" Philosophy
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Every Morphink project balances future contemporary architecture with sustainable earth techniques, ensuring spaces are loved at the very first nuance.
                  </Typography>
                </Stack>
              </BrandStoryCard>

              <BrandStoryCard>
                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(theme.palette.info.main, 0.12),
                    color: theme.palette.info.main,
                    display: 'flex',
                    alignSelf: 'flex-start',
                    border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
                  })}
                >
                  <LocationOnOutlinedIcon />
                </Box>
                <Stack spacing={0.75}>
                  <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                    Dual Studios in Karur & Hosur
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Executing landmark residential, commercial, and landscape projects across Tamil Nadu, Karnataka, and the wider South Indian region.
                  </Typography>
                </Stack>
              </BrandStoryCard>

              <BrandStoryCard>
                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(palette.brand.lime, 0.12),
                    color: palette.brand.lime,
                    display: 'flex',
                    alignSelf: 'flex-start',
                    border: `1px solid ${alpha(palette.brand.lime, 0.2)}`,
                  })}
                >
                  <TranslateOutlinedIcon />
                </Box>
                <Stack spacing={0.75}>
                  <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
                    Native Regional Fluency
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    We conduct design reviews in Tamil, Telugu, Kannada, Hindi, and English so nothing is lost in translation during your architectural journey.
                  </Typography>
                </Stack>
              </BrandStoryCard>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </Box>
)
