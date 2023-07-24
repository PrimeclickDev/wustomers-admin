import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosResponse } from 'axios'
import { Users } from 'models/users-models'

export const searchUsers = async (search: string): Promise<AxiosResponse<Users>> => {
	return await instance.get(`${baseURL}/admin/user/search?param=${search}`)
}

export const useSearchUsers = (search: string) => {
	return useQuery({
		queryKey: ['users', search],
		queryFn: () => searchUsers(search),
		// select: data => data.data.data.user_metrics,
		enabled: !!search,
	})
}
