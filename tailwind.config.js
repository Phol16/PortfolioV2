/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBackground: "var(--primaryBackground)",
        secondaryBackground: "var(--secondaryBackground)",
        primaryTextColorHover: "var(--primaryTextColorHover)",
        primaryTextColor: "var(--primaryTextColor)",
        secondaryTextColor: "var(--secondaryTextColor)"
      },
      fontFamily:{
        poppins:"'poppins' , 'serif'"
      }
    },
  },
  plugins: [],
}