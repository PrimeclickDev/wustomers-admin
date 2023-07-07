/* eslint-disable no-mixed-spaces-and-tabs */
import { useFetchTransactions } from 'api/hooks/finance/useFetchTransactions'
import { useFetchBudgets } from 'api/hooks/shared/useFetchBudgets'
import React from 'react'
import { formatCurrency } from 'utils/formatCurrency'
import { formatDate } from 'utils/formatDate'
import { Pagination } from './Pagination'
import { Spinner } from './Spinner'

const tableHeaders = [
	'Reference no',
	'Business name',
	'Price',
	'Charges',
	'Date',
	'Status',
]

const statusStyle = {
	Unpaid: 'bg-[#EB5757]/20 text-[#EB5757]',
	Paid: 'bg-[#219653]/20 text-[#219653]',
}

export const FinanceTable = () => {
	const [page, setPage] = React.useState(1)
	const {
		data: transactions,
		isLoading,
		isPreviousData,
	} = useFetchTransactions(page)
	const { data: budgets } = useFetchBudgets()
	console.log('budgets', budgets)

	return (
		<div className='mt-5 bg-white border border-gray-200 py-4 px-6 rounded-md'>
			<header className='flex flex-wrap items-center justify-between gap-2'>
				<h3 className='font-medium text-lg'>Payment list</h3>

				<Pagination
					from={transactions?.meta.from}
					to={transactions?.meta.to}
					lastPage={transactions?.meta.last_page}
					hasPrevPage={!transactions?.links.prev}
					hasNextPage={!transactions?.links.next}
					isPreviousData={isPreviousData}
					page={page}
					setPage={setPage}
				/>
			</header>

			<div className='overflow-auto'>
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

					<tbody
						className={`relative ${
							isPreviousData
								? 'cursor-not-allowed opacity-50 after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:text-xl after:content-["Loading..."]'
								: ''
						}`}>
						{isLoading ? (
							<tr>
								<td colSpan={6} className='py-2'>
									<Spinner />
								</td>
							</tr>
						) : transactions?.data.length ? (
							transactions.data.map(transaction => (
								<tr
									key={transaction.id}
									className='even:bg-wustomers-primary/30'>
									<td className='px-2 py-5 lowercase'>
										{transaction.reference}
									</td>
									<td className='px-2 py-5 font-medium'>
										{transaction.user.business_name}
									</td>
									<td className='px-2 py-5'>
										{formatCurrency(transaction.amount)}
									</td>
									<td className='px-2 py-5'>
										{transaction.campaign
											? `${
													budgets?.find(
														budget =>
															budget.id ===
															transaction.campaign
																?.budget_id
													)?.duration
											  }`
											: '-'}
									</td>
									<td className='px-2 py-5'>
										{formatDate(transaction.created_at)}
									</td>
									<td className='px-2 py-5'>
										<span
											className={`py-1 px-3 rounded-md capitalize w-max ${
												statusStyle[
													transaction.payment_status
														.name as keyof typeof statusStyle
												]
											}`}>
											{transaction.payment_status.name}
										</span>
									</td>
								</tr>
							))
						) : (
							<tr className='table-row'>
								<td
									colSpan={6}
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
