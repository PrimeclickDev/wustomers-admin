import { Modal } from 'components/Modal'
import Plus from 'components/Plus'
import { RolesPermissionsTable } from 'components/RolesPermissionsTable'
import { NewRoleModal } from 'components/modals/NewRoleModal'
import { usePageTitle } from 'hooks/usePageTitle'
import React from 'react'
import { Link } from 'react-router-dom'

export const RolesPermissions = () => {
	usePageTitle('Roles & Permissions')
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<div className='max-w-7xl mx-auto py-5 px-3'>
				<header className='flex flex-wrap items-center gap-3 md:gap-6 pt-4'>
					<h2 className='font-black text-3xl'>Roles/Permissions</h2>
					<Link
						to='/admin-access'
						className='py-1.5 px-5 hover:bg-opacity-90 text-sm bg-wustomers-blue text-white inline-block rounded-md'>
						Admin access
					</Link>
				</header>

				<button
					type='button'
					onClick={() => setOpen(true)}
					className='bg-wustomers-blue hover:bg-opacity-80 transition-all duration-300 text-white py-2 px-4 flex items-center gap-1 rounded-lg ml-auto mt-8'>
					<Plus />
					<span>Add new role</span>
				</button>

				<RolesPermissionsTable />
			</div>

			<Modal open={open} setOpen={setOpen}>
				<NewRoleModal setOpen={setOpen} />
			</Modal>
		</>
	)
}
