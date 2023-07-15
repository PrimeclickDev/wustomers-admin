import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const deleteRole = async (id: number) => {
	return await instance.delete(`${baseURL}/admin/roles/${id}/delete`)
}

export const useDeleteRole = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: number) => deleteRole(id),
		onSuccess: ({ data }) => {
			toast.success(data?.message)
			queryClient.invalidateQueries({ queryKey: ['roles'] })
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
	})
}
