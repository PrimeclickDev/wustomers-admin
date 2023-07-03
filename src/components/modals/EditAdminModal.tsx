import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateAdmin } from 'api/hooks/admin/useUpdateAdmin'
import { useFetchRoles } from 'api/hooks/roles/useFetchRoles'
import InfoIcon from 'assets/icons/InfoIcon'
import { Select, SelectItem } from 'components/Select'
import { Spinner } from 'components/Spinner'
import { TextInput } from 'components/TextInput'
import { Admin } from 'models/admins-models'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type EditAdminModalProps = {
	admin: Admin
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const schema = z.object({
	first_name: z
		.string({ required_error: 'First name is required' })
		.min(1, { message: 'First name is required' })
		.trim(),
	last_name: z
		.string({ required_error: 'Last name is required' })
		.min(1, { message: 'Last name name is required' })
		.trim(),
	role: z
		.string({ required_error: 'Role is required' })
		.min(1, { message: 'Role is required' })
		.trim(),
})

type EditAdminSchema = z.infer<typeof schema>

export const EditAdminModal = ({ admin, setIsOpen }: EditAdminModalProps) => {
	const { data: roles } = useFetchRoles()
	const updateAdmin = useUpdateAdmin()
	const { register, handleSubmit, control } = useForm<EditAdminSchema>({
		defaultValues: {
			role: admin?.roles[0]?.name ?? '',
			first_name: admin.first_name ?? '',
			last_name: admin.last_name ?? '',
		},
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<EditAdminSchema> = data => {
		updateAdmin.mutate(
			{ data, id: admin.id },
			{
				onSuccess: () => setIsOpen(false),
			}
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='self-center'>
			<h4 className='font-medium text-xl'>Edit admin</h4>

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
									onValueChange={onChange}
									className={`w-full border-2 mt-1 rounded-md capitalize h-[49px] pl-4 ${
										error
											? '!border-red-600 !bg-red-50'
											: 'border-wustomers-primary-light !bg-wustomers-primary'
									}`}
									value={value}>
									{roles?.data?.map(option => (
										<SelectItem
											value={option.name}
											key={option.id}
											className='py-4 !capitalize'>
											{option.name}
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
			</div>

			<button
				type='submit'
				disabled={updateAdmin.isLoading}
				className='flex w-full mt-4 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
				{updateAdmin.isLoading ? <Spinner /> : 'Update'}
			</button>
		</form>
	)
}
