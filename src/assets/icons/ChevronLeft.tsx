import { SVGProps } from 'react'
const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={9}
		height={18}
		fill='none'
		{...props}>
		<path
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={10}
			strokeWidth={1.5}
			d='M8 16.92 1.48 10.4c-.77-.77-.77-2.03 0-2.8L8 1.08'
		/>
	</svg>
)
export default ChevronLeft
