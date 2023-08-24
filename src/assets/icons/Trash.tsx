import { SVGProps } from 'react'
export const Trash = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={16} height={18} fill='none' {...props}>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.75 4.485a76.276 76.276 0 0 0-7.515-.375c-1.485 0-2.97.075-4.455.225l-1.53.15m4.125-.758.165-.982c.12-.712.21-1.245 1.478-1.245h1.965c1.267 0 1.364.563 1.477 1.252l.165.976m2.512 3.127-.487 7.553c-.082 1.177-.15 2.092-2.242 2.092H5.593c-2.093 0-2.16-.915-2.243-2.092l-.488-7.553m3.885 5.52h2.498m-3.12-3h3.75'
		/>
	</svg>
)
