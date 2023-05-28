/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFF',
        secondary: '#EB5757',
        primaryText: '#333',
        secondaryText: '#4f4f4f',
        tertiaryText: '#828282',
      },
      fontFamily: {
        montserrat: 'Montserrat',
        mulish: 'Mulish',
      }
    },
  },
  plugins: [],
}

