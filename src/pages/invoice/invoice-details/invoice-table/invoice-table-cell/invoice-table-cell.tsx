import { Typography, TypographyProps } from '@mui/material'
import { ReactNode } from 'react'
import { StyledTableCell } from '../invoice-table-body/invoice-table-body'

type InvoiceTableCellProps = {
  disabled?: boolean
  value1?: string | ReactNode
  value2?: string
  children?: ReactNode
} & TypographyProps

const InvoiceTableCell = ({
  disabled,
  value1,
  value2,
  minWidth,
  children,
  align,
  ...rest
}: InvoiceTableCellProps) => {
  return (
    <StyledTableCell sx={{ minWidth }} align={align}>
      <Typography
        fontWeight={700}
        sx={{ color: disabled ? 'secondary.main' : 'InfoText' }}
        {...rest}
      >
        {value1}
      </Typography>
      <Typography
        sx={{
          color: disabled ? 'secondary.main' : 'InfoText',
          fontWeight: 300,
        }}
      >
        {value2}
      </Typography>
      {children}
    </StyledTableCell>
  )
}

export default InvoiceTableCell
