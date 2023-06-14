import { SVGProps } from 'react'
const Screen = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={25}
		height={25}
		viewBox='0 0 25 25'
		fill='none'
		{...props}>
		<path
			fill='currentColor'
			d='M18.06 2.5H6.91C4.48 2.5 2.5 4.48 2.5 6.91v6.7a4.41 4.41 0 0 0 4.41 4.41h3.84c.55 0 1 .45 1 1v.97c0 .55-.45 1-1 1H8.33a.755.755 0 1 0 0 1.51h8.35c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.42c-.55 0-1-.45-1-1v-.97c0-.55.45-1 1-1h3.81a4.41 4.41 0 0 0 4.41-4.41v-6.7c-.01-2.44-1.99-4.42-4.42-4.42Z'
		/>
	</svg>
)
export default Screen
