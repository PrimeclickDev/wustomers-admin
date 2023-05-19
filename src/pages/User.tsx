import { BackBtn } from 'components/BackBtn'
import { Campaigns } from 'components/Campaigns'
import { UserInfo } from 'components/UserInfo'

export const User = () => {
	return (
		<div className='max-w-7xl mx-auto py-12'>
			<BackBtn />

			<section className='mt-12 flex gap-10'>
				<UserInfo />
				<Campaigns />
			</section>
		</div>
	)
}
