import { zodResolver } from '@hookform/resolvers/zod'
import { Modal } from 'components/Modal'
import Plus from 'components/Plus'
import { RolesPermissionsTable } from 'components/RolesPermissionsTable'
import { TextInput } from 'components/TextInput'
import { usePageTitle } from 'hooks/usePageTitle'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

const schema = z.object({
	title: z
		.string({ required_error: 'Role title is required' })
		.min(1, { message: 'Role title is required' })
		.trim(),
})

type NewRoleValues = z.infer<typeof schema>

export const RolesPermissions = () => {
	usePageTitle('Roles & Permissions')
	const [open, setOpen] = React.useState(false)
	const { register, handleSubmit, control } = useForm<NewRoleValues>({
		defaultValues: {
			title: '',
		},
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<NewRoleValues> = data => {
		console.log('data', data)
	}

	return (
		<>
			<div className='max-w-7xl mx-auto py-5 px-3'>
				<header className='flex flex-wrap items-center gap-3 md:gap-6 pt-4'>
					<h2 className='font-black text-3xl'>Roles/Permissions</h2>
					<Link
						to='/admin-access'
						className='py-1.5 px-5 hover:bg-opacity-90 text-sm bg-wustomers-blue text-white inline-block rounded-md'>
						Admin access
					</Link>
				</header>

				<button
					type='button'
					onClick={() => setOpen(true)}
					className='bg-wustomers-blue hover:bg-opacity-80 transition-all duration-300 text-white py-2 px-4 flex items-center gap-1 rounded-lg ml-auto mt-8'>
					<Plus />
					<span>Add new role</span>
				</button>

				<RolesPermissionsTable />
			</div>

			<Modal open={open} setOpen={setOpen}>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<h4 className='font-medium text-xl'>Add new role</h4>

					<TextInput
						label='Role title'
						control={control}
						name='title'
						register={register}
						type='text'
					/>

					<button
						type='submit'
						className='flex w-full mt-4 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
						Save
					</button>
				</form>
			</Modal>
		</>
	)
}
