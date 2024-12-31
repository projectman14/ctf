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
      screens:{
        muxsm: "200px", 
        uxsm: "300px", 
        xsm: "450px",
        sm: "640px", 
        md: "768px", 
        lg: "1024px", 
        xl: "1280px", 
        "2xl": "1536px", 
        uxl: "1640px",
        c1: "1800px",
        c2: "2000px",
        
      },      
      backgroundImage: {
        'updated-frontpage': "url('../src/assets/images/updatedfrontpage.png')",
        'updated-frontpage2': "url('../src/assets/images/updatedbackgroundimagept2.jpg')",
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

