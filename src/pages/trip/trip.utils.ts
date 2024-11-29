import { Address } from './trip.types'

export const formatAddress = ({ street, city, state }: Address): string => {
  return `${street}, ${city}, ${state}`
}
