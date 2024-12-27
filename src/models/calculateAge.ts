export function calculateAge(birthDate: Date): number {
  const presentDay = new Date()
  const birth = new Date(birthDate)
  let age = presentDay.getFullYear() - birth.getFullYear()
  const month = presentDay.getMonth() - birth.getMonth()

  if (month < 0 || (month === 0 && presentDay.getDate() < birth.getDate())) {
    age--
  }

  return age
}
