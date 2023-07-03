import React from 'react'

export const useUserRole = () => {
	const [role, setRole] = React.useState('')

	React.useEffect(() => {
		const user = localStorage.getItem('wustomers-admin') as string

		if (user) {
			const data = JSON.parse(user)
			setRole(data.role[0].name)
		}
	}, [])

	return { role }
}
