import { useQuery } from '@tanstack/react-query'
import { baseURL, instance } from 'api/requests'
import { AxiosError, AxiosResponse } from 'axios'
import { ResponseType } from 'models/auth-models'

interface TargetAudiences extends ResponseType {
	data: Root
}

export interface Root {
	id: number
	campaign: Campaign
	age_range: AgeRange2[]
	gender: Gender2[]
	campaign_keyword: CampaignKeyword2[]
	audience_interest: AudienceInterest2[]
	created_at: string
	updated_at: string
}

export interface Campaign {
	id: number
	impression: number
	conversion: number
	conversion_rate: number
	campaign_code: string
	amount: number
	user_id: number
	campaign_status: string
	payment_status: string
	title: string
	product_logo: string
	logo_position: string
	header_content: string
	subheading_content: string
	background_image: string
	button_text: string
	upload_option: string
	upload_option_link: string
	office_address: string
	first_name: string
	last_name: string
	phone: string
	email: string
	business_name: string
	manager: Manager
	is_testimonial: boolean
	contact_option: string
	contact_option_medium: string
	body_heading: string
	body_description: string
	is_button_sticky: boolean
	budget: Budget
	testimonials: any[]
	social_posts: SocialPost[]
	campaignFormRequirement: CampaignFormRequirement
	campaign_locations: CampaignLocation[]
	target_audience: TargetAudience
	days_paused: number
	start_date: string
	end_date: string
	paused_at: any
	resumed_at: any
	created_at: string
	updated_at: string
}

export interface Manager {
	id: number
	last_name: string
	first_name: string
	email: string
}

export interface Budget {
	id: number
	amount: number
	duration: number
	status_id: number
	created_at: string
	updated_at: string
}

export interface SocialPost {
	id: number
	campaign_id: number
	title: string
	posted_date: any
	image_url: ImageUrl[]
	post_url: any
	created_at: string
	updated_at: string
}

export interface ImageUrl {
	post_id: number
	image_url: string
	created_at: string
	updated_at: string
}

export interface CampaignFormRequirement {
	id: number
	full_name: boolean
	email: boolean
	phone_number: boolean
	location: boolean
	campaign_id: number
	created_at: string
	updated_at: string
}

export interface CampaignLocation {
	id: number
	campaign_id: number
	country_id: string
	state: string
	created_at: string
	updated_at: string
}

export interface TargetAudience {
	id: number
	age_range: AgeRange[]
	gender: Gender[]
	campaign_keyword: CampaignKeyword[]
	audience_interest: AudienceInterest[]
	created_at: string
	updated_at: string
}

export interface AgeRange {
	age_range: string
}

export interface Gender {
	gender: string
}

export interface CampaignKeyword {
	campaign_keywords: string
}

export interface AudienceInterest {
	audience_interest: string
}

export interface AgeRange2 {
	age_range: string
}

export interface Gender2 {
	gender: string
}

export interface CampaignKeyword2 {
	campaign_keywords: string
}

export interface AudienceInterest2 {
	audience_interest: string
}

export const getCamapign = async (campaignId: string): Promise<AxiosResponse<TargetAudiences>> => {
	return await instance.get(`${baseURL}/admin/target-audience/${campaignId}/campaign`)
}

export const useFetchCampaignAudience = (campaignId: string) => {
	return useQuery({
		queryKey: ['campaign-target-audience', campaignId],
		queryFn: () => getCamapign(campaignId),
		onError: error => {
			if (error instanceof AxiosError) {
				console.error(error.response?.data.message)
			}
		},
		select: data => data.data.data,
	})
}
