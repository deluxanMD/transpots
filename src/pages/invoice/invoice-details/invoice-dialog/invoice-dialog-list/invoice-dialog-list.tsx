import { Box, Stack } from '@mui/material'
import { invoiceInfos } from '../invoice-dialog.constants'
import InvoiceDialogListItem from './invoice-dialog-list-item/invoice-dialog-list-item'
import InvoiceDialogListHeader from './invoice-dialog-list-header/invoice-dialog-list-header'
import { InvoiceDialogProps } from '../invoice.dialog'
import InvoiceDialogListFooter from './invoice-dialog-list-footer/invoice-dialog-list-footer'

const InvoiceDialogList = ({
  handleClose,
}: Omit<InvoiceDialogProps, 'open'>) => {
  return (
    <Stack justifyContent="space-between" sx={{ height: '100%' }}>
      <Stack>
        <InvoiceDialogListHeader handleClose={handleClose} />
        <Box p={2}>
          {invoiceInfos.map((info) => (
            <InvoiceDialogListItem key={info.id} {...info} />
          ))}
        </Box>
      </Stack>
      <InvoiceDialogListFooter />
    </Stack>
  )
}

export default InvoiceDialogList
