import { CampaignChart } from 'components/CampaignChart'
import { CampaignMetric } from 'components/CampaignMetric'
import { CampaignTable } from 'components/CampaignTable'
import { Modal } from 'components/Modal'
import Plus from 'components/Plus'
import { Select, SelectItem } from 'components/Select'
import { NewClientModal } from 'components/modals/NewClientModal'
import { usePageTitle } from 'hooks/usePageTitle'
import React from 'react'
import { filters } from 'utils/constants'

export const Campaigns = () => {
	usePageTitle('Campaigns')
	const [open, setOpen] = React.useState(false)
	const [filter, setFilter] = React.useState(filters[0])

	return (
		<>
			<div className='max-w-7xl mx-auto py-12 px-3 rounded p-1'>
				<header className='flex flex-col md:flex-row items-center justify-between gap-2'>
					<div>
						<h2 className='text-lg font-medium'>
							Welcome, Toluwatounfunmi
						</h2>
						<div className='flex flex-wrap item-center gap-4'>
							<h3 className='font-black text-2xl lg:text-3xl'>
								Account Management
							</h3>
							<button
								onClick={() => setOpen(true)}
								type='button'
								className='py-1.5 px-5 hover:bg-opacity-90 text-sm flex items-center gap-2 bg-wustomers-blue text-white rounded-md'>
								<Plus />
								Add new client
							</button>
						</div>
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

				<section className='pt-7'>
					<div className='lg:grid lg:grid-cols-6 flex flex-col gap-5'>
						<CampaignMetric />
						<CampaignChart />
					</div>

					<CampaignTable />
				</section>
			</div>

			<Modal open={open} setOpen={setOpen}>
				<NewClientModal setOpen={setOpen} />
			</Modal>
		</>
	)
}
