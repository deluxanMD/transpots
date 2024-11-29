import {
  styled,
  TableCell,
  tableCellClasses,
  Typography,
  TypographyProps,
} from '@mui/material'
import { ReactNode } from 'react'

type TripDetailsTableCellProps = {
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

const TripDetailsTableCell = ({
  disabled,
  value1,
  value2,
  minWidth,
  children,
  align,
  ...rest
}: TripDetailsTableCellProps) => {
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
          fontWeight: disabled ? 'light' : 'normal',
        }}
      >
        {value2}
      </Typography>
      {children}
    </StyledTableCell>
  )
}

export default TripDetailsTableCell
