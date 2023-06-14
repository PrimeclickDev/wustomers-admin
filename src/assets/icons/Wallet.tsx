import { SVGProps } from 'react'
const Wallet = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={33}
		fill='none'
		{...props}>
		<path
			fill='#2F2F2F'
			d='M28.6 18.687v1.333a.667.667 0 0 1-.653.667H26c-.707 0-1.347-.52-1.4-1.214-.04-.413.12-.8.387-1.066a1.266 1.266 0 0 1 .933-.387h2.013a.668.668 0 0 1 .667.667Z'
		/>
		<path
			fill='#2F2F2F'
			d='M23.987 17.42a2.693 2.693 0 0 0-.72 2.64c.346 1.24 1.56 2.027 2.84 2.027h1.16c.733 0 1.333.6 1.333 1.333v.253a5.025 5.025 0 0 1-5.013 5.014H8.28a5.025 5.025 0 0 1-5.013-5.014V14.7c0-1.64.786-3.093 2-4A4.942 4.942 0 0 1 8.28 9.687h15.307A5.025 5.025 0 0 1 28.6 14.7v.587c0 .733-.6 1.333-1.333 1.333h-1.36c-.747 0-1.427.293-1.92.8ZM21.6 6.927c.36.36.053.92-.453.92l-10.24-.014c-.587 0-.894-.72-.467-1.133l2.16-2.173a4.7 4.7 0 0 1 6.613 0l2.334 2.36c.013.013.04.026.053.04Z'
		/>
	</svg>
)
export default Wallet
