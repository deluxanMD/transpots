import { Button, Stack, TypographyProps } from '@mui/material'
import Edit from '../../../../../../assets/icons/Edit.png'
import Delete from '../../../../../../assets/icons/Delete.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editInvoice } from '../../../../../../store/invoices/invoices.slice'
import { StyledTableCell } from '../invoice-table-body'

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

  const handleEdit = () => {
    dispatch(editInvoice({ invoiceId }))
    navigate(invoiceId)
  }

  return (
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
  )
}

export default InvoiceTableActions
