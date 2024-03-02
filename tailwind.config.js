import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      borderRadius: {
        '2xl': '14px'
      },
      backdropBlur: {
        'sm': '3px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: 'cobbles'
  })],
}
