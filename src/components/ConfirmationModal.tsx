import Warning from 'assets/icons/Warning'
import { Modal } from './Modal'
import { Spinner } from './Spinner'

type ConfirmationModalProps = {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	title: string
	isLoading: boolean
	confirmBtnTxt: string
	onConfirm: () => void
	// action: UseMutationResult<AxiosResponse<any, any>, unknown, number, unknown>
}

export const ConfirmationModal = ({
	open,
	setOpen,
	title,
	isLoading,
	confirmBtnTxt,
	onConfirm,
}: ConfirmationModalProps) => {
	return (
		<Modal
			open={open}
			setOpen={setOpen}
			className='grid place-items-center space-y-3'>
			<Warning />
			<p className='text-2xl w-72 text-center'>{title}</p>

			<div className='flex items-center gap-4 pt-2 w-full'>
				<button
					type='button'
					onClick={() => setOpen(false)}
					className='text-wustomers-blue flex-1 hover:bg-wustomers-blue hover:text-inherit transition-colors border border-wustomers-blue py-1.5 px-4 rounded-md hover:text-white'>
					No, go back
				</button>
				<button
					disabled={isLoading}
					onClick={onConfirm}
					type='button'
					className='flex-1 border bg-red-500 hover:opacity-90 text-white transition-colors py-1.5 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'>
					{isLoading ? (
						<Spinner className='text-white' />
					) : (
						confirmBtnTxt
					)}
				</button>
			</div>
		</Modal>
	)
}
