import { Campaign } from 'models/users-models'
import { Link } from 'react-router-dom'

type UserCampaignsProps = {
	campaigns: Campaign[]
}

export const UserCampaigns = ({ campaigns }: UserCampaignsProps) => {
	return (
		<div className='bg-wustomers-primary p-4 md:px-6 border border-[#17A1FA] rounded-2xl shadow-[0px_0px_8px_2px_rgba(130,130,130,0.15)]'>
			<h3 className='font-medium text-xl'>Recent campaigns</h3>

			{campaigns.length ? (
				<ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8 my-5'>
					{campaigns.map(campaign => (
						<li key={campaign.id}>
							<img
								src={campaign.background_image}
								alt={`${campaign.title} landing page`}
								className='h-40 w-full object-cover rounded-md'
							/>
							<div className='flex items-center justify-between pt-2 gap-2'>
								<p>{campaign.title}</p>
								<Link
									to={`campaign/${campaign.id}`}
									className='border border-wustomers-blue text-wustomers-blue rounded-full text-xs py-1 hover:bg-wustomers-blue/10 transition-colors px-4'>
									View
								</Link>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p className='text-xs mt-4 text-center'>
					This user has no campaigns
				</p>
			)}
		</div>
	)
}
