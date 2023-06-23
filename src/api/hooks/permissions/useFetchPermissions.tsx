import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Permissions } from 'models/roles-models'

interface PermissionsResponse extends ResponseType {
	data: Permissions
}

export const getAllPermissions = async (): Promise<
	AxiosResponse<PermissionsResponse>
> => {
	return await instance.get(`${baseURL}/admin/permissions`)
}

export const useFetchPermissions = () => {
	return useQuery({
		queryKey: ['permissions'],
		queryFn: () => getAllPermissions(),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.permissions,
	})
}
