import {
  styled,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
} from '@mui/material'
import { invoiceEditTableHeaders } from '../../../invoice.constants'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    padding: '4px 12px',
    fontWeight: 300,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '4px 12px',
  },
}))

const InvoiceEditTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {invoiceEditTableHeaders.map((header, index) => {
          switch (index) {
            case 0:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 150 }}>
                  {header.label}
                </StyledTableCell>
              )
            case 1:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 250 }}>
                  {header.label}
                </StyledTableCell>
              )
            case 2:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 150 }}>
                  {header.label}
                </StyledTableCell>
              )
            case 3:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 120 }}>
                  {header.label}
                </StyledTableCell>
              )
            case 4:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 150 }}>
                  {header.label}
                </StyledTableCell>
              )
            case 5:
              return (
                <StyledTableCell key={header.id}>
                  {header.label}
                </StyledTableCell>
              )
            case 6:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 180 }}>
                  {header.label}
                </StyledTableCell>
              )
          }
        })}
      </TableRow>
    </TableHead>
  )
}

export default InvoiceEditTableHeader
