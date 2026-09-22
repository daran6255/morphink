import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { useTheme } from "@mui/material/styles";
import { typography, tokens } from "@/themes";
import { Button } from "@/components/Button";

export interface HeroProps {
  titles?: string[];
  headlinePrefix?: string;
  description?: string;
  launchBadgeText?: string;
  launchBadgeHref?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onBadgeClick?: () => void;
  className?: string;
  interval?: number;
}

const DEFAULT_TITLES = [
  "Precisely Built",
  "Sustainably Crafted",
  "Turnkey Executed",
  "Timelessly Designed",
  "Masterfully Shaped",
];

function Hero({
  titles: customTitles,
  headlinePrefix = "Where Dreams Are",
  description = "From ancient mythology Morpheus (God of Dreams) to Ink (the tool to visualize): Morphink Architects bridges contemporary design with sustainable earth architecture. Crafting iconic residential, commercial, and landscape spaces with our signature Midas touch.",
  launchBadgeText = "Morphink Architects • Karur • Hosur",
  launchBadgeHref,
  primaryCtaText = "Explore Landmark Projects",
  primaryCtaHref,
  secondaryCtaText = "Schedule Consultation",
  secondaryCtaHref,
  onPrimaryClick,
  onSecondaryClick,
  onBadgeClick,
  className = "",
  interval = 2800,
}: HeroProps = {}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const shouldReduceMotion = useReducedMotion();
  const [titleNumber, setTitleNumber] = useState(0);

  // Stable string comparison for customTitles to prevent resetting timer on re-renders
  const titlesKey = useMemo(
    () => (customTitles && customTitles.length > 0 ? customTitles.join("||") : ""),
    [customTitles]
  );

  const titles = useMemo(() => {
    if (customTitles && customTitles.length > 0) {
      return customTitles;
    }
    return DEFAULT_TITLES;
  }, [titlesKey, customTitles]);

  // Reset titleNumber if titles list changes length
  useEffect(() => {
    setTitleNumber(0);
  }, [titles.length]);

  // Guaranteed interval rotation for custom or default titles
  useEffect(() => {
    if (titles.length <= 1) return;

    const timer = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, interval);

    return () => clearInterval(timer);
  }, [titles.length, interval]);

  const currentTitle = titles[titleNumber] ?? titles[0];

  return (
    <div
      className={className}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingInline: theme.spacing(2),
        paddingBlock: theme.spacing(4),
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: theme.spacing(4),
          ...(!isDark && {
            backgroundColor: "rgba(255, 255, 255, 0.62)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.85)",
            boxShadow:
              "0 20px 50px -12px rgba(26, 26, 46, 0.10), 0 1px 3px rgba(26, 26, 46, 0.05)",
            padding: theme.spacing(5, 3.5),
          }),
        }}
      >
        {/* Eyebrow Launch Badge using Button from @/components/Button */}
        {launchBadgeText && (
          <div>
            <Button
              variant="secondary"
              size="sm"
              href={launchBadgeHref}
              onClick={onBadgeClick}
              className={`rounded-full px-5 py-2 text-xs tracking-wider uppercase font-semibold border shadow-sm ${
                isDark ? "border-border/50" : "border-white/80 bg-white/85 text-foreground hover:bg-white"
              }`}
              startIcon={
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: tokens.radius.circle,
                    backgroundColor: theme.palette.primary.main,
                    display: "inline-block",
                  }}
                />
              }
              endIcon={<MoveRight className="w-3.5 h-3.5 text-primary" />}
            >
              {launchBadgeText}
            </Button>
          </div>
        )}

        {/* Dynamic Heading with Animated Titles from Theme Typography */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: theme.spacing(1.5),
          }}
        >
          <h1
            style={{
              fontFamily: typography.displayLg.fontFamily,
              fontSize: typography.displayLg.fontSize,
              lineHeight: typography.displayLg.lineHeight,
              letterSpacing: typography.displayLg.letterSpacing,
              textTransform: typography.displayLg.textTransform,
              color: theme.palette.text.primary,
              margin: 0,
              maxWidth: 920,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>{headlinePrefix}</span>
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                minHeight: "1.25em",
                width: "100%",
                paddingBlock: theme.spacing(0.5),
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`${titleNumber}-${currentTitle}`}
                  style={{
                    color: isDark
                      ? theme.palette.primary.light
                      : "#427308", // High-contrast architectural lime green for light theme (>4.5:1 WCAG AA)
                    fontFamily: typography.displayLg.fontFamily,
                    fontSize: typography.displayLg.fontSize,
                    lineHeight: typography.displayLg.lineHeight,
                    letterSpacing: typography.displayLg.letterSpacing,
                    textTransform: typography.displayLg.textTransform,
                    display: "inline-block",
                    textAlign: "center",
                  }}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 35 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -35 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.25 }
                      : { type: "spring", stiffness: 75, damping: 14 }
                  }
                >
                  {currentTitle}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Subheadline Narrative from Theme Typography */}
          {description && (
            <p
              style={{
                fontFamily: typography.bodyLg.fontFamily,
                fontSize: typography.bodyLg.fontSize,
                fontWeight: typography.bodyLg.fontWeight,
                lineHeight: typography.bodyLg.lineHeight,
                letterSpacing: typography.bodyLg.letterSpacing,
                color: isDark ? theme.palette.text.secondary : "#2D2D44",
                maxWidth: typography.bodyLg.maxWidth,
                margin: 0,
                textAlign: "center",
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Dual Action CTAs using Button from @/components/Button */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: theme.spacing(2),
            justifyContent: "center",
            alignItems: "center",
            paddingTop: theme.spacing(1),
          }}
        >
          {primaryCtaText && (
            <Button
              size="lg"
              variant="default"
              tone="primary"
              href={primaryCtaHref}
              onClick={onPrimaryClick}
              endIcon={<MoveRight className="w-4 h-4 ml-1" />}
              className="font-bold px-8 shadow-md"
            >
              {primaryCtaText}
            </Button>
          )}

          {secondaryCtaText && (
            <Button
              size="lg"
              variant="outline"
              tone="secondary"
              href={secondaryCtaHref}
              onClick={onSecondaryClick}
              startIcon={<PhoneCall className="w-4 h-4 mr-1 text-primary" />}
              className={`font-semibold px-6 ${
                isDark ? "" : "bg-white/90 hover:bg-white border-white/80 shadow-sm"
              }`}
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export { Hero };
