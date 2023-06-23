import { AuthData } from 'models/auth-models'

export const useUserRole = () => {
	const user: AuthData = JSON.parse(
		localStorage.getItem('wustomers-admin') || '{}'
	)

	return { user }
}
