import { useFetchFinanceChartData } from 'api/hooks/campaigns/useFetchFinanceChartData'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { statusStyle } from 'utils/constants'
import { formatCurrency } from 'utils/formatCurrency'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select'
import { Spinner } from './Spinner'

const statues = ['All', 'Paid', 'Unpaid']
const date = ['Daily', 'Yesterday', 'Monthly', 'Past two months', 'Past three month', 'Past six months', 'Yearly']

export const FinanceChart = () => {
	const [filter, setFilter] = React.useState(statues[0])
	const [dateFilter, setDateFilter] = React.useState(date[6])
	const {
		data: chartData,
		isLoading,
		isPreviousData,
	} = useFetchFinanceChartData({
		status: filter.toLowerCase(),
		date: dateFilter.replace(' ', '_').toLowerCase(),
	})
	const paid = chartData?.map(data => ({
		name: new Date(data.created_at).toDateString(),
		amount: data.amount,
		status: data.payment_status.name,
	}))

	const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
		if (active && payload && payload.length) {
			return (
				<div className='rounded border border-neutral-300 bg-white py-2 px-4 shadow-2xl'>
					<h3 className='font-bold text-neutral-800'>{label}</h3>
					<ul className='pt-1 space-y-2'>
						<li className='text-xs font-medium'>Amount: {formatCurrency(payload[0].payload.amount)}</li>
						<li className='text-xs font-medium'>
							Status:{' '}
							<span className={`py-1 px-3 rounded-md uppercase text-xs ${statusStyle[payload[0].payload.status as keyof typeof statusStyle]} `}> {payload[0].payload.status}</span>
						</li>
					</ul>
				</div>
			)
		}

		return null
	}

	return (
		<div className='mt-10 bg-white border border-gray-200 py-4 px-6 rounded-md'>
			<header className='flex flex-wrap items-center justify-between gap-4'>
				<h3 className='font-semibold text-lg'>Total Amount:</h3>

				<div className='flex items-center gap-4'>
					<p className='text-sm'>Show:</p>
					<div className='flex items-center gap-4'>
						<Select onValueChange={setFilter} value={filter.toLowerCase()} disabled={isLoading}>
							<SelectTrigger className='w-max !bg-white !border-[#E5E0EB] border-2 rounded-md pl-2 !text-xs'>
								<SelectValue placeholder='Select a metric...' />
							</SelectTrigger>

							<SelectContent>
								{statues.map((option, index) => (
									<SelectItem value={option.toLowerCase()} className='py-4' key={index}>
										{option}
									</SelectItem>
								))}
							</SelectContent>
						</Select>

						<Select onValueChange={setDateFilter} value={dateFilter.replace(' ', '_').toLowerCase()} disabled={isLoading}>
							<SelectTrigger className='w-max !bg-white !border-[#E5E0EB] border-2 rounded-md pl-2 !text-xs'>
								<SelectValue placeholder='Select a metric...' />
							</SelectTrigger>

							<SelectContent>
								{date.map((option, index) => (
									<SelectItem value={option.toLowerCase()} className='py-4' key={index}>
										{option}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
			</header>

			{isLoading ? (
				<Spinner />
			) : (
				<ResponsiveContainer
					width='100%'
					height={450}
					className={`mt-10 text-xs relative ${
						isPreviousData
							? 'cursor-not-allowed opacity-50 after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:text-xl after:content-["Loading..."]'
							: ''
					}`}>
					<AreaChart data={paid}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip content={<CustomTooltip />} />
						<Area type='monotone' dataKey='amount' stroke='#072AC8' fill='rgb(7,42,200,0.6)' />
						{/* stroke={filter === 'Paid' ? '#219653' : filter === 'Unpaid' ? '#EB5757' : '#072AC8'}
						fill={filter === 'Paid' ? 'rgba(33,150,83,0.8)' : filter === 'Unpaid' ? 'rgba(235,87,87,0.8)' : 'rgba(7,42,200,0.8)'} */}
					</AreaChart>
				</ResponsiveContainer>
			)}
		</div>
	)
}
