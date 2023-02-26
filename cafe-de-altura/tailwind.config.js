/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

    },
    backgroundImage: {
      'coffeebg': "url('assets/coffee_background.jpeg')"
    },

    fontFamily: {
      'monoton': 'Monoton, cursive',
      'dancing': 'Dancing Script, cursive'
    },
    colors: {
      'navColor': '#2B2A2B',
      'verde': '#2A5B45',
      'bg-contact': '#E3DED7',
      'plomo': '#515051',
      'blanco': '#FFFFFF',
      'negro': '#2B2A2B',
      'hovercafe': '#E3DED7',
      'footer': '#1F1815',
      'background': '#F7F5F3',
      'border' : '#D1D5DB'
    }

  },
  plugins: [],
}

