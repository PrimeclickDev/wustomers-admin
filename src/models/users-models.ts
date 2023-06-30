import { ResponseType } from './auth-models'
import { Links, Meta, Role } from './roles-models'

export interface Users extends ResponseType {
	data: Data
}

export interface Data {
	user_metrics: UserMetrics
}

export interface UserMetrics {
	data: User[]
	links: Links
	meta: Meta
}

export interface User {
	id: number
	wustomer_id: string
	last_name?: string
	first_name?: string
	email: string
	status: string
	avatar?: string
	user_type: string
	createdBy: string
	created_at: Date
	updated_at: Date
	profile: Profile
	manager: Manager
	role: Role[]
	campaigns: Campaign[]
	transaction: Transaction[]
}

export interface Profile {
	id: number
	user_id: number
	phone?: string
	business_name?: string
	business_email?: string
	industry_type_id?: number
	no_employee?: string
	instagram_url?: string
	facebook_url?: string
	twitter_url?: string
	tik_tok_url?: string
	created_at: string
	updated_at: string
	deleted_at: string
}

export interface Manager {
	first_name: string
	last_name: string
	email: string
	phone: string
}

export interface Campaign {
	id: number
	campaign_code: string
	type: string
	paid_status: number
	user_id: number
	status_id: number
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
	contact_option_link: string
	is_button_sticky: boolean
	start_date?: string
	end_date?: string
	location_id?: number
	budget_id?: number
	body_description?: string
	paused_at: string
	resumed_at: string
	renewed_at: string
	body_heading: string
	view_count: number
	click_count: number
	created_at: string
	updated_at: string
	status: Status
}

export interface Status {
	id: number
	name: string
}

export interface Transaction {
	id: number
	user_id: number
	campaign_id?: number
	campaign_type?: string
	status_id: number
	reference: string
	amount: number
	created_at: Date
	updated_at: Date
	deleted_at: string
	service_charge?: number
	vat?: number
	status: Status2
}

export interface Status2 {
	id: number
	name: string
}

/*** ***/
export interface UsersMetric extends ResponseType {
	data: Metric
}
export interface Metric {
	userMetric: UserMetric
}

export interface UserMetric {
	total_active: number
	total_inactive: number
	total_user: number
}
