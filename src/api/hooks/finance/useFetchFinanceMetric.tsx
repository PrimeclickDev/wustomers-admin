import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Transactions } from 'models/finance-models'

interface FinanceMetric extends ResponseType {
	data: Data
}

export interface Data {
	transactions: Transactions
	transactionMetric: TransactionMetric
}

export interface TransactionMetric {
	total_amount_successful: number
	total_amount_pending: number
	all_time_amount: number
	total_successful: number
	total_pending: number
	total_agency_commission: number
	total_account_manager_commission: number
}

export const getFinanceMetric = async (filterBy: string): Promise<AxiosResponse<FinanceMetric>> => {
	return await instance.get(`${baseURL}/admin/transactions/card/report/${filterBy}`)
}

export const useFetchFinanceMetric = (filterBy: string) => {
	return useQuery({
		queryKey: ['finance-metrics', filterBy],
		queryFn: () => getFinanceMetric(filterBy),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.transactionMetric,
	})
}
