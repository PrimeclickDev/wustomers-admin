import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { CampaignMetrics } from 'models/campaigns-models'

export const getCampaignMetrics = async (): Promise<
	AxiosResponse<CampaignMetrics>
> => {
	return await instance.get(`${baseURL}/admin/campaigns/metric/report`)
}

export const useFetchCampaignMetrics = () => {
	return useQuery({
		queryKey: ['users-metric'],
		queryFn: getCampaignMetrics,
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.metrics,
	})
}
