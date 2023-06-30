import { useMutation } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { toast } from 'react-toastify'

interface Response extends ResponseType {
	data: Data
}

interface Data {
	data: string[]
}

export const reactivateUser = async (
	id: string
): Promise<AxiosResponse<Response>> => {
	return await instance.patch(`${baseURL}/admin/users/${id}/reactivate`)
}

export const useReactivateUser = () => {
	return useMutation({
		mutationFn: (id: string) => reactivateUser(id),
		onSuccess: ({ data }) => {
			toast.success(data?.message)
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
	})
}
