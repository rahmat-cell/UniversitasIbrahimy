/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"],
    container:{
      center: true,
      padding:'12px'
    },
  theme: {
    extend: {
      colors:{
        primery:"#38bdf8",
        background:"#7dd3fc",
      },
      screens:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}

