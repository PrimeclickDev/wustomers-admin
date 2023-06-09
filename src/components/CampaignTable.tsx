/* eslint-disable no-mixed-spaces-and-tabs */
import { useFetchAllCampaigns } from 'api/hooks/campaigns/useFetchAllCampaigns'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from 'utils/formatCurrency'
import { Pagination } from './Pagination'
import { Spinner } from './Spinner'

const tableHeaders = [
	'Campaign title',
	'Campaign Owner',
	'Acct. manager ID',
	'Price',
	'Status',
	'Duration',
	'Start Date',
	'End date',
	'Action',
]

export const CampaignTable = () => {
	const [page, setPage] = React.useState(1)
	const {
		data: campaigns,
		isLoading,
		isPreviousData,
	} = useFetchAllCampaigns(page)

	return (
		<div className='mt-10 bg-wustomers-primary rounded-md py-2'>
			<header className='flex flex-wrap items-center justify-between gap-2 px-4 py-2 lg:px-6'>
				<h3 className='font-medium text-lg'>Campaign list</h3>

				<div className='flex flex-wrap items-center gap-4 text-sm text-wustomers-gray'>
					{/* <div className='flex items-center gap-2'>
						<p>All (50)</p>
						<p>Live (20)</p>
						<p>Pending (30)</p>
					</div> */}

					<Pagination
						from={campaigns?.meta.from}
						to={campaigns?.meta.to}
						lastPage={campaigns?.meta.last_page}
						hasPrevPage={!campaigns?.links.prev}
						hasNextPage={!campaigns?.links.next}
						isPreviousData={isPreviousData}
						page={page}
						setPage={setPage}
					/>
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

					<tbody
						className={`relative ${
							isPreviousData
								? 'cursor-not-allowed opacity-50 after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:text-xl after:content-["Loading..."]'
								: ''
						}`}>
						{isLoading ? (
							<tr>
								<td colSpan={9} className='py-2'>
									<Spinner />
								</td>
							</tr>
						) : campaigns?.data.length ? (
							campaigns.data.map(campaign => (
								<tr key={campaign.id}>
									<td className='px-6 py-5 font-medium first-letter:capitalize'>
										{campaign.title}
									</td>
									<td className='px-6 py-5'>
										{campaign.last_name}{' '}
										{campaign.first_name}
									</td>
									<td className='px-6 py-5'>
										{campaign.manager.first_name &&
										campaign.manager.last_name
											? `${campaign.manager.last_name} ${campaign.manager.first_name}`
											: '-'}
									</td>
									<td className='px-6 py-5'>
										{formatCurrency(campaign.amount)}
									</td>
									<td className='px-6 py-5 capitalize'>
										<span
											className={`py-1 px-3 rounded-md capitalize w-max text-sm ${
												campaign?.campaign_status ===
													'Active' &&
												campaign?.payment_status ===
													'Paid'
													? 'bg-[#219653]/20 text-[#219653]'
													: campaign?.campaign_status ===
															'Inactive' &&
													  campaign?.payment_status ===
															'Unpaid'
													? 'bg-[#EB5757]/20 text-[#EB5757]'
													: campaign?.campaign_status ===
															'Inactive' &&
													  campaign?.payment_status ===
															'Paid'
													? 'bg-[#F2C94C]/20 text-[#F2C94C]'
													: 'bg-[#EB5757]/20 text-[#EB5757]'
											}`}>
											{campaign?.campaign_status ===
												'Active' &&
											campaign?.payment_status === 'Paid'
												? 'Live'
												: campaign?.campaign_status ===
														'Inactive' &&
												  campaign?.payment_status ===
														'Unpaid'
												? 'Inactive'
												: campaign?.campaign_status ===
														'Inactive' &&
												  campaign?.payment_status ===
														'Paid'
												? 'Pending'
												: 'Ended'}
										</span>
									</td>

									<td className='px-6 py-5'>
										{campaign.budget
											? `${campaign.budget.duration} weeks`
											: '-'}
									</td>
									<td className='px-6 py-5'>
										{campaign.start_date
											? new Date(
													campaign.start_date as string
											  ).toDateString()
											: '-'}
									</td>
									<td className='px-6 py-5'>
										{campaign.end_date
											? new Date(
													campaign.end_date as string
											  ).toDateString()
											: '-'}
									</td>
									<td className='px-6 py-5'>
										<Link
											to={campaign.id.toString()}
											className='border border-wustomers-blue text-wustomers-blue rounded-full text-xs py-1.5 hover:bg-wustomers-blue/10 transition-colors px-3'>
											View more
										</Link>
									</td>
								</tr>
							))
						) : (
							<tr className='table-row'>
								<td
									colSpan={9}
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
