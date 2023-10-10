/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: theme => ({
      'custom-gradient': "linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)",
   })},
  },

  plugins: [],
}