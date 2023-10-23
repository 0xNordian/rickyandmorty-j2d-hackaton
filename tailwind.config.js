/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rm-light-blue': 'var(--rm-light-blue)',
        'rm-green': 'var(--rm-green)',
      },
    },
  },
  plugins: [],
}