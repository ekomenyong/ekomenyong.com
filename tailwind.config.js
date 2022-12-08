const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

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
        light: "#f2f2f2",
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
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
