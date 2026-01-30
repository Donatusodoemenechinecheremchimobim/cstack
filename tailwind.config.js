/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      animation: { 'blink': 'blink 1s step-end infinite' },
      keyframes: { blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } } }
    },
  },
  plugins: [],
}
