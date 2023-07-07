import { useQuery } from '@tanstack/react-query'
import { baseURL } from 'api/requests'
import axios, { AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'

export interface Budgets extends ResponseType {
	data: Data[]
}

export interface Data {
	id: number
	amount: number
	duration: string
	status: string
	created_at: string
	updated_at: string
}

export const getBudgets = async (): Promise<AxiosResponse<Budgets>> => {
	return await axios.get(`${baseURL}/budgets`)
}

export const useFetchBudgets = () => {
	return useQuery({
		queryKey: ['budgets'],
		queryFn: getBudgets,
		staleTime: Infinity,
		cacheTime: Infinity,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		select: data => data.data.data,
	})
}
