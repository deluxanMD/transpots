import { useTheme } from '@mui/material'
import React, { useState } from 'react'
import {
  AddEquipmentBtn,
  AddEquipmentBtnContainer,
} from './equipment-add-button.styles'
import EquipmentAddDialog from '../../equipment-add-dialog/equipment-add-dialog.component'

const EquipmentAddButton = () => {
  const theme = useTheme()
  const [addDialogOpen, setAddDialogOpen] = useState(false)

  return (
    <AddEquipmentBtnContainer>
      <AddEquipmentBtn theme={theme} onClick={() => setAddDialogOpen(true)}>
        Add Equipment
      </AddEquipmentBtn>
      <EquipmentAddDialog
        open={addDialogOpen}
        handleClose={() => setAddDialogOpen(false)}
      />
    </AddEquipmentBtnContainer>
  )
}

export default EquipmentAddButton
