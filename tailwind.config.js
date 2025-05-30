/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'tiger-orange': '#EE741D',
          'tiger-yellow': '#FCB040',
          'tiger-gradient-start': '#EE741D',
          'tiger-gradient-end': '#FCB040',
          'blue-gradient-start': '#4951FE',
          'blue-gradient-end': '#DE3AA8',
        },
        fontFamily: {
          'lemon-milk': ['LEMON MILK', 'sans-serif'],
          'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        },
        backgroundImage: {
          'tiger-gradient': 'linear-gradient(90deg, #EE741D 2.45%, #FCB040 100%)',
          'blue-gradient': 'linear-gradient(90deg, #4951FE 2.45%, #DE3AA8 100%)',
        },
      },
    },
    plugins: [],
  }