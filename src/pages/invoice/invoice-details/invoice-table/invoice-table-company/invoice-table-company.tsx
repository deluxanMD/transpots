import {
  styled,
  TableCell,
  tableCellClasses,
  Typography,
  TypographyProps,
} from '@mui/material'
import { formatString } from '../../../../../utils/typography'

type InvoiceTableCompanyProps = {
  company: string
  invoiceStatus:
    | 'sent_eft'
    | 'sent_cheque'
    | 'sent_invoice'
    | 'not_sent_invoice'
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
