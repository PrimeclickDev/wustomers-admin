import { useFetchPermissions } from 'api/hooks/permissions/useFetchPermissions'
import { useFetchRoles } from 'api/hooks/roles/useFetchRoles'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Pagination } from './Pagination'
import { Select, SelectItem } from './Select'

export const PermissionsTable = () => {
	const [page, setPage] = React.useState(1)
	const { data: permissions, isPreviousData } = useFetchPermissions(page)
	const { data: roles } = useFetchRoles()

	const { control, watch } = useForm({
		defaultValues: {
			role: 'super-admin',
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
							placeholder='Select a role...'
							defaultValue='super-admin'
							onChange={onChange}
							className='w-full !bg-[#F4F4F4] capitalize border-wustomers-blue-light border-2 mt-2 rounded-md h-[3.1rem] pl-4'
							value={value}>
							{roles?.data
								?.sort((a, b) => a.id - b.id)
								.map(option => (
									<SelectItem
										value={option.name}
										key={option.id}
										className='py-4 capitalize'>
										{option.name}
									</SelectItem>
								))}
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
											// value={permission.id}
											checked={selectedRolePermissions?.permissions.some(
												p => p.name === permission.name
											)}
											className='sr-only peer'
										/>
										<div className="w-11 h-6 bg-gray-200 peer-focus-visible:outline-none peer-focus-visible:ring-4 peer-focus-visible:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" />
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
