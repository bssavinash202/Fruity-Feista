/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#de2c4d',
        secondary: '#fb923c'
      },
      fontFamily:{
        jost : ["Jost", 'sans-serif'],
        lobster: ["Lobster", 'sans-serif'],
      },
    }, 
    container :{
      center:true,
      padding:{
        DEFAULT : '12px',
        sm: '1rem',
        lg:'4rem',
        xl: '5rem',
        '2xl':'6rem'
      }
    }
  },
  plugins: [],
}