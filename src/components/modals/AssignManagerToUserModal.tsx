import { zodResolver } from '@hookform/resolvers/zod'
import { useFetchAdmins } from 'api/hooks/admin/useFetchAdmins'
import { useAssignManager } from 'api/hooks/users/useAssignManager'
import { Spinner } from 'components/Spinner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

const schema = z.object({
	manager: z.string({ required_error: 'Account manager is required' }).min(1, { message: 'Account manager is required' }).trim(),
})

type AssignManagerSchema = z.infer<typeof schema>

type AssignManagerProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AssignManagerToUserModal = ({ setOpen }: AssignManagerProps) => {
	const { register, handleSubmit } = useForm<AssignManagerSchema>({
		defaultValues: {
			manager: '',
		},
		resolver: zodResolver(schema),
	})

	const [searchParams] = useSearchParams()

	const { data: admins, isLoading } = useFetchAdmins()
	const assignManager = useAssignManager()

	const onSubmit: SubmitHandler<AssignManagerSchema> = data => {
		const payload = {
			userId: searchParams.get('userId') as string,
			managerId: data.manager,
		}
		assignManager.mutate(payload, {
			onSuccess: () => setOpen(false),
		})
	}

	return (
		<div className='p-2'>
			<h4 className='font-bold text-xl'>Assign manager to user</h4>
			<span className='text-xs'>Please select one account manager</span>

			{isLoading ? (
				<Spinner />
			) : admins?.data.length ? (
				<form className='mt-6 flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
					{admins.data
						.filter(admin => admin.roles[0].name === 'account-manager')
						.map(admin => (
							<fieldset className='flex gap-2 relative' key={admin.id}>
								<input type='radio' id={admin.id.toString()} {...register('manager')} value={admin.id} className='w-5 h-5 accent-wustomers-blue' />
								<label htmlFor={admin.id.toString()} className='leading-none'>
									<p className='font-bold'>{admin.first_name && admin.last_name ? `${admin.first_name} ${admin.last_name}` : '-'}</p>
									<p className='text-xs pt-1'>{admin.email}</p>
								</label>
							</fieldset>
						))}

					<button
						type='submit'
						disabled={assignManager.isLoading}
						className='flex w-full mt-4 items-center justify-center px-11 font-medium uppercase tracking-wider text-white transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-wustomers-blue/20 bg-wustomers-blue py-3 hover:bg-wustomers-blue/90 disabled:hover:scale-100 rounded'>
						{assignManager.isLoading ? <Spinner /> : 'Assign'}
					</button>
				</form>
			) : (
				<p className='text-sm text-center'>You have not created any account managar.</p>
			)}
		</div>
	)
}
