import { FinanceChart } from 'components/FinanceChart'
import { FinanceMetrics } from 'components/FinanceMetrics'
import { FinanceTable } from 'components/FinanceTable'
import { usePageTitle } from 'hooks/usePageTitle'

export const Finance = () => {
	usePageTitle('Finance')

	return (
		<div className='max-w-7xl mx-auto py-5 px-3'>
			<h2 className='font-black text-3xl'>Finance</h2>

			<FinanceMetrics />

			<FinanceTable />

			<FinanceChart />
		</div>
	)
}
