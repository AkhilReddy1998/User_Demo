/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        niramit: ["Niramit", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        brand: {
          primaryColor: "#1D64C8",
          secondaryColor: "#0E0D0E",
          lightBg: "#EFF6FF",
          textGray: "#BEC0C3",
          textDarkgray: "#5D6268",
          colorError: "#FF0000",
          colorErrorBg: "rgba(200, 29, 70, 0.27)",
          colorSuccess: "#1ACC0B",
          colorSuccessBg: "rgba(26, 204, 11, 0.28)",
          colorDisable: "#C8D1E1",
          colorBorder: "#D9D9D9",
          subtitleColor: "#5A5A5A"
        },
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
