/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/**/*.{html,jsx,tsx}',
    './src/**/**/**/*.{html,jsx,tsx}',
    './src/**/**/**/**/*.{html,jsx,tsx}',
  ],
  theme: {
    spacing: {
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '1rem',
      '4': '1.25rem',
      '5': '1.5rem',
      '6': '2rem',
      '7': '2.25rem',
      '8': '2.5rem',
      '9': '3rem',
      '10': '3.25rem',
      '11': '3.5rem',
      '12': '4rem',
      '13': '4.25rem',
      '14': '4.5rem',
      '15': '5rem',
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'neutral': {
          100: '#ffffff',
          200: '#E9E2F3',
          300: '#28085',
          400: '#000000'
        },
        'primary': {
          100: '#380C7E',
          200: '#6E01F8',
          300: '#7000FF',
          400: '#1F0F39',
          500: '#11002D'
        }
      }
    },
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1296px',
    },
  },
  plugins: [],
}

