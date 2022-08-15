/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Inter', 'ui-sans-serif']
		},
		extend: {
			backgroundImage: {
				'home-cover': "url('/assets/cover.jpeg')",
			}
		},
	},
	plugins: [],
}
