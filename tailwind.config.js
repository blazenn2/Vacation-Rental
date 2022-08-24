/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#fd7792',
        'color-secondary': '#fff',
        'color-primary-dark': '#fc456a',
      },
      backgroundImage: {
        'hero': 'url("https://preview.colorlib.com/theme/vacationrental/images/xbg_1.jpg.pagespeed.ic.ZaS6JLR_0b.webp")'
      },
      fontFamily: {
        'poppins': ['Poppins', 'Arial', 'sans-serif'],
        'playFair': ['Playfair Display SC', 'serif']
      }
    }
  },
  plugins: [],
}