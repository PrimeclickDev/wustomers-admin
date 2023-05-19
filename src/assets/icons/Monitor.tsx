import { SVGProps } from 'react'
const Monitor = (props: SVGProps<SVGSVGElement>) => (
	<svg width={30} height={30} fill='none' {...props}>
		<path
			fill='#fff'
			d='M23.34 0H6.615C2.97 0 0 2.97 0 6.615v10.05a6.615 6.615 0 0 0 6.615 6.615h5.76c.825 0 1.5.675 1.5 1.5v1.455c0 .825-.675 1.5-1.5 1.5h-3.63a1.132 1.132 0 1 0 0 2.265H21.27c.615 0 1.125-.51 1.125-1.125s-.51-1.125-1.125-1.125h-3.63c-.825 0-1.5-.675-1.5-1.5v-1.455c0-.825.675-1.5 1.5-1.5h5.715a6.615 6.615 0 0 0 6.615-6.615V6.63C29.955 2.97 26.985 0 23.34 0Z'
		/>
	</svg>
)
export default Monitor
