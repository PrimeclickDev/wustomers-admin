import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { UsersMetric } from 'models/users-models'

export const getAllUsers = async (
	filterBy: string
): Promise<AxiosResponse<UsersMetric>> => {
	return await instance.get(`${baseURL}/admin/users/card-filter/${filterBy}`)
}

export const useUserMetrics = (filterBy: string) => {
	return useQuery({
		queryKey: ['users-metric', filterBy],
		queryFn: () => getAllUsers(filterBy),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.userMetric,
	})
}
