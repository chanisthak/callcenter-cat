/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'pink': '#ff6b6b',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.lg\:hidden': {
          display: 'none',
        },
        '.lg\:flex': {
          display: 'flex',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

