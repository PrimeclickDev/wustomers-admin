import { FinanceChart } from 'components/FinanceChart'
import { FinanceMetrics } from 'components/FinanceMetrics'
import { FinanceTable } from 'components/FinanceTable'
import { Select, SelectItem } from 'components/Select'
import { usePageTitle } from 'hooks/usePageTitle'
import React from 'react'
import { filters } from 'utils/constants'

export const Finance = () => {
	const [filter, setFilter] = React.useState(filters[0])
	usePageTitle('Finance')

	return (
		<div className='max-w-7xl mx-auto py-5 px-3'>
			<header className='flex items-center justify-between gap-2 pt-4'>
				<h2 className='font-black text-3xl'>Finance</h2>
				<div className='flex items-center gap-2'>
					<p className='text-xs'>Show:</p>
					<Select
						value={filter}
						onValueChange={setFilter}
						placeholder=''
						className='w-max !bg-white !border-[#E5E0EB] border-2 rounded-md pl-2 !text-xs'>
						{filters.map(option => (
							<SelectItem
								value={option}
								key={option}
								className='py-4 capitalize'>
								{option}
							</SelectItem>
						))}
					</Select>
				</div>
			</header>

			<FinanceMetrics />
			<FinanceTable />
			<FinanceChart />
		</div>
	)
}
