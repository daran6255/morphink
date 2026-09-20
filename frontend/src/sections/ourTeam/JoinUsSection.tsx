import { alpha, styled, useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'
import { joinUs } from '../../data'

const Root = styled('section')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.inverse.main,
    color: theme.palette.inverse.contrastText,
    backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.22)} 0%, transparent 60%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 60%)`,
  }),
}))

/** Closing CTA band pointing to open roles. */
export const JoinUsSection = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Root aria-labelledby="join-us-heading">
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
          <SectionHeading
            headingId="join-us-heading"
            heading={joinUs.heading}
            description={joinUs.body}
            tone={isDark ? 'inverse' : 'default'}
            maxWidth={620}
          />
          <Button
            tone="primary"
            variant="contained"
            size="large"
            href={joinUs.cta.href}
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4, py: 1.5, fontWeight: 700 }}
          >
            {joinUs.cta.label}
          </Button>
        </Stack>
      </Container>
    </Root>
  )
}
