import { alpha, styled, useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { Button, SectionHeading } from '../../components'
import { finalCta } from '../../data/home/contact'
import { palette } from '../../themes/palette'

const Root = styled('section')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.inverse.main,
    color: theme.palette.inverse.contrastText,
    backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(palette.brand.lime, 0.24)} 0%, transparent 65%), radial-gradient(80% 120% at 0% 100%, ${alpha(palette.brand.amber, 0.22)} 0%, transparent 65%)`,
  }),
}))

/** Closing CTA band navigating directly to the contact page. */
export const FinalCtaSection = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Root aria-labelledby="final-cta-heading">
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={4.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
          <SectionHeading
            headingId="final-cta-heading"
            eyebrow={finalCta.eyebrow}
            heading={finalCta.heading}
            description={finalCta.body}
            tone={isDark ? 'inverse' : 'default'}
            maxWidth={740}
          />

          <Button
            tone="primary"
            variant="contained"
            size="large"
            href={finalCta.cta.href}
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4.5, py: 1.75, fontSize: '1.0625rem', fontWeight: 700 }}
          >
            {finalCta.cta.label}
          </Button>

          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 2, pt: 1 }}>
            {finalCta.benefits.map((benefit, idx) => (
              <Stack key={idx} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <CheckCircleOutlinedIcon fontSize="small" sx={{ color: isDark ? palette.brand.limeLight : palette.brand.lime }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? alpha(theme.palette.inverse.contrastText, 0.85) : theme.palette.text.secondary,
                    fontWeight: 600,
                  }}
                >
                  {benefit}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Root>
  )
}
