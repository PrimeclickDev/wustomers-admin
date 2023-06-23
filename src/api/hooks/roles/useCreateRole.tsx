import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Role } from 'models/roles-models'
import { toast } from 'react-toastify'

type Payload = {
	permissions: number[]
	name: string
}

interface CreateRoleResponse extends ResponseType {
	data: Role
}

export const createRole = async (
	data: Payload
): Promise<AxiosResponse<CreateRoleResponse>> => {
	return await instance.post(`${baseURL}/admin/roles/create`, data)
}

export const useCreateRole = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: Payload) => createRole(data),
		onSuccess: ({ data }) => {
			toast.success(data?.message)
			queryClient.invalidateQueries(['roles'])
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
	})
}
