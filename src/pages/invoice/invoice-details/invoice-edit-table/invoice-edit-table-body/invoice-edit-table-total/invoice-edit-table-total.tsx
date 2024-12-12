import { Button, Stack, Typography } from '@mui/material'
import { Line } from '../../../../invoice.type'
import { useInvoiceEditTableTotal } from './invoice-edit-table-total.hooks'
import { useState } from 'react'
import InvoiceAddTaxDialog from './invoice-add-tax-dialog/invoice-add-tax-dialog'

type InvoiceEditTableTotalProps = {
  lines: Line[]
}

export type Tax = {
  taxName: string
  taxNumber: string
  taxPercentage: number
}

const InvoiceEditTableTotal = ({ lines }: InvoiceEditTableTotalProps) => {
  const [tax, setTax] = useState<Tax>()
  const [dialogOpen, setDialogOpen] = useState(false)
  const { subtotal, taxedValue, total } = useInvoiceEditTableTotal(
    lines,
    tax?.taxPercentage
  )

  const handleTax = () => {
    setTax({
      taxName: 'GST/HST',
      taxNumber: '1234 5678 9999',
      taxPercentage: 5.0,
    })
    handleDialogClose()
  }

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Stack spacing={2}>
          <Typography fontWeight={300} textAlign="right">
            Subtotal
          </Typography>
          {tax ? (
            <Typography fontWeight={300} textAlign="right">
              {tax.taxName + ' ' + tax.taxNumber}
              <span style={{ fontWeight: 700 }}>
                ({tax.taxPercentage.toFixed(2)}%)
              </span>
            </Typography>
          ) : (
            <Button
              variant="contained"
              size="small"
              onClick={handleDialogOpen}
              sx={{ borderRadius: '6px' }}
            >
              Add Tax#
            </Button>
          )}
          <Typography fontWeight={700} textAlign="right">
            Total (CAD)
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography fontWeight={300} textAlign="right">
            ${subtotal.toFixed(2)}
          </Typography>
          {tax ? (
            <Typography fontWeight={300} textAlign="right">
              ${taxedValue.toFixed(2)}
            </Typography>
          ) : (
            <Typography fontWeight={300} textAlign="right">
              $0.00
            </Typography>
          )}
          <Typography fontWeight={700} textAlign="right">
            ${total.toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
      <InvoiceAddTaxDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        handleSetTax={handleTax}
      />
    </>
  )
}

export default InvoiceEditTableTotal
