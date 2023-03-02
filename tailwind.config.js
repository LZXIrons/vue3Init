/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			important: true,
			zIndex: {
				'-1': '-1'
			},
			colors: {
				// primary: primaryColor
			},
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1600px'
			},
			maxWidth: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%'
			}
		}
	},
	plugins: []
}
