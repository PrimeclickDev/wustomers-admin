import { SVGProps } from 'react'
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		{...props}>
		<path
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={10}
			strokeWidth={1.5}
			d='m13.28 5.967-4.346 4.346a1.324 1.324 0 0 1-1.867 0L2.72 5.967'
		/>
	</svg>
)
export default ArrowDown
