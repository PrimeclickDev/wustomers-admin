import { SVGProps } from 'react'
const Profile = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 30 30'
		fill='none'
		{...props}>
		<path
			stroke='#072AC8'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M15.195 13.623a2.232 2.232 0 0 0-.402 0 5.387 5.387 0 0 1-5.204-5.4A5.407 5.407 0 0 1 15 2.814a5.406 5.406 0 0 1 .195 10.81v0ZM9.102 18.12c-2.95 1.974-2.95 5.192 0 7.154 3.351 2.243 8.848 2.243 12.2 0 2.949-1.974 2.949-5.192 0-7.154-3.34-2.23-8.837-2.23-12.2 0v0Z'
		/>
	</svg>
)
export default Profile
