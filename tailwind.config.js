/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-fundo': ''
      },

      fontFamily: {
        'montserrat': ['Montserrat'],
        'quickSBook': ['Quicksand Book'],
        'quickSBold': ['Quicksand Bold']
      }

    },
  },
  plugins: [],
}
