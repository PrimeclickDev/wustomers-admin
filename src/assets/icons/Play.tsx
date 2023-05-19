import { SVGProps } from 'react'
const Play = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={31}
		height={30}
		fill='none'
		{...props}>
		<path
			fill='#fff'
			d='M15.954 0c-8.28 0-15 6.72-15 15 0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.28-6.705-15-15-15Zm4.5 18.345-4.35 2.505a3.426 3.426 0 0 1-3.45 0 3.428 3.428 0 0 1-1.725-3v-5.025c0-1.245.645-2.37 1.725-3 1.08-.63 2.37-.63 3.465 0l4.35 2.505a3.427 3.427 0 0 1 1.725 3c0 1.26-.645 2.385-1.74 3.015Z'
		/>
	</svg>
)
export default Play
