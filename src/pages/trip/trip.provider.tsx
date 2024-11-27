import React, { createContext } from 'react'
import { Tractor } from './trip.types'

export type TripProviderValue = {
  // trip: Trip
  tractor: Tractor
  handleSelectTractor: (tractor: Tractor) => void
}

type TripProviderProps = {
  value: TripProviderValue
  children: React.ReactNode
}

export const TripContext = createContext<TripProviderValue | null>(null)

const TripProvider = ({ value, children }: TripProviderProps) => {
  return <TripContext.Provider value={value}>{children}</TripContext.Provider>
}

export default TripProvider
