import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'

export const Layout = () => {
	return (
		<>
			<ScrollToTop />
			<main className='max-w-screen-2xl'>
				<Header />
				<Outlet />
			</main>
		</>
	)
}
