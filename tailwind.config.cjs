/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    borderColor: theme => ({
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#2486d3',
     }),
    extend: {},
  },
  plugins: [],
}