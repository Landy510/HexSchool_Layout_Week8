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

