import { Status } from './auth-models'
import { Link, Permission, Pivot } from './roles-models'

export interface Admins {
	success: boolean
	data: Data
	message: string
}

export interface Data {
	current_page: number
	data: Admin[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	links: Link[]
	next_page_url: string
	path: string
	per_page: number
	prev_page_url: string
	to: number
	total: number
}

export interface Admin {
	id: number
	user_type: string
	wustomer_id: string
	last_name: string
	first_name: string
	provider: string
	social_login: boolean
	email: string
	status_id: number
	avatar: string
	created_at: string
	updated_at: string
	roles: Role[]
	status: Status
	phone: string
}

export interface Role {
	id: number
	name: string
	guard_name: string
	created_at: string
	updated_at: string
	pivot: Pivot
	permissions: Permission[]
}
