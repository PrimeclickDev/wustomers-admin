import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput } from 'components/TextInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	firstName: z
		.string({ required_error: 'First name is required' })
		.min(1, { message: 'First name is required' })
		.trim(),
	lastName: z
		.string({ required_error: 'Last name is required' })
		.min(1, { message: 'Last name name is required' })
		.trim(),
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email address is required' })
		.email({ message: 'Please enter a valid email address' })
		.trim(),
	phoneNumber: z
		.string({ required_error: 'Phone number is required' })
		.min(1, { message: 'Phone number is required' })
		.trim(),
	role: z
		.string({ required_error: 'Role is required' })
		.min(1, { message: 'Role is required' })
		.trim(),
	password: z
		.string({ required_error: 'Password is required' })
		.min(1, { message: 'Password is required' })
		.min(8, { message: 'Password cannot be less than 8 characters' })
		.trim(),
})

type NewAdminSchema = z.infer<typeof schema>

export const NewAdminModal = () => {
	const { register, handleSubmit, control } = useForm<NewAdminSchema>({
		defaultValues: {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			phoneNumber: '',
			role: '',
		},
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<NewAdminSchema> = data => {
		console.log('data', data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='self-center'>
			<h4 className='font-medium text-xl'>Add new admin</h4>

			<div className='space-y-4 mt-4'>
				<TextInput
					label='First name'
					control={control}
					name='firstName'
					register={register}
					type='text'
				/>
				<TextInput
					label='Last name'
					control={control}
					name='lastName'
					register={register}
					type='text'
				/>
				<TextInput
					label='Email'
					control={control}
					name='email'
					register={register}
					type='email'
					inputMode='email'
				/>
				<TextInput
					label='Phone number'
					control={control}
					name='phoneNumber'
					register={register}
					type='text'
					inputMode='tel'
				/>
				<TextInput
					label='Role'
					control={control}
					name='role'
					register={register}
					type='text'
				/>
				<div>
					<TextInput
						control={control}
						name='password'
						register={register}
						type='password'
						label='Password'
					/>

					<button
						type='button'
						className='text-wustomers-blue text-xs underline font-medium'>
						Generate password
					</button>
				</div>
			</div>

			<button
				type='submit'
				className='flex w-full mt-4 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
				Save
			</button>
		</form>
	)
}
