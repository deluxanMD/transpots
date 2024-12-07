import { Stack, Typography } from '@mui/material'
import PlusButton from '../../assets/icons/Plus Button.png'
import LoadConfirmationDialog from '../load-confirmation-dialog/load-confirmation-dialog.component'
import LoadConfirmationSuccessDialog from '../load-confirmation-dialog/load-confirmation-success-dialog.component'
import { useState } from 'react'
import { CreateButton } from './sidebar-buttons.styles'

const SidebarButtons = () => {
  const [loadConfirmOpen, setLoadConfirmOpen] = useState(false)
  const [loadSuccessOpen, setLoadSuccessOpen] = useState(false)

  const handleFileUpload = () => {
    setLoadSuccessOpen(true)
  }

  return (
    <>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack alignItems="center" justifyContent="center" textAlign="center">
          <CreateButton
            src={PlusButton}
            alt="plus button"
            onClick={() => setLoadConfirmOpen(true)}
          />
          <Typography fontWeight={700} color="#fff">
            Create
            <br />
            Order
          </Typography>
        </Stack>

        <Stack alignItems="center" textAlign="center">
          <CreateButton src={PlusButton} alt="plus button" />
          <Typography fontWeight={700} color="#fff">
            Create
            <br />
            Trip
          </Typography>
        </Stack>
      </Stack>
      <LoadConfirmationDialog
        open={loadConfirmOpen}
        handleClose={() => setLoadConfirmOpen(false)}
        onFileUpload={handleFileUpload}
      />
      <LoadConfirmationSuccessDialog
        open={loadSuccessOpen}
        handleClose={() => setLoadSuccessOpen(false)}
      />
    </>
  )
}

export default SidebarButtons
