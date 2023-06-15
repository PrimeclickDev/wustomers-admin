import * as Popover from '@radix-ui/react-popover'
import MoreElipsis from 'assets/icons/MoreElipsis'

const tableHeaders = ['Role ID', 'Role title', 'Date created', 'Actions']

const data = [
	{
		id: '001',
		title: 'Super admin',
		date: '12/may/2022',
	},
	{
		id: '002',
		title: 'Super admin',
		date: '12/may/2022',
	},
]

export const RolesTable = () => {
	return (
		<div className='overflow-auto'>
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
							<td className='px-2 py-5'>{item.id}</td>
							<td className='px-2 py-5 font-medium'>
								{item.title}
							</td>
							<td className='px-2 py-5'>{item.date}</td>
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
													className='py-1 px-3 rounded hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
													Edit role
												</button>
												<button
													type='button'
													className='py-1 px-3 rounded hover:bg-red-600 hover:text-white text-left transition-colors'>
													Delete role
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
