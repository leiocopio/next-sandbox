/** @type {import('tailwindcss').Config} */
import { Montserrat } from "next/font/google";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
};
