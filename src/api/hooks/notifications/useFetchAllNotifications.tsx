import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'

export interface Notifications extends ResponseType {
	data: Notification[]
}

export interface Notification {
	id: string
	type: string
	data: Data
	read_at: any
	created_at: string
	updated_at: string
}

export interface Data {
	message?: string
	data?: string
	user?: string
	title?: string
}

export const getAllNotifications = async (): Promise<AxiosResponse<Notifications>> => {
	return await instance.get(`${baseURL}/admin/notification`)
}

export const useFetchAllNotifications = () => {
	return useQuery({
		queryKey: ['notifications'],
		queryFn: getAllNotifications,
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data,
	})
}
