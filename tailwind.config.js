/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fantasy': 'Comic Sans MS',
      },
      boxShadow: {
        'yellow': 'inset 0px 0px 50px 0px rgba(250, 204, 21, 1)',
      },
      backgroundImage: {
        "spacer": "url('/src/assets/spacer.svg')",
        "yellowbg": "url('/src/assets/spacer yellow.svg')",
        "greenbg": "url('/src/assets/spacer green.svg')"
      }

    },
  },
  plugins: [],
}
