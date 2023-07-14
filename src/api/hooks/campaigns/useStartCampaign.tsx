import { useMutation, useQueryClient } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const startCampaign = async (campaignId: string) => {
	return await instance.get(`${baseURL}/admin/campaigns/${campaignId}/start`)
}

export const useStartcampaign = (campaignId: string) => {
	const queryClient = useQueryClient()
	const navigate = useNavigate()

	return useMutation({
		mutationFn: () => startCampaign(campaignId),
		onSuccess: ({ data }) => {
			toast.success(data?.message)
			queryClient.invalidateQueries(['campaigns'])
			navigate('/campaigns')
		},
		onError: error => {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message)
				console.error(error)
			}
		},
	})
}
