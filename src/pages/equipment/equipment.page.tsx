import React from 'react'
import TwoColumnLayout from '../../layouts/two-column-layout/two-column-layout'
import EquipmentSelection from './equipment-selection/equipment-selection.component'
import EquipmentDetails from './equipment-details/equipment-details.component'
import EquipmentSelectionMobile from './equipment-selection-mobile/equipment-selection-mobile.component'

const EquipmentPage = () => {
  return (
    <TwoColumnLayout>
      <EquipmentSelection />
      <EquipmentDetails />
      <EquipmentSelectionMobile />
    </TwoColumnLayout>
  )
}

export default EquipmentPage
