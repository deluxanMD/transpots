import { useTheme } from '@mui/material'
import { NotesField } from '../invoice-edit-table.styles'

const InvoiceEditTableNotes = () => {
  const theme = useTheme()

  return (
    <NotesField
      label="Notes"
      variant="standard"
      placeholder=""
      multiline
      minRows={2}
      theme={theme}
      slotProps={{ input: { disableUnderline: true } }}
    />
  )
}

export default InvoiceEditTableNotes
