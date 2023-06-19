import { zodResolver } from '@hookform/resolvers/zod'
import InfoIcon from 'assets/icons/InfoIcon'
import { Select, SelectItem } from 'components/Select'
import { TextInput } from 'components/TextInput'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z
	.object({
		first_name: z
			.string({ required_error: 'First name is required' })
			.min(1, { message: 'First name is required' })
			.trim(),
		last_name: z
			.string({ required_error: 'Last name is required' })
			.min(1, { message: 'Last name name is required' })
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
		role: z
			.string({ required_error: 'Role is required' })
			.min(1, { message: 'Role is required' })
			.trim(),
		password: z
			.string({ required_error: 'Password is required' })
			.min(1, { message: 'Password is required' })
			.min(8, { message: 'Password cannot be less than 8 characters' })
			.trim(),
		confirm_password: z
			.string({ required_error: 'Password confirmation is required' })
			.min(1, { message: 'Password confirmation is required' })
			.min(8, { message: 'Password cannot be less than 8 characters' })
			.trim(),
	})
	.refine(data => data.password === data.confirm_password, {
		message: "Password doesn't match",
		path: ['confirm_password'],
	})

type NewAdminSchema = z.infer<typeof schema>

const roles = ['Super Admin', 'Admin', 'Account Manager', 'Customer Service']

export const NewAdminModal = () => {
	const { register, handleSubmit, control } = useForm<NewAdminSchema>({
		defaultValues: {
			email: '',
			password: '',
			role: '',
			first_name: '',
			last_name: '',
			phone: '',
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
					name='first_name'
					register={register}
					type='text'
				/>
				<TextInput
					label='Last name'
					control={control}
					name='last_name'
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
					name='phone'
					register={register}
					type='text'
					inputMode='tel'
				/>
				<Controller
					name='role'
					control={control}
					render={({
						field: { onChange, value },
						fieldState: { error },
					}) => (
						<div>
							<div>
								<label htmlFor='role' className=''>
									Role
								</label>
								<Select
									placeholder='Select a role...'
									onChange={onChange}
									className={`w-full border-2 mt-1 rounded-md h-[49px] pl-4 ${
										error
											? 'border-red-600 !bg-red-50'
											: 'border-wustomers-primary-light !bg-wustomers-primary'
									}`}
									value={value}>
									{roles?.map((option, index) => (
										<SelectItem
											value={option.toLowerCase()}
											key={index}
											className='py-4 !capitalize'>
											{option}
										</SelectItem>
									))}
								</Select>
							</div>

							{error ? (
								<p className='flex items-center gap-2 text-xs text-red-600 font-medium pt-1'>
									<InfoIcon />
									<span>{error.message}</span>
								</p>
							) : null}
						</div>
					)}
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

				<TextInput
					control={control}
					name='confirm_password'
					register={register}
					type='password'
					label='Confrim password'
				/>
			</div>

			<button
				type='submit'
				className='flex w-full mt-4 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
				Save
			</button>
		</form>
	)
}
