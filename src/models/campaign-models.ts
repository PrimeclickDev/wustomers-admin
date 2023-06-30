import { ResponseType } from './auth-models'

export interface Campaigns extends ResponseType {
	data: Campaign
}

export type Campaign = {
	id: number
	impression: number
	conversion: number
	conversion_rate: string
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
	phone: string
	email: string
	is_testimonial: boolean
	contact_option: string
	contact_option_medium: string
	body_heading: string
	body_description: string
	is_button_sticky: boolean
	start_date?: string
	end_date?: string
	location: string
	budget: Budget
	testimonials: Testimonial[]
	social_posts: SocialPost[]
	paused_at: any
	resumed_at: any
	created_at: string
	updated_at: string
	contact_link: string
}

export type Budget = {
	id: number
	amount: number
	duration: number
	status_id: number
	created_at: string
	updated_at: string
}

export type Testimonial = {
	id: number
	campaign_id: number
	comment: string
	name: string
	designation: string
	created_at: string
	updated_at: string
}

export type SocialPost = {
	id: number
	campaign_id: number
	title: string
	posted_date: string
	image_url: string
	post_url: string
	created_at: string
	updated_at: string
}
