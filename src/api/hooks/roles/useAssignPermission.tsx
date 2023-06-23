import { useMutation } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Role } from 'models/roles-models'
import { toast } from 'react-toastify'

type Permissions = {
	permissions: number[]
}

interface AssignPermissionResponse extends ResponseType {
	data: Role
}

export const assignPermissions = async (
	data: Permissions,
	id: number
): Promise<AxiosResponse<AssignPermissionResponse>> => {
	return await instance.patch(
		`${baseURL}/admin/roles/${id}/assign-permissions`,
		data
	)
}

export const useAssignPermission = () => {
	return useMutation({
		mutationFn: ({ data, id }: { data: Permissions; id: number }) =>
			assignPermissions(data, id),
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
