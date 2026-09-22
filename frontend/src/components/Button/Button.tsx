import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import CircularProgress from "@mui/material/CircularProgress"
import type { SxProps, Theme } from "@mui/material/styles"

import { cn } from "@/lib/utils"

export type ButtonTone = "primary" | "secondary" | "accent" | "success" | "danger"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow",
        contained: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        outlined: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        text: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        small: "h-9 rounded-md px-3 text-xs",
        medium: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8 text-base",
        large: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  tone?: ButtonTone
  loading?: boolean
  href?: string
  target?: string
  rel?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  sx?: SxProps<Theme>
  component?: any
  fullWidth?: boolean
}

const toneStyles: Record<ButtonTone, { contained?: string; outlined?: string }> = {
  primary: {
    contained: "bg-primary text-primary-foreground hover:bg-primary/90",
    outlined: "border-primary text-primary hover:bg-primary/10",
  },
  secondary: {
    contained: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outlined: "border-border text-foreground hover:bg-accent hover:text-accent-foreground",
  },
  accent: {
    contained: "bg-[#E8A020] text-[#1A1A2E] hover:bg-[#F5BC50] font-semibold",
    outlined: "border-[#E8A020] text-[#E8A020] hover:bg-[#E8A020]/10",
  },
  success: {
    contained: "bg-green-600 text-white hover:bg-green-700",
    outlined: "border-green-600 text-green-600 hover:bg-green-50",
  },
  danger: {
    contained: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outlined: "border-destructive text-destructive hover:bg-destructive/10",
  },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      tone,
      asChild = false,
      loading = false,
      disabled,
      href,
      target,
      rel,
      startIcon,
      endIcon,
      children,
      sx,
      style,
      component,
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    // Resolve tone-specific classes if specified
    let toneClass = ""
    if (tone && toneStyles[tone]) {
      const isOutline = variant === "outline" || variant === "outlined"
      toneClass = isOutline
        ? toneStyles[tone].outlined || ""
        : toneStyles[tone].contained || ""
    }

    const computedClassName = cn(
      buttonVariants({ variant, size }),
      toneClass,
      fullWidth && "w-full",
      className,
    )

    const content = (
      <>
        {loading && (
          <CircularProgress
            size={16}
            sx={{ mr: 1, color: "currentColor" }}
            aria-hidden="true"
          />
        )}
        {!loading && startIcon && (
          <span className="inline-flex shrink-0 mr-2 items-center">{startIcon}</span>
        )}
        {children}
        {endIcon && (
          <span className="inline-flex shrink-0 ml-2 items-center">{endIcon}</span>
        )}
      </>
    )

    if (asChild) {
      return (
        <Slot
          className={computedClassName}
          ref={ref as any}
          style={{ ...style, ...(sx as any) }}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    if (href || component === "a") {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={computedClassName}
          style={{ ...style, ...(sx as any) }}
          ref={ref as any}
          {...(props as any)}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        className={computedClassName}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        style={{ ...style, ...(sx as any) }}
        {...props}
      >
        {content}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }
