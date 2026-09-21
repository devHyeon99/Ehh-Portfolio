/** 색은 모두 index.css 의 CSS 변수를 통해 온다. 다크 모드는 그 변수만 바꾼다. */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      md: '701px',
      lg: '1001px',
      xl: '1500px',
    },
    extend: {
      colors: {
        paper: token('paper'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        edge: token('edge'),
        faint: token('faint'),
        surface: {
          DEFAULT: token('surface'),
          sunken: token('surface-sunken'),
          hover: token('surface-hover'),
        },
        brand: {
          DEFAULT: token('brand'),
          dark: token('brand-dark'),
          tint: token('brand-tint'),
          edge: token('brand-edge'),
          strong: token('brand-strong'),
          copy: token('brand-copy'),
        },
        'on-brand': token('on-brand'),
        copy: {
          DEFAULT: token('copy'),
          soft: token('copy-soft'),
          strong: token('copy-strong'),
        },
        // 코드 블록은 두 모드에서 같은 어두운 판을 쓴다.
        code: {
          bg: '#181d28',
          bar: '#202634',
          edge: '#2a3040',
          line: '#31384a',
          text: '#d9e1f2',
          dim: '#a8b5d0',
          num: '#75819a',
          comment: '#93a2b9',
          link: '#c2d1ff',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 1.5s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
