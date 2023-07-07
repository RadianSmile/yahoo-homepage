/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        "yblue" : 'rgb(48,103,246)', // yahoo blue
        "ypurple" : '#5701ed',  // yahoo purple
        body : '#fafafc', // color from yahoo.com

      },
      fontFamily: {
        // copied from Yahoo.com, applied on body tag.
        "body" : "\"Helvetica Neue\", Helvetica, Arial, STHeitiTC-light, STHeiti, \"Microsoft JhengHei\", 微軟正黑體, sans-serif"
      }
    },
  },
  plugins: [],
}