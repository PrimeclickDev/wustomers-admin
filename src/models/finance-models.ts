import { ResponseType } from './auth-models'
import { Links, Meta } from './campaigns-models'
import { Manager } from './users-models'

export interface Finance extends ResponseType {
	data: Data
}

export interface Data {
	transactions: Transactions
}

export interface Transactions {
	data: Datum[]
	links: Links
	meta: Meta
}

export interface Datum {
	id: number
	campaign_id: number | null
	campaign_type: null | string
	payment_status: Status
	reference: string
	amount: number
	service_charge: number
	vat: number
	user: User
	campaign: Campaign | null
	manager: Manager
	created_at: Date
	updated_at: Date
}

export interface Campaign {
	id: number
	campaign_code: string
	type: string
	paid_status: Status
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
	start_date: Date
	end_date: Date
	location_id: number
	budget_id: number
	body_description: string
	paused_at: null
	resumed_at: null
	renewed_at: null
	body_heading: string
	view_count: number
	click_count: number
	created_at: Date
	updated_at: Date
	status: Status
	location: Location
}

export interface Location {
	id: number
	name: string
	status_id: number
	created_at: string
	updated_at: string
	deleted_at: null
}

export interface Status {
	id: number
	name: 'Active' | 'Paid' | 'Unpaid'
}

export interface User {
	id: number
	user_id: number
	phone: string
	business_name: string
	business_email: string
	industry_type_id: number
	no_employee: string
	instagram_url: null | string
	facebook_url: null | string
	twitter_url: null | string
	tik_tok_url: null | string
	created_at: string
	updated_at: string
	deleted_at: null
}
