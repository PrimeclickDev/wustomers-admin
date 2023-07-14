import ArrowDown from 'assets/icons/ArrowDown'
import { FinanceChart } from 'components/FinanceChart'
import { FinanceMetrics } from 'components/FinanceMetrics'
import { FinanceTable } from 'components/FinanceTable'
import { Popover, PopoverContent, PopoverTrigger } from 'components/Popover'
import { usePageTitle } from 'hooks/usePageTitle'

const doctype = ['csv', 'pdf']

export const Finance = () => {
	usePageTitle('Finance')

	return (
		<div className='max-w-7xl mx-auto py-5 px-3'>
			<h2 className='font-black text-3xl'>Finance</h2>

			<FinanceMetrics />

			<div className='mt-10'>
				<button className='bg-wustomers-blue py-2 px-3 ml-auto rounded-md font-medium flex items-center gap-2 text-white'>
					<span>Export</span>

					<Popover>
						<PopoverTrigger>
							<button type='button' className='border-l border-l-white pl-2'>
								<ArrowDown />
							</button>
						</PopoverTrigger>

						<PopoverContent>
							<div className='flex flex-col text-xs'>
								{doctype.map((item, index) => (
									<button key={index} type='button' className='py-1 px-3 rounded uppercase hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
										{item}
									</button>
								))}
							</div>
						</PopoverContent>
					</Popover>
				</button>

				<FinanceTable />
			</div>

			<FinanceChart />
		</div>
	)
}
