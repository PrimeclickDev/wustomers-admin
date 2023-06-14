import * as Popover from '@radix-ui/react-popover'
import ChevronRight from 'assets/icons/ChevronRight'
import MoreElipsis from 'assets/icons/MoreElipsis'

const tableHeaders = ['ID', 'Name', 'Email', 'Role', 'Actions']

const data = [
	{
		id: 1,
		name: 'Abdul Adekunle',
		email: 'abuduolatunbosun@gmail.com',
		role: 'Super admin',
	},
	{
		id: 2,
		name: 'Abdul Adekunle',
		email: 'abuduolatunbosun@gmail.com',
		role: 'Admin two',
	},
]

export const AdminAccessTable = () => {
	return (
		<div className='mt-10 bg-white border border-gray-200 py-4 px-6 rounded-md'>
			<header className='flex items-center justify-between gap-2'>
				<h3 className='font-semibold text-lg'>Users list</h3>

				<div className='text-sm text-wustomers-gray flex items-center gap-4'>
					<p>1 - 12 of 32</p>
					<div className='flex items-center gap-2'>
						<button
							type='button'
							className='bg-white rounded w-6 h-6 grid place-items-center border border-gray-200'>
							<ChevronRight className='rotate-180' />
						</button>
						<button
							type='button'
							className='bg-white rounded w-6 h-6 grid place-items-center border border-gray-200'>
							<ChevronRight />
						</button>
					</div>
				</div>
			</header>

			<table className='table w-full whitespace-nowrap rounded text-sm text-left mt-3'>
				<thead>
					<tr className='table-row border-b border-b-gray-200'>
						{tableHeaders?.map(header => (
							<th
								key={header}
								scope='col'
								className='px-2 py-4 font-medium'>
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
							<td className='px-2 py-5 font-medium'>{item.id}</td>
							<td className='px-2 py-5'>{item.name}</td>
							<td className='px-2 py-5'>{item.email}</td>
							<td className='px-2 py-5'>{item.role}</td>
							<td className='px-2 py-5'>
								<Popover.Root>
									<Popover.Trigger asChild>
										<button
											type='button'
											className='bg-wustomers-primary rounded-md p-2'>
											<MoreElipsis />
										</button>
									</Popover.Trigger>

									<Popover.Portal>
										<Popover.Content
											className='rounded p-1 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade'
											sideOffset={5}>
											<div className='flex flex-col gap-1 text-sm'>
												<button
													type='button'
													className='py-1 px-3 rounded hover:bg-wustomers-blue hover:text-white transition-colors'>
													Edit admin
												</button>
												<button
													type='button'
													className='py-1 px-3 rounded hover:bg-red-600 hover:text-white transition-colors'>
													Delete admin
												</button>
											</div>
											<Popover.Arrow className='fill-white' />
										</Popover.Content>
									</Popover.Portal>
								</Popover.Root>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
