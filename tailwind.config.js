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
			keyframes: {
				slideUpAndFade: {
					from: { opacity: 0, transform: 'translateY(2px)' },
					to: { opacity: 1, transform: 'translateY(0)' },
				},
				slideRightAndFade: {
					from: { opacity: 0, transform: 'translateX(-2px)' },
					to: { opacity: 1, transform: 'translateX(0)' },
				},
				slideDownAndFade: {
					from: { opacity: 0, transform: 'translateY(-2px)' },
					to: { opacity: 1, transform: 'translateY(0)' },
				},
				slideLeftAndFade: {
					from: { opacity: 0, transform: 'translateX(2px)' },
					to: { opacity: 1, transform: 'translateX(0)' },
				},
				overlayShow: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				contentShow: {
					from: {
						opacity: 0,
						transform: 'translate(-50%, -48%) scale(0.96)',
					},
					to: {
						opacity: 1,
						transform: 'translate(-50%, -50%) scale(1)',
					},
				},
			},
			animation: {
				slideUpAndFade:
					'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideRightAndFade:
					'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideDownAndFade:
					'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideLeftAndFade:
					'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},
	plugins: [],
}
