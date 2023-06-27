import * as Popover from '@radix-ui/react-popover'
import ArrowDown from 'assets/icons/ArrowDown'
import Copy from 'assets/icons/Copy'
import Desktop from 'assets/icons/Desktop'
import Mobile from 'assets/icons/Mobile'
import { BackBtn } from 'components/BackBtn'
import { Preview } from 'components/Preview'
import React from 'react'

const status = ['Live', 'Ended', 'Pending']

export const CampaignPreview = () => {
	const [view, setView] = React.useState<'desktop' | 'mobile'>('desktop')

	return (
		<div className='max-w-7xl mx-auto py-10'>
			<div className='px-3 md:px-0'>
				<BackBtn />
			</div>

			<section className='rounded-lg overflow-hidden mt-12 shadow-[0px_0px_5px_3px_rgba(7,42,200,0.15)]'>
				<header className='flex items-center justify-between gap-2 py-3 px-6 bg-wustomers-neutral-light'>
					<div className='flex flex-col md:flex-row items-center gap-6'>
						<h3 className='text-lg font-medium'>Landing page</h3>
						<div className='flex flex-wrap items-center gap-4'>
							<div className='bg-[#6FCF97] py-1 px-4 rounded-full font-medium flex items-center gap-2 text-xs text-white'>
								<p>Live campaign</p>

								<Popover.Root>
									<Popover.Trigger asChild>
										<button
											type='button'
											className='border-l border-l-white pl-2'>
											<ArrowDown />
										</button>
									</Popover.Trigger>

									<Popover.Portal>
										<Popover.Content
											className='rounded p-1 z-50 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade'
											sideOffset={5}>
											<div className='flex flex-col text-xs'>
												{status.map((item, index) => (
													<button
														key={index}
														type='button'
														className='py-1 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-300'>
														{item}
													</button>
												))}
											</div>
											<Popover.Arrow className='fill-white' />
										</Popover.Content>
									</Popover.Portal>
								</Popover.Root>
							</div>

							<button className='text-xs flex items-center gap-1 bg-[rgba(81,106,217,0.8)] py-1 px-4 rounded-full text-white'>
								<Copy />
								<span>Copy url</span>
							</button>
						</div>
					</div>
					<div className='hidden md:flex items-center'>
						{/* <a
						href='#'
						className='text-wustomers-blue text-xs underline'>
						Visit page
					</a> */}
						<button
							className={`p-2 transition-all ${
								view === 'desktop'
									? 'bg-wustomers-blue'
									: 'bg-[#CDD4F4]'
							}`}
							onClick={() => setView('desktop')}>
							<Desktop />
						</button>
						<button
							className={`p-2 transition-all ${
								view === 'mobile'
									? 'bg-wustomers-blue'
									: 'bg-[#CDD4F4]'
							}`}
							onClick={() => setView('mobile')}>
							<Mobile />
						</button>
					</div>
				</header>

				<div
					className={`p-3 mx-auto transition-all ${
						view === 'desktop' ? 'w-full' : 'md:w-[360px] w-full'
					}`}>
					<Preview />
				</div>
			</section>
		</div>
	)
}
