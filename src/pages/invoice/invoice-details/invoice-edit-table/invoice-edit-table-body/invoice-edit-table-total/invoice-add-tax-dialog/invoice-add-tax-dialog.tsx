import { Button, Dialog, Stack, useMediaQuery, useTheme } from '@mui/material'
import TextInputField from '../../../../../../../components/fields/text-input-field/text-input-field.component'

type InvoiceAddTaxDialogProps = {
  open: boolean
  handleClose: () => void
  handleSetTax: () => void
}

const InvoiceAddTaxDialog = ({
  open,
  handleClose,
  handleSetTax,
}: InvoiceAddTaxDialogProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
    >
      <Stack spacing={4} p={4}>
        <TextInputField label="Tax Name" />
        <TextInputField label="Tax Number" />
        <TextInputField label="Tax Percentage" />
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        p={2}
        sx={{ borderTop: '1px solid #D9D9D9' }}
      >
        <Button
          color="secondary"
          variant="contained"
          sx={{
            borderRadius: '6px',
            textTransform: 'capitalize',
            minWidth: '120px',
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          color="error"
          variant="contained"
          sx={{
            borderRadius: '6px',
            textTransform: 'capitalize',
            minWidth: '120px',
          }}
          onClick={handleSetTax}
        >
          Save
        </Button>
      </Stack>
    </Dialog>
  )
}

export default InvoiceAddTaxDialog
