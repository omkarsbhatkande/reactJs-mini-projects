/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#5a5959",
        yellow:"#ffeaae",
        dark-yellow:"#fcc13f",
        orange:"#f6820c",
      }
    },
  },
  plugins: [],
}
