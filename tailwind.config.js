/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      main: '#FFA500',
      'main-2': '#FF8400',
      'dark-1': '#040618',
      'dark-2': '#111224',
      'dark-3': '#1D1F2F',
      red: '#FF2200',
      green: '#009F00',
      grey: '#E6E6E8',
      blue: '#007AFF',
    },
    listStyleType: {
      disc: 'disc',
      square: 'square',
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
