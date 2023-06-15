import ChevronRight from 'assets/icons/ChevronRight'
import { Link } from 'react-router-dom'
import { StatusPill } from './StatusPill'

const tableHeaders = [
	'Campaign title',
	'User acct.',
	'Acct manager ID',
	'Price',
	'Status',
	'Duration',
	'Start Date',
	'End date',
	'Action',
]

const data = [
	{
		id: 1,
		name: 'campaign title number 1',
		user: 'Abdul Adekunle',
		manager: 'tolu@primeclick.com',
		price: 5000,
		duration: '2 weeks',
		startDate: '12/10/2022 - 10:30pm',
		endDate: '12/10/2022 - 10:30pm',
		status: 'live',
	},
	{
		id: 2,
		name: 'campaign title number 2',
		user: 'Abdul Adekunle',
		manager: 'tolu@primeclick.com',
		price: 5000,
		duration: '2 weeks',
		startDate: '12/10/2022 - 10:30pm',
		endDate: '12/10/2022 - 10:30pm',
		status: 'pending',
	},
	{
		id: 3,
		name: 'campaign title number 3',
		user: 'Abdul Adekunle',
		manager: 'tolu@primeclick.com',
		price: 5000,
		duration: '2 weeks',
		startDate: '12/10/2022 - 10:30pm',
		endDate: '12/10/2022 - 10:30pm',
		status: 'ended',
	},
]

export const CampaignTable = () => {
	return (
		<div className='mt-10 bg-wustomers-primary rounded-md py-2'>
			<header className='flex flex-wrap items-center justify-between gap-2 px-4 py-2 lg:px-6'>
				<h3 className='font-medium text-lg'>Campaign list</h3>

				<div className='flex flex-wrap items-center gap-4 text-sm text-wustomers-gray'>
					<div className='flex items-center gap-2'>
						<p>All (50)</p>
						<p>Live (20)</p>
						<p>Pending (30)</p>
					</div>

					<div className='text-sm text-wustomers-gray flex items-center gap-4'>
						<p>1 - 12 of 32</p>
						<div className='flex items-center gap-2'>
							<button
								type='button'
								className='bg-white rounded w-6 h-6 grid place-items-center'>
								<ChevronRight className='rotate-180' />
							</button>
							<button
								type='button'
								className='bg-white rounded w-6 h-6 grid place-items-center'>
								<ChevronRight />
							</button>
						</div>
					</div>
				</div>
			</header>

			<div className='overflow-x-auto'>
				<table className='table w-max overflow-x-hidden whitespace-nowrap rounded bg-white text-left text-sm mt-3'>
					<thead>
						<tr className='table-row border-b border-b-gray-200'>
							{tableHeaders?.map(header => (
								<th
									key={header}
									scope='col'
									className='px-6 py-4 font-medium'>
									{header}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{data.map(item => (
							<tr key={item.id}>
								<td className='px-6 py-5 font-medium'>
									{item.name}
								</td>
								<td className='px-6 py-5'>{item.user}</td>
								<td className='px-6 py-5'>{item.manager}</td>
								<td className='px-6 py-5 capitalize'>
									<StatusPill name={item.status} />
								</td>
								<td className='px-6 py-5'>
									{item.price.toLocaleString()}
								</td>
								<td className='px-6 py-5'>{item.duration}</td>
								<td className='px-6 py-5'>{item.startDate}</td>
								<td className='px-6 py-5'>{item.endDate}</td>
								<td className='px-6 py-5'>
									<Link
										to='user'
										className='border border-wustomers-blue text-wustomers-blue rounded-full text-xs py-1.5 hover:bg-wustomers-blue/10 transition-colors px-3'>
										View more
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
