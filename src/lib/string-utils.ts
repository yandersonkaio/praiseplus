export const getInitials = (name: string) => {
  const names = name.trim().split(' ')
  const firstInitial = names[0]?.[0] || ''
  const secondInitial = names.length > 1 ? names[1][0] : ''

  return `${firstInitial}${secondInitial}`.toUpperCase()
}
