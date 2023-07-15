import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Role } from 'models/roles-models'
import { Manager } from 'models/users-models'
import { toast } from 'react-toastify'

interface ClientResponse extends ResponseType {
	data: Client
}

export interface Client {
	id: number
	email: string
	status: string
	avatar: string
	created_at: string
	updated_at: string
	manager: Manager
	role: Role[]
}

export const assignManager = async (userId: string, managerId: string): Promise<AxiosResponse<ClientResponse>> => {
	return await instance.get(`${baseURL}/admin/users/${userId}/manager/${managerId}/assigned`)
}

export const useAssignManager = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ userId, managerId }: { userId: string; managerId: string }) => assignManager(userId, managerId),
		onSuccess: ({ data }) => {
			toast.success(data?.message)
			queryClient.invalidateQueries({ queryKey: ['users'] })
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
	})
}
