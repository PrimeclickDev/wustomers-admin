/* eslint-disable no-mixed-spaces-and-tabs */

import { useFetchCampaign } from 'api/hooks/campaigns/useFetchCampaign'
import { useFetchCampaignAudience } from 'api/hooks/campaigns/useFetchCampaignAudience'
import { useStartcampaign } from 'api/hooks/campaigns/useStartCampaign'
import ArrowDown from 'assets/icons/ArrowDown'
import Copy from 'assets/icons/Copy'
import Desktop from 'assets/icons/Desktop'
import Mobile from 'assets/icons/Mobile'
import { BackBtn } from 'components/BackBtn'
import { ConfirmationModal } from 'components/ConfirmationModal'
import { Modal } from 'components/Modal'
import { Popover, PopoverContent, PopoverTrigger } from 'components/Popover'
import { Preview } from 'components/Preview'
import { Spinner } from 'components/Spinner'
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { copyToClipboard } from 'utils/copyToClipboard'

const genders = {
	M: 'Male',
	F: 'Female',
}

export const CampaignPreview = () => {
	const [view, setView] = React.useState<'desktop' | 'mobile'>('desktop')
	const [open, setOpen] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)
	const params = useParams()

	const { data: campaign, isLoading } = useFetchCampaign(params.campaignId as string)
	const { data: targetAudience, isLoading: targetAudienceLoading } = useFetchCampaignAudience(params.campaignId as string)
	const startCampaign = useStartcampaign(campaign?.campaign_code as string)

	return (
		<>
			<div className='max-w-7xl mx-auto py-10'>
				<div className='px-3 md:px-0'>
					<BackBtn />
				</div>

				<section className='rounded-lg overflow-hidden mt-12 shadow-[0px_0px_5px_3px_rgba(7,42,200,0.15)]'>
					<header className='flex items-center justify-between gap-2 py-3 px-6 bg-wustomers-neutral-light'>
						<div className='flex flex-col md:flex-row items-center gap-6'>
							<h3 className='text-lg font-medium'>Landing page</h3>
							<div className='flex flex-wrap items-center gap-4'>
								<div
									className={`py-1 px-4 rounded-full font-medium flex items-center gap-2 text-xs text-white ${
										campaign?.campaign_status === 'Active'
											? 'bg-[#6FCF97]'
											: campaign?.campaign_status === 'Inactive'
											? 'bg-[#EB5757]'
											: campaign?.campaign_status === 'Pending'
											? 'bg-[#F2C94C]'
											: 'bg-gray-300'
									}`}>
									<p>{campaign?.campaign_status}</p>

									{campaign?.campaign_status === 'Pending' ? (
										<Popover>
											<PopoverTrigger>
												<button type='button' className='border-l border-l-white pl-2'>
													<ArrowDown />
												</button>
											</PopoverTrigger>

											<PopoverContent className='z-50'>
												<div className='flex flex-col text-xs'>
													<button
														type='button'
														onClick={() => setOpen(true)}
														className='py-1 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-300'>
														Start campaign
													</button>
												</div>
											</PopoverContent>
										</Popover>
									) : null}
								</div>

								<button
									type='button'
									onClick={() => setIsOpen(true)}
									className='text-xs flex items-center gap-1 bg-wustomers-blue py-1 px-4 rounded-full text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'>
									View target audience
								</button>

								<button
									disabled={!campaign || (campaign?.campaign_status !== 'Active' && campaign?.payment_status !== 'Paid')}
									onClick={() =>
										copyToClipboard(`https://wustomers.netlify.app/campaign/${campaign?.campaign_code.toLowerCase()}`).then(() => toast.success('URL copied to clipboard'))
									}
									type='button'
									className='text-xs flex items-center gap-1 bg-[rgba(81,106,217,0.8)] py-1 px-4 rounded-full text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'>
									<Copy />
									<span>Copy url</span>
								</button>
							</div>
						</div>
						<div className='hidden md:flex items-center'>
							<button className={`p-2 transition-all ${view === 'desktop' ? 'bg-wustomers-blue' : 'bg-[#CDD4F4]'}`} onClick={() => setView('desktop')}>
								<Desktop />
							</button>
							<button className={`p-2 transition-all ${view === 'mobile' ? 'bg-wustomers-blue' : 'bg-[#CDD4F4]'}`} onClick={() => setView('mobile')}>
								<Mobile />
							</button>
						</div>
					</header>

					<div className={`p-3 mx-auto transition-all ${view === 'desktop' ? 'w-full' : 'md:w-[360px] w-full'}`}>{isLoading ? <Spinner /> : <Preview campaign={campaign} />}</div>
				</section>
			</div>

			<ConfirmationModal
				confirmBtnTxt='Yes, start campaign'
				open={open}
				setOpen={setOpen}
				isLoading={startCampaign.isLoading}
				title='Are you sure you want to start this campaign?'
				onConfirm={() => startCampaign.mutate()}
				className='bg-wustomers-blue'
			/>

			<Modal open={isOpen} setOpen={setIsOpen}>
				{targetAudienceLoading ? (
					<Spinner />
				) : (
					<>
						<h2 className='font-bold text-xl'>Target Audience</h2>

						<ul className='pt-6 pb-2 flex flex-col gap-4 capitalize'>
							<li>
								<p className='font-bold'>Country: </p>
								<p>Nigeria</p>
							</li>
							<li>
								<p className='font-bold'>State: </p>
								<p>{targetAudience?.campaign.campaign_locations.map(g => g.state).join(', ')}</p>
							</li>
							<li>
								<p className='font-bold'>Sex: </p>
								<p>{targetAudience?.gender.map(g => genders[g.gender as keyof typeof genders]).join(', ')}</p>
							</li>
							<li>
								<p className='font-bold'>Age range: </p>
								<p>{targetAudience?.age_range.map(g => g.age_range).join(', ')}</p>
							</li>
							<li>
								<p className='font-bold'>Audience interest: </p>
								<p>{targetAudience?.audience_interest.map(g => g.audience_interest).join(', ')}</p>
							</li>
							<li>
								<p className='font-bold'>Campaign keywords: </p>
								<p>{targetAudience?.campaign_keyword.map(g => g.campaign_keywords).join(', ')}</p>
							</li>
						</ul>
					</>
				)}
			</Modal>
		</>
	)
}
