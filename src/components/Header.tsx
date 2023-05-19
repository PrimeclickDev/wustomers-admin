import WustomersLogo from 'assets/WustomersLogo'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className='px-2 py-1 bg-wustomers-primary-light'>
			<div className='max-w-7xl mx-auto'>
				<Link to='/dashboard'>
					<WustomersLogo fill='#072AC8' className='w-44' />
				</Link>
			</div>
		</header>
	)
}
