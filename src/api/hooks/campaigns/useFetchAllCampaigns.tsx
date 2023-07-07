import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { AllCampaigns } from 'models/campaigns-models'

export const getAllCampaigns = async (
	page: number
): Promise<AxiosResponse<AllCampaigns>> => {
	return await instance.get(
		`${baseURL}/admin/campaigns/all?page=${page ?? 1}`
	)
}

export const useFetchAllCampaigns = (page: number) => {
	return useQuery({
		queryKey: ['campaigns', page],
		queryFn: () => getAllCampaigns(page),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.campaigns,
	})
}
