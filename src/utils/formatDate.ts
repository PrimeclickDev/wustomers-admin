export const formatDate = (date: Date) => {
	return new Date(date).toLocaleString('en-US', {
		dateStyle: 'medium',
		timeStyle: 'short',
		hour12: true,
	})
}
