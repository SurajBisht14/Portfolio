export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '1px 1px 5px rgba(0, 255, 255,1)',
        },
        '.hover\\:text-shadow-custom': {
          textShadow: '1px 1px 5px rgba(0, 255, 255,1)',
        },
        '.dark\\:text-shadow-custom': {
          textShadow: '1px 1px 5px rgba(0, 255, 255,1)',
        },
        '.dark\\:hover\\:text-shadow-custom': {
          textShadow: '1px 1px 5px rgba(0, 255, 255,1)',
        },
      }, ['responsive', 'hover', 'dark']);
    }
  ],
}