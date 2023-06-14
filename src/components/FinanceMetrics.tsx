import MoreElipsis from 'assets/icons/MoreElipsis'
import Wallet from 'assets/icons/Wallet'
import WalletCheck from 'assets/icons/WalletCheck'
import WalletMinus from 'assets/icons/WalletMinus'
import { formatCurrency } from 'utils/formatCurrency'

export const FinanceMetrics = () => {
	return (
		<ul className='flex flex-wrap items-center gap-4 mt-8'>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600'>Total money received</h3>
					<button type='button'>
						<MoreElipsis />
					</button>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-bold text-4xl'>
						{formatCurrency(300000)}
					</p>
					<WalletCheck />
				</div>
			</li>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600'>Total money spend</h3>
					<button type='button'>
						<MoreElipsis />
					</button>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-bold text-4xl'>
						{formatCurrency(30000)}
					</p>
					<WalletMinus />
				</div>
			</li>
			<li className='bg-wustomers-primary p-6 rounded-md flex-1 space-y-2'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-600'>Total money commision</h3>
					<button type='button'>
						<MoreElipsis />
					</button>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-bold text-4xl'>{formatCurrency(3000)}</p>
					<Wallet />
				</div>
			</li>
		</ul>
	)
}
