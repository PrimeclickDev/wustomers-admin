import { SVGProps } from 'react'
const Mobile = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={20}
		height={20}
		fill='none'
		{...props}>
		<path
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.791 4.917H8.208m8.958 1.25V14.5c0 3.333-.896 4.167-4.479 4.167H7.312c-3.583 0-4.479-.834-4.479-4.167V6.167C2.833 2.833 3.729 2 7.313 2h5.374c3.583 0 4.48.833 4.48 4.167Z'
		/>
		<path
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 11.583c.475 0 .93-.136 1.267-.378.336-.242.524-.57.524-.913 0-.343-.188-.671-.524-.914C10.93 9.136 10.475 9 10 9c-.476 0-.931.136-1.267.378-.336.243-.525.571-.525.914 0 .342.189.67.525.913.336.242.791.378 1.267.378v0Z'
		/>
	</svg>
)
export default Mobile
