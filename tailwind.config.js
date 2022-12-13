const { colors } = require("tailwindcss/colors");
const { fontFamily, spacing } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        light: "#f7f7f7",
        dark: "#272727",
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
      "hero-gradient": "url('/hero-gradient.png')",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
