import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Role } from 'models/roles-models'
import { Manager } from 'models/users-models'
import { toast } from 'react-toastify'

type Payload = {
	business_name: string
	phone: string
	email: string
	password: string
}

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

export const createClient = async (data: Payload): Promise<AxiosResponse<ClientResponse>> => {
	return await instance.post(`${baseURL}/admin/users/register`, data)
}

export const useCreateClient = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: Payload) => createClient(data),
		onSuccess: ({ data }) => {
			toast.success(data?.message)
			queryClient.invalidateQueries({ queryKey: ['users', 1] })
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
	})
}
