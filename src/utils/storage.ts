import Cookies from 'js-cookie'

export const setAccessToken = (token: string) =>
	Cookies.set('wustomers-admin', token)
export const getAccessToken = () => Cookies.get('wustomers-admin')
export const removeAccessToken = () => Cookies.remove('wustomers-admin')
