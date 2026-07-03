/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#18181B',
        muted: '#F4F4F5',
        'muted-foreground': '#71717A',
        accent: '#4F46E5',
        'accent-foreground': '#EEF2FF',
        border: '#E4E4E7',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
