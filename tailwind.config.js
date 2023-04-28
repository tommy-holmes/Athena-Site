/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'carbon': '#151517',
        'egg': '#f4f4f4',
        'teal': '#03AEDC',
        'deepGrey': '#202529',
        'grey': '#E0E0E2'
      },
    },
  },
}
