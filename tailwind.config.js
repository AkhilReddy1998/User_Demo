/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          primaryColor: "#0171DC",
          secondaryColor: "#FFC11F",
          primaryText: "#131118",
          secondaryText: "#A4A1AA",
          borderColor: "#E0E0E0",
          bgColor: "#F7FAFC",
          White: "#fff",
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
