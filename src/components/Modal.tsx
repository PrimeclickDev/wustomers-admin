import * as Dialog from '@radix-ui/react-dialog'
import CloseCircle from 'assets/icons/CloseCircle'
import React from 'react'

type ModalProps = {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	children: React.ReactNode
	className?: string
}

export const Modal = ({ children, open, setOpen, className }: ModalProps) => {
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 z-50 animate-overlayShow bg-black/[0.88] backdrop:blur-md' />
				<div className='p-4'>
					<Dialog.Content
						className={`fixed top-1/2 left-1/2 z-50 w-full max-h-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 animate-contentShow overflow-auto rounded-xl bg-white p-4 lg:p-6 shadow-2xl focus:outline-none ${className}`}>
						{children}

						<Dialog.Close asChild>
							<button className='absolute top-4 right-4'>
								<CloseCircle />
							</button>
						</Dialog.Close>
					</Dialog.Content>
				</div>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
