import WustomersLogo from 'assets/WustomersLogo'
import BgDesignBottom from 'assets/icons/BgDesignBottom'
import BgDesignTop from 'assets/icons/BgDesignTop'
import InfoIcon from 'assets/icons/InfoIcon'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormValues = {
	email: string
	password: string
}

export const Home = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<FormValues> = data => {
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
					className='bg-white py-10 px-5 md:px-8 w-[320px] md:w-[28rem] mt-10 md:mt-24 drop-shadow-2xl'
					onSubmit={handleSubmit(onSubmit)}>
					<h2 className='text-center font-bold text-2xl'>
						Admin Login
					</h2>

					<div className='pt-8 flex flex-col gap-6'>
						<div className='flex flex-col gap-1'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								className={`appearance-none w-full rounded-sm px-4 py-2.5 ring-[1.5px] ${
									errors.email
										? 'ring-red-600 bg-red-50'
										: 'ring-wustomers-primary-light bg-wustomers-primary'
								}`}
								{...register('email', {
									required: true,
								})}
							/>
							{errors.email?.type === 'required' ? (
								<p className='flex items-center gap-2 text-xs px-1 pt-1 text-red-600 font-medium'>
									<InfoIcon />
									<span>Email address is required</span>
								</p>
							) : null}
						</div>
						<div className='flex flex-col gap-1'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								className={`appearance-none w-full rounded-sm px-4 py-2.5 ring-[1.5px] ${
									errors.password
										? 'ring-red-600 bg-red-50'
										: 'ring-wustomers-primary-light bg-wustomers-primary'
								}`}
								{...register('password', {
									required: true,
								})}
							/>
							{errors.password?.type === 'required' ? (
								<p className='flex items-center gap-2 text-xs px-1 pt-1 text-red-600 font-medium'>
									<InfoIcon />
									<span>Password is required</span>
								</p>
							) : null}
						</div>

						<button
							type='submit'
							className='flex items-center justify-center rounded-sm px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 disabled:hover:shadow-none lg:hover:shadow-xl lg:hover:shadow-wustomers-blue/20'>
							Log in
						</button>
					</div>
				</form>
			</div>
		</main>
	)
}
