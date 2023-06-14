import Users from 'assets/icons/Users'

const metrics = [
	{
		id: 1,
		name: 'Total campaign',
		value: 300000,
	},
	{
		id: 2,
		name: 'Total campaign',
		value: 3000,
	},
	{
		id: 3,
		name: 'Total campaign',
		value: 3000,
	},
	{
		id: 4,
		name: 'Total campaign',
		value: 3000,
	},
]

export const CampaignMetric = () => {
	return (
		<ul className='grid grid-cols-2 gap-4 col-span-2 text-white'>
			{metrics.map(metric => (
				<li
					key={metric.id}
					className='flex flex-col gap-1 items-center justify-center bg-wustomers-main border border-gray-200 rounded-xl py-8 px-6'>
					<Users />
					<h4 className='text-base font-medium'>{metric.name}</h4>
					<p className='text-4xl font-bold'>
						{metric.value.toLocaleString()}
					</p>
				</li>
			))}
		</ul>
	)
}
