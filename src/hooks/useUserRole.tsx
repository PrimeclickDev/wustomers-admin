export const useUserRole = () => {
	const user = localStorage.getItem('wustomers-admin') as string

	if (user) {
		const data = JSON.parse(user)
		return data.role[0].name
	} else {
		return ''
	}
}
