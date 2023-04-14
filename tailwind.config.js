/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}"],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      colors: {
        'carbon': '#151517',
        'egg': '#f4f4f4',
        'teal': '#5aafc4',
        'darkModeTeal': '#6ac4dd',
        'darkTeal': '#6797a8',
        'deepGrey': '#2E2E2F',
        'grey': '#E0E0E2'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

