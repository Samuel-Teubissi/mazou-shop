import { heroui } from '@heroui/theme'
import lineClamp from '@tailwindcss/line-clamp'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      color: {
        brand: {
          'primary-400': '#E44E4E',
          'primary-500': '#841515',
        },
        dark: {
          bkg: '#1A1A1A',
          div: '#2B2B2B',
          div2: '#4A4A4A',
          text: '#FFF',
          btn: '#333',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}

module.exports = config
