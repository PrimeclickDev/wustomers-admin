import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Role } from 'models/roles-models'
import { toast } from 'react-toastify'

interface RevokePermissionResponse extends ResponseType {
	data: Role
}

export const assignPermissions = async (
	roleId: number,
	permissionId: number
): Promise<AxiosResponse<RevokePermissionResponse>> => {
	return await instance.get(
		`${baseURL}/admin/roles/${roleId}/permission/${permissionId}/revoke`
	)
}

export const useRevokePermission = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			roleId,
			permissionId,
		}: {
			roleId: number
			permissionId: number
		}) => assignPermissions(roleId, permissionId),
		onSuccess: () => {
			// toast.success(data?.message)
			queryClient.invalidateQueries(['roles'])
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['roles'] })
		},
	})
}
