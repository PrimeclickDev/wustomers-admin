import WustomersLogo from 'assets/WustomersLogo'
import ChartCirlce from 'assets/icons/ChartCircle'
import CloseCircle from 'assets/icons/CloseCircle'
import Menu from 'assets/icons/Menu'
import Screen from 'assets/icons/Screen'
import Users from 'assets/icons/Users'
import WalletTwo from 'assets/icons/WalletTwo'
import { useScrollLock } from 'hooks/useScrollLock'
import React from 'react'
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
		id: 3,
		name: 'Finance',
		icon: <WalletTwo width={20} />,
		route: '/finance',
	},
	{
		id: 4,
		name: 'Admin/Roles',
		icon: <ChartCirlce width={20} />,
		route: '/admin-access',
	},
]

export const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	useScrollLock({ isOpen })

	const closeMenu = () => setIsOpen(false)

	return (
		<header className='px-4 bg-wustomers-primary-light relative'>
			<nav className='md:py-1 border-t border-t-wustomers-dark-gray'>
				<div className='max-w-7xl mx-auto flex items-center justify-between'>
					<Link to='/campaigns'>
						<WustomersLogo
							fill='#072AC8'
							className='w-32 md:w-44'
						/>
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

					{/* hamburger menu */}
					<button
						className='md:hidden'
						type='button'
						onClick={() => setIsOpen(true)}>
						<Menu />
					</button>
				</div>
			</nav>

			{/* mobile menu  */}
			<div
				aria-hidden='true'
				onClick={closeMenu}
				className={`absolute inset-0 z-50 min-h-screen w-full bg-black/80 transition-all backdrop:blur-sm ${
					isOpen ? 'block' : 'hidden'
				}`}
			/>
			<div
				className={`absolute left-0 top-0 z-50 flex h-screen w-56 flex-col bg-wustomers-blue px-2 pt-20 pb-10 text-white shadow-2xl transition lg:hidden ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}>
				<ul className='flex flex-col gap-4 font-bold'>
					{navs?.map(nav => (
						<li key={nav.id}>
							<NavLink
								to={nav.route}
								onClick={closeMenu}
								className={({ isActive }) =>
									`flex items-center gap-2 rounded-md px-5 py-2.5 text-sm transition-all ${
										isActive
											? 'bg-wustomers-blue-light text-white'
											: ''
									}`
								}>
								{nav.icon}
								<span>{nav.name}</span>
							</NavLink>
						</li>
					))}
				</ul>

				{/* <div className='mt-20 flex flex-col gap-4'>
					{!token ? (
						<>
							<Button
								text='Login'
								variant='outline'
								href='/login'
								className='border-white py-3 text-center text-white'
							/>
							<Button
								text='Sign up'
								variant='fill'
								href='/signup'
								className='!bg-white py-3 text-center text-wustomers-blue hover:bg-white'
							/>
						</>
					) : (
						<Button
							text='Dashboard'
							variant='fill'
							href='/overview'
							className='!bg-white py-3 px-1 text-center text-wustomers-blue hover:bg-white'
						/>
					)}
				</div> */}

				<button
					onClick={closeMenu}
					className='absolute top-5 right-3 z-50 rounded-md bg-wustomers-blue-light p-1 text-white'>
					<CloseCircle />
					<span className='sr-only'>close menu</span>
				</button>
			</div>
		</header>
	)
}
