import { SVGProps } from 'react'
const Search = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' {...props}>
		<g clipPath='url(#a)'>
			<path
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={1.5}
				d='m18.334 18.333-1.667-1.666m-7.083.833a7.916 7.916 0 1 0 0-15.831 7.916 7.916 0 0 0 0 15.83v0Z'
			/>
		</g>
		<defs>
			<clipPath id='a'>
				<path fill='currentColor' d='M0 0h20v20H0z' />
			</clipPath>
		</defs>
	</svg>
)
export default Search
