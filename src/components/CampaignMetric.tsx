import PauseCircle from 'assets/icons/PauseCircle'
import PlayCircle from 'assets/icons/PlayCircle'
import Screen from 'assets/icons/Screen'

export const CampaignMetric = () => {
	return (
		<ul className='md:grid md:grid-cols-2 flex flex-col gap-4 col-span-2 text-white'>
			<li className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-blue rounded-lg py-8 px-6'>
				<Screen />
				<h4 className='text-base font-medium'>Total Campaign</h4>
				<p className='text-4xl font-bold'>3000</p>
			</li>
			<li className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-blue rounded-lg py-8 px-6'>
				<Screen />
				<h4 className='text-base font-medium'>New Campaign</h4>
				<p className='text-4xl font-bold'>3000</p>
			</li>
			<li className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-blue rounded-lg py-8 px-6'>
				<PlayCircle />
				<h4 className='text-base font-medium'>Live Campaign</h4>
				<p className='text-4xl font-bold'>3000</p>
			</li>
			<li className='flex flex-col gap-1 w-full items-center justify-center bg-wustomers-blue rounded-lg py-8 px-6'>
				<PauseCircle />
				<h4 className='text-base font-medium'>Ended Campaign</h4>
				<p className='text-4xl font-bold'>3000</p>
			</li>
		</ul>
	)
}
