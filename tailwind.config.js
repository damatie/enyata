/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#031434',
        regalBlue: 'rgba(164, 167, 183, 0.3)',
        textColor1: '#434854',
        textColor2: '#737373',
        textColor3:'#B0B9C8',
        primaryBlue: '#0A74DC',
        linkColor1: '#303B54',
        offWhite: '#E5E5E5',
      }
    },
  },
  plugins: [],
}
