import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        seedsure: {
          // Backgrounds
          background: "#F3FFE8",
          cream:      "#FAFFF3",
          paper:      "#FFFFFF",
          // Logo-driven greens
          primary:    "#5EA104",
          forest:     "#244217",
          sage:       "#E8F7D7",
          fern:       "#7CBB06",
          moss:       "#A4E54A",
          // Supporting accents kept restrained
          terracotta: "#5EA104",
          clay:       "#244217",
          sienna:     "#7CBB06",
          // Gold/harvest
          harvest:    "#7CBB06",
          wheat:      "#A4E54A",
          amber:      "#A4E54A",
          // Neutrals
          soil:       "#1B2420",
          text:       "#1B2420",
          muted:      "#64705F",
          light:      "#7A8872",
          border:     "#DCE9CF",
          // Dark sections
          dusk:       "#132416",
          midnight:   "#0B140D",
        }
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft:      "0 2px 40px rgba(29, 20, 9, 0.08)",
        card:      "0 1px 3px rgba(29, 20, 9, 0.06), 0 8px 32px rgba(29, 20, 9, 0.07)",
        lifted:    "0 4px 6px rgba(29, 20, 9, 0.04), 0 16px 48px rgba(29, 20, 9, 0.12)",
        glow:      "0 0 40px rgba(45, 80, 22, 0.3)",
        "glow-sm": "0 0 18px rgba(45, 80, 22, 0.22)",
        "warm":    "0 4px 32px rgba(192, 83, 42, 0.18)",
        inset:     "inset 0 1px 0 rgba(255,255,255,0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "float":          "float 7s ease-in-out infinite",
        "sway":           "sway 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 9s ease infinite",
        "fade-up":        "fade-up 0.7s ease-out forwards",
        "slide-right":    "slide-right 0.6s ease-out forwards",
        "breathe":        "breathe 4s ease-in-out infinite",
        "shimmer":        "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-8px) rotate(0.5deg)" },
          "66%":      { transform: "translateY(-4px) rotate(-0.3deg)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%":      { transform: "rotate(1.5deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-right": {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.015)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
      },
    }
  },
  plugins: []
};

export default config;
