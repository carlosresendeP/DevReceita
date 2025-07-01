/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          orange: '#F37000',
          dark: '#1C1C1C',
          green: '#00953B',
          lightgreen: '#E3F8D0',
        },
      },
    },
  },
  plugins: [],
}