/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'condor': ['condor', 'sans-serif'],
        'neue-display': ['neue-haas-grotesk-display', 'sans-serif'],
        'neue-text': ['neue-haas-grotesk-text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}