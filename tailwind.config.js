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
        forest1: '#2e5e45',
        forest2: '#4b7d60',
        mint: '#9bc4a7',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'tiger-gradient': 'linear-gradient(90deg, #EE741D 2.45%, #FCB040 100%)',
        'blue-gradient': 'linear-gradient(90deg, #4951FE 2.45%, #DE3AA8 100%)',
        'forest-gradient': 'linear-gradient(to bottom right, #2e5e45, #4b7d60, #9bc4a7)',
      },
      // Added animation extensions
      animation: {
        'slide-in-3d': 'slideIn3D 7s infinite ease-in-out',
      },
      keyframes: {
        slideIn3D: {
          '0%': {
            opacity: '0',
            transform: 'perspective(800px) rotateY(15deg) translateX(-80px)',
          },
          '15%': {
            opacity: '1',
            transform: 'perspective(800px) rotateY(0) translateX(0)',
          },
          '85%': {
            opacity: '1',
            transform: 'perspective(800px) rotateY(0) translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'perspective(800px) rotateY(-15deg) translateX(-80px)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};