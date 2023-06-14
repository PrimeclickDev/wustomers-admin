import ChevronLeft from 'assets/icons/ChevronLeft'
import { useNavigate } from 'react-router-dom'

export const BackBtn = () => {
	const navigate = useNavigate()
	return (
		<button
			type='button'
			onClick={() => navigate(-1)}
			className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
			<div className='bg-wustomers-primary border border-wustomers-border-color w-8 h-8 rounded-full grid place-items-center'>
				<ChevronLeft />
			</div>
			<span>Back</span>
		</button>
	)
}
