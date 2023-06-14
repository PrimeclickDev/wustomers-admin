type StatusPillProps = {
	name: string
}

const statusStyle = {
	ended: 'bg-[#EB5757]/20 text-[#EB5757]',
	live: 'bg-[#219653]/20 text-[#219653]',
	pending: 'bg-[#F2C94C]/20 text-[#F2C94C]',
}

export const StatusPill = ({ name }: StatusPillProps) => {
	return (
		<span
			className={`py-1 px-3 rounded-md capitalize w-max text-sm ${
				statusStyle[name as keyof typeof statusStyle]
			}`}>
			{name}
		</span>
	)
}
