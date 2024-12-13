import React from 'react'
import TwoColumnLayout from '../../layouts/two-column-layout/two-column-layout'
import EquipmentSelection from './equipment-selection/equipment-selection.component'
import EquipmentDetails from './equipment-details/equipment-details.component'

const EquipmentPage = () => {
  return (
    <TwoColumnLayout>
      <EquipmentSelection />
      <EquipmentDetails />
    </TwoColumnLayout>
  )
}

export default EquipmentPage
