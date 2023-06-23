import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { AllRoles } from 'models/roles-models'

export const getAllRoles = async (): Promise<AxiosResponse<AllRoles>> => {
	return await instance.get(`${baseURL}/admin/roles`)
}

export const useFetchRoles = () => {
	return useQuery({
		queryKey: ['roles'],
		queryFn: () => getAllRoles(),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.roles,
	})
}
