import { Role } from './roles-models'

export type ResponseType = {
	success: boolean
	message: string
}

export interface ErrorResponse extends ResponseType {
	errors: Errors
}

export type Errors = {
	email: string[]
	otp: string[]
	passwordReset: string[]
	avatar: string[]
}
export interface AuthResponse extends ResponseType {
	data: User
}

export interface LoginResponse extends ResponseType {
	data: AuthData
}

export type AuthData = {
	user: User
	access_token: string
}

export type User = {
	id: number
	email: string
	status: Status
	created_at: Date
	updated_at: Date
	role: Role[]
}

export type Status = {
	id: number
	name: string
}
