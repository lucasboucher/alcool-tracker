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
