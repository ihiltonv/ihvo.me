module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        animation: {
          'bounce-slow': 'bounce 3s infinite',
        }
      },

    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif']
    }
  },
  variants: {
    extend: {
      animation: ['hover']
    },
  },
  plugins: [],
}
