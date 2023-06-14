import WustomersLogo from 'assets/WustomersLogo'
import ChartCirlce from 'assets/icons/ChartCircle'
import Screen from 'assets/icons/Screen'
import Users from 'assets/icons/Users'
import WalletTwo from 'assets/icons/WalletTwo'
import { Link, NavLink } from 'react-router-dom'

const navs = [
	{
		id: 1,
		name: 'Campaigns',
		icon: <Screen width={21} />,
		route: '/campaigns',
	},
	{
		id: 2,
		name: 'Users',
		icon: <Users width={20} />,
		route: '/users',
	},
	{
		id: 1,
		name: 'Finance',
		icon: <WalletTwo width={20} />,
		route: '/finance',
	},
	{
		id: 1,
		name: 'Admin/Roles',
		icon: <ChartCirlce width={20} />,
		route: '/admin-access',
	},
]

export const Header = () => {
	return (
		<header className='px-2 bg-wustomers-primary-light'>
			<nav className='py-1 border-t border-t-wustomers-dark-gray'>
				<div className='max-w-7xl mx-auto flex items-center justify-between'>
					<Link to='/campaigns'>
						<WustomersLogo fill='#072AC8' className='w-44' />
					</Link>
					<ul className='md:flex items-center gap-1 hidden'>
						{navs.map(nav => (
							<li key={nav.id}>
								<NavLink
									to={nav.route}
									className={({ isActive }) =>
										`flex items-center gap-2 rounded-md px-5 py-1.5 text-sm transition-all ${
											isActive
												? 'bg-wustomers-blue text-white'
												: 'hover:bg-wustomers-blue/10'
										}`
									}>
									{nav.icon}
									<span>{nav.name}</span>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	)
}
