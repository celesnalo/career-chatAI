/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#673ab7',
          dark: '#512da8',
          light: '#f3e5f5',
        }
      },
    },
  },
  plugins: [],
}