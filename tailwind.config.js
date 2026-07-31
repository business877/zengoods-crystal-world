/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0d0a14',
          900: '#141020',
          800: '#1d1730',
          700: '#2a2144',
          600: '#3a2f5c',
        },
        amethyst: {
          300: '#c9b3e6',
          400: '#a984d6',
          500: '#8f63c4',
          600: '#6f47a3',
        },
        emerald: {
          300: '#9fd8c0',
          400: '#6fbd9c',
          500: '#4d9d7d',
        },
        gold: {
          300: '#e8d5a8',
          400: '#d4b878',
          500: '#b99a52',
        },
        parchment: '#f5f1e8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', '"Songti SC"', '"Noto Serif SC"', 'serif'],
        sans: ['Inter', '-apple-system', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
}
