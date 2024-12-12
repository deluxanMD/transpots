import { Stack, Typography } from '@mui/material'
import { Line } from '../../../../invoice.type'
import { useInvoiceEditTableTotal } from './invoice-edit-table-total.hooks'

type InvoiceEditTableTotalProps = {
  lines: Line[]
}

const InvoiceEditTableTotal = ({ lines }: InvoiceEditTableTotalProps) => {
  const { subtotal, tax, total } = useInvoiceEditTableTotal(lines)

  return (
    <Stack spacing={2} direction="row" justifyContent="flex-end">
      <Stack spacing={2}>
        <Typography fontWeight={300} textAlign="right">
          Subtotal
        </Typography>
        <Typography fontWeight={300} textAlign="right">
          GST/HST 1234 5678 9999{' '}
          <span style={{ fontWeight: 700 }}>(5.00%)</span>
        </Typography>
        <Typography fontWeight={700} textAlign="right">
          Total (CAD)
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography fontWeight={300} textAlign="right">
          ${subtotal.toFixed(2)}
        </Typography>
        <Typography fontWeight={300} textAlign="right">
          ${tax.toFixed(2)}
        </Typography>
        <Typography fontWeight={700} textAlign="right">
          ${total.toFixed(2)}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default InvoiceEditTableTotal
