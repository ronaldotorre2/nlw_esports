const { Gradient } = require('phosphor-react')

module.exports = {
  content: [
    "./src/**/*.tsx",
    "index.html"
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy: "url('/Background.png')",
        'nlw-gradient':'linear-gradient(89.86deg, #9572FC 27.88%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient':'linear-gradient(180deg, rgva(0,0,0,0) 0%, rgba(0,0,0,0) 67,08%)',
      },
      colors:{
      },
      borderReadius:{
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
