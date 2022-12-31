/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'cc-main': {
					300: '#061121',
					400: '#0a192f',
				},
				'cc-blue': {
					400: '#25abe6'
				},
				'cc-orange': {
					400: '#ff9339'
				}
			},
		},
	},
	plugins: [],
}
