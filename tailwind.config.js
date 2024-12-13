/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Minecraft': ['Minecraft', 'sans-serif'],
        'IBM-PLEX-MONO': ["IBM Plex Mono", "monospace"],
        'Handjet': ["Handjet", 'sans-serif'],
        'Eight-Bit-Dragon': ["EightBitDragon", 'sans-serif'],
        'Rajdhani': ["Rajdhani", 'sans-serif'],
        'Pixeboy': ['Pixeboy', 'sans-serif'],
        'Public-sans' : ["Public Sans", 'sans-serif'] ,
      },
    },
  },
  plugins: [],
}

