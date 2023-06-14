import * as Tabs from '@radix-ui/react-tabs'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { PermissionsTable } from './PermissionsTable'
import { RolesTable } from './RolesTable'

export const RolesPermissionsTable = () => {
	const [tab, setTab] = React.useState('')
	const [searchParams, setSearchParams] = useSearchParams()

	React.useEffect(() => {
		setTab(searchParams.get('tab') || 'roles')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='mt-10 bg-white border border-gray-200 py-4 px-6 rounded-md'>
			<Tabs.Root
				className='flex flex-col'
				value={tab}
				onValueChange={value => {
					setSearchParams({ tab: value })
					setTab(value)
				}}
				defaultValue={searchParams.get('tab') as string}>
				<Tabs.List
					className='py-1 px-2 flex items-center w-max gap-4 rounded-xl bg-wustomers-primary'
					aria-label='Roles and permissions'>
					<Tabs.Trigger
						className='py-1 px-10 data-[state=active]:bg-wustomers-blue data-[state=active]:text-white rounded-lg'
						value='roles'>
						Roles
					</Tabs.Trigger>
					<Tabs.Trigger
						className='py-1 px-6 data-[state=active]:bg-wustomers-blue data-[state=active]:text-white rounded-lg'
						value='permissions'>
						Permissions
					</Tabs.Trigger>
				</Tabs.List>

				<Tabs.Content value='roles'>
					<RolesTable />
				</Tabs.Content>

				<Tabs.Content value='permissions'>
					<PermissionsTable />
				</Tabs.Content>
			</Tabs.Root>
		</div>
	)
}
