import { Link } from 'react-router-dom'

export const UserLandingPages = () => {
	return (
		<div className='bg-wustomers-primary p-4 md:px-6 border border-[#17A1FA] rounded-2xl shadow-[0px_0px_8px_2px_rgba(130,130,130,0.15)]'>
			<h3 className='font-medium text-xl'>Recent landing pages</h3>

			<ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8 my-5'>
				<li>
					<img
						src='https://s3-alpha-sig.figma.com/img/0975/cf2f/73e0640342f91acda240619c7ef469ed?Expires=1687737600&Signature=fRXYwIhSxTNqnPMxPxsQ38Oj894tVtg0b1GDtYr0UcGSzxq7iYDlhPY-ArdsTIBy2e-s8tZgy534Ru6cZfzc54PqgkTJWKLTxxaufkIGziw~qeFir6fXz2rTRSAIggyBmvWPbLBn2tPe677YNkJER8Wtjvd86CHWSX3VQUBlwaBSqfiLdn8GWvzqd0rlww1mrYzPLvkUO2yyultes2EqFhN3SndMVmLUEx0NutGDuQhOKDREw6R0dPP5fUuK52OLb2tljwckDk2gVGzkbtdNzKi~pbS9Ez8zuPC1iLnRkMJrnn~bmDRae0GHU5nHUb6mPKDgk~chy-00DhX-eWQJfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt=''
						className='h-40 w-full object-cover rounded-md'
					/>
					<div className='flex items-center justify-between pt-2 gap-2'>
						<p>Landing page</p>
						<Link
							to='/campaigns/ida'
							className='border border-wustomers-blue text-wustomers-blue rounded-full text-xs py-1 hover:bg-wustomers-blue/10 transition-colors px-4'>
							View
						</Link>
					</div>
				</li>
			</ul>
		</div>
	)
}
