import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { Box } from '@mui/material'
import EquipmentSelection from '../equipment-selection/equipment-selection.component'
import EquipmentDetails from '../equipment-details/equipment-details.component'
import ArrowLeft from '../../../assets/icons/ArrowLeft.png'
import { clearSelection } from '../../../store/equipments/equipments.slice'

const EquipmentSelectionMobile = () => {
  const dispatch = useDispatch()

  const { selectedEquipment } = useSelector(
    (state: RootState) => state.equipments
  )

  return (
    <>
      {selectedEquipment.id === '' ? (
        <Box p={2}>
          <EquipmentSelection />
        </Box>
      ) : (
        <Box p={2}>
          <img
            src={ArrowLeft}
            alt="arrow left"
            width={24}
            height={24}
            onClick={() => dispatch(clearSelection())}
          />
          <EquipmentDetails />
        </Box>
      )}
    </>
  )
}

export default EquipmentSelectionMobile
