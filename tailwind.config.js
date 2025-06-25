/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: "#007BFF",
        secondary: "#171D24",
        hint: "rgba(255, 255, 255, 0.7)",
        line: "rgba(255, 255, 255, 0.25)",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        green: {
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        red: {
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
        },
        purple: {
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
        },
        orange: {
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      padding: {
        content: "5px",
      },
      fontFamily: {
        base: ["Inter", "cursive", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1600px",
      },
      backgroundImage: {
        btn: "url('/images/bg-btn.svg)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
