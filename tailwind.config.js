/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {

      // Breakpoints
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        fx:"1900px",
        xxl: "2000px",
      },

      // Template for fonts
      fontFamily: {
        kiddosy:["Kiddosy Free Regular"],
         kristen:["Kristen ITC V1"],
         footer: ["Libre Franklin"],
        bodyfont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        inter: ["Inter"],
      },

      // Template for colors
      colors: {
        brown:"#6A371A",
        brownII:"#371F11",
        green: "#3E6100",
        yellow: "#FAE57A",
        lightYellow:"#FBEFD6",
        orange: "#F07837"
       
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        "17xl": "36px",
        xs: "12px",
        "7xs-6": "5.6px",
        lg: "18px",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
        "31xl": "50px",
        "7xs-3": "5.3px",
      },
      spacing: {
        '32': '8rem', // 32px as rem
      },
    },
  },
  plugins: [
 
  ],
}