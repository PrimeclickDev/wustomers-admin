import ChevronRight from 'assets/icons/ChevronRight'
import { Link } from 'react-router-dom'

const tableHeaders = [
	'Full name',
	'Email',
	'Business name',
	'Created date',
	'Landing page',
	'Campaigns',
	'Actions',
]

const data = [
	{
		id: 1,
		name: 'Abdul Adekunle',
		email: 'abuduolatunbosun@gmail.com',
		businessName: 'Bosuns enterprise',
		date: '12/10/2022',
		page: 10,
		campaigns: 20,
	},
	{
		id: 2,
		name: 'Abdul Adekunle',
		email: 'abuduolatunbosun@gmail.com',
		businessName: 'Bosuns enterprise',
		date: '12/10/2022',
		page: 30,
		campaigns: 20,
	},
]

export const UsersTable = () => {
	return (
		<div className='mt-10 bg-white border border-gray-200 py-4 px-6 rounded-md'>
			<header className='flex items-center justify-between gap-2'>
				<h3 className='font-semibold text-lg'>Users list</h3>

				<div className='text-sm text-wustomers-gray flex items-center gap-4'>
					<p>1 - 12 of 32</p>
					<div className='flex items-center gap-2'>
						<button
							type='button'
							className='bg-white rounded w-6 h-6 grid place-items-center border border-gray-200'>
							<ChevronRight className='rotate-180' />
						</button>
						<button
							type='button'
							className='bg-white rounded w-6 h-6 grid place-items-center border border-gray-200'>
							<ChevronRight />
						</button>
					</div>
				</div>
			</header>

			<table className='table w-full whitespace-nowrap rounded text-sm text-left mt-3'>
				<thead>
					<tr className='table-row border-b border-b-gray-200'>
						{tableHeaders?.map(header => (
							<th
								key={header}
								scope='col'
								className='px-2 py-4 font-medium'>
								{header}
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{data.map(item => (
						<tr
							key={item.id}
							className='even:bg-wustomers-primary/30'>
							<td className='px-2 py-5 font-medium'>
								{item.name}
							</td>
							<td className='px-2 py-5'>{item.email}</td>
							<td className='px-2 py-5'>{item.name}</td>
							<td className='px-2 py-5'>{item.date}</td>
							<td className='px-2 py-5'>{item.page}</td>
							<td className='px-2 py-5'>{item.campaigns}</td>
							<td className='px-2 py-5'>
								<Link
									to='/user/ida'
									className='border border-wustomers-blue text-wustomers-blue rounded-full text-xs py-1.5 hover:bg-wustomers-blue transition-colors hover:text-white px-3'>
									View more
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
