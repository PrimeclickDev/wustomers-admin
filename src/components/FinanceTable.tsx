import ChevronRight from 'assets/icons/ChevronRight'
import { formatCurrency } from 'utils/formatCurrency'

const tableHeaders = [
	'Reference no',
	'Account name',
	'Price',
	'Charges',
	'Date',
	'Time',
	'Status',
]

const data = [
	{
		id: 1,
		ref: '1546166123161RG',
		name: 'Abdul Adekunle',
		price: 5000,
		duration: '2 weeks',
		date: '12/10/2022',
		time: '10:30pm',
		status: 'successful',
	},
	{
		id: 2,
		ref: '1546166123161RG',
		name: 'Abdul Adekunle',
		price: 5000,
		duration: '2 weeks',
		date: '12/10/2022',
		time: '10:30pm',
		status: 'failed',
	},
]

const statusStyle = {
	failed: 'bg-[#EB5757]/20 text-[#EB5757]',
	successful: 'bg-[#219653]/20 text-[#219653]',
}

export const FinanceTable = () => {
	return (
		<div className='mt-10 bg-white border border-gray-200 py-4 px-6 rounded-md'>
			<header className='flex flex-wrap items-center justify-between gap-2'>
				<h3 className='font-medium text-lg'>Campaign list</h3>

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

			<div className='overflow-hidden'>
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
								<td className='px-2 py-5'>{item.ref}</td>
								<td className='px-2 py-5 font-medium'>
									{item.name}
								</td>
								<td className='px-2 py-5'>
									{formatCurrency(item.price)}
								</td>
								<td className='px-2 py-5'>{item.duration}</td>
								<td className='px-2 py-5'>{item.date}</td>
								<td className='px-2 py-5'>{item.time}</td>
								<td className='px-2 py-5'>
									<span
										className={`py-1 px-3 rounded-md capitalize w-max ${
											statusStyle[
												item.status as keyof typeof statusStyle
											]
										}`}>
										{item.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
