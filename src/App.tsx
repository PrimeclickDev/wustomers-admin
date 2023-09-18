import { Layout } from 'components/Layout'
import { NotFound } from 'components/NotFound'
import { useUserRole } from 'hooks/useUserRole'
import { AdminAccess } from 'pages/AdminAccess'
import { CampaignPreview } from 'pages/CampaignPreview'
import { Campaigns } from 'pages/Campaigns'
import { Finance } from 'pages/Finance'
import { Home } from 'pages/Home'
import Notifications from 'pages/Notifications'
import { RolesPermissions } from 'pages/RolesPermissions'
import { UserDetails } from 'pages/UserDetails'
import { Users } from 'pages/Users'
import { Route, Routes } from 'react-router-dom'

function App() {
	const { role } = useUserRole()
	// console.log('role', role)

	return (
		<Routes>
			<Route path='/' element={<Home />} />

			<Route element={<Layout />}>
				<Route path='campaigns'>
					<Route index element={<Campaigns />} />
					<Route path=':campaignId' element={<CampaignPreview />} />
				</Route>

				{role !== 'finance-admin' ? (
					<Route path='business-accounts'>
						<Route index element={<Users />} />
						<Route path=':id' element={<UserDetails />} />
						<Route path=':id/campaign/:campaignId' element={<CampaignPreview />} />
					</Route>
				) : null}

				{role === 'super-admin' || role === 'admin' || role === 'finance-admin' ? <Route path='finance' element={<Finance />} /> : null}

				{role === 'super-admin' ? (
					<Route path='admin-access'>
						<Route index element={<AdminAccess />} />
						<Route path='roles-permissions' element={<RolesPermissions />} />
					</Route>
				) : null}

				<Route path='notifications' element={<Notifications />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
