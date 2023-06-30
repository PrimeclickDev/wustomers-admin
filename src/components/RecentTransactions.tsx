import { Transaction } from 'models/users-models'
import { formatCurrency } from 'utils/formatCurrency'
import { formatDate } from 'utils/formatDate'

const tableHeaders = ['Duration', 'Price', 'Status', 'Date Time']

const statusStyle = {
	Unpaid: 'bg-[#EB5757]/20 text-[#EB5757]',
	Paid: 'bg-[#219653]/20 text-[#219653]',
}

type RecentTransactionsProps = {
	transactions: Transaction[]
}

export const RecentTransactions = ({
	transactions,
}: RecentTransactionsProps) => {
	return (
		<div className='bg-wustomers-primary overflow-hidden border border-[#17A1FA] rounded-2xl shadow-[0px_0px_8px_2px_rgba(130,130,130,0.15)]'>
			<h3 className='font-medium text-xl bg-[#E6EAF9] py-2 px-3 md:px-6'>
				Recent transactions
			</h3>

			<div className='p-2 md:px-6 text-sm overflow-auto'>
				<table className='table w-full whitespace-nowrap rounded text-left'>
					<thead>
						<tr className='table-row'>
							{tableHeaders?.map(header => (
								<th
									key={header}
									scope='col'
									className='p-2 font-medium'>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{transactions.length ? (
							transactions.slice(0, 10).map(transaction => (
								<tr
									key={transaction.id}
									className='even:bg-wustomers-primary/30'>
									<td className='px-2 py-3'>
										{transaction.reference}
									</td>
									<td className='px-2 py-3 font-medium'>
										{formatCurrency(transaction.amount)}
									</td>
									<td className='px-2 py-3'>
										<span
											className={`py-1 px-3 rounded-md capitalize w-max ${
												statusStyle[
													transaction.status
														.name as keyof typeof statusStyle
												]
											}`}>
											{transaction.status.name}
										</span>
									</td>
									<td className='px-2 py-3'>
										{formatDate(transaction.updated_at)}
									</td>
								</tr>
							))
						) : (
							<tr className='table-row'>
								<td
									colSpan={4}
									className='px-2 py-4 text-center'>
									No data found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}
