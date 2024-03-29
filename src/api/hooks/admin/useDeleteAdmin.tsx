import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const deleteAdmin = async (id: string) => {
	return await instance.delete(`${baseURL}/admin/${id}/delete`)
}

export const useDeleteAdmin = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: string) => deleteAdmin(id),
		onSuccess: ({ data }) => {
			toast.success(data?.message)
			queryClient.invalidateQueries({ queryKey: ['admins'] })
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
	})
}
