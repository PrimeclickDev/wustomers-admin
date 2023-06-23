export const useUserRole = () => {
	const user = JSON.parse(localStorage.getItem('wustomers-admin') || '{}')
	const role = user?.role[0]?.name

	return { role }
}
