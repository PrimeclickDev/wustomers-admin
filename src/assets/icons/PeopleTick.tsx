import { SVGProps } from 'react'
const PeopleTick = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={33}
		fill='none'
		{...props}>
		<path
			fill='#2F2F2F'
			d='M16 3.167A6.34 6.34 0 0 0 9.667 9.5c0 3.427 2.68 6.2 6.173 6.32.107-.014.213-.014.293 0h.094a6.317 6.317 0 0 0 6.106-6.32A6.34 6.34 0 0 0 16 3.167Zm6.773 16.213c-3.72-2.48-9.786-2.48-13.533 0-1.693 1.12-2.627 2.653-2.627 4.293 0 1.64.934 3.16 2.614 4.28 1.866 1.253 4.32 1.88 6.773 1.88 2.453 0 4.907-.627 6.773-1.88 1.68-1.133 2.614-2.653 2.614-4.306-.014-1.627-.934-3.16-2.614-4.267Zm-3.666 3.2-3.36 3.36a.826.826 0 0 1-.587.24.888.888 0 0 1-.587-.24l-1.68-1.68a.837.837 0 0 1 0-1.174.837.837 0 0 1 1.174 0l1.093 1.094 2.773-2.773a.837.837 0 0 1 1.174 0 .813.813 0 0 1 0 1.173Z'
		/>
	</svg>
)
export default PeopleTick
