import { useState } from 'react'
import { Tractor } from './trip.types'
import TripProvider from './trip.provider'
import TripSelection from './trip-selection/trip-selection.component'
import TripSelectionMobile from './trip-selection-mobile/trip-selection-mobile'
import TripDetails from './trip-details/trip-details'
import TwoColumnLayout from '../../layouts/two-column-layout/two-column-layout'

const TripPage = () => {
  const [selectedTractor, setSelectedTractor] = useState<Tractor>({
    tractorId: '',
  })

  const handleSelectTractor = (tractor: Tractor) => {
    setSelectedTractor(tractor)
  }

  return (
    <TripProvider value={{ tractor: selectedTractor, handleSelectTractor }}>
      <TwoColumnLayout>
        <TripSelection />
        <TripDetails />
        <TripSelectionMobile />
      </TwoColumnLayout>
    </TripProvider>
  )
}

export default TripPage
