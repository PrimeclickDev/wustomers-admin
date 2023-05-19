export const UserInfo = () => {
	return (
		<div className='bg-wustomers-primary p-4 h-max'>
			<img
				src='https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				alt='user profile'
				className='w-60 h-64 object-center object-cover rounded'
			/>

			<ul className='mt-8 flex flex-col gap-4'>
				<li>
					<h3 className='text-black font-medium text-sm'>
						Full Name
					</h3>
					<p>Abraham Layiwola</p>
				</li>
				<li>
					<h3 className='text-black font-medium text-sm'>
						Email address
					</h3>
					<a href='#'>Abrahamlayiwola@gamail.com</a>
				</li>
				<li>
					<h3 className='text-black font-medium text-sm'>
						Business name
					</h3>
					<p>Abraham Layiwola & co.</p>
				</li>
			</ul>
		</div>
	)
}
