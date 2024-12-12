import { Box } from '@mui/material'
import TextInputField from '../../../../../../components/fields/text-input-field/text-input-field.component'

const InvoiceDialogListFooter = () => {
  return (
    <Box sx={{ borderTop: '1px solid #D9D9D9' }} p={2}>
      <TextInputField
        multiline
        minRows={6}
        placeholder="Enter comments"
        sx={{ borderRadius: '10px' }}
      />
    </Box>
  )
}

export default InvoiceDialogListFooter
