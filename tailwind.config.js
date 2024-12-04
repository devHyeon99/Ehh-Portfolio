/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0.1rem 0.5rem rgba(0, 0, 0, 0.175)',
      },
      colors: {
        black: '#1F1F1F',
        'gray-custom': '#303030',
      },
    },
  },
  plugins: [],
};
