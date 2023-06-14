import { Modal } from 'components/Modal'
import Plus from 'components/Plus'
import { UsersMetrics } from 'components/UsersMetric'
import { UsersTable } from 'components/UsersTable'
import { NewClientModal } from 'components/modals/NewClientModal'
import React from 'react'

export const Users = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<div className='max-w-7xl mx-auto py-5'>
				<header className='flex items-center gap-6 pt-4'>
					<h3 className='font-black text-3xl'>Users</h3>
					<button
						onClick={() => setOpen(true)}
						type='button'
						className='py-1.5 px-5 hover:bg-opacity-90 text-sm flex items-center gap-2 bg-wustomers-blue text-white rounded-md'>
						<Plus />
						Add new client
					</button>
				</header>

				<UsersMetrics />
				<UsersTable />
			</div>
			<Modal open={open} setOpen={setOpen}>
				<NewClientModal />
			</Modal>
		</>
	)
}
