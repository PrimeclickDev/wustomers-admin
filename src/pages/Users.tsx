import { Modal } from 'components/Modal'
import Plus from 'components/Plus'
import { Select, SelectItem } from 'components/Select'
import { UsersMetrics } from 'components/UsersMetric'
import { UsersTable } from 'components/UsersTable'
import { NewClientModal } from 'components/modals/NewClientModal'
import { usePageTitle } from 'hooks/usePageTitle'
import React from 'react'
import { filters } from 'utils/constants'

export const Users = () => {
	usePageTitle('Users')
	const [open, setOpen] = React.useState(false)
	const [filter, setFilter] = React.useState(filters[0])

	return (
		<>
			<div className='max-w-7xl mx-auto py-5 px-3'>
				<header className='flex items-center justify-between gap-2 pt-4'>
					<div className='flex items-center gap-6'>
						<h3 className='font-black text-3xl'>Users</h3>
						<button
							onClick={() => setOpen(true)}
							type='button'
							className='py-1.5 px-5 hover:bg-opacity-90 text-sm flex items-center gap-2 bg-wustomers-blue text-white rounded-md'>
							<Plus />
							Add new client
						</button>
					</div>

					<div className='flex items-center gap-2'>
						<p className='text-xs'>Show:</p>
						<Select
							placeholder=''
							value={filter}
							onValueChange={setFilter}
							className='w-max !bg-white !border-[#E5E0EB] border-2 rounded-md pl-2 !text-xs'>
							{filters.map(option => (
								<SelectItem
									value={option}
									key={option}
									className='py-4 capitalize'>
									{option}
								</SelectItem>
							))}
						</Select>
					</div>
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
