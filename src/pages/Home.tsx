import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from 'api/hooks/auth/useLogin'
import WustomersLogo from 'assets/WustomersLogo'
import BgDesignBottom from 'assets/icons/BgDesignBottom'
import BgDesignTop from 'assets/icons/BgDesignTop'
import { Spinner } from 'components/Spinner'
import { TextInput } from 'components/TextInput'
import { usePageTitle } from 'hooks/usePageTitle'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { getAccessToken } from 'utils/storage'
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

export type LoginSchema = z.infer<typeof schema>

export const Home = () => {
	usePageTitle('Home')
	const navigate = useNavigate()
	const { register, handleSubmit, setError, control } = useForm<LoginSchema>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(schema),
	})
	const loginAdmin = useLogin()
	const token = getAccessToken()

	const onSubmit: SubmitHandler<LoginSchema> = data => {
		loginAdmin.mutate(data, {
			onSuccess: () => navigate('/campaigns'),
			onError: error => {
				setError('email', {
					message: error.response?.data.errors.email[0],
				})
				setError('password', {
					message: error.response?.data.errors.email[0],
				})
			},
		})
	}

	if (token) {
		return <Navigate to='/campaigns' replace />
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
							disabled={loginAdmin.isLoading}
							className='flex items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 disabled:hover:shadow-none lg:hover:shadow-xl lg:hover:shadow-wustomers-blue/20 rounded'>
							{loginAdmin.isLoading ? <Spinner /> : 'Login'}
						</button>
					</div>
				</form>
			</div>
		</main>
	)
}
