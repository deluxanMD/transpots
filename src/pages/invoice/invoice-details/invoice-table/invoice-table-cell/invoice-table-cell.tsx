import {
  styled,
  TableCell,
  tableCellClasses,
  Typography,
  TypographyProps,
} from '@mui/material'
import { ReactNode } from 'react'

type InvoiceTableCellProps = {
  disabled?: boolean
  value1?: string | ReactNode
  value2?: string
  children?: ReactNode
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
