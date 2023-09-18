import { ResponseType } from './auth-models'

export interface Campaign extends ResponseType {
	data: Data
}

export interface Data {
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
	location: string
	budget: Budget
	testimonials: Testimonial[]
	social_posts: SocialPost[]
	days_paused: number
	start_date: Date
	end_date: Date
	paused_at: null
	resumed_at: null
	created_at: Date
	updated_at: Date
}

export interface Budget {
	id: number
	amount: number
	duration: number
	status_id: number
	created_at: Date
	updated_at: Date
}

export interface Manager {
	id: null
	last_name: null
	first_name: null
	email: null
}

export type Social = {
	title: string
	image_url: string
	posted_date: string | null
	post_url?: string
}

export interface SocialPost {
	id: number
	campaign_id: number
	title: string
	posted_date: null
	image_url: Social[]
	post_url: string
	created_at: Date
	updated_at: Date
}

export interface Testimonial {
	id: number
	campaign_id: number
	comment: string
	name: string
	designation: string
	created_at: Date
	updated_at: Date
}
