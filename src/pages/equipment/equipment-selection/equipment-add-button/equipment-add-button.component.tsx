import { useTheme } from '@mui/material'
import React from 'react'
import {
  AddEquipmentBtn,
  AddEquipmentBtnContainer,
} from './equipment-add-button.styles'

const EquipmentAddButton = () => {
  const theme = useTheme()

  return (
    <AddEquipmentBtnContainer>
      <AddEquipmentBtn theme={theme}>Add Equipment</AddEquipmentBtn>
    </AddEquipmentBtnContainer>
  )
}

export default EquipmentAddButton
