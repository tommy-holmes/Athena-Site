/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'carbon': '#151517',
				'egg': '#f4f4f4',
				'teal': '#03AEDC',
				'grey': '#1f2529',
				'lightGrey': '#efefef',
			  }
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
