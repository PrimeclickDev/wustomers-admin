import { useQueryClient } from '@tanstack/react-query'
import { useFetchUsers } from 'api/hooks/users/useFetchUsers'
import { useSearchUsers } from 'api/hooks/users/useSearchUsers'
import MoreElipsis from 'assets/icons/MoreElipsis'
import Search from 'assets/icons/Search'
import { useDebounce } from 'hooks/useDebouncedHook'
import { useUserRole } from 'hooks/useUserRole'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Modal } from './Modal'
import { Pagination } from './Pagination'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { Spinner } from './Spinner'
import { AssignManagerToUserModal } from './modals/AssignManagerToUserModal'

const tableHeaders = ['Full name', 'Manager', 'Email', 'Business name', 'Created date', 'Campaigns', 'Status', 'Actions']
const status = {
	Active: 'bg-green-200 text-green-500',
	Inactive: 'bg-red-200 text-red-500',
}

export const UsersTable = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [page, setPage] = React.useState(1)
	const [open, setOpen] = React.useState(false)
	const [search, setSearch] = React.useState('')
	const debouncedValue = useDebounce(search, 500)
	const queryClient = useQueryClient()

	const { data: users, isLoading, isPreviousData } = useFetchUsers(page)
	const { data, isInitialLoading } = useSearchUsers(debouncedValue as string)

	const { role } = useUserRole()

	React.useEffect(() => {
		if (!open) {
			searchParams.delete('userId')
			setSearchParams(searchParams)
		}
	}, [open, searchParams, setSearchParams])

	React.useEffect(() => {
		if (debouncedValue) {
			queryClient.setQueryData(['users', 1], data)
			return
		}

		queryClient.invalidateQueries({ queryKey: ['users', 1] })
	}, [data, debouncedValue, queryClient])

	return (
		<>
			<div className='mt-10 bg-white border border-gray-200 py-4 px-6 rounded-md'>
				<header className='flex flex-wrap items-center justify-between gap-2'>
					<h3 className='font-semibold text-lg'>Users list</h3>

					<div className='flex items-center relative'>
						<input
							type='search'
							name='search'
							id='search'
							disabled={isInitialLoading}
							value={search}
							onChange={e => {
								setSearch(e.target.value)
							}}
							placeholder='Search users'
							className='rounded-lg bg-wustomers-primary border border-[#B5BFEF] py-2 px-3 text-sm focus-visible:outline disabled:cursor-not-allowed md:w-64 md:pr-8'
						/>
						<div className='absolute top-1/2 -translate-y-1/2 text-wustomers-blue-light right-2'>{isInitialLoading ? <Spinner /> : <Search />}</div>
					</div>

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
									<th key={header} scope='col' className='px-2 py-4 font-medium'>
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
									<td colSpan={8} className='py-2'>
										<Spinner />
									</td>
								</tr>
							) : users?.data.length ? (
								users.data.map(user => (
									<tr key={user.id}>
										<td className='px-2 py-4 font-medium capitalize'>
											{user.last_name} {user.first_name}
										</td>
										<td className='px-2 py-4'>{user.manager.first_name && user.manager.last_name ? `${user.manager.last_name} ${user.manager.first_name}` : '-'}</td>
										<td className='px-2 py-4'>{user.email}</td>
										<td className='px-2 py-4 capitalize'>{user.profile.business_name}</td>
										<td className='px-2 py-4'>{new Date(user.created_at).toDateString()}</td>
										<td className='px-2 py-4 text-center'>{user.campaigns.length}</td>
										<td className='px-2 py-4'>
											<span className={`py-1 px-3 uppercase tracking-wide text-xs font-medium rounded-md ${status[user.status as keyof typeof status]}`}>{user.status}</span>
										</td>
										<td className='px-2 py-4'>
											{role === 'super-admin' ? (
												<Popover>
													<PopoverTrigger>
														<button type='button' className='bg-wustomers-primary rounded-md p-2'>
															<MoreElipsis />
														</button>
													</PopoverTrigger>

													<PopoverContent>
														<div className='flex flex-col gap-1 text-xs'>
															<button
																type='button'
																onClick={() => {
																	setOpen(true)
																	setSearchParams({
																		userId: user.id.toString(),
																	})
																}}
																className='py-1 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
																Assign manager
															</button>
															<Link
																to={`${user.wustomer_id.toLowerCase()}`}
																state={{
																	user,
																}}
																className='py-1 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
																View more
															</Link>
														</div>
													</PopoverContent>
												</Popover>
											) : (
												<Link
													to={`${user.wustomer_id.toLowerCase()}`}
													state={{ user }}
													className='border border-wustomers-blue text-wustomers-blue rounded-full text-xs py-1.5 hover:bg-wustomers-blue transition-colors hover:text-white px-3'>
													View more
												</Link>
											)}
										</td>
									</tr>
								))
							) : (
								<tr className='table-row'>
									<td colSpan={8} className='px-2 py-4 text-center'>
										No data found.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>

			<Modal open={open} setOpen={setOpen}>
				<AssignManagerToUserModal setOpen={setOpen} />
			</Modal>
		</>
	)
}
