import { useState } from 'react'
import { Tractor, Trailer } from './trip.types'
import TripProvider from './trip.provider'
import TripSelection from './trip-selection/trip-selection.component'
import TripSelectionMobile from './trip-selection-mobile/trip-selection-mobile'
import TripDetails from './trip-details/trip-details'
import TwoColumnLayout from '../../layouts/two-column-layout/two-column-layout'

const TripPage = () => {
  const [selected, setSelected] = useState<{
    tractor: Tractor
    trailer: Trailer
  }>({
    tractor: { tractorId: '' },
    trailer: { trailerId: '' },
  })

  const handleSelectTractor = (tractor: Tractor) => {
    setSelected({ ...selected, tractor })
  }

  const handleSelectTrailer = (trailer: Trailer) => {
    setSelected({ ...selected, trailer })
  }

  return (
    <TripProvider
      value={{
        tractor: selected.tractor,
        trailer: selected.trailer,
        handleSelectTractor,
        handleSelectTrailer,
      }}
    >
      <TwoColumnLayout>
        <TripSelection />
        <TripDetails />
        <TripSelectionMobile />
      </TwoColumnLayout>
    </TripProvider>
  )
}

export default TripPage
