import { useFetchUsers } from 'api/hooks/users/useFetchUsers'
import React from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from './Pagination'
import { Spinner } from './Spinner'

const tableHeaders = [
	'Full name',
	'Email',
	'Business name',
	'Created date',
	'Landing page',
	'Campaigns',
	'Actions',
]

export const UsersTable = () => {
	const [page, setPage] = React.useState(1)
	const { data: users, isLoading, isPreviousData } = useFetchUsers(page)

	return (
		<div className='mt-10 bg-white border border-gray-200 py-4 px-6 rounded-md'>
			<header className='flex items-center justify-between gap-2'>
				<h3 className='font-semibold text-lg'>Users list</h3>

				<Pagination
					from={users?.meta.from}
					to={users?.meta.to}
					lastPage={users?.meta.last_page}
					hasPrevPage={!users?.links.prev}
					hasNextPage={!users?.links.next}
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
						) : users?.data.length ? (
							users.data.map(user => (
								<tr key={user.id}>
									<td className='px-2 py-4 font-medium capitalize'>
										{user.first_name} {user.last_name}
									</td>
									<td className='px-2 py-4'>{user.email}</td>
									<td className='px-2 py-4 capitalize'>
										{user.profile.business_name}
									</td>
									<td className='px-2 py-4'>
										{new Date(
											user.created_at
										).toDateString()}
									</td>
									<td className='px-2 py-4 text-center'>
										{user.campaigns.length}
									</td>
									<td className='px-2 py-4 text-center'>
										20
									</td>
									<td className='px-2 py-4'>
										<Link
											to={`${user.wustomer_id.toLowerCase()}`}
											className='border border-wustomers-blue text-wustomers-blue rounded-full text-xs py-1.5 hover:bg-wustomers-blue transition-colors hover:text-white px-3'>
											View more
										</Link>
									</td>
								</tr>
							))
						) : (
							<tr className='table-row'>
								<td
									colSpan={5}
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
