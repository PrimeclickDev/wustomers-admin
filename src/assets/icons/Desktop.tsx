import { SVGProps } from 'react'
const Desktop = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={20}
		height={20}
		fill='none'
		{...props}>
		<path
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 14.35v3.983m-8.333-7.5h16.666m-12.083 7.5h7.5M5.367 1.667h9.258c2.966 0 3.708.741 3.708 3.7v5.275c0 2.966-.741 3.7-3.7 3.7H5.367c-2.959.008-3.7-.734-3.7-3.692V5.367c0-2.959.741-3.7 3.7-3.7Z'
		/>
	</svg>
)
export default Desktop
