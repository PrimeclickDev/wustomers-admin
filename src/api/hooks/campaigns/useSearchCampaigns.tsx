import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosResponse } from 'axios'
import { AllCampaigns } from 'models/campaigns-models'

export const searchCampaigns = async (search: string): Promise<AxiosResponse<AllCampaigns>> => {
	return await instance.get(`${baseURL}/admin/campaign/search?param=${search}`)
}

export const useSearchCampaigns = (search: string) => {
	return useQuery({
		queryKey: ['campaigns', search],
		queryFn: () => searchCampaigns(search),
		// select: data => data.data.data.user_metrics,
		enabled: !!search,
	})
}
