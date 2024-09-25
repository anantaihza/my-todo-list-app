export const formatDate = (dateStr) => {
  const date = new Date(dateStr)

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return date.toLocaleDateString('id-ID', options)
}
