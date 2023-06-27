import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { UsersMetric } from 'models/users-models'

export const getAllUsers = async (): Promise<AxiosResponse<UsersMetric>> => {
	return await instance.get(`${baseURL}/admin/users/count-metrics`)
}

export const useUserMetrics = () => {
	return useQuery({
		queryKey: ['users-metric'],
		queryFn: getAllUsers,
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.userMetric,
	})
}
