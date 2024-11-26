/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CC0000',
        secondary: '#F7F3F0',
      },
    },
  },
  plugins: [],
};
