import JsPDF from 'jspdf'
// import 'jspdf-autotable';
import ArrowDown from 'assets/icons/ArrowDown'
import { Popover, PopoverContent, PopoverTrigger } from 'components/Popover'
import autoTable, { type RowInput } from 'jspdf-autotable'
import Papa from 'papaparse'
import React from 'react'
import { toast } from 'react-toastify'

const doctype = ['csv', 'pdf']

type ExportBtnProps = {
	className?: string
	orientation?: 'p' | 'portrait' | 'l' | 'landscape'
	pdfHead: RowInput[] | undefined
	pdfBody: RowInput[] | undefined
	csvdata?: any
}

export const ExportBtn = ({ className, pdfHead, pdfBody, orientation, csvdata }: ExportBtnProps) => {
	const [doc, setDoc] = React.useState('pdf')

	const exportPdf = () => {
		const report = new JsPDF({
			orientation: orientation ?? 'landscape',
			unit: 'pt',
			format: 'a4',
		})
		autoTable(report, {
			head: pdfHead,
			body: pdfBody,
		})

		toast.promise(
			report.save(`wustomers_report_${Date.now()}.pdf`, {
				returnPromise: true,
			}),
			{
				pending: 'Downloading...',
				error: 'Downloading failed. Please try again',
				success: 'Downlaod successful',
			}
		)
	}

	const exportCSV = () => {
		const csvData = Papa.unparse(csvdata, {
			header: true,
		})
		const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
		const url = window.URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = `wustomers_report_${Date.now()}.csv`
		a.click()
		window.URL.revokeObjectURL(url)
	}

	return (
		<div className={`hidden lg:flex ${className}`}>
			<div className='bg-wustomers-blue py-2 px-3 ml-auto rounded-md font-medium flex items-center gap-2 text-white'>
				<button type='button' onClick={doc === 'pdf' ? exportPdf : exportCSV}>
					Export
				</button>
				<Popover>
					<PopoverTrigger>
						<button type='button' className='border-l border-l-white pl-2 flex items-center text-sm gap-1 font-normal'>
							<span className='uppercase'>{doc}</span>
							<ArrowDown />
						</button>
					</PopoverTrigger>

					<PopoverContent>
						<div className='flex flex-col text-xs'>
							{doctype.map((item, index) => (
								<button
									key={index}
									type='button'
									onClick={() => setDoc(item)}
									className='py-1 px-3 rounded uppercase hover:bg-wustomers-blue text-left hover:text-white transition-colors'>
									{item}
								</button>
							))}
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	)
}
