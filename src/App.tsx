import { Layout } from 'components/Layout'
import { AdminAccess } from 'pages/AdminAccess'
import { CampaignPreview } from 'pages/CampaignPreview'
import { Campaigns } from 'pages/Campaigns'
import { Finance } from 'pages/Finance'
import { Home } from 'pages/Home'
import { RolesPermissions } from 'pages/RolesPermissions'
import { User } from 'pages/User'
import { Users } from 'pages/Users'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		element: <Layout />,
		children: [
			{
				path: 'campaigns',
				children: [
					{
						index: true,
						element: <Campaigns />,
					},
					{
						path: ':id',
						element: <CampaignPreview />,
					},
				],
			},
			{
				path: 'users',
				element: <Users />,
			},
			{
				path: 'user/:id',
				element: <User />,
			},
			{
				path: 'finance',
				element: <Finance />,
			},
			{
				path: 'admin-access',
				children: [
					{
						index: true,
						element: <AdminAccess />,
					},
					{
						path: 'roles-permissions',
						element: <RolesPermissions />,
					},
				],
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
