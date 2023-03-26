/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2ba50d",

          "secondary": "#0502c9",

          "accent": "#8af291",

          "neutral": "#1B1C22",

          "info": "#6ABFE7",

          "success": "#48DB7E",

          "warning": "#F4C24E",

          "error": "#F14B4B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
