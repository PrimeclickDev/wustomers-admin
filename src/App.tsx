import { Layout } from 'components/Layout'
import { Campaign } from 'pages/Campaign'
import { Dashboard } from 'pages/Dashboard'
import { Home } from 'pages/Home'
import { User } from 'pages/User'
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
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'user',
				element: <User />,
			},
			{
				path: 'campaign',
				element: <Campaign />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
