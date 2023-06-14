import { Link } from 'react-router-dom'
import { formatCurrency } from 'utils/formatCurrency'
import { StatusPill } from './StatusPill'

const campaigns = [
	{
		id: 1,
		name: 'Landing page',
		status: 'live',
		duration: '2 weeks',
		price: 80000,
	},
	{
		id: 2,
		name: 'Landing page',
		status: 'pending',
		duration: 'not available',
		price: 0,
	},
	{
		id: 1,
		name: 'Landing page',
		status: 'ended',
		duration: 'not available',
		price: 0,
	},
]
export const CampaignLists = () => {
	return (
		<div className='bg-white flex-1 p-6 rounded'>
			<h2 className='text-black text-xl font-bold'>Campaigns</h2>

			<ul className='mt-8 flex flex-col gap-4'>
				{campaigns.map(campaign => (
					<li className='flex items-center gap-4' key={campaign.id}>
						<img
							src='https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt=''
							className='w-72 h-36 object-cover'
						/>
						<div className='flex items-center justify-between gap-2 flex-1'>
							<div className='flex flex-col gap-1'>
								<h3 className='font-medium text-xl'>
									{campaign.name}
								</h3>
								<StatusPill name={campaign.status} />
								<p>{campaign.duration}</p>
								<p className='font-bold'>
									{formatCurrency(campaign.price)}
								</p>
							</div>
							<Link
								to='preview'
								className='border border-wustomers-blue text-wustomers-blue rounded-full py-1 hover:bg-wustomers-blue/10 transition-colors px-5'>
								View
							</Link>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
