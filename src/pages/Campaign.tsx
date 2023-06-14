import { BackBtn } from 'components/BackBtn'
import { CampaignLists } from 'components/CampaignLists'
import { UserInfo } from 'components/UserInfo'

export const Campaign = () => {
	return (
		<div className='max-w-6xl mx-auto py-12'>
			<BackBtn />

			<section className='mt-12 flex gap-10 p-6 rounded-md bg-wustomers-primary'>
				<UserInfo />
				<CampaignLists />
			</section>
		</div>
	)
}
