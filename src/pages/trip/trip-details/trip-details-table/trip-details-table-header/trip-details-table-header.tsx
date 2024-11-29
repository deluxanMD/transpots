import { tripTableHeaders } from '../../../trip.constants'
import {
  styled,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
} from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    padding: '4px 12px',
    fontWeight: 400,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '4px 12px',
  },
}))

const TripDetailsTableHeaders = () => {
  return (
    <TableHead>
      <TableRow>
        {tripTableHeaders.map((header, index) => {
          switch (index) {
            case 0:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 140 }}>
                  {header.label}
                </StyledTableCell>
              )
            case 1:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 120 }}>
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
                <StyledTableCell key={header.id} sx={{ minWidth: 150 }}>
                  {header.label}
                </StyledTableCell>
              )
            case 4:
              return (
                <StyledTableCell key={header.id} sx={{ minWidth: 260 }}>
                  {header.label}
                </StyledTableCell>
              )
            case 5:
              return (
                <StyledTableCell
                  key={header.id}
                  sx={{ minWidth: 150 }}
                  align="right"
                >
                  {header.label}
                </StyledTableCell>
              )
          }
        })}
      </TableRow>
    </TableHead>
  )
}

export default TripDetailsTableHeaders
