/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fafafa",
        dark: "#171717",
        brand: {
          50: "#fff6fa",
          100: "#ffedf5",
          200: "#ffd3e5",
          300: "#ffb8d5",
          400: "#fe82b6",
          500: "#fe4d97",
          600: "#e54588",
          700: "#bf3a71",
          800: "#982e5b",
          900: "#7c264a",
          DEFAULT: "#fe4d97",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-neue)", ...fontFamily.sans],
      mono: ["var(--font-lilex)", ...fontFamily.mono],
    },
    keyframes: {
      jelly: {
        "0%,100%": { transform: "scale(1, 1)" },
        "25%": { transform: "scale(0.95, 1.05)" },
        "50%": { transform: "scale(1.05, 0.95)" },
        "75%": { transform: "scale(0.95, 1.05)" },
      },
    },
    animation: {
      jelly: "jelly 0.5s",
    },
    animationDuration: {
      1500: "1500ms",
      2000: "2000ms",
      2500: "2500ms",
    },
    backgroundImage: {
      "hero-gradient": "url('/hero-gradient.webp')",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
