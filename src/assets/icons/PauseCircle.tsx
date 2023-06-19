import { SVGProps } from 'react'
const PauseCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={36}
		height={36}
		fill='none'
		{...props}>
		<path
			fill='currentColor'
			d='M17.954 3c-8.28 0-15 6.72-15 15 0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.28-6.705-15-15-15Zm-1.875 19.545c0 .72-.3 1.005-1.065 1.005h-1.95c-.765 0-1.065-.285-1.065-1.005v-9.09c0-.72.3-1.005 1.065-1.005h1.935c.765 0 1.065.285 1.065 1.005v9.09h.015Zm7.92 0c0 .72-.3 1.005-1.065 1.005h-1.935c-.765 0-1.065-.285-1.065-1.005v-9.09c0-.72.3-1.005 1.065-1.005h1.935c.765 0 1.065.285 1.065 1.005v9.09Z'
		/>
	</svg>
)
export default PauseCircle
