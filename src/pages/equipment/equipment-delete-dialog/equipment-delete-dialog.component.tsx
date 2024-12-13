import { Box, Dialog, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'
import { deleteEquipment } from '../../../store/equipments/equipments.slice'

type Props = {
  open: boolean
  handleClose: () => void
}

const EquipmentDeleteDialog = ({ open, handleClose }: Props) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const equipments = useSelector((state: RootState) => state.equipments)

  const handleCancel = () => {
    handleClose()
  }

  const handleDelete = () => {
    dispatch(deleteEquipment({ id: equipments.selectedEquipment.id }))
    handleClose()
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <Box textAlign="center">
        <Typography fontWeight={700} px={1} py={4}>
          Are you sure you want to delete the {equipments.selectedTab}:{' '}
          {equipments.selectedEquipment.name}
        </Typography>
        <ActionButtons
          firstBtnProps={{
            title: 'Cancel',
            onClick: handleCancel,
            bgColor: 'secondary.main',
          }}
          secondBtnProps={{ title: 'Delete', onClick: handleDelete }}
        />
      </Box>
    </Dialog>
  )
}

export default EquipmentDeleteDialog
