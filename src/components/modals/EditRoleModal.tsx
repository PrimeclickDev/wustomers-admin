import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateRole } from 'api/hooks/roles/useUpdateRole'
import { Spinner } from 'components/Spinner'
import { TextInput } from 'components/TextInput'
import { Role } from 'models/roles-models'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type EditRoleModalProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	role: Role
}

const schema = z.object({
	name: z
		.string({ required_error: 'Role title is required' })
		.min(1, 'Role title is required')
		.trim()
		.transform(value => value.replace(' ', '-').toLowerCase()),
})

type EditRoleValues = z.infer<typeof schema>

export const EditRoleModal = ({ setOpen, role }: EditRoleModalProps) => {
	const updateRole = useUpdateRole()

	const { register, handleSubmit, control } = useForm<EditRoleValues>({
		defaultValues: {
			name: role.name ?? '',
		},
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<EditRoleValues> = data => {
		updateRole.mutate(
			{ data, id: role.id },
			{
				onSuccess: () => setOpen(false),
			}
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
			<h4 className='font-medium text-xl'>Edit role</h4>
			<TextInput
				label='Role title'
				control={control}
				name='name'
				register={register}
				type='text'
			/>

			<button
				type='submit'
				disabled={updateRole.isLoading}
				className='flex w-full mt-4 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
				{updateRole.isLoading ? <Spinner /> : 'Update role'}
			</button>
		</form>
	)
}
