import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { Finance } from 'models/finance-models'

export const getAllTransactions = async (
	page: number
): Promise<AxiosResponse<Finance>> => {
	return await instance.get(
		`${baseURL}/admin/transactions/all?page=${page ?? 1}`
	)
}

export const useFetchTransactions = (page: number) => {
	return useQuery({
		queryKey: ['transactions', page],
		queryFn: () => getAllTransactions(page),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.transactions,
	})
}
