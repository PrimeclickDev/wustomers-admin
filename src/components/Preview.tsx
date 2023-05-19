import { posts } from 'utils/constants'

export const Preview = () => {
	return (
		<div className='font-figtree'>
			<header className='w-full'>
				<div
					className='relative h-[630px] bg-black bg-cover bg-center py-4 after:absolute after:top-0 after:left-0 after:z-10 after:h-full after:w-full after:bg-black/60'
					style={{
						backgroundImage: `url("https://images.pexels.com/photos/16783095/pexels-photo-16783095/free-photo-of-light-city-street-dark.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
					}}>
					{/* header */}
					<section className='px-4'>
						<div
							className={`campaign-website-container relative z-50 flex items-center justify-center rounded-md bg-white shadow-2xl`}>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/768px-Instagram_logo_2022.svg.png'
								alt=''
								width='60'
								className=''
							/>
						</div>
					</section>

					{/* hero */}
					<section className='relative z-50 mx-auto flex h-[90%]  flex-col items-center justify-center px-3 text-center md:px-0'>
						<div className='max-w-[80ch]'>
							<h2 className='text-5xl font-black text-white'>
								Lavidluxe Store
							</h2>
						</div>
						<p className='max-w-[60ch] pt-3 leading-relaxed text-gray-200'>
							Lavidluxe Store We are a premium bespoke and
							ready-to-wear brand that provides high-
						</p>
						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							className='mx-auto mt-8 block w-max rounded bg-white px-12 py-[10px] transition-opacity hover:opacity-80'>
							<span>Get started</span>{' '}
							<span aria-hidden='true'>&rarr;</span>
						</a>
					</section>
				</div>
			</header>

			<section className='mx-auto max-w-[80ch] px-3 pt-24 pb-20 text-center'>
				<h2 className='text-4xl font-black text-neutral-900'>
					About us
				</h2>
				<p className='pt-6 text-neutral-600'>
					We are a premium bespoke and ready-to-wear brand that
					provides high-quality yet affordable female and male wears,
					hoodies and joggers co-ord sets, luxury handmade unisex
					footwear and bags.
				</p>
			</section>

			{/* posts */}
			<section className='pb-20 pt-10'>
				<div className='campaign-website-container'>
					<h2 className='text-center text-4xl font-black text-neutral-900'>
						Posts
					</h2>
					<ul className='grid grid-cols-fluid gap-6 pt-12'>
						{posts.map((post, index) => (
							<li
								className='max-w-[400px] justify-self-center'
								key={index}>
								<img
									src={post.media_url}
									alt='post picture'
									className='h-96 w-full rounded-lg object-cover'
								/>
								<div className='mt-2 rounded-lg bg-neutral-200 px-4 py-3'>
									<p>{post.caption}</p>
									{post.permalink ? (
										<a
											href={post.permalink}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-block pt-3 text-right text-xs font-medium text-wustomers-blue transition-all hover:underline'>
											View on Instagram{' '}
											<span aria-hidden='true'>
												&rarr;
											</span>
										</a>
									) : null}
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* testimonials */}
			{/* {(campaign?.testimonials.length as number) ? (
				<section className='mt-20 bg-neutral-300 py-24'>
					<div className='campaign-website-container'>
						<h2 className='text-center text-4xl font-black text-neutral-900'>
							Testimonials
						</h2>
						<ul className='grid grid-cols-fluid gap-6 pt-12'>
							{campaign?.testimonials.map(
								(testimonial, index) => (
									<li
										className='max-w-[400px] justify-self-center rounded-lg bg-neutral-900 p-6 hover:bg-opacity-90 hover:transition-colors'
										key={index}>
										<p className='text-neutral-300'>
											{testimonial.comment}
										</p>
										<h3 className='pt-4 text-sm font-bold text-white'>
											{testimonial.name} -{' '}
											{testimonial.designation}
										</h3>
									</li>
								)
							)}
						</ul>
					</div>
				</section>
			) : null} */}

			{/* footer */}
			<footer className='bg-neutral-900'>
				<div className='campaign-website-container !py-24'>
					<h2 className='text-center font-bold uppercase tracking-[3px] text-white'>
						Contact Information
					</h2>

					<ul className='flex flex-col items-center gap-10 pt-12 text-center text-gray-200'>
						<li>
							<h4 className='text-xs font-bold uppercase tracking-widest text-neutral-300'>
								Address
							</h4>
							<p className='pt-1'>
								10, Ezede Street, Ilogbo Elegba
							</p>
						</li>
						<li>
							<h4 className='text-xs font-bold uppercase tracking-widest text-neutral-300'>
								Phone number
							</h4>
							<a
								href={`tel:08138505782`}
								className='inline-block pt-1 hover:underline'>
								(+234) 08138505782
							</a>
						</li>
						<li>
							<h4 className='text-xs font-bold uppercase tracking-widest text-neutral-300'>
								Email address
							</h4>
							<a
								href={`mailto:ghostdeveloper@gmail.com`}
								className='inline-block pt-1 hover:underline'>
								ghostdeveloper@yopmail.com
							</a>
						</li>
					</ul>
				</div>

				<div className='campaign-website-container'>
					<p className='mb-1 rounded bg-neutral-800 py-3 text-center text-xs text-gray-200'>
						&copy; {new Date().getFullYear()}{' '}
						<strong>
							<a
								href='https://wustomers.netlify.app/'
								className='hover:underline'>
								Created with Wustomers
							</a>
						</strong>
						. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}
