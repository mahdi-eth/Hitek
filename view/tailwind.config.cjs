/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HK Grotesk", "sans-serif"]
      },
      backgroundColor: {
        default: "#F7F7F7"
      },
      colors: {
        primary: "#1565D8",
        secondry: "#FAAD13",
        ـDarkblue: "#183B56",
        _Gray: "#183B56",
        primary_hover: "#4f88d8",
        secondry_hover: "#eeb74a",
        ـDarkblue_hover: "#183B56",
        _Gray_hover: "#183B56",
      },
      minWidth: {
        360: "360px"
      },
      maxWidth: {
        270: "270px"
      },
      minHeight: {
        140: "140px",
        400: "400px"
      },
      maxHeight: {
        140: "140px"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
