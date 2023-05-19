import Copy from 'assets/icons/Copy'
import Desktop from 'assets/icons/Desktop'
import Mobile from 'assets/icons/Mobile'
import { BackBtn } from 'components/BackBtn'
import { Preview } from 'components/Preview'
import React from 'react'

export const Campaign = () => {
	const [view, setView] = React.useState<'desktop' | 'mobile'>('desktop')

	return (
		<div className='max-w-7xl mx-auto py-12 px-3'>
			<BackBtn />

			<section className='mt-12 border border-neutral-300 rounded p-1'>
				<header className='flex items-center justify-between gap-2 py-3 px-6 bg-wustomers-neutral-light'>
					<div className='flex flex-col md:flex-row items-center gap-6'>
						<h3 className='text-lg font-medium'>Landing page</h3>
						<div className='flex flex-wrap items-center gap-4'>
							<p className='text-xs bg-[#6FCF97] py-1 px-4 rounded-full font-medium text-white'>
								Live campaign
							</p>
							<button className='text-xs flex items-center gap-1 bg-[rgba(81,106,217,0.8)] py-1 px-4 rounded-full text-white'>
								<Copy />
								<span>Copy url</span>
							</button>
							<a
								href='#'
								className='text-wustomers-blue text-xs underline'>
								Visit page
							</a>
						</div>
					</div>
					<div className='hidden md:flex items-center'>
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
					className={`py-2 mx-auto transition-all ${
						view === 'desktop' ? 'w-full' : 'md:w-[360px] w-full'
					}`}>
					<Preview />
				</div>
			</section>
		</div>
	)
}
