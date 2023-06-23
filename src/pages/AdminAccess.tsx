import { AdminAccessTable } from 'components/AdminAccessTable'
import { Modal } from 'components/Modal'
import Plus from 'components/Plus'
import { NewAdminModal } from 'components/modals/NewAdminModal'
import { usePageTitle } from 'hooks/usePageTitle'
import { useUserRole } from 'hooks/useUserRole'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export const AdminAccess = () => {
	usePageTitle('Admin Access')
	const [open, setOpen] = React.useState(false)
	const { role } = useUserRole()

	if (role !== 'super-admin') return <Navigate to='/campaigns' replace />
	return (
		<>
			<div className='max-w-7xl mx-auto py-5 px-3'>
				<header className='flex flex-wrap items-center gap-2 lg:gap-6 pt-4'>
					<h2 className='font-black text-3xl'>Admin access</h2>
					<Link
						to='roles-permissions?tab=roles'
						className='py-1.5 px-5 hover:bg-opacity-90 text-sm bg-wustomers-blue text-white inline-block rounded-md'>
						Roles/Permissions
					</Link>
				</header>

				<button
					type='button'
					onClick={() => setOpen(true)}
					className='bg-wustomers-blue hover:bg-opacity-80 transition-all duration-300 text-white py-2 px-4 flex items-center gap-1 rounded-lg ml-auto mt-8'>
					<Plus />
					<span>Add new admin</span>
				</button>

				<AdminAccessTable />
			</div>

			<Modal open={open} setOpen={setOpen}>
				<NewAdminModal setOpen={setOpen} />
			</Modal>
		</>
	)
}
