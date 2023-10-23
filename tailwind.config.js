const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rm-light-blue': 'var(--rm-light-blue)',
        'rm-green': 'var(--rm-green)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}