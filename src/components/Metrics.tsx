import Users from 'assets/icons/Users'

export const Metrics = () => {
	return (
		<section className='mt-12 px-4'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-2xl'>Welcome, Admin 1</h2>

				<ul className='grid grid-cols-fluid gap-3 md:gap-6 pt-5'>
					{[1, 2, 3, 4].map(item => (
						<li
							className='bg-wustomers-blue flex items-end justify-between gap-2 px-8 py-6 rounded text-white'
							key={item}>
							<div>
								<p>Total Users</p>
								<h3 className='text-4xl font-black'>30,000</h3>
							</div>

							<Users />
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
