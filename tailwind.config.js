/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Dancing:["Dancing Script","cursive"],
        Poppins : ["Poppins", "sans-serif"],
      }
    },
    screens:{
      'celular': '400px',
      'tablet':'768px',
      'laptop':'1024px',
      'desktop': '1440px',
    }
  },
  plugins: [],
}
