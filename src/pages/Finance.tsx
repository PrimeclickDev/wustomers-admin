import { FinanceChart } from 'components/FinanceChart'
import { FinanceMetrics } from 'components/FinanceMetrics'
import { FinanceTable } from 'components/FinanceTable'

export const Finance = () => {
	return (
		<div className='max-w-7xl mx-auto py-5 px-4'>
			<h2 className='font-black text-3xl pt-4'>Finance</h2>

			<FinanceMetrics />
			<FinanceTable />
			<FinanceChart />
		</div>
	)
}
