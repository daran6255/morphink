import { alpha, styled, useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.inverse.main : '#FFFFFF',
  color: theme.palette.mode === 'dark' ? theme.palette.inverse.contrastText : theme.palette.text.primary,
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundImage:
    theme.palette.mode === 'dark'
      ? `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.24)} 0%, transparent 65%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%)`
      : 'none',
}))

export const CareersCtaSection = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Root aria-labelledby="careers-cta-heading">
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
          <SectionHeading
            headingId="careers-cta-heading"
            heading="Are You a College Placement Officer or Academic Partner?"
            description="We collaborate with engineering colleges, polytechnics, and universities across India to conduct technical accessibility bootcamps and recruit top student interns for ongoing live projects."
            tone={isDark ? 'inverse' : 'default'}
            maxWidth={760}
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              tone="primary"
              variant="contained"
              size="large"
              component="a"
              href="mailto:careers@morphink.com?subject=Campus%20Partnership%20Inquiry%20-%20Morphink"
              startIcon={<EmailOutlinedIcon />}
              sx={{
                px: 4,
                py: 1.6,
                fontSize: '1.0625rem',
                fontWeight: 700,
              }}
            >
              Contact Campus Hiring Team
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="/contact-us"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 3.5,
                py: 1.6,
                fontSize: '1.0625rem',
                fontWeight: 700,
              }}
            >
              General Contact
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Root>
  )
}
