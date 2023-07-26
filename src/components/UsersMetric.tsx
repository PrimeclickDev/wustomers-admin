import { useUserMetrics } from 'api/hooks/users/useUserMetrics'
import People from 'assets/icons/People'
import PeopleDelete from 'assets/icons/PeopleDelete'
import PeopleTick from 'assets/icons/PeopleTick'
import React from 'react'
import { filters } from 'utils/constants'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select'
import { Spinner } from './Spinner'

export const UsersMetrics = () => {
	const [filter, setFilter] = React.useState(filters[5].name)

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const selected = filters.find(item => item.name === filter)!.slug
	const { data: metrics, isLoading } = useUserMetrics(selected)

	return (
		<div className='flex flex-col mt-6'>
			<div className='flex items-center gap-2 ml-auto'>
				<p className='text-xs'>Show:</p>
				<Select onValueChange={setFilter} value={filter}>
					<SelectTrigger className='w-max !bg-white !border-[#E5E0EB] border-2 rounded-md pl-2 !text-xs'>
						<SelectValue placeholder='Select a metric...' />
					</SelectTrigger>

					<SelectContent>
						{filters.map(option => (
							<SelectItem value={option.name} key={option.id} className='py-4'>
								{option.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<ul className='flex flex-col lg:flex-row lg:items-center gap-4 mt-4'>
				{isLoading ? (
					<li>
						<Spinner />
					</li>
				) : (
					<>
						<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
							<div className='flex items-center justify-between'>
								<h3 className='text-gray-600 capitalize'>Total business accounts</h3>
								<People />
							</div>

							<p className='font-bold text-4xl'>{metrics?.total_user.toLocaleString()}</p>
						</li>
						<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
							<div className='flex items-center justify-between'>
								<h3 className='text-gray-600 capitalize'>Total active</h3>
								<PeopleTick />
							</div>

							<p className='font-bold text-4xl'>{metrics?.total_active.toLocaleString()}</p>
						</li>
						<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-1'>
							<div className='flex items-center justify-between'>
								<h3 className='text-gray-600 capitalize'>Total passive</h3>
								<PeopleDelete />
							</div>

							<p className='font-bold text-4xl'>{metrics?.total_inactive.toLocaleString()}</p>
						</li>
					</>
				)}
			</ul>
		</div>
	)
}
