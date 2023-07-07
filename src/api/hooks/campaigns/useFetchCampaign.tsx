import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { Campaign } from 'models/campaign-models'

export const getCamapign = async (
	campaignId: string
): Promise<AxiosResponse<Campaign>> => {
	return await instance.get(
		`${baseURL}/admin/campaigns/${campaignId}/campaign`
	)
}

export const useFetchCampaign = (campaignId: string) => {
	return useQuery({
		queryKey: ['campaign', campaignId],
		queryFn: () => getCamapign(campaignId),
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data,
	})
}
