import ChevronRight from 'assets/icons/ChevronRight'
import React from 'react'

type PaginationProps = {
	from: number | undefined
	to: number | undefined
	lastPage: number | undefined
	hasPrevPage: boolean
	hasNextPage: boolean
	isPreviousData: boolean
	setPage: React.Dispatch<React.SetStateAction<number>>
	page: number
	className?: string
}

export const Pagination = ({
	from,
	to,
	lastPage,
	hasPrevPage,
	hasNextPage,
	isPreviousData,
	setPage,
	page,
	className,
}: PaginationProps) => {
	return (
		<div
			className={`flex flex-wrap items-center gap-4 text-sm justify-end text-wustomers-gray ${className}`}>
			<p>
				{from} - {to} of {lastPage} page(s)
			</p>

			<div className='flex items-center gap-2'>
				<button
					type='button'
					disabled={hasPrevPage}
					onClick={() => setPage(page - 1)}
					className='bg-white rounded py-1 px-3 flex items-center gap-2 border border-gray-200 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-100 disabled:hover:bg-white transition-all'>
					<ChevronRight className='rotate-180' />
					<span>Prev</span>
				</button>
				<button
					type='button'
					disabled={isPreviousData || hasNextPage}
					onClick={() => setPage(page + 1)}
					className='bg-white rounded py-1 px-3 flex items-center gap-2 border border-gray-200 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-100 disabled:hover:bg-white transition-all'>
					<span>Next</span>
					<ChevronRight />
				</button>
			</div>
		</div>
	)
}
