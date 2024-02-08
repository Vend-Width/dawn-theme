/** @type {import('tailwindcss').Config} */
import remToPxPlugin from 'tailwindcss-rem-to-px';

export default {
  content: ['./**/*.{liquid,json,js}'],
  theme: {
    extend: {},
  },
  plugins: [remToPxPlugin({ baseFontSize: 16 })],
};
