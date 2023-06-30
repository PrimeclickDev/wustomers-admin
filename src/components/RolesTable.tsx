import * as Popover from '@radix-ui/react-popover'
import { useFetchRoles } from 'api/hooks/roles/useFetchRoles'
import MoreElipsis from 'assets/icons/MoreElipsis'
import React from 'react'
import { formatDate } from 'utils/formatDate'
import { Pagination } from './Pagination'
import { Spinner } from './Spinner'

const tableHeaders = ['Role ID', 'Role title', 'Date created', 'Actions']

export const RolesTable = () => {
	const [page, setPage] = React.useState(1)
	const { data: roles, isLoading, isPreviousData } = useFetchRoles()

	return (
		<>
			<Pagination
				from={roles?.meta.from}
				to={roles?.meta.to}
				lastPage={roles?.meta.last_page}
				hasPrevPage={!roles?.links.prev}
				hasNextPage={!roles?.links.next}
				isPreviousData={isPreviousData}
				page={page}
				setPage={setPage}
			/>

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

					<tbody>
						{isLoading ? (
							<tr>
								<td colSpan={4} className='py-2'>
									<Spinner />
								</td>
							</tr>
						) : roles?.data.length ? (
							roles?.data.map(role => (
								<tr
									key={role.id}
									className='even:bg-wustomers-primary/30'>
									<td className='px-2 py-5'>{role.id}</td>
									<td className='px-2 py-5 font-medium capitalize'>
										{role.name}
									</td>
									<td className='px-2 py-5'>
										{formatDate(role.created_at)}
									</td>
									<td className='px-2 py-5'>
										<Popover.Root>
											<Popover.Trigger asChild>
												<button
													type='button'
													className='bg-wustomers-primary rounded-md p-2'>
													<MoreElipsis />
												</button>
											</Popover.Trigger>

											<Popover.Portal>
												<Popover.Content
													className='rounded p-1 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade'
													sideOffset={5}>
													<div className='flex flex-col gap-1 text-xs'>
														<button
															type='button'
															className='py-1 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
															Edit role
														</button>
														<button
															type='button'
															className='py-1 px-3 rounded hover:bg-red-600 hover:text-white text-left transition-colors'>
															Delete role
														</button>
													</div>
													<Popover.Arrow className='fill-white' />
												</Popover.Content>
											</Popover.Portal>
										</Popover.Root>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className='px-2 py-5' colSpan={4}>
									No data found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</>
	)
}
