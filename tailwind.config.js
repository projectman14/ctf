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
      backgroundImage: {
        'updated-frontpage': "url('../src/assets/images/updatedfrontpage.png')",
      },
      keyframes: {
        'slide-down-fade': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50%) translateY(-110%)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(-50%) translateY(-100%)'
          }
        }
      },
      animation: {
        'slide-down-fade': 'slide-down-fade 0.3s ease-out'
      }
    
    },
  },
  plugins: [],
}

