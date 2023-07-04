import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosResponse } from 'axios'
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
		onMutate: async () => {
			// Cancel any outgoing refetches
			await queryClient.cancelQueries({ queryKey: ['roles'] })

			// Snapshot the previous value
			const previousRolePermission = queryClient.getQueryData(['roles'])

			// Optimistically update to the new value
			queryClient.setQueryData(['roles'], (old: any) => [
				...old,
				previousRolePermission,
			])

			// Return a context object with the snapshotted value
			return { previousRolePermission }
		},
		onSuccess: ({ data }) => {
			toast.success(data?.message)
		},
		onError: (_err, _payload, context) => {
			queryClient.setQueryData(['roles'], context?.previousRolePermission)
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['roles'] })
		},
	})
}
