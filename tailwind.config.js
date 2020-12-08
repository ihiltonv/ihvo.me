module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        animation: {
          'bounce-slow': 'bounce 3s infinite',
        },
        height: {
          "7v": "7vh",
          "10v": "10vh",
          "20v": "20vh",
          "30v": "30vh",
          "40v": "40vh",
          "50v": "50vh",
          "60v": "60vh",
          "70v": "70vh",
          "80v": "80vh",
          "83v": "83vh",
          "90v": "90vh",
          "93v": "93vh",
          "100v": "100vh",
        },
        inset: {
          "mid": "42vh"
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
