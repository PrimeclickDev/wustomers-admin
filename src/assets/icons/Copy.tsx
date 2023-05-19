import { SVGProps } from 'react'
const Copy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		viewBox='0 0 20 20'
		{...props}>
		<g
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			clipPath='url(#a)'>
			<path d='M13.333 10.75v3.5c0 2.917-1.167 4.083-4.083 4.083h-3.5c-2.917 0-4.083-1.166-4.083-4.083v-3.5c0-2.917 1.166-4.083 4.083-4.083h3.5c2.916 0 4.083 1.166 4.083 4.083Z' />
			<path d='M18.333 5.75v3.5c0 2.917-1.166 4.083-4.083 4.083h-.917V10.75c0-2.917-1.167-4.083-4.083-4.083H6.667V5.75c0-2.917 1.166-4.083 4.083-4.083h3.5c2.916 0 4.083 1.166 4.083 4.083Z' />
		</g>
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h20v20H0z' />
			</clipPath>
		</defs>
	</svg>
)
export default Copy
