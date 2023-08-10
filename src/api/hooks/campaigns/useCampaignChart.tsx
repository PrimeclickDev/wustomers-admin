import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'

interface CampaignChart extends ResponseType {
	data: Report
}

interface Report {
	report: any[]
}

export const getCamapign = async (duration: string): Promise<AxiosResponse<CampaignChart>> => {
	return await instance.get(`${baseURL}/admin/transactions/campaign/chart-report/${duration}`)
}

export const useCampaignChart = (duration: string) => {
	return useQuery({
		queryKey: ['campaign-chart', duration],
		queryFn: () => getCamapign(duration),
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.report,
	})
}
