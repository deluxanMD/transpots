import {
  Dialog,
  InputLabel,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import TextInputField from '../../../components/fields/text-input-field/text-input-field.component'
import SelectField from '../../../components/select-field/select-field.component'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'

type Props = {
  open: boolean
  handleClose: () => void
}

const EquipmentAddDialog = ({ open, handleClose }: Props) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleCancel = () => {
    handleClose()
  }

  const handleSave = () => {
    handleClose()
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
    >
      <Stack spacing={2} p={4}>
        <TextInputField label="Unit#" size="small" />
        <InputLabel>Equipment Type</InputLabel>
        <SelectField
          options={['Tractor', 'Trailer']}
          defaultValue={'Tractor'}
          size="small"
          sx={{
            marginLeft: '-16px',
            marginTop: '-12px',
            color: 'common.white',
          }}
          fullWidth
        />
      </Stack>
      <ActionButtons
        firstBtnProps={{
          title: 'Cancel',
          onClick: handleCancel,
        }}
        secondBtnProps={{
          title: 'Save',
          onClick: handleSave,
        }}
      />
    </Dialog>
  )
}

export default EquipmentAddDialog
