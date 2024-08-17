/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs': '375px',
      'lg': '1440px',
    },
    extend: {},
    colors:{
      "white":' hsl(0, 0%, 100%)',
      'light-pink':"hsl(275, 100%, 97%)",
      'gray-purple':"hsl(292, 16%, 49%)",
      'dark-purple':"hsl(292, 42%, 14%)"
    }
  },
  plugins: [],
}