import ChevronLeft from 'assets/icons/ChevronLeft'

export const BackBtn = () => {
	return (
		<button className='flex items-center gap-3'>
			<div className='bg-wustomers-primary border border-wustomers-border-color w-8 h-8 rounded-full grid place-items-center'>
				<ChevronLeft />
			</div>
			<span>Back</span>
		</button>
	)
}
