import People from 'assets/icons/People'
import PeopleDelete from 'assets/icons/PeopleDelete'
import PeopleTick from 'assets/icons/PeopleTick'

export const UsersMetrics = () => {
	return (
		<ul className='flex flex-col lg:flex-row lg:items-center gap-4 mt-8'>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600 capitalize'>Total users</h3>
					<People />
				</div>

				<p className='font-bold text-4xl'>30000</p>
			</li>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600 capitalize'>
						Total active users
					</h3>
					<PeopleTick />
				</div>

				<p className='font-bold text-4xl'>3000</p>
			</li>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600 capitalize'>
						Total passive users
					</h3>
					<PeopleDelete />
				</div>

				<p className='font-bold text-4xl'>300</p>
			</li>
		</ul>
	)
}
