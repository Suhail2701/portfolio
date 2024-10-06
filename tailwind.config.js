/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-3xl': '0 4px 8px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        scrollRightToLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scrollRightToLeft: 'scrollRightToLeft 30s linear infinite',
        scrollLeftToRight: 'scrollLeftToRight 30s linear infinite',
      },
      backgroundImage:{
        'purple-gradient':'linear-gradient(to bottom, #57059e, #4a00e0)',
        
      },
      colors:{
        'dark-blue-gradient':'rgba(0, 0, 22, 0.4)',
        'dark-blue-gradient2':'rgba(0, 0, 22, 0.9)',
        'dark-blue-gradient3':'rgb(24, 2, 63)',

      },
      screens:{
        'xs':{'max':'639px'},
      }
    },
  },
  plugins: [],
}
