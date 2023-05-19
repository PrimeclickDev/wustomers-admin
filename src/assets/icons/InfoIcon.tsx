import { SVGProps } from 'react'
const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={14}
		height={14}
		fill='currentColor'
		viewBox='0 0 256 256'
		{...props}>
		<path d='M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-4 48a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16 16 16 0 0 1 16 16v40a8 8 0 0 1 0 16Z' />
	</svg>
)
export default InfoIcon
