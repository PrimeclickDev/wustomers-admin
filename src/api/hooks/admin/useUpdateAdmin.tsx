import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType, User } from 'models/auth-models'
import { toast } from 'react-toastify'

type Payload = {
	first_name: string
	last_name: string
	role: string
}

interface CreateAdminResponse extends ResponseType {
	data: User
}

export const updateAdmin = async (
	id: number,
	data: Payload
): Promise<AxiosResponse<CreateAdminResponse>> => {
	return await instance.patch(`${baseURL}/admin/${id}/update`, data)
}

export const useUpdateAdmin = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ data, id }: { data: Payload; id: number }) =>
			updateAdmin(id, data),
		onSuccess: ({ data }) => {
			toast.success(data?.message)
			queryClient.invalidateQueries(['admins'])
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
	})
}
