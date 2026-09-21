import { useEffect, useRef, useState } from 'react'
import { styled, keyframes } from '@mui/material/styles'

export interface TypewriterTextProps {
  /** Full text to type out. */
  text: string
  /** Delay in ms before typing starts. */
  startDelay?: number
  /** Delay in ms between each typed character. */
  typingSpeed?: number
  /** Show the blinking caret while/after typing. */
  cursor?: boolean
  className?: string
}

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`

// Visually hidden but accessible to assistive tech, so screen readers get the
// full string instead of the character-by-character animation.
const VisuallyHidden = styled('span')({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
})

const Caret = styled('span')({
  display: 'inline-block',
  width: '2px',
  marginLeft: '0.06em',
  background: 'currentColor',
  animation: `${blink} 0.9s step-end infinite`,
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
})

export const TypewriterText = ({ text, startDelay = 0, typingSpeed = 55, cursor = true, className }: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const textRef = useRef(text)
  textRef.current = text

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplayed(textRef.current)
      setIsTyping(false)
      return
    }

    setDisplayed('')
    setIsTyping(true)

    let charIndex = 0
    let intervalId: ReturnType<typeof setInterval> | undefined

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        charIndex += 1
        setDisplayed(textRef.current.slice(0, charIndex))
        if (charIndex >= textRef.current.length) {
          if (intervalId) clearInterval(intervalId)
          setIsTyping(false)
        }
      }, typingSpeed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, startDelay, typingSpeed])

  return (
    <span className={className}>
      <VisuallyHidden>{text}</VisuallyHidden>
      <span aria-hidden="true">
        {displayed}
        {cursor && (isTyping || displayed.length > 0) && <Caret />}
      </span>
    </span>
  )
}
