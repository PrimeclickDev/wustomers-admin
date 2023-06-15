import { SVGProps } from 'react'
const CloseCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		{...props}>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m9.17 14.83 5.66-5.66m0 5.66L9.17 9.17M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z'
		/>
	</svg>
)
export default CloseCircle
