import React, { createContext } from 'react'
import { Tractor, Trailer } from './trip.types'

export type TripProviderValue = {
  tractor: Tractor
  trailer: Trailer
  handleSelectTractor: (tractor: Tractor) => void
  handleSelectTrailer: (trailer: Trailer) => void
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
