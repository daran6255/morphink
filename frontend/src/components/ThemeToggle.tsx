import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { palette, useThemeMode } from '../themes'

export interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large'
  showLabel?: boolean
}

/**
 * Animated Dark/Light Mode Toggle Switch
 * Inspired by modern landing page animations:
 * Smooth rotational morph between Sun and Moon icons with brand amber/lime glow.
 */
export const ThemeToggle = ({ size = 'medium', showLabel = false }: ThemeToggleProps) => {
  const { mode, toggleMode } = useThemeMode()
  const isDark = mode === 'dark'

  const pxSize = size === 'small' ? 36 : size === 'large' ? 48 : 42
  const iconPx = size === 'small' ? 20 : size === 'large' ? 26 : 22

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5 }}>
      <IconButton
        onClick={toggleMode}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        sx={(theme) => ({
          position: 'relative',
          width: pxSize,
          height: pxSize,
          borderRadius: '50%',
          color: isDark ? palette.brand.amber : theme.palette.text.primary,
          backgroundColor: isDark
            ? alpha(palette.brand.amber, 0.12)
            : alpha(theme.palette.text.primary, 0.06),
          border: `1.5px solid ${
            isDark ? alpha(palette.brand.amber, 0.3) : alpha(theme.palette.text.primary, 0.15)
          }`,
          transition:
            'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
          overflow: 'hidden',
          '&:hover': {
            backgroundColor: isDark
              ? alpha('#E8A020', 0.22)
              : alpha(theme.palette.text.primary, 0.12),
            transform: 'rotate(18deg) scale(1.08)',
            boxShadow: isDark
              ? '0 0 20px rgba(232, 160, 32, 0.45)'
              : '0 0 20px rgba(141, 194, 31, 0.35)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        })}
      >
        {/* Sun Icon (Visible in Dark mode) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
            opacity: isDark ? 1 : 0,
            transition:
              'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out',
            position: 'absolute',
          }}
        >
          <WbSunnyOutlinedIcon sx={{ fontSize: iconPx }} />
        </Box>

        {/* Moon Icon (Visible in Light mode) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isDark ? 'rotate(-180deg) scale(0)' : 'rotate(0deg) scale(1)',
            opacity: isDark ? 0 : 1,
            transition:
              'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out',
            position: 'absolute',
          }}
        >
          <DarkModeOutlinedIcon sx={{ fontSize: iconPx }} />
        </Box>
      </IconButton>

      {showLabel && (
        <Box
          component="span"
          onClick={toggleMode}
          sx={{
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 600,
            userSelect: 'none',
            color: 'text.primary',
            transition: 'color 0.3s ease',
            '&:hover': { color: 'accent.main' },
          }}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </Box>
      )}
    </Box>
  )
}
