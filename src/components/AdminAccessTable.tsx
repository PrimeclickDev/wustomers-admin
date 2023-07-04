import * as Popover from '@radix-ui/react-popover'
import { useQueryClient } from '@tanstack/react-query'
import { useDeleteAdmin } from 'api/hooks/admin/useDeleteAdmin'
import { useFetchAdmins } from 'api/hooks/admin/useFetchAdmins'
import { useDeactiveUser } from 'api/hooks/shared/useDeactiveUser'
import { useReactivateUser } from 'api/hooks/shared/useReactivateUser'
import MoreElipsis from 'assets/icons/MoreElipsis'
import { Admin } from 'models/admins-models'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { ConfirmationModal } from './ConfirmationModal'
import { Modal } from './Modal'
import { Pagination } from './Pagination'
import { Spinner } from './Spinner'
import { EditAdminModal } from './modals/EditAdminModal'

const tableHeaders = ['Name', 'Email', 'Role', 'Status', 'Actions']
const status = {
	Active: 'bg-green-200 text-green-500',
	Inactive: 'bg-red-200 text-red-500',
}

export const AdminAccessTable = () => {
	const [open, setOpen] = React.useState(false)
	const [openDeactivateModal, setOpenDeactivateModal] = React.useState(false)
	const [openActivateModal, setOpenActivateModal] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)
	const [page, setPage] = React.useState(1)

	const [searchParams, setSearchParams] = useSearchParams()

	const queryClient = useQueryClient()
	const { data: admins, isLoading, isPreviousData } = useFetchAdmins()
	const deleteAdmin = useDeleteAdmin()
	const deactivateAdmin = useDeactiveUser()
	const reactivateAdmin = useReactivateUser()

	return (
		<>
			<div className='mt-10 bg-white border border-gray-200 py-4 px-6 rounded-md'>
				<header className='flex flex-col md:flex-row items-center justify-between gap-2'>
					<h3 className='font-semibold text-lg'>Admin list</h3>

					<Pagination
						from={admins?.from}
						to={admins?.to}
						lastPage={admins?.last_page}
						hasPrevPage={!admins?.prev_page_url}
						hasNextPage={!admins?.next_page_url}
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

						<tbody>
							{isLoading ? (
								<tr>
									<td colSpan={6} className='py-2'>
										<Spinner />
									</td>
								</tr>
							) : admins?.data.length ? (
								admins.data.map(admin => (
									<tr
										key={admin.id}
										className='even:bg-wustomers-primary/30'>
										<td className='px-2 py-4 capitalize'>
											{admin.last_name} {admin.first_name}
										</td>
										<td className='px-2 py-4'>
											{admin.email}
										</td>
										<td className='px-2 py-4'>
											{admin.roles.length ? (
												<span className='py-1 px-3 uppercase tracking-wide text-xs font-medium rounded-md bg-neutral-300'>
													{admin.roles[0]?.name.replace(
														'-',
														' '
													)}
												</span>
											) : null}
										</td>
										<td className='px-2 py-4'>
											<span
												className={`py-1 px-3 uppercase tracking-wide text-xs font-medium rounded-md ${
													status[
														admin.status
															.name as keyof typeof status
													]
												}`}>
												{admin.status.name}
											</span>
										</td>
										<td className='px-2 py-4'>
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
																disabled={
																	admin.status
																		.name ===
																	'Inactive'
																}
																onClick={() => {
																	setIsOpen(
																		true
																	)
																	setSearchParams(
																		{
																			adminId:
																				admin.id.toString(),
																		}
																	)
																}}
																className='py-1.5 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-300'>
																Edit admin
															</button>

															{admin.status
																.name !==
															'Inactive' ? (
																admin.roles[0]
																	.name !==
																	'super-admin' && (
																	<button
																		type='button'
																		onClick={() => {
																			setOpenDeactivateModal(
																				true
																			)
																			setSearchParams(
																				{
																					adminId:
																						admin.id.toString(),
																				}
																			)
																		}}
																		className='py-1.5 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
																		Deactivate
																		admin
																	</button>
																)
															) : (
																<button
																	type='button'
																	onClick={() => {
																		setOpenActivateModal(
																			true
																		)
																		setSearchParams(
																			{
																				adminId:
																					admin.id.toString(),
																			}
																		)
																	}}
																	className='py-1.5 px-3 rounded hover:bg-wustomers-blue disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-300 text-left hover:text-white transition-colors'>
																	Reactivate
																	admin
																</button>
															)}
															{admin.roles[0]
																?.name !==
															'super-admin' ? (
																<button
																	type='button'
																	onClick={() => {
																		setOpen(
																			true
																		)
																		setSearchParams(
																			{
																				adminId:
																					admin.id.toString(),
																			}
																		)
																	}}
																	className='py-1.5 px-3 rounded hover:bg-red-600 text-left hover:text-white transition-colors'>
																	Delete admin
																</button>
															) : null}
														</div>
														<Popover.Arrow className='fill-white' />
													</Popover.Content>
												</Popover.Portal>
											</Popover.Root>
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

			<ConfirmationModal
				confirmBtnTxt='Yes, Delete admin'
				open={open}
				setOpen={setOpen}
				isLoading={deleteAdmin.isLoading}
				title='Are you sure you want to delete this admin?'
				onConfirm={() =>
					deleteAdmin.mutate(searchParams.get('adminId') as string, {
						onSuccess: () => setOpen(false),
					})
				}
			/>

			<ConfirmationModal
				confirmBtnTxt='Deactivate admin'
				open={openDeactivateModal}
				setOpen={setOpenDeactivateModal}
				isLoading={deactivateAdmin.isLoading}
				title='Are you sure you want to deactivate this admin?'
				onConfirm={() =>
					deactivateAdmin.mutate(
						searchParams.get('adminId') as string,
						{
							onSuccess: () => {
								setOpenDeactivateModal(false)
								queryClient.invalidateQueries(['admins'])
							},
						}
					)
				}
			/>

			<ConfirmationModal
				confirmBtnTxt='Reactivate admin'
				open={openActivateModal}
				setOpen={setOpenActivateModal}
				isLoading={reactivateAdmin.isLoading}
				title='Are you sure you want to reactivate this admin?'
				onConfirm={() =>
					reactivateAdmin.mutate(
						searchParams.get('adminId') as string,
						{
							onSuccess: () => {
								setOpenActivateModal(false)
								queryClient.invalidateQueries(['admins'])
							},
						}
					)
				}
			/>

			<Modal open={isOpen} setOpen={setIsOpen}>
				<EditAdminModal
					admin={
						admins?.data.find(
							admin =>
								admin.id.toString() ===
								(searchParams.get('adminId') as string)
						) as Admin
					}
					setIsOpen={setIsOpen}
				/>
			</Modal>
		</>
	)
}
