import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ErrorResponse } from 'models/auth-models'
import { Notifications } from './useFetchAllNotifications'

export const readNotification = async (id: string): Promise<AxiosResponse<Notifications>> => {
	return await instance.get(`${baseURL}/admin/notification/read/${id}`)
}

export const useReadNotification = () => {
	const queryClient = useQueryClient()

	return useMutation<AxiosResponse<Notifications>, AxiosError<ErrorResponse>, string>({
		mutationFn: id => readNotification(id),
		onSuccess: () => {
			queryClient.invalidateQueries(['notifications'])
		},
	})
}
