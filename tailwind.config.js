/** @type {import('tailwindcss').Config} */

import {
  amberDark,
  greenDark,
  redDark,
  sandDark,
  sand,
  red,
  green,
  amber,
  blackA,
} from '@radix-ui/colors';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...amberDark,
      ...greenDark,
      ...redDark,
      ...sandDark,
      light: {
        ...sand,
        ...red,
        ...green,
        ...amber,
      },
      ...blackA,
      white: '#FFFFFF',
      main: '#FFA500',
      'main-2': '#FF8400',
      'dark-1': '#040618',
      'dark-2': '#111224',
      'dark-3': '#1D1F2F',
      red: '#FF2200',
      'red-2': '#FF6952',
      green: '#009F00',
      grey: '#E6E6E8',
      blue: '#007AFF',
      transparent: 'transparent',
    },
    listStyleType: {
      disc: 'disc',
      square: 'square',
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      crucial: ['Crucial', 'serif'],
    },
  },
  plugins: [],
};
