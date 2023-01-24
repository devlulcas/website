/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#E5FFEB',
					100: '#C7FFD2',
					200: '#8FFFA5',
					300: '#57FF78',
					400: '#1FFF4B',
					500: '#00E62E',
					600: '#00B825',
					700: '#008A1C',
					800: '#005C12',
					900: '#002E09'
				}
			}
		}
	},
	darkMode: ['class', '[data-theme="dark"]']
};
