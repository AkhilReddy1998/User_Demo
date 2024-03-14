/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          primaryColor: "#131118",
          secondaryColor: "#0E0D0E",
          secondaryText: "#A4A1AA"
      },
      letterSpacing: {
        wide: "0.16px",
      },
      borderWidth: {
        "0.5": "0.5",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      borderWidth: ["responsive", "first", "last"],
      borderRadius: ["first", "last"],
      margin: ["first", "last"],
    },
  },
  plugins: [],
};
