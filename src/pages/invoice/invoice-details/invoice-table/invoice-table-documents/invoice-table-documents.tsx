import {
  Button,
  Stack,
  styled,
  TableCell,
  tableCellClasses,
  TypographyProps,
} from '@mui/material'
import Plus from '../../../../../assets/icons/Plus Button.png'

type InvoiceTableCellProps = {
  disabled?: boolean
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

const InvoiceTableDocuments = ({ minWidth, align }: InvoiceTableCellProps) => {
  return (
    <StyledTableCell sx={{ minWidth }} align={align}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <img src={Plus} alt="plus" width={34} height={34} />
        <Button
          sx={{
            height: '36px',
            borderRadius: '6px',
            textTransform: 'capitalize',
          }}
          variant="contained"
        >
          View
        </Button>
      </Stack>
    </StyledTableCell>
  )
}

export default InvoiceTableDocuments
