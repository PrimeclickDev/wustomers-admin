import { useLogout } from 'api/hooks/auth/useLogout'
import WustomersLogo from 'assets/WustomersLogo'
import Bell from 'assets/icons/Bell'
import ChartCirlce from 'assets/icons/ChartCircle'
import CloseCircle from 'assets/icons/CloseCircle'
import Logout from 'assets/icons/Logout'
import Menu from 'assets/icons/Menu'
import Screen from 'assets/icons/Screen'
import Users from 'assets/icons/Users'
import WalletTwo from 'assets/icons/WalletTwo'
import Warning from 'assets/icons/Warning'
import { useScrollLock } from 'hooks/useScrollLock'
import { useUserRole } from 'hooks/useUserRole'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Modal } from './Modal'
import { Spinner } from './Spinner'

const navs = [
	{
		id: 1,
		name: 'Campaigns',
		icon: <Screen width={21} />,
		route: '/campaigns',
	},
	{
		id: 2,
		name: 'Business accounts',
		icon: <Users width={20} />,
		route: '/business-accounts',
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
	const [open, setOpen] = React.useState(false)
	const [menu, setMenu] = React.useState(navs)

	useScrollLock({ isOpen })
	const { role } = useUserRole()

	const logoutAdmin = useLogout()
	const closeMenu = () => setIsOpen(false)

	React.useEffect(() => {
		if (role === 'account-manager') {
			const adminNavs = navs.filter(nav => nav.route !== '/admin-access' && nav.route !== '/finance')
			setMenu(adminNavs)
		} else if (role === 'admin') {
			const adminNavs = navs.filter(nav => nav.route !== '/admin-access')
			setMenu(adminNavs)
		} else if (role === 'finance-admin') {
			const adminNavs = navs.filter(nav => nav.route !== '/admin-access' && nav.route !== '/business-accounts')
			setMenu(adminNavs)
		}
	}, [role])

	return (
		<>
			<header className='px-3 lg:px-0 bg-wustomers-primary-light'>
				<nav>
					<div className='flex lg:flex-col items-center justify-between'>
						<div className='max-w-7xl mx-auto flex items-center justify-between gap-2 w-full px-3'>
							<Link to='/campaigns'>
								<WustomersLogo fill='#072AC8' className='w-32 md:w-40' />
							</Link>

							<button type='button' aria-label='notification' className='w-10 h-10 rounded-full lg:place-items-center bg-white lg:grid hidden'>
								<Bell />
							</button>
						</div>
						<ul className='lg:flex items-center justify-center gap-10 hidden py-2 border-t border-t-gray-300 w-full'>
							{menu.map(nav => (
								<li key={nav.id}>
									<NavLink
										to={nav.route}
										className={({ isActive }) =>
											`flex items-center gap-2 rounded-md px-10 py-1.5 text-sm transition-all ${isActive ? 'bg-wustomers-blue text-white' : 'hover:bg-wustomers-blue/10'}`
										}>
										{nav.icon}
										<span>{nav.name}</span>
									</NavLink>
								</li>
							))}
							<li>
								<button
									onClick={() => setOpen(true)}
									className='flex items-center gap-2 rounded-md px-5 py-1.5 text-sm transition-all text-[#DC5F5F] hover:bg-red-600/10'
									type='button'>
									<Logout width={18} />
									<span>Log out</span>
								</button>
							</li>
						</ul>

						{/* hamburger menu */}
						<button className='lg:hidden' type='button' onClick={() => setIsOpen(true)}>
							<Menu />
						</button>
					</div>
				</nav>

				{/* mobile menu  */}
				<div aria-hidden='true' onClick={closeMenu} className={`absolute inset-0 z-50 min-h-screen w-full bg-black/80 transition-all backdrop:blur-sm ${isOpen ? 'block' : 'hidden'}`} />
				<div
					className={`absolute left-0 top-0 z-50 flex h-screen w-56 flex-col bg-wustomers-blue px-2 pt-20 pb-10 text-white shadow-2xl transition lg:hidden ${
						isOpen ? 'translate-x-0' : '-translate-x-full'
					}`}>
					<ul className='flex flex-col gap-4 font-bold'>
						{menu?.map(nav => (
							<li key={nav.id}>
								<NavLink
									to={nav.route}
									onClick={closeMenu}
									className={({ isActive }) => `flex items-center gap-2 rounded-md px-5 py-2.5 text-sm transition-all ${isActive ? 'bg-wustomers-blue-light text-white' : ''}`}>
									{nav.icon}
									<span>{nav.name}</span>
								</NavLink>
							</li>
						))}
						<li>
							<button onClick={() => setOpen(true)} className='flex items-center w-full gap-2 rounded-md px-5 py-1.5 text-sm transition-all' type='button'>
								<Logout width={16} />
								<span>Log out</span>
							</button>
						</li>
					</ul>

					<button onClick={closeMenu} className='absolute top-5 right-3 z-50 rounded-md bg-wustomers-blue-light p-1 text-white'>
						<CloseCircle />
						<span className='sr-only'>close menu</span>
					</button>
				</div>
			</header>

			<Modal open={open} setOpen={setOpen} className='grid place-items-center space-y-3'>
				<Warning />
				<p className='text-2xl w-72 text-center'>Are you sure you want to logout?</p>

				<div className='flex items-center gap-2 pt-2 w-full'>
					<button
						type='button'
						onClick={() => setOpen(false)}
						disabled={logoutAdmin.isLoading}
						className='text-wustomers-blue flex-1 hover:bg-wustomers-blue hover:text-inherit transition-colors border border-wustomers-blue py-1.5 px-4 rounded-full hover:text-white disabled:cursor-not-allowed'>
						No, go back
					</button>
					<button
						type='button'
						disabled={logoutAdmin.isLoading}
						onClick={() => logoutAdmin.mutate()}
						className='text-[#EB5757] flex-1 border border-[#EB5757] hover:bg-[#EB5757] hover:text-white transition-colors py-1.5 px-4 rounded-full disabled:cursor-not-allowed'>
						{logoutAdmin.isLoading ? <Spinner className='text-white' /> : 'Yes, logout'}
					</button>
				</div>
			</Modal>
		</>
	)
}
