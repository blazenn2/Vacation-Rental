/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'color-primary': '#fd7792',
      'color-secondary': '#fff',
      'color-primary-dark': '#fc456a',
    },
  },
  plugins: [],
}