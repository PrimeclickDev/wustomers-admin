import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Datum } from 'models/finance-models'

interface Finance extends ResponseType {
	data: Datum[]
}

export const getAllTransactions = async (): Promise<AxiosResponse<Finance>> => {
	return await instance.get(`${baseURL}/admin/transactions`)
}

// this hook is to fetch all transaction to export
export const useFetchAllTransactions = () => {
	return useQuery({
		queryKey: ['all-transactions'],
		queryFn: getAllTransactions,
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data,
	})
}
