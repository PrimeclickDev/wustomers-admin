import { SVGProps } from 'react'
const Plus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={25}
		fill='none'
		{...props}>
		<path
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 12.5h12m-6 6v-12'
		/>
	</svg>
)
export default Plus
