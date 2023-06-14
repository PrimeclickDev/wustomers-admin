import { SVGProps } from 'react'
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={8}
		height={14}
		fill='none'
		{...props}>
		<path
			stroke='#444'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={10}
			strokeWidth={1.5}
			d='m1.682 12.94 4.89-4.89a1.49 1.49 0 0 0 0-2.1l-4.89-4.89'
		/>
	</svg>
)
export default ChevronRight
