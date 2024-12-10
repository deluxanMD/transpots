import {
  styled,
  TableCell,
  tableCellClasses,
  TextField,
  TextFieldProps,
  TypographyProps,
} from '@mui/material'
import { ReactNode } from 'react'
import CurrencyField from '../../../../../components/fields/currency-field/currency-field.component'

type InvoiceEditTableCellProps = {
  disabled?: boolean
  value: string | ReactNode
  children?: ReactNode
  currencyFormat?: boolean
} & TypographyProps &
  TextFieldProps

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

const InvoiceEditTableCell = ({
  minWidth,
  align,
  value,
  onChange,
  type,
  currencyFormat,
  disabled,
  ...rest
}: InvoiceEditTableCellProps) => {
  return (
    <StyledTableCell sx={{ minWidth }} align={align}>
      {currencyFormat ? (
        <CurrencyField
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
      ) : (
        <TextField
          value={value}
          slotProps={{
            htmlInput: { height: '44px' },
          }}
          sx={{
            '& .MuiInputBase-root': {
              height: '44px',
            },
          }}
          type={type}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
      )}
    </StyledTableCell>
  )
}

export default InvoiceEditTableCell
