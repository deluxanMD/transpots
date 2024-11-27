import {
  styled,
  TableCell,
  tableCellClasses,
  Typography,
  TypographyProps,
  useTheme,
} from '@mui/material'

type TripDetailsTableCellProps = {
  disabled?: boolean
  value1: string
  value2?: string
} & TypographyProps

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: '4px 12px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '4px 12px',
  },
}))

const TripDetailsTableCell = ({
  disabled,
  value1,
  value2,
  minWidth,
  ...rest
}: TripDetailsTableCellProps) => {
  const theme = useTheme()

  return (
    <StyledTableCell sx={{ minWidth }}>
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
    </StyledTableCell>
  )
}

export default TripDetailsTableCell
