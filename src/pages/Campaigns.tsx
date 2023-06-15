import { CampaignChart } from 'components/CampaignChart'
import { CampaignMetric } from 'components/CampaignMetric'
import { CampaignTable } from 'components/CampaignTable'
import { Modal } from 'components/Modal'
import Plus from 'components/Plus'
import { NewClientModal } from 'components/modals/NewClientModal'
import { usePageTitle } from 'hooks/usePageTitle'
import React from 'react'

export const Campaigns = () => {
	usePageTitle('Campaigns')
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<div className='max-w-7xl mx-auto py-12 px-3 rounded p-1'>
				<h2 className='text-lg font-medium'>
					Welcome, Toluwatounfunmi
				</h2>

				<section>
					<header className='flex flex-wrap items-center gap-3 md:gap-6'>
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
					</header>

					<div className='lg:grid lg:grid-cols-6 flex flex-col gap-5 pt-5'>
						<CampaignMetric />
						<CampaignChart />
					</div>

					<CampaignTable />
				</section>
			</div>

			<Modal open={open} setOpen={setOpen}>
				<NewClientModal />
			</Modal>
		</>
	)
}
