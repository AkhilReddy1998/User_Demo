/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          primaryColor: "#C3141A",
          secondaryColor: "#FFCC01",
          primaryText: "#000",
          secondaryText: "#A4A1AA",
          borderColor: "#eee",
          borderDark: "#d6d6d6",
          bgColor: "#F5F5F5",
          White: "#fff",
          Green: "#00B517",
          bgGray: "#F5F5F5"
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
