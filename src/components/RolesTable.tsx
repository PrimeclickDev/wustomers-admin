import * as Popover from '@radix-ui/react-popover'
import { useDeleteRole } from 'api/hooks/roles/useDeleteRole'
import { useFetchRoles } from 'api/hooks/roles/useFetchRoles'
import MoreElipsis from 'assets/icons/MoreElipsis'
import { Role } from 'models/roles-models'
import React from 'react'
import { formatDate } from 'utils/formatDate'
import { ConfirmationModal } from './ConfirmationModal'
import { Modal } from './Modal'
import { Pagination } from './Pagination'
import { Spinner } from './Spinner'
import { EditRoleModal } from './modals/EditRoleModal'

const tableHeaders = ['Role ID', 'Role title', 'Date created', 'Actions']

export const RolesTable = () => {
	const [page, setPage] = React.useState(1)
	const [openEditModal, setOpenEditModal] = React.useState(false)
	const [openDeleteModal, setOpenDeleteModal] = React.useState(false)

	const [role, setRole] = React.useState<Role | null>(null)
	const { data: roles, isLoading, isPreviousData } = useFetchRoles()
	const deleteRole = useDeleteRole()

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
							roles?.data
								.sort((a, b) => a.id - b.id)
								.map(role => (
									<tr key={role.id}>
										<td className='px-2 py-5'>{role.id}</td>
										<td className='px-2 py-5 font-medium capitalize'>
											{role.name.replace('-', ' ')}
										</td>
										<td className='px-2 py-5'>
											{formatDate(role.created_at)}
										</td>
										<td className='px-2 py-5'>
											{role.name === 'super-admin' ? (
												<button
													type='button'
													disabled
													className='bg-wustomers-primary rounded-md p-2 disabled:cursor-not-allowed disabled:opacity-50'>
													<MoreElipsis />
												</button>
											) : (
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
																	onClick={() => {
																		setOpenEditModal(
																			true
																		)
																		setRole(
																			role
																		)
																	}}
																	type='button'
																	className='py-1 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
																	Edit role
																</button>
																<button
																	onClick={() => {
																		setOpenDeleteModal(
																			true
																		)
																		setRole(
																			role
																		)
																	}}
																	type='button'
																	className='py-1 px-3 rounded hover:bg-red-600 hover:text-white text-left transition-colors'>
																	Delete role
																</button>
															</div>
															<Popover.Arrow className='fill-white' />
														</Popover.Content>
													</Popover.Portal>
												</Popover.Root>
											)}
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

			<Modal open={openEditModal} setOpen={setOpenEditModal}>
				<EditRoleModal setOpen={setOpenEditModal} role={role as Role} />
			</Modal>

			<ConfirmationModal
				confirmBtnTxt='Delete role'
				open={openDeleteModal}
				setOpen={setOpenDeleteModal}
				isLoading={deleteRole.isLoading}
				title='Are you sure you want to delete this role?'
				onConfirm={() =>
					deleteRole.mutate(role?.id as number, {
						onSuccess: () => setOpenDeleteModal(false),
					})
				}
			/>
		</>
	)
}
