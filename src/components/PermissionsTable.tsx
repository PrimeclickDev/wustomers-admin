import * as Switch from '@radix-ui/react-switch'
import { Controller, useForm } from 'react-hook-form'
import { Select, SelectItem } from './Select'

const durations = [
	{
		id: 1,
		name: 'Past one week',
		value: 'one-week',
	},
	{
		id: 2,
		name: 'Past one month',
		value: 'one-month',
	},
	{
		id: 3,
		name: 'Past six months',
		value: 'six-months',
	},
	{
		id: 4,
		name: 'Past one year',
		value: 'one-year',
	},
]
const permissions = ['general', 'finance', 'campaign', 'users']

export const PermissionsTable = () => {
	const { control } = useForm({})

	return (
		<>
			<div className='bg-[#F4F4F4] p-6 rounded-md mt-10'>
				<p>Permissions option</p>
				<Controller
					name='duration'
					control={control}
					render={({ field: { onChange, value } }) => (
						<Select
							placeholder='Select a duration...'
							onChange={onChange}
							className='w-full !bg-[#F4F4F4] border-wustomers-blue-light border-2 mt-2 rounded-md h-12 pl-4'
							value={value}>
							{durations?.map(option => (
								<SelectItem
									value={option.name}
									key={option.id}
									className='py-4'>
									{option.name}
								</SelectItem>
							))}
						</Select>
					)}
				/>
			</div>

			<ul className='bg-[#F4F4F4] p-6 rounded-md mt-10 space-y-8'>
				<li className='flex items-center justify-between gap-2 font-medium'>
					<p>Permissions</p>
					<p>Access</p>
				</li>
				{permissions.map(permission => (
					<li
						className='flex items-center justify-between gap-2'
						key={permission}>
						<p className='capitalize'>{permission}</p>
						<Switch.Root
							className='w-[42px] h-[25px] bg-gray-200 rounded-full relative data-[state=checked]:bg-green-600 outline-none cursor-default'
							id={permission}>
							<Switch.Thumb className='block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]' />
						</Switch.Root>
					</li>
				))}
			</ul>
		</>
	)
}
