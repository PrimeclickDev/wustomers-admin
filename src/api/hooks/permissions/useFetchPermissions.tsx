import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Permissions } from 'models/roles-models'

interface PermissionsResponse extends ResponseType {
	data: Permissions
}

export const getAllPermissions = async (
	page = 1
): Promise<AxiosResponse<PermissionsResponse>> => {
	return await instance.get(`${baseURL}/admin/permissions?page=${page}`)
}

export const useFetchPermissions = (page: number) => {
	return useQuery({
		queryKey: ['permissions', page],
		queryFn: () => getAllPermissions(page),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.permissions,
	})
}
