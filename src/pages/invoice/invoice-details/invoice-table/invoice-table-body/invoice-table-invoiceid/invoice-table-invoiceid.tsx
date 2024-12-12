import { Link, Typography } from '@mui/material'
import { StyledTableCell } from '../invoice-table-body'
import { InvoiceDetail } from '../../../../invoice.type'

type InvoiceTableInvoiceIdProps = {
  handleClick: () => void
} & InvoiceDetail

const InvoiceTableInvoiceId = ({
  invoiceId,
  invoiceLabel,
  handleClick,
  ...rest
}: InvoiceTableInvoiceIdProps) => {
  return (
    <StyledTableCell sx={{ minWidth: 150 }}>
      <Typography fontWeight={700} sx={{ color: 'InfoText' }} {...rest}>
        <Link underline="none" sx={{ cursor: 'pointer' }} onClick={handleClick}>
          {invoiceLabel}
        </Link>
      </Typography>
      <Typography
        sx={{
          color: 'InfoText',
          fontWeight: 300,
        }}
      >
        {invoiceId}
      </Typography>
    </StyledTableCell>
  )
}

export default InvoiceTableInvoiceId
