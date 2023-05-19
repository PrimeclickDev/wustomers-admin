import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const Layout = () => {
	return (
		<main className='max-w-screen-2xl'>
			<Header />
			<Outlet />
		</main>
	)
}
