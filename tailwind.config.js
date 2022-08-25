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
        'hero': 'url("https://preview.colorlib.com/theme/vacationrental/images/xbg_1.jpg.pagespeed.ic.ZaS6JLR_0b.webp")',
        'mapDirection': 'url("https://preview.colorlib.com/theme/vacationrental/images/xservices-1.jpg.pagespeed.ic.mOOxqpkd0U.webp")',
        'accomodation': 'url("https://preview.colorlib.com/theme/vacationrental/images/xservices-2.jpg.pagespeed.ic.PPzb06QGPW.webp")',
        'experience': 'url("https://preview.colorlib.com/theme/vacationrental/images/xservices-3.jpg.pagespeed.ic.PRykvuR9Yk.webp")'
      },
      fontFamily: {
        'poppins': ['Poppins', 'Arial', 'sans-serif'],
        'playFair': ['Playfair Display SC', 'serif']
      }
    }
  },
  plugins: [],
}