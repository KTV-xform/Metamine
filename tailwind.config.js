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
        gray: "#171D24",
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
