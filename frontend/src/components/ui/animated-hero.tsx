import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { useTheme } from "@mui/material/styles";
import { tokens, FONT_HEADING, FONT_SUBTITLE, FONT_BODY } from "@/themes";
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
          maxWidth: 1120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: theme.spacing(4),
          ...(!isDark && {
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.90)",
            boxShadow:
              "0 24px 60px -12px rgba(26, 26, 46, 0.12), 0 1px 3px rgba(26, 26, 46, 0.06)",
            padding: theme.spacing(6, 4),
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
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm tracking-wider uppercase font-semibold border shadow-md transition-all duration-300 hover:scale-[1.02] ${
                isDark
                  ? "border-primary/40 bg-[#1A1A2E]/80 backdrop-blur-md text-white hover:border-primary/70 hover:bg-[#1A1A2E]"
                  : "border-white/90 bg-white/90 backdrop-blur-md text-slate-800 hover:bg-white"
              }`}
              startIcon={
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 10,
                    height: 10,
                    marginRight: 4,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: tokens.radius.circle,
                      backgroundColor: theme.palette.primary.main,
                      opacity: 0.75,
                      animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      width: 8,
                      height: 8,
                      borderRadius: tokens.radius.circle,
                      backgroundColor: theme.palette.primary.main,
                      boxShadow: "0 0 8px rgba(141, 194, 31, 0.8)",
                    }}
                  />
                </span>
              }
              endIcon={<MoveRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />}
            >
              <span style={{ fontFamily: FONT_SUBTITLE, letterSpacing: "0.08em" }}>
                {launchBadgeText}
              </span>
            </Button>
          </div>
        )}

        {/* Dynamic Heading with Animated Titles — Iconic Morphink Architectural Typography */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: theme.spacing(1),
          }}
        >
          <h1
            style={{
              fontFamily: FONT_HEADING,
              fontSize: "clamp(2.75rem, 4.5vw, 4.35rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: isDark ? "#FFFFFF" : "#1A1A2E",
              textShadow: isDark
                ? "0 2px 14px rgba(0, 0, 0, 0.8), 0 4px 28px rgba(0, 0, 0, 0.5)"
                : "0 1px 2px rgba(255, 255, 255, 0.8)",
              margin: 0,
              maxWidth: 980,
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
                    fontFamily: FONT_HEADING,
                    fontSize: "clamp(2.75rem, 4.5vw, 4.35rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    display: "inline-block",
                    textAlign: "center",
                    color: isDark ? "#A3E635" : "#4D7C0F",
                    textShadow: isDark
                      ? "0 0 24px rgba(163, 230, 53, 0.45), 0 2px 10px rgba(0, 0, 0, 0.8)"
                      : "0 1px 2px rgba(255, 255, 255, 0.6)",
                  }}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -30 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.22 }
                      : { type: "spring", stiffness: 90, damping: 15 }
                  }
                >
                  {currentTitle}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Subheadline Narrative — Clean, Elegant, High-Legibility */}
          {description && (
            <p
              style={{
                fontFamily: FONT_BODY,
                fontSize: "clamp(1.05rem, 0.95rem + 0.35vw, 1.25rem)",
                fontWeight: 400,
                lineHeight: 1.7,
                letterSpacing: "0.01em",
                color: isDark ? "rgba(255, 255, 255, 0.88)" : "#334155",
                textShadow: isDark ? "0 2px 10px rgba(0, 0, 0, 0.8)" : "none",
                maxWidth: 780,
                margin: "0 auto",
                textAlign: "center",
                paddingTop: theme.spacing(1),
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
            gap: theme.spacing(2.5),
            justifyContent: "center",
            alignItems: "center",
            paddingTop: theme.spacing(1.5),
          }}
        >
          {primaryCtaText && (
            <Button
              size="lg"
              variant="default"
              tone="primary"
              href={primaryCtaHref}
              onClick={onPrimaryClick}
              endIcon={<MoveRight className="w-5 h-5 ml-1.5" />}
              className="font-bold text-base sm:text-lg px-8 py-4 h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_-4px_rgba(141,194,31,0.55)]"
              style={{
                background: "linear-gradient(135deg, #9BD326 0%, #8DC21F 100%)",
                color: "#1A1A2E",
              }}
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
              startIcon={<PhoneCall className="w-5 h-5 mr-1.5 text-primary" />}
              className={`font-semibold text-base sm:text-lg px-7 py-4 h-auto rounded-xl border-2 transition-all duration-300 hover:scale-[1.03] ${
                isDark
                  ? "bg-[#1A1A2E]/70 hover:bg-[#1A1A2E] border-white/20 hover:border-primary/60 text-white backdrop-blur-md shadow-md"
                  : "bg-white/95 hover:bg-white border-slate-300 hover:border-primary text-slate-800 shadow-md"
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

