import { useUserMetrics } from 'api/hooks/users/useUserMetrics'
import People from 'assets/icons/People'
import PeopleDelete from 'assets/icons/PeopleDelete'
import PeopleTick from 'assets/icons/PeopleTick'
import { Spinner } from './Spinner'

export const UsersMetrics = () => {
	const { data: metrics, isLoading } = useUserMetrics()

	return (
		<ul className='flex flex-col lg:flex-row lg:items-center gap-4 mt-8'>
			{isLoading ? (
				<li>
					<Spinner />
				</li>
			) : (
				<>
					<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
						<div className='flex items-center justify-between'>
							<h3 className='text-gray-600 capitalize'>
								Total users
							</h3>
							<People />
						</div>

						<p className='font-bold text-4xl'>
							{metrics?.total_user.toLocaleString()}
						</p>
					</li>
					<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
						<div className='flex items-center justify-between'>
							<h3 className='text-gray-600 capitalize'>
								Total active users
							</h3>
							<PeopleTick />
						</div>

						<p className='font-bold text-4xl'>
							{metrics?.total_active.toLocaleString()}
						</p>
					</li>
					<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
						<div className='flex items-center justify-between'>
							<h3 className='text-gray-600 capitalize'>
								Total passive users
							</h3>
							<PeopleDelete />
						</div>

						<p className='font-bold text-4xl'>
							{metrics?.total_inactive.toLocaleString()}
						</p>
					</li>
				</>
			)}
		</ul>
	)
}
