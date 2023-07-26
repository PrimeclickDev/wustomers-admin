import { useFetchFinanceMetric } from 'api/hooks/finance/useFetchFinanceMetric'
import Wallet from 'assets/icons/Wallet'
import WalletCheck from 'assets/icons/WalletCheck'
import WalletMinus from 'assets/icons/WalletMinus'
import React from 'react'
import { filters } from 'utils/constants'
import { formatCurrency } from 'utils/formatCurrency'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select'
import { Spinner } from './Spinner'

export const FinanceMetrics = () => {
	const [filter, setFilter] = React.useState(filters[5].name)

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const selected = filters.find(item => item.name === filter)!.slug
	const { data: financeMetric, isLoading } = useFetchFinanceMetric(selected)

	return (
		<div className='flex flex-col'>
			<div className='flex items-center gap-2 ml-auto'>
				<p className='text-xs'>Show:</p>
				<Select onValueChange={setFilter} value={filter}>
					<SelectTrigger className='w-max !bg-white !border-[#E5E0EB] border-2 rounded-md pl-2 !text-xs'>
						<SelectValue placeholder='Select a metric...' />
					</SelectTrigger>

					<SelectContent>
						{filters.map(option => (
							<SelectItem value={option.name} key={option.id} className='py-4'>
								{option.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<ul className='flex flex-wrap gap-4 mt-4'>
				{isLoading ? (
					<li>
						<Spinner />
					</li>
				) : (
					<>
						<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
							<div className='flex items-center justify-between'>
								<h3 className='text-gray-600'>Total money received</h3>
								<WalletCheck />
							</div>

							<p className='font-bold text-4xl'>{formatCurrency(financeMetric?.all_time_amount as number)}</p>
						</li>
						<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
							<div className='flex items-center justify-between'>
								<h3 className='text-gray-600'>Total money spend</h3>
								<WalletMinus />
							</div>
							<p className='font-bold text-4xl'>{formatCurrency(financeMetric?.total_amount_pending as number)}</p>
						</li>
						<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
							<div className='flex items-center justify-between'>
								<h3 className='text-gray-600'>Total money commission</h3>
								<Wallet />
							</div>
							<p className='font-bold text-4xl'>{formatCurrency(financeMetric?.total_amount_successful as number)}</p>
						</li>
					</>
				)}
			</ul>
		</div>
	)
}
