import { Typography, TypographyProps } from '@mui/material'
import { StyledTableCell } from '../invoice-table-body'
import { formatString } from '../../../../../../utils/typography'

type InvoiceTableCompanyProps = {
  company: string
  invoiceStatus:
    | 'sent_eft'
    | 'sent_cheque'
    | 'sent_invoice'
    | 'not_sent_invoice'
} & TypographyProps

const InvoiceTableCompany = ({
  minWidth,
  align,
  company,
  invoiceStatus,
  ...rest
}: InvoiceTableCompanyProps) => {
  return (
    <StyledTableCell sx={{ minWidth }} align={align}>
      <Typography fontWeight={700} sx={{ color: 'InfoText' }} {...rest}>
        {company}
      </Typography>
      <Typography
        sx={{
          color: 'InfoText',
          fontWeight: 300,
        }}
      >
        {formatString(invoiceStatus)}
      </Typography>
    </StyledTableCell>
  )
}

export default InvoiceTableCompany
