/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px',        // default text size for paragraphs
        lg: '18px',           // slightly bigger for larger text
        xl: '20px',           // headings small
        '2xl': '24px',        // headings medium
        '3xl': '32px',        // headings big
        '4xl': '40px',        // main headings
        '5xl': '48px',        // hero names
        '6xl': '64px',        // hero names large
        '7xl': '80px',        // extra large
        '8xl': '96px',        // very big
      },
      colors: {
        bg: '#1e1402',          // page background
        primary: 'rgb(255 237 199)',     // headings, main buttons
        secondary: '#4e3e20',   // hover buttons, highlights
        accent: '#D4AF37',      // decorative elements
        text: 'rgb(222 222 222)',         // main text
        green: '#1c8200',
        yellow: '#aba300',
        red: '#c20000',
        bg_green: '#b2ffa8',
        bg_yellow: '#fff47b',
        bg_red: '#ffafaf'


      },
      fontFamily: {
        marathi: ['"Tiro Devanagari Marathi"', 'serif'],
        body: ['"Mukta"', 'sans-serif'],
        clean: ['"Noto Sans Devanagari"', 'sans-serif'],
        name: ['"Prata"', 'serif'],
        tagline: ['"Sahitya"', 'sans-serif'],
        traditional: ['"Modak"', 'cursive'],
        body: ['"IBM Plex Sans Devanagari"', 'sans-serif'],
        ganesh: ['"Tillana"', 'cursive'],
        hand: ['"Kalam"', 'cursive'],
      },
    },
  },
  plugins: [],
}