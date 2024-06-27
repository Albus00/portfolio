/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        rotulo: ['rotulo-variable', 'sans-serif'],
        delve: ['delve-hand', 'sans-serif']
      },
      colors: {
        'light-base': '#d7d7d7',
        'dark-base': '#22232a',
        'light-dark': '#2d2d34',
      },
      spacing: {
        'horizontal': '5rem',
        '2horizontal': '10rem',
      }
    },
  },
  plugins: [],
}

