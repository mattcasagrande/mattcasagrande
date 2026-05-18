/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        aboutIn: {
          '0%': { transform: 'translateX(120%)', opacity: '0' },
          '80%': { transform: 'translateX(120%)', opacity: '0' },
          '95%': { transform: 'translateX(12px)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        navLogoExit: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-160%)', opacity: '0' },
        },
        navLogoEnter: {
          '0%': { transform: 'translateY(-160%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        aboutIn: 'aboutIn 3s ease-out forwards',
        navLogoExit: 'navLogoExit 0.42s ease-in forwards',
        navLogoEnter: 'navLogoEnter 0.52s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
