export const formatDate = (date: Date) => {
	return new Date(date).toLocaleString('en-US', {
		dateStyle: 'full',
		timeStyle: 'short',
	})
}
