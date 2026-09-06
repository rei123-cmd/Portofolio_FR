/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#090D18",
          secondary: "#101827",
        },
        surface: "#151F33",
        text: {
          primary: "#FFFFFF",
          secondary: "#A0AEC0",
          muted: "#718096",
        },
        accent: {
          blue: "#4F7CFF",
          purple: "#7B61FF",
          cyan: "#00D4FF",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          hover: "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "page-title": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section-title": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "card-title": ["1.5rem", { lineHeight: "1.3" }],
        body: ["1.125rem", { lineHeight: "1.7" }],
        small: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        card: "20px",
        button: "16px",
        input: "16px",
        dialog: "24px",
        floating: "24px",
      },
      spacing: {
        4.5: "18px",
        18: "72px",
        30: "120px",
        40: "160px",
        50: "200px",
      },
      maxWidth: {
        content: "1440px",
        reading: "760px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(0,0,0,0.5)",
        glow: "0 0 40px -8px rgba(79,124,255,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
