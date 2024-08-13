/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#FF5566',
      'primaryDark': '#EC0039',
      'black': '#2C1E1E',
      'darkGrey': '#444444',
      'grey': '#747474',
      'lightGrey': '#CCCCCC',
      'lighterGrey': '#F4F4F4',
      'white': '#FCFCFC',
    },
    fontFamily: {
      pretendard: ['Pretendard Variable', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

