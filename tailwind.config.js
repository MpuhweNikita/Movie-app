/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Fix invalid hex color (must be 3 or 6 hex digits). Use a 6-digit dark purple.
        primary: "#030014",
        accent: "#AB8BFF",
        secondary: "#151312",
        light:{
          100: "#D6C7FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23"
        }
      },
    },
  },
  plugins: [],
}