import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#252525',
          500: '#1a1a1a',
          600: '#141414',
          700: '#0a0a0a',
          800: '#050505',
          900: '#000000',
          950: '#000000',
        },
        red: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ff9f9f',
          400: '#ff6464',
          500: '#ff2323',
          600: '#ed0000',
          700: '#c80000',
          800: '#a30000',
          900: '#870707',
          950: '#4b0000',
        }
      },
      animation: {
        glitch: 'glitch 1s infinite',
        flicker: 'flicker 2s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config 