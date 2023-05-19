import { Metrics } from 'components/Metrics'
import { UsersTable } from 'components/UsersTable'

export const Dashboard = () => {
	return (
		<main className='max-w-screen-2xl'>
			<Metrics />
			<UsersTable />
		</main>
	)
}
