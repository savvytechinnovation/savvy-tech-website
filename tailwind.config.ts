import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        lightBlue: {
          300: '#66e0fa',
          400: '#20c7f0',
          500: '#04aad6',
          600: '#0792c2',
        },
        navyBlue: {
          500: '#5b7df9',
          700: '#3044d2',
          900: '#293786',
          950: '#141a40',
        },
        darkBlue: {
          900: '#0d4973',
          950: '#082c49',
        },
        orange: {
          400: '#ff5527',
          500: '#fe3a11',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
