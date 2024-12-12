import { styled, Switch, TableCell, tableCellClasses } from '@mui/material'

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

const InvoiceEditTableTax = ({ checked }: { checked: boolean }) => {
  return (
    <StyledTableCell sx={{ minWidth: 150 }}>
      <Switch checked={checked} />
    </StyledTableCell>
  )
}

export default InvoiceEditTableTax
