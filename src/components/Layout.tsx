import { Navigate, Outlet } from 'react-router-dom'
import { getAccessToken } from 'utils/storage'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'

export const Layout = () => {
	const token = getAccessToken()

	if (!token) {
		return <Navigate to='/' replace />
	}

	return (
		<>
			<ScrollToTop />
			<Header />
			<main className='max-w-screen-2xl mx-auto pb-10'>
				<Outlet />
			</main>
		</>
	)
}
