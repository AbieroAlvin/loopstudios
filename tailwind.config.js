/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
