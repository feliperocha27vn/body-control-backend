import { calculateAge } from './calculateAge'

export function calculateBasalRate(
  weight: number,
  height: number,
  birthDate: Date,
  gender: boolean,
) {
  const age = calculateAge(birthDate)
  // fem
  if (gender === true) {
    return 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age
  }
  // masc
  else {
    return 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
  }
}
