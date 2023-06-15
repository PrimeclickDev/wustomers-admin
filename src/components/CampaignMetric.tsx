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
		<ul className='md:grid md:grid-cols-2 flex flex-col gap-4 col-span-2 text-white'>
			{metrics.map(metric => (
				<li
					key={metric.id}
					className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-blue rounded-lg py-8 px-6'>
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
