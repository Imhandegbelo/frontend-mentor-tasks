/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      backgound: {
        pricing: 'url(./src/assets/pricingApp/bg-pattern.svg)'
      }
    },
  },
  plugins: [],
};
