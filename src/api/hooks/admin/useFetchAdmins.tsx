import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { Admins } from 'models/admins-models'

export const getAdmins = async (): Promise<AxiosResponse<Admins>> => {
	return await instance.get(`${baseURL}/admin`)
}

export const useFetchAdmins = () => {
	return useQuery({
		queryKey: ['admins'],
		queryFn: getAdmins,
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data,
	})
}
