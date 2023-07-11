import { useDeactivateUser } from 'api/hooks/shared/useDeactivateUser'
import { useDeleteUser } from 'api/hooks/users/useDeleteUser'
import emptyUserImg from 'assets/images/empty-user.png'
import { BackBtn } from 'components/BackBtn'
import { ConfirmationModal } from 'components/ConfirmationModal'
import { RecentTransactions } from 'components/RecentTransactions'
import { UserCampaigns } from 'components/UserCampaigns'
import { usePageTitle } from 'hooks/usePageTitle'
import { User } from 'models/users-models'
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export const UserDetails = () => {
	usePageTitle(`User Details`)
	const [openDeleteModal, setOpenDeleteModal] = React.useState(false)
	const [openSuspendModal, setOpenSuspendModal] = React.useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	const user = location.state.user as User

	const deleteUser = useDeleteUser()
	const deactivateUser = useDeactivateUser()

	if (!user) {
		return <Navigate to='/users' replace />
	}

	return (
		<>
			<div className='max-w-7xl mx-auto py-12 px-3'>
				<BackBtn />

				<section className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div className='space-y-8'>
						<div className='bg-wustomers-primary px-4 py-6 md:px-6 border border-[#17A1FA] rounded-2xl shadow-[0px_0px_8px_2px_rgba(130,130,130,0.15)] flex flex-col lg:flex-row items-center gap-4 md:gap-6'>
							<img src={user.avatar ?? emptyUserImg} alt='user profile' className='w-40 h-48 object-center object-cover rounded-xl' />
							<div className='space-y-1'>
								<h4 className='text-2xl lg:text-4xl font-medium capitalize'>{user.first_name && user.last_name ? `${user.last_name} ${user.first_name}` : 'No name'}</h4>
								<p>{user.email}</p>
								<p className='capitalize'>{user.profile.business_name}</p>
								<p>{user.profile.phone}</p>
								<div className='flex flex-col lg:flex-row items-center gap-2 pt-2'>
									<button
										type='button'
										onClick={() => setOpenSuspendModal(true)}
										className='text-[#F2C94C] hover:bg-[#F2C94C] hover:text-inherit transition-colors border border-[#F2C94C] py-1 px-4 rounded-full'>
										Suspend user
									</button>
									<button
										type='button'
										onClick={() => setOpenDeleteModal(true)}
										className='text-[#EB5757] border border-[#EB5757] hover:bg-[#EB5757] hover:text-white transition-colors py-1 px-4 rounded-full'>
										Delete account
									</button>
								</div>
							</div>
						</div>

						<RecentTransactions transactions={user.transaction} />
					</div>

					<UserCampaigns campaigns={user.campaigns} />
				</section>
			</div>

			<ConfirmationModal
				open={openDeleteModal}
				setOpen={setOpenDeleteModal}
				title='Are you sure you want to delete this account?'
				confirmBtnTxt='Yes, Delete account'
				isLoading={deleteUser.isLoading}
				onConfirm={() =>
					deleteUser.mutate(user.id, {
						onSuccess: () => navigate('/users'),
					})
				}
			/>
			<ConfirmationModal
				open={openSuspendModal}
				setOpen={setOpenSuspendModal}
				title='Are you sure you want to suspend this account?'
				confirmBtnTxt='Yes, Suspend user'
				isLoading={deactivateUser.isLoading}
				onConfirm={() =>
					deactivateUser.mutate(user.id.toString(), {
						onSuccess: () => navigate('/users'),
					})
				}
			/>
		</>
	)
}
