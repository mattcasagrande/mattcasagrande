/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        aboutIn: {
          '0%': { transform: 'translateX(120%)', opacity: '0' },
          '80%': { transform: 'translateX(120%)', opacity: '0' },
          '95%': { transform: 'translateX(12px)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        aboutIn: 'aboutIn 3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
