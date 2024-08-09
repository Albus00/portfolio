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
        'dark-base': '#000',
        'light-dark': '#2d2d34',
        'dark-light': '#c1c1c1',
        'custom-yellow': '#f2d83e',
      },
      spacing: {
        'horizontal': '5rem',
        'handheld-horizontal': '2rem',
        '2horizontal': '10rem'
      },
      borderRadius: {
        'img': '2rem',
      },
      screens: {
        desktop: { 'min': '1225px' },
        laptop: { 'max': '1600px' },
        handheld: { 'max': '1024px' },
        mobile: { 'max': '750px' },
        thin: { 'max': '340px' }
      },
    },
  },
  plugins: [],
}

