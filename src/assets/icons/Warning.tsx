import { SVGProps } from 'react'
const Warning = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={38}
		height={36}
		fill='none'
		{...props}>
		<path
			stroke='#EB5757'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M19 12.75v8.75m0 12.968H8.395c-6.072 0-8.61-4.34-5.67-9.643l5.46-9.835 5.145-9.24c3.115-5.617 8.225-5.617 11.34 0l5.145 9.258 5.46 9.835c2.94 5.302.385 9.642-5.67 9.642H19v-.017Z'
		/>
	</svg>
)
export default Warning
