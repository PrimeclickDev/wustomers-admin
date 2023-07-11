import { ResponseType } from './auth-models'

export interface AllCampaigns extends ResponseType {
	data: Data
}

export interface Data {
	campaigns: Campaigns
}

export interface Campaigns {
	data: Datum[]
	links: Links
	meta: Meta
}

export interface Datum {
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
	body_description: null | string
	is_button_sticky: boolean
	location: null | string
	budget: Budget | null
	testimonials: Testimonial[]
	social_posts: SocialPost[]
	days_paused: number
	start_date?: string
	end_date?: string
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

export interface SocialPost {
	id: number
	campaign_id: number
	title: string
	posted_date: Date | null
	image_url: string
	post_url: null | string
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

export interface Links {
	first: string
	last: string
	prev: null
	next: null
}

export interface Meta {
	current_page: number
	from: number
	last_page: number
	links: Link[]
	path: string
	per_page: number
	to: number
	total: number
}

export interface Link {
	url: null | string
	label: string
	active: boolean
}

export interface CampaignMetrics extends ResponseType {
	data: Metric
}

export interface Metric {
	metrics: Metrics
}

export interface Metrics {
	total_campaigns: number
	active_campaigns: number
	inactive_campaigns: number
	completed_campaigns: number
	paused_campaigns: number
	live_campaigns: number
}
