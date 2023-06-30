import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const deleteUser = async (id: number) => {
	return await instance.delete(`${baseURL}/admin/users/${id}/delete`)
}

export const useDeleteUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: number) => deleteUser(id),
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
