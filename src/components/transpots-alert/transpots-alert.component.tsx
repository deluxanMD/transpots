import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  Divider,
} from '@mui/material'

type TranspotsAlertProps = {
  description: string
  cancelBtnText?: string
  submitBtnText?: string
  handleClose: () => void
} & DialogProps

const TranspotsAlert = ({
  open,
  description,
  cancelBtnText = 'Cancel',
  submitBtnText = 'Submit',
  handleClose,
}: TranspotsAlertProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <Divider sx={{ border: 0.6 }} />
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          size="small"
          sx={{ px: 2, bgcolor: 'secondary.dark', color: '#ffffff' }}
          onClick={handleClose}
        >
          {cancelBtnText}
        </Button>
        <Button
          size="small"
          sx={{ px: 2, bgcolor: 'primary.main', color: '#ffffff' }}
        >
          {submitBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TranspotsAlert
