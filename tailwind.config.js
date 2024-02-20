/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      main: '#FFA500',
      'dark-1': '#040618',
      'dark-2': '#111224',
      'dark-3': '#1D1F2F',
      red: '#FF0000',
    },
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        crucial: ['Crucial', 'serif'],
      },
    },
  },
  plugins: [],
};
