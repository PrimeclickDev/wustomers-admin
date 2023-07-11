import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'
import { Campaign, Status, User } from 'models/finance-models'
import { Manager } from 'models/users-models'

export interface Main extends ResponseType {
	data: Data
}

export interface Data {
	transactions: Transactions
}

export interface Transactions {
	data: Datum[]
}

export interface Datum {
	id: number
	campaign_id: number | null
	campaign_type: null | string
	payment_status: Status
	reference: string
	amount: number
	service_charge: number
	vat: number
	user: User
	campaign: Campaign | null
	manager: Manager
	created_at: Date
	updated_at: Date
}

export const getFinanceChart = async (status: string): Promise<AxiosResponse<Main>> => {
	return await instance.get(`${baseURL}/admin/transactions/chart/report/${status}/yearly`)
}

export const useFetchFinanceChartData = (status: string) => {
	return useQuery({
		queryKey: ['finance-chart', status],
		queryFn: () => getFinanceChart(status),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.transactions.data,
	})
}
