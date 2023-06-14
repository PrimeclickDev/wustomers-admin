import MoreElipsis from 'assets/icons/MoreElipsis'
import People from 'assets/icons/People'
import PeopleDelete from 'assets/icons/PeopleDelete'
import PeopleTick from 'assets/icons/PeopleTick'

export const UsersMetrics = () => {
	return (
		<ul className='flex flex-wrap items-center gap-4 mt-8'>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600 capitalize'>Total users</h3>
					<button type='button'>
						<MoreElipsis />
					</button>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-bold text-4xl'>30000</p>
					<People />
				</div>
			</li>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600 capitalize'>
						Total active users
					</h3>
					<button type='button'>
						<MoreElipsis />
					</button>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-bold text-4xl'>3000</p>
					<PeopleTick />
				</div>
			</li>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600 capitalize'>
						Total passive users
					</h3>
					<button type='button'>
						<MoreElipsis />
					</button>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-bold text-4xl'>300</p>
					<PeopleDelete />
				</div>
			</li>
		</ul>
	)
}
