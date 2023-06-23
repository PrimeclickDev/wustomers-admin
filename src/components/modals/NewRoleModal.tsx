import { zodResolver } from '@hookform/resolvers/zod'
import { useFetchPermissions } from 'api/hooks/permissions/useFetchPermissions'
import { useCreateRole } from 'api/hooks/roles/useCreateRole'
import InfoIcon from 'assets/icons/InfoIcon'
import { Spinner } from 'components/Spinner'
import { TextInput } from 'components/TextInput'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type NewRoleModalProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const schema = z.object({
	name: z
		.string({ required_error: 'Role title is required' })
		.min(1, 'Role title is required')
		.trim(),
	permissions: z
		.array(z.string())
		.min(1, 'Role must have at least one permission')
		.transform(val => val.map(item => parseInt(item, 10))),
})

type NewRoleValues = z.infer<typeof schema>

export const NewRoleModal = ({ setOpen }: NewRoleModalProps) => {
	const { data: permissions, isLoading } = useFetchPermissions()
	const createRole = useCreateRole()

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<NewRoleValues>({
		defaultValues: {
			name: '',
			permissions: [],
		},
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<NewRoleValues> = data => {
		createRole.mutate(data, {
			onSuccess: () => setOpen(false),
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
			<h4 className='font-medium text-xl'>Add new role</h4>

			{isLoading ? (
				<Spinner />
			) : (
				<>
					<TextInput
						label='Role title'
						control={control}
						name='name'
						register={register}
						type='text'
					/>

					<div>
						<ul className='bg-[#F4F4F4] p-4 rounded-md mt-10 space-y-5'>
							<li className='flex items-center justify-between gap-2 font-medium'>
								<p>Permissions</p>
								<p>Access</p>
							</li>

							{permissions?.data?.map(permission => (
								<li
									className='flex items-center justify-between gap-2 text-sm'
									key={permission.id}>
									<p className='first-letter:uppercase'>
										{permission.name}
									</p>

									<label className='relative inline-flex items-center cursor-pointer'>
										<input
											type='checkbox'
											value={permission.id}
											{...register('permissions')}
											className='sr-only peer'
										/>
										<div className="w-11 h-6 bg-gray-200 peer-focus-visible:outline-none peer-focus-visible:ring-4 peer-focus-visible:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" />
									</label>
								</li>
							))}
						</ul>

						{errors.permissions ? (
							<p className='flex items-center gap-2 pt-1 text-xs text-red-600 font-medium'>
								<InfoIcon />
								<span>{errors.permissions.message}</span>
							</p>
						) : null}
					</div>

					<button
						type='submit'
						disabled={createRole.isLoading}
						className='flex w-full mt-4 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
						{createRole.isLoading ? <Spinner /> : 'Add role'}
					</button>
				</>
			)}
		</form>
	)
}
