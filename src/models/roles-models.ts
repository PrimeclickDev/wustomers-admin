import { ResponseType } from './auth-models'

export interface AllRoles extends ResponseType {
	data: Data
}

export interface Data {
	roles: Roles
}

export interface Roles {
	data: Role[]
	links: Links
	meta: Meta
}

export interface Role {
	id: number
	name: string
	guard: string
	permissions: Permission[]
	created_at: Date
	updated_at: Date
}

export interface Permissions {
	permissions: {
		data: Permission[]
	}
}

export interface Permission {
	id: number
	name: string
	guard_name: string
	created_at: Date
	updated_at: Date
	pivot: Pivot
}

export interface Pivot {
	role_id: number
	permission_id: number
}

export interface Links {
	first: string
	last: string
	prev: string
	next: string
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
	url?: string
	label: string
	active: boolean
}
