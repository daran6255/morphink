import { alpha, styled, useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../../components'
import { clientsPartnersCtaData } from '../../../data/impact/clientsPartners'

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

export const ClientsPartnersCtaSection = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Root aria-labelledby="clients-partners-cta-heading">
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
          <SectionHeading
            headingId="clients-partners-cta-heading"
            heading={clientsPartnersCtaData.heading}
            description={clientsPartnersCtaData.body}
            tone={isDark ? 'inverse' : 'default'}
            maxWidth={720}
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              tone="primary"
              variant="contained"
              size="large"
              href={clientsPartnersCtaData.primaryCta.href}
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.6, fontSize: '1.0625rem', fontWeight: 700 }}
            >
              {clientsPartnersCtaData.primaryCta.label}
            </Button>

            <Button
              variant="outlined"
              size="large"
              href={clientsPartnersCtaData.secondaryCta.href}
              sx={{ px: 3.5, py: 1.6, fontSize: '1.0625rem', fontWeight: 700 }}
            >
              {clientsPartnersCtaData.secondaryCta.label}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Root>
  )
}
