/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'default': '#F7F7F7',
      },
    },
    colors: {
      primary: "#1565D8",
      secandry: "#FAAD13",
      ـDarkblue: "#183B56",
      _Gray: "#183B56"
    }
  },
  plugins: []
};
