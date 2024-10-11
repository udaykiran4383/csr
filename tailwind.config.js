/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calistoga: ["Calistoga", "sans-serif"],
        crimson: ["Crimson Text", "serif"],
        lato: ["Lato", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        // nav: "#122838",
        nav: "#1f4561",
      },
      screens: {
        "300px": "300px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
