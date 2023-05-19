/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				aeonik: "'Aeonik', 'sans-serif'",
			},
			colors: {
				'wustomers-blue': '#072AC8',
				'wustomers-blue-light': '#3955D3',
				'wustomers-primary': '#F3F4FC',
				'wustomers-main': '#2F2F2F',
				'wustomers-primary-light': '#E6EAF9',
				'wustomers-border-color': '#9CAAE9',
				'wustomers-gray': '#828282',
				'wustomers-dark-gray': '#D5D5D5',
				'wustomers-blue-other': '#1E96FC',
				'wustomers-neutral-dark': '#585858',
				'wustomers-neutral': '#6D6D6D',
				'wustomers-neutral-light': '#F5F5F5',
				'wustomers-primary-lighter': '#6A7FDE',
				'wustomers-neutral-lighter': '#C1C1C1',
			},
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit, minmax(300px, 1fr))',
			},
		},
	},
	plugins: [],
}
