import { useFetchPermissions } from 'api/hooks/permissions/useFetchPermissions'
import { useAssignPermission } from 'api/hooks/roles/useAssignPermission'
import { useFetchRoles } from 'api/hooks/roles/useFetchRoles'
import { useRevokePermission } from 'api/hooks/roles/useRevokePermission'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Pagination } from './Pagination'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './Select'

export const PermissionsTable = () => {
	const [page, setPage] = React.useState(1)
	const { data: permissions, isPreviousData } = useFetchPermissions(page)
	const { data: roles } = useFetchRoles()

	const revokePermission = useRevokePermission()
	const assignPermission = useAssignPermission()

	const { control, watch } = useForm({
		defaultValues: {
			role: 'admin',
		},
	})
	const selectedRole = watch('role')
	const selectedRolePermissions = roles?.data?.find(
		role => role.name === selectedRole
	)

	return (
		<>
			<div className='bg-[#F4F4F4] p-4 lg:p-6 rounded-md mt-10'>
				<p>Permissions option</p>
				<Controller
					name='role'
					control={control}
					render={({ field: { onChange, value } }) => (
						<Select
							defaultValue='admin'
							onValueChange={onChange}
							value={value}>
							<SelectTrigger className='w-full !bg-[#F4F4F4] capitalize border-wustomers-blue-light border-2 mt-2 rounded-md h-[3.1rem] pl-4'>
								<SelectValue placeholder='Select a role...' />
							</SelectTrigger>

							<SelectContent className='!w-[var(--radix-select-trigger-width)]'>
								{roles?.data
									// .filter(a => a.name !== 'super-admin')
									?.sort((a, b) => a.id - b.id)
									.map(option => (
										<SelectItem
											value={option.name}
											key={option.id}
											className='py-4 capitalize'>
											{option.name.replace('-', ' ')}
										</SelectItem>
									))}
							</SelectContent>
						</Select>
					)}
				/>
			</div>

			<div className='bg-[#F4F4F4] p-4 lg:p-6 rounded-md mt-10 '>
				<ul
					className={`space-y-8 relative ${
						isPreviousData
							? 'cursor-not-allowed opacity-50 after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:text-xl after:content-["Loading..."]'
							: ''
					}`}>
					<li className='flex items-center justify-between gap-2 font-medium'>
						<p>Permissions</p>
						<p>Access</p>
					</li>

					{selectedRole
						? permissions?.data?.map(permission => (
								<li
									className='flex items-center justify-between gap-2'
									key={permission.id}>
									<p className='first-letter:uppercase'>
										{permission.name}
									</p>

									<label className='relative inline-flex items-center cursor-pointer'>
										<input
											type='checkbox'
											disabled={
												selectedRole === 'super-admin'
											}
											defaultChecked={selectedRolePermissions?.permissions.some(
												p => p.name === permission.name
											)}
											value={permission.id}
											checked={
												!!selectedRolePermissions?.permissions.some(
													p =>
														p.name ===
														permission.name
												)
											}
											onChange={e => {
												if (!e.target.checked) {
													const confirm =
														revokePermission.mutateAsync(
															{
																permissionId:
																	permission.id,
																roleId: selectedRolePermissions?.id as number,
															}
														)
													toast.promise(confirm, {
														pending:
															'Revoking permission...',
														success:
															'Permission revoked',
														error: 'Error revoking permission',
													})
													return
												}
												const assign =
													assignPermission.mutateAsync(
														{
															id: selectedRolePermissions?.id as number,
															data: {
																permissions: [
																	// @ts-expect-error params should be string
																	e.target
																		.value,
																],
															},
														}
													)
												toast.promise(assign, {
													pending:
														'Assigning permission...',
													error: 'Error assigning permission',
													success:
														'Permission assigned.',
												})
											}}
											className='sr-only peer'
										/>
										<div className="w-11 h-6 bg-gray-200 peer-focus-visible:outline-none peer-focus-visible:ring-4 peer-focus-visible:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 peer-disabled:cursor-not-allowed" />
									</label>
								</li>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))
						: null}
				</ul>

				<Pagination
					from={permissions?.meta.from}
					to={permissions?.meta.to}
					lastPage={permissions?.meta.last_page}
					hasPrevPage={!permissions?.links.prev}
					hasNextPage={!permissions?.links.next}
					isPreviousData={isPreviousData}
					page={page}
					setPage={setPage}
					className='pt-10'
				/>
			</div>
		</>
	)
}
