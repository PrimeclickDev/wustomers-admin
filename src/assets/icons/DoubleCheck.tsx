import { SVGProps } from 'react'
export const DoubleCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={20} height={12} fill='none' {...props}>
		<path
			fill='currentColor'
			d='M5.142 11.18.283 6.32l.986-.962 3.895 3.896.298-.32.986.962-1.306 1.283Zm5.179 0L5.462 6.32l.963-.985 3.896 3.896L18.754.798l.962.985-9.395 9.396ZM10 6.32l-.986-.962L13.552.821l.985.962L10 6.321Z'
		/>
	</svg>
)
