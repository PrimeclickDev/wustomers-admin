import { useUserMetrics } from 'api/hooks/users/useUserMetrics'
import People from 'assets/icons/People'
import PeopleDelete from 'assets/icons/PeopleDelete'
import PeopleTick from 'assets/icons/PeopleTick'
import React from 'react'
import { Select, SelectItem } from './Select'
import { Spinner } from './Spinner'

const filters = [
	{
		id: 1,
		name: 'Today',
		slug: 'today',
	},
	{
		id: 2,
		name: 'Yesterday',
		slug: 'yesterday',
	},
	{
		id: 3,
		name: 'Past one week',
		slug: 'past_one_week',
	},
	{
		id: 4,
		name: 'Past one month',
		slug: 'past_one_month',
	},
	{
		id: 5,
		name: 'Past six months',
		slug: 'past_six_months',
	},
	{
		id: 6,
		name: 'Past one year',
		slug: 'past_one_year',
	},
]

export const UsersMetrics = () => {
	const [filter, setFilter] = React.useState(filters[5].name)

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const selected = filters.find(item => item.name === filter)!.slug
	const { data: metrics, isLoading } = useUserMetrics(selected)

	return (
		<div className='flex flex-col'>
			<div className='flex items-center gap-2 ml-auto'>
				<p className='text-xs'>Show:</p>
				<Select
					onValueChange={setFilter}
					value={filter}
					placeholder=''
					className='w-max !bg-white !border-[#E5E0EB] border-2 rounded-md pl-2 !text-xs'>
					{filters.map(option => (
						<SelectItem
							value={option.name}
							key={option.id}
							className='py-4'>
							{option.name}
						</SelectItem>
					))}
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
		</div>
	)
}
