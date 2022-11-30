/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        todo_black: "#0D0D0D",
        todo_gray: "#242B2E",
        todo_green: "#29C510",
        todo_blue: "#081129",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto", "serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
