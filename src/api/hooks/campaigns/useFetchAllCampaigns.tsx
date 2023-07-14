import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { AllCampaigns } from 'models/campaigns-models'

export const getAllCampaigns = async (status: string, page: number): Promise<AxiosResponse<AllCampaigns>> => {
	return await instance.get(`${baseURL}/admin/campaigns/${status}?page=${page ?? 1}`)
}

export const useFetchAllCampaigns = ({ status, page }: { status: string; page: number }) => {
	return useQuery({
		queryKey: ['campaigns', status, page],
		queryFn: () => getAllCampaigns(status, page),
		keepPreviousData: true,
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data.campaigns,
	})
}
