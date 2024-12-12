import { Dialog, Grid2, useMediaQuery, useTheme } from '@mui/material'
import InvoiceDialogTimeline from './invoice-dialog-timeline/invoice-dialog-timeline'
import InvoiceDialogList from './invoice-dialog-list/invoice-dialog-list'

export type InvoiceDialogProps = {
  open: boolean
  handleClose: () => void
}

const InvoiceDialog = ({ open, handleClose }: InvoiceDialogProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <InvoiceDialogTimeline />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <InvoiceDialogList handleClose={handleClose} />
        </Grid2>
      </Grid2>
    </Dialog>
  )
}

export default InvoiceDialog
