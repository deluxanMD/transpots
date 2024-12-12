import {
  Button,
  Stack,
  styled,
  TableCell,
  tableCellClasses,
  TypographyProps,
} from '@mui/material'
import Edit from '../../../../../assets/icons/EditBlue.png'
import Delete from '../../../../../assets/icons/Delete.png'
import { useDispatch } from 'react-redux'
import { editInvoice } from '../../../../../store/invoices/invoices.slice'
import { useNavigate } from 'react-router-dom'

type InvoiceTableCellProps = {
  disabled?: boolean
  invoiceId: string
} & TypographyProps

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    // padding: '4px 12px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // padding: '4px 12px',
  },
}))

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
