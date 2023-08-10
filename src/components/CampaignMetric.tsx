import { useFetchCampaignMetrics } from 'api/hooks/campaigns/useFetchCampaignMetrics'
import PauseCircle from 'assets/icons/PauseCircle'
import PlayCircle from 'assets/icons/PlayCircle'
import Screen from 'assets/icons/Screen'

export const CampaignMetric = () => {
	const { data: campaignMetric } = useFetchCampaignMetrics()

	return (
		<ul className='md:grid md:grid-cols-2 flex flex-col gap-6 col-span-3'>
			<li className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-primary rounded-lg py-8 px-6 shadow-[0px_3px_8px_3px_rgba(7,42,200,0.20)]'>
				<Screen />
				<h4 className='text-base font-medium'>Total Campaign</h4>
				<p className='text-4xl font-bold'>{campaignMetric?.total_campaigns.toLocaleString()}</p>
			</li>
			<li className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-primary rounded-lg py-8 px-6 shadow-[0px_3px_8px_3px_rgba(7,42,200,0.20)]'>
				<PlayCircle />
				<h4 className='text-base font-medium'>Live Campaign</h4>
				<p className='text-4xl font-bold'>{campaignMetric?.live_campaigns.toLocaleString()}</p>
			</li>
			<li className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-primary rounded-lg py-8 px-6 shadow-[0px_3px_8px_3px_rgba(7,42,200,0.20)]'>
				<PauseCircle />
				<h4 className='text-base font-medium'>Inactive Campaign</h4>
				<p className='text-4xl font-bold'>{campaignMetric?.inactive_campaigns.toLocaleString()}</p>
			</li>
			<li className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-primary rounded-lg py-8 px-6 shadow-[0px_3px_8px_3px_rgba(7,42,200,0.20)]'>
				<Screen />
				<h4 className='text-base font-medium text-center'>Completed Campaign</h4>
				<p className='text-4xl font-bold'>{campaignMetric?.completed_campaigns.toLocaleString()}</p>
			</li>
		</ul>
	)
}
