import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

type Payload = {
	name: string
}

export const updateRole = async (id: number, data: Payload) => {
	return await instance.patch(`${baseURL}/admin/roles/${id}/update`, data)
}

export const useUpdateRole = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ data, id }: { data: Payload; id: number }) => updateRole(id, data),
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
