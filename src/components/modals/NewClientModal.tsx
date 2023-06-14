import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput } from 'components/TextInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	businessName: z
		.string({ required_error: 'Business name is required' })
		.min(1, { message: 'Business name is required' })
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
	password: z
		.string({ required_error: 'Password is required' })
		.min(1, { message: 'Password is required' })
		.min(8, { message: 'Password cannot be less than 8 characters' })
		.trim(),
})

type NewClientSchema = z.infer<typeof schema>

export const NewClientModal = () => {
	const { register, handleSubmit, control } = useForm<NewClientSchema>({
		defaultValues: {
			businessName: '',
			email: '',
			password: '',
			phoneNumber: '',
		},
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<NewClientSchema> = data => {
		console.log('data', data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='pt-3 pb-5 border-b border-[#D5D5D5]'>
				<p className='font-medium'>Welcome Tounfunmi,</p>
				<h3 className='font-black text-2xl'>
					Create account for new client
				</h3>
			</div>

			<div className='space-y-4 mt-4'>
				<TextInput
					label='Business name'
					control={control}
					name='businessName'
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
					name='phoneNumber'
					register={register}
					type='text'
					inputMode='tel'
				/>
				<TextInput
					label='Password'
					control={control}
					name='password'
					register={register}
					type='password'
				/>

				<button
					type='submit'
					className='flex w-full mt-4 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
					Create account
				</button>
			</div>
		</form>
	)
}
