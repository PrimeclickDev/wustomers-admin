export const Campaigns = () => {
	return (
		<div className='bg-wustomers-primary flex-1 border-r-2 border-r-wustomers-gray py-6 px-12 rounded'>
			<h2 className='text-black text-xl font-bold'>Campaigns</h2>

			<ul className='mt-8 flex flex-col gap-4'>
				<li className='flex items-center gap-4'>
					<img
						src='https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt=''
						className='w-72 h-36 object-cover'
					/>
					<div className='flex items-center justify-between gap-2 flex-1'>
						<div className='flex flex-col gap-1'>
							<h3 className='font-medium text-xl'>
								Landing page
							</h3>
							<p className='px-4 py-1 tracking-widest rounded-full bg-[#6FCF97] w-max text-white uppercase text-xs'>
								paid
							</p>
							<p>2-weeks duration</p>
							<p className='font-bold'>NGN80,000</p>
						</div>
						<button className='bg-wustomers-blue text-white px-10 py-2 rounded hover:opacity-90 transition-opacity text-sm'>
							View
						</button>
					</div>
				</li>
				<li className='flex items-center gap-4'>
					<img
						src='https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt=''
						className='w-72 h-36 object-cover'
					/>
					<div className='flex items-center justify-between gap-2 flex-1'>
						<div className='flex flex-col gap-1'>
							<h3 className='font-medium text-xl'>
								Landing page
							</h3>
							<p className='px-4 py-1 tracking-widest rounded-full bg-[#6FCF97] w-max text-white uppercase text-xs'>
								paid
							</p>
							<p>2-weeks duration</p>
							<p className='font-bold'>NGN80,000</p>
						</div>
						<button className='bg-wustomers-blue text-white px-10 py-2 rounded hover:opacity-90 transition-opacity text-sm'>
							View
						</button>
					</div>
				</li>
			</ul>
		</div>
	)
}
