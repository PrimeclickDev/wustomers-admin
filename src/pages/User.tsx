import Warning from 'assets/icons/Warning'
import { BackBtn } from 'components/BackBtn'
import { Modal } from 'components/Modal'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from 'utils/formatCurrency'

const tableHeaders = ['Price', 'Duration', 'Status', 'Date Time']
const data = [
	{
		id: 1,
		price: 4000,
		duration: '3 weeks',
		status: 'successful',
		date: '23/05/2022 - 12:30pm',
	},
	{
		id: 2,
		price: 4000,
		duration: '3 weeks',
		status: 'failed',
		date: '23/05/2022 - 12:30pm',
	},
]

const statusStyle = {
	failed: 'bg-[#EB5757]/20 text-[#EB5757]',
	successful: 'bg-[#219653]/20 text-[#219653]',
}

export const User = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<div className='max-w-7xl mx-auto py-12'>
				<BackBtn />

				<section className='mt-12 grid grid-cols-2 gap-8'>
					<div className='space-y-8'>
						<div className='bg-wustomers-primary py-4 px-6 border border-[#17A1FA] rounded-md shadow-[0px_0px_8px_2px_rgba(130,130,130,0.15)] flex items-center gap-6'>
							<img
								src='https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt='user profile'
								className='w-40 h-48 object-center object-cover rounded-2xl'
							/>
							<div className='space-y-1'>
								<h4 className='text-4xl font-medium'>
									Abudul Olatunbosun
								</h4>
								<p>abuduolatunbosun@gmail.com</p>
								<p>Bosun’s Company</p>
								<p>12/January/2022</p>
								<div className='flex items-center gap-2 pt-2'>
									<button
										type='button'
										className='text-[#F2C94C] hover:bg-[#F2C94C] hover:text-inherit transition-colors border border-[#F2C94C] py-1 px-4 rounded-full'>
										Suspend user
									</button>
									<button
										type='button'
										onClick={() => setOpen(true)}
										className='text-[#EB5757] border border-[#EB5757] hover:bg-[#EB5757] hover:text-white transition-colors py-1 px-4 rounded-full'>
										Delete account
									</button>
								</div>
							</div>
						</div>

						<div className='bg-wustomers-primary overflow-hidden border border-[#17A1FA] rounded-md shadow-[0px_0px_8px_2px_rgba(130,130,130,0.15)]'>
							<h3 className='font-medium text-xl bg-[#E6EAF9] py-2 px-6'>
								Recent transactions
							</h3>

							<div className='py-2 px-6'>
								<table className='table w-full whitespace-nowrap rounded text-left'>
									<thead>
										<tr className='table-row'>
											{tableHeaders?.map(header => (
												<th
													key={header}
													scope='col'
													className='p-2 font-medium'>
													{header}
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{data.map(item => (
											<tr
												key={item.id}
												className='even:bg-wustomers-primary/30'>
												<td className='p-2 font-medium'>
													{formatCurrency(item.price)}
												</td>
												<td className='p-2'>
													{item.duration}
												</td>
												<td className='p-2'>
													<span
														className={`py-1 px-3 rounded-md capitalize w-max ${
															statusStyle[
																item.status as keyof typeof statusStyle
															]
														}`}>
														{item.status}
													</span>
												</td>
												<td className='p-2'>
													{item.date}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className='bg-wustomers-primary py-4 px-6 border border-[#17A1FA] rounded-md shadow-[0px_0px_8px_2px_rgba(130,130,130,0.15)]'>
						<h3 className='font-medium text-xl'>
							Recent landing pages
						</h3>

						<ul className='grid grid-cols-2 gap-x-5 gap-y-8 my-5'>
							<li>
								<img
									src='https://s3-alpha-sig.figma.com/img/0975/cf2f/73e0640342f91acda240619c7ef469ed?Expires=1687737600&Signature=fRXYwIhSxTNqnPMxPxsQ38Oj894tVtg0b1GDtYr0UcGSzxq7iYDlhPY-ArdsTIBy2e-s8tZgy534Ru6cZfzc54PqgkTJWKLTxxaufkIGziw~qeFir6fXz2rTRSAIggyBmvWPbLBn2tPe677YNkJER8Wtjvd86CHWSX3VQUBlwaBSqfiLdn8GWvzqd0rlww1mrYzPLvkUO2yyultes2EqFhN3SndMVmLUEx0NutGDuQhOKDREw6R0dPP5fUuK52OLb2tljwckDk2gVGzkbtdNzKi~pbS9Ez8zuPC1iLnRkMJrnn~bmDRae0GHU5nHUb6mPKDgk~chy-00DhX-eWQJfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
									alt=''
									className='h-40 w-full object-cover rounded-md'
								/>
								<div className='flex items-center justify-between pt-2 gap-2'>
									<p>Landing page</p>
									<Link
										to='/campaigns/ida'
										className='border border-wustomers-blue text-wustomers-blue rounded-full text-xs py-1 hover:bg-wustomers-blue/10 transition-colors px-4'>
										View
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>

			<Modal
				open={open}
				setOpen={setOpen}
				className='grid place-items-center space-y-3'>
				<Warning />
				<p className='text-2xl w-72 text-center'>
					Are you sure you want to delete this account?
				</p>

				<div className='flex items-center gap-2 pt-2 w-full'>
					<button
						type='button'
						onClick={() => setOpen(false)}
						className='text-wustomers-blue flex-1 hover:bg-wustomers-blue hover:text-inherit transition-colors border border-wustomers-blue py-1.5 px-4 rounded-full hover:text-white'>
						No, go back
					</button>
					<button
						type='button'
						className='text-[#EB5757] flex-1 border border-[#EB5757] hover:bg-[#EB5757] hover:text-white transition-colors py-1.5 px-4 rounded-full'>
						Yes, delete account
					</button>
				</div>
			</Modal>
		</>
	)
}
