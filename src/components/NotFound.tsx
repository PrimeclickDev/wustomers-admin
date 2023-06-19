import WustomersLogo from 'assets/WustomersLogo'
import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center bg-wustomers-blue/5 px-3 text-center'>
			<WustomersLogo fill='#072AC8' />
			<h2 className='mt-4 text-3xl font-bold uppercase tracking-wide text-wustomers-blue lg:text-6xl'>
				Page not found...
			</h2>

			<p className='pt-2 lg:text-lg'>
				This page is missing or you assembled the link incorretly.
			</p>

			<Link
				to='/'
				className='mt-5 flex items-center gap-2 text-wustomers-blue transition hover:text-wustomers-blue-light active:scale-95'>
				<span>Go to Home Page</span>
			</Link>
		</main>
	)
}
