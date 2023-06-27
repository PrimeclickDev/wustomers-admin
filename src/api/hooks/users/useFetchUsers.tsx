import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { Users } from 'models/users-models'

export const getAllUsers = async (page = 1): Promise<AxiosResponse<Users>> => {
	return await instance.get(
		`${baseURL}/admin/users/activities-metrics?page=${page}`
	)
}

export const useFetchUsers = (page: number) => {
	return useQuery({
		queryKey: ['users', page],
		queryFn: () => getAllUsers(page),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.user_metrics,
	})
}
