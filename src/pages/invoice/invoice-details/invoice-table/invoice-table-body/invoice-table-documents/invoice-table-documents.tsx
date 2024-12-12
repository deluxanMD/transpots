import { Button, Stack, TypographyProps } from '@mui/material'
import Plus from '../../../../../../assets/icons/Plus Button.png'
import { StyledTableCell } from '../invoice-table-body'

type InvoiceTableCellProps = {
  disabled?: boolean
} & TypographyProps

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
