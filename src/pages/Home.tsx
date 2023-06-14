import { zodResolver } from '@hookform/resolvers/zod'
import WustomersLogo from 'assets/WustomersLogo'
import BgDesignBottom from 'assets/icons/BgDesignBottom'
import BgDesignTop from 'assets/icons/BgDesignTop'
import { TextInput } from 'components/TextInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email address is required' })
		.email({ message: 'Please enter a valid email address' })
		.trim(),
	password: z
		.string({ required_error: 'Password is required' })
		.min(1, { message: 'Password is required' })
		.trim(),
})

type LoginFormValues = z.infer<typeof schema>

export const Home = () => {
	const { register, handleSubmit, control } = useForm<LoginFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<LoginFormValues> = data => {
		console.log('data', data)
	}

	return (
		<main
			className='min-h-screen relative flex flex-col justify-center items-center'
			style={{
				backgroundImage:
					'linear-gradient(125.5deg, #3955D3 2.5%, #072AC8 100.07%)',
			}}>
			<BgDesignTop className='absolute top-0 right-0' />
			<BgDesignBottom className='absolute bottom-0 left-0' />
			<div className='grid place-items-center'>
				<h1>
					<WustomersLogo className='w-[200px] md:w-full relative z-50' />
				</h1>

				<form
					className='bg-white py-10 px-5 rounded-2xl md:px-8 w-[320px] md:w-[28rem] mt-10 md:mt-24 drop-shadow-2xl'
					onSubmit={handleSubmit(onSubmit)}>
					<h2 className='text-center font-bold text-2xl'>
						Admin Login
					</h2>

					<div className='pt-8 flex flex-col gap-6'>
						<TextInput
							label='Email'
							control={control}
							name='email'
							register={register}
							type='email'
						/>
						<TextInput
							control={control}
							name='password'
							register={register}
							type='password'
							label='Password'
						/>

						<button
							type='submit'
							className='flex items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 disabled:hover:shadow-none lg:hover:shadow-xl lg:hover:shadow-wustomers-blue/20 rounded'>
							Log in
						</button>
					</div>
				</form>
			</div>
		</main>
	)
}
