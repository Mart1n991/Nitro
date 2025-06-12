/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {},
  },
  plugins: [],
};
