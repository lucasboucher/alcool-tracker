/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      main: '#FFA500',
      'main-2': '#FF9700',
      'dark-1': '#040618',
      'dark-2': '#111224',
      'dark-3': '#1D1F2F',
      red: '#FF2200',
      green: '#009F00',
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
