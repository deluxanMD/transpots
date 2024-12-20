import { Button, Stack, TypographyProps } from '@mui/material'
import Edit from '../../../../../../assets/icons/Edit.png'
import Delete from '../../../../../../assets/icons/Delete.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editInvoice } from '../../../../../../store/invoices/invoices.slice'
import { StyledTableCell } from '../invoice-table-body'
import InvoiceTableEmailDialog from '../invoice-table-email-dialog/invoice-table-email-dialog'
import { useState } from 'react'

type InvoiceTableCellProps = {
  disabled?: boolean
  invoiceId: string
} & TypographyProps

const InvoiceTableActions = ({
  minWidth,
  align,
  disabled,
  invoiceId,
}: InvoiceTableCellProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const handleEdit = () => {
    dispatch(editInvoice({ invoiceId }))
    navigate(invoiceId)
  }

  return (
    <>
      <StyledTableCell sx={{ minWidth }} align={align}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button
            sx={{
              height: '36px',
              borderRadius: '6px',
              textTransform: 'capitalize',
            }}
            variant="contained"
            disabled={disabled}
            onClick={handleDialogOpen}
          >
            Send Invoice
          </Button>

          <img
            src={Edit}
            alt="edit"
            width={36}
            height={36}
            style={{ cursor: 'pointer' }}
            onClick={handleEdit}
          />
          <img
            src={Delete}
            alt="delete"
            width={28}
            height={32}
            style={{ cursor: 'pointer' }}
          />
        </Stack>
      </StyledTableCell>
      <InvoiceTableEmailDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
      />
    </>
  )
}

export default InvoiceTableActions
