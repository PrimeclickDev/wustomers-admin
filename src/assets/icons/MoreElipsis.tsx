import { SVGProps } from 'react'
const MoreElipsis = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={20}
		height={7}
		fill='none'
		{...props}>
		<path
			stroke='#2F2F2F'
			strokeWidth={1.5}
			d='M3 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z'
		/>
	</svg>
)
export default MoreElipsis
