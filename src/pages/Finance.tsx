import * as Popover from '@radix-ui/react-popover'
import ArrowDown from 'assets/icons/ArrowDown'
import { FinanceChart } from 'components/FinanceChart'
import { FinanceMetrics } from 'components/FinanceMetrics'
import { FinanceTable } from 'components/FinanceTable'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'components/Select'
import { usePageTitle } from 'hooks/usePageTitle'
import React from 'react'
import { filters } from 'utils/constants'

const doctype = ['csv', 'pdf']

export const Finance = () => {
	usePageTitle('Finance')
	const [filter, setFilter] = React.useState(filters[5].name)

	return (
		<div className='max-w-7xl mx-auto py-5 px-3'>
			<header className='flex items-center justify-between gap-2 pt-4'>
				<h2 className='font-black text-3xl'>Finance</h2>
				<div className='flex items-center gap-2'>
					<p className='text-xs'>Show:</p>
					<Select onValueChange={setFilter} value={filter}>
						<SelectTrigger className='w-max !bg-white !border-[#E5E0EB] border-2 rounded-md pl-2 !text-xs'>
							<SelectValue placeholder='Select a metric...' />
						</SelectTrigger>

						<SelectContent>
							{filters.map(option => (
								<SelectItem
									value={option.name}
									key={option.id}
									className='py-4'>
									{option.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</header>

			<FinanceMetrics />

			<div className='mt-10'>
				<button className='bg-wustomers-blue py-2 px-3 ml-auto rounded-md font-medium flex items-center gap-2 text-white'>
					<span>Export</span>

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
								className='rounded p-1 z-50 text-sm bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade'
								sideOffset={5}>
								<div className='flex flex-col text-xs'>
									{doctype.map((item, index) => (
										<button
											key={index}
											type='button'
											className='py-1 px-3 rounded uppercase hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
											{item}
										</button>
									))}
								</div>
								<Popover.Arrow className='fill-white' />
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>
				</button>

				<FinanceTable />
			</div>
			<FinanceChart />
		</div>
	)
}
