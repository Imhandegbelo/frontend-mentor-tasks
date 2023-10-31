/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Overpass: ["Overpass", "sans"],
        Manrope: ["Manrope", "sans-serif"],
        "Space+Grotesk": ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        pricing: 'url("../src/assets/pricingApp/bg-pattern.svg")',
        // "pr": 'url("../../assets/InteractiveCard/bg-main-desktop.png")',
        "card-desktop":
          'url("../src/assets/InteractiveCard/bg-main-desktop.png")',
        "card-mobile":
          'url("../src/assets/InteractiveCard/bg-main-mobile.png")',
        "card-front": 'url("../src/assets/InteractiveCard/bg-card-front.png")',
        "card-back": 'url("../src/assets/InteractiveCard/bg-card-back.png")',
      },
    },
  },
  plugins: [],
};
