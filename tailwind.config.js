/** @type {import('tailwindcss').Config} */

const { animate, transform } = require('framer-motion');

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        animate: {
          '100%': { transform: 'translateY(25px)'},
        },
      },
      animation: {
        'bouncing': 'animate 2s infinite ease alternate',
      },
      colors: {
        primary: "#000000",
        secondary: "#dff7f1",
        tertiary: "#05445E",
        "black-100": "#100d25",
        "black-200": "#0C2D48",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg-02.png')",
      },
    },
  },
  plugins: [],
};
