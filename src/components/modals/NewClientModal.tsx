import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateClient } from 'api/hooks/users/useCreateClient'
import { AxiosError } from 'axios'
import { Spinner } from 'components/Spinner'
import { TextInput } from 'components/TextInput'
import { nanoid } from 'nanoid'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	business_name: z
		.string({ required_error: 'Business name is required' })
		.min(1, { message: 'Business name is required' })
		.trim(),
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email address is required' })
		.email({ message: 'Please enter a valid email address' })
		.trim(),
	phone: z
		.string({ required_error: 'Phone number is required' })
		.min(1, { message: 'Phone number is required' })
		.trim(),
	password: z
		.string({ required_error: 'Password is required' })
		.min(1, { message: 'Password is required' })
		.min(8, { message: 'Password cannot be less than 8 characters' })
		.trim(),
})

type NewClientSchema = z.infer<typeof schema>

type NewClientModalProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewClientModal = ({ setOpen }: NewClientModalProps) => {
	const createClient = useCreateClient()
	const { register, handleSubmit, control, setValue, setError } =
		useForm<NewClientSchema>({
			defaultValues: {
				business_name: '',
				email: '',
				password: '',
				phone: '',
			},
			resolver: zodResolver(schema),
		})

	const onSubmit: SubmitHandler<NewClientSchema> = data => {
		createClient.mutate(data, {
			onSuccess: () => setOpen(false),
			onError: error => {
				if (error instanceof AxiosError) {
					Object.entries(error.response?.data.errors).map(val =>
						// @ts-expect-error FIXME: type object.entries
						setError(val[0], { message: val[1][0] })
					)
				}
			},
		})
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			autoComplete='off'
			autoSave='off'>
			<div className='pt-3 pb-5 border-b border-[#D5D5D5]'>
				<h3 className='font-black text-2xl'>
					Create account for new client
				</h3>
			</div>

			<div className='space-y-4 mt-4'>
				<TextInput
					label='Business name'
					control={control}
					name='business_name'
					register={register}
					type='text'
				/>
				<TextInput
					label='Email address'
					control={control}
					name='email'
					register={register}
					type='email'
					inputMode='email'
				/>
				<TextInput
					label='Phone no.'
					control={control}
					name='phone'
					register={register}
					type='text'
					inputMode='tel'
				/>
				<div>
					<TextInput
						label='Password'
						control={control}
						name='password'
						register={register}
						type='password'
					/>
					<button
						type='button'
						onClick={() => {
							const password = nanoid()
							setValue('password', password)
						}}
						className='text-wustomers-blue text-xs underline font-medium hover:opacity-90 transition-opacity active:scale-[0.98]'>
						Generate password
					</button>
				</div>
			</div>
			<button
				disabled={createClient.isLoading}
				type='submit'
				className='flex w-full mt-6 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
				{createClient.isLoading ? <Spinner /> : 'Create account'}
			</button>
		</form>
	)
}
