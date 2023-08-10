import { useCampaignChart } from 'api/hooks/campaigns/useCampaignChart'
import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, type TooltipProps } from 'recharts'
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select'
import { Spinner } from './Spinner'

const durations = ['daily', 'monthly', 'yearly']

export const CampaignChart = () => {
	const [duration, setDuration] = React.useState(durations[0])
	const { data, isLoading } = useCampaignChart(duration)
	const chartData = data?.map(item => ({
		name: item.month || item.year,
		value: item.total_campaign,
	}))

	const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
		if (active && payload && payload.length) {
			return (
				<div className='rounded border border-neutral-300 bg-white py-2 px-4 shadow-2xl'>
					<h3 className='font-bold text-neutral-800'>{label}</h3>
					<ul className='pt-1 space-y-2'>
						<li className='text-xs font-medium'>Total Campaign: {payload[0].payload.value}</li>
					</ul>
				</div>
			)
		}

		return null
	}

	return (
		<div className='lg:col-span-4 border border-[#E5E0EB] rounded-lg p-4 lg:px-7'>
			<header className='flex items-center justify-between gap-2'>
				<h3 className='font-bold text-[#2F2F2F] text-2xl mb-4'>Campaign stat</h3>

				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-2 ml-auto'>
						<p className='text-xs'>Show:</p>
						<Select onValueChange={setDuration} value={duration}>
							<SelectTrigger className='w-max !bg-white capitalize border-none text-[#336666] rounded-md pl-2'>
								<SelectValue placeholder='Select a metric...' />
							</SelectTrigger>

							<SelectContent>
								{durations.map(option => (
									<SelectItem value={option} key={option} className='py-4 capitalize'>
										{option}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className='flex items-center gap-2 text-xs'>
						<span className='w-2 h-2 rounded-full bg-wustomers-blue' />
						<span className='text-[#4C495A]'>Total campaigns</span>
					</div>
				</div>
			</header>

			{isLoading ? (
				<Spinner />
			) : (
				<ResponsiveContainer width='100%' height={310} className='text-xs mt-5'>
					<BarChart data={chartData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip content={<CustomTooltip />} />
						{/* <Legend /> */}
						<Bar dataKey='value' fill='#072AC8' />
						{/* <Bar dataKey='uv' fill='#82ca9d' /> */}
					</BarChart>
				</ResponsiveContainer>
			)}
		</div>
	)
}
