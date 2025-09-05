/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif']
      },
      colors: {
        light: {
          primary: '#d3d3d3',
          secondary: '#aaaaaa',  
        }, 
        dark: {
          primary: '#1d1c1cff',
          secondary: '#252525ff'
        }
      }
    },
  },
  plugins: [],
}

