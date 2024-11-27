import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { rows } from './trip-details-table.constants'
import { DateTime } from 'luxon'
import TripDetailsTableCell from '../trip-details-table-cell/trip-details-table-cell'
import { formatAddress } from '../../trip.utils'
import { tripTableHeaders } from '../../trip.constants'

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const TripDetailsTable = () => {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {tripTableHeaders.map((header) => (
              <StyledTableCell key={header.id}>{header.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            (
              { company, date, equipment, estimateDate, task, disabled },
              index
            ) => (
              <StyledTableRow key={index}>
                <TripDetailsTableCell
                  disabled={disabled}
                  value1={task}
                  textTransform="capitalize"
                />
                <TripDetailsTableCell
                  disabled={disabled}
                  value1={equipment.equipmentId}
                  value2={equipment.equipmentType}
                />
                <TripDetailsTableCell
                  disabled={disabled}
                  value1={DateTime.fromISO(date).toISODate() ?? ''}
                  value2={DateTime.fromISO(date).toFormat('hh:mm')}
                  minWidth={200}
                />
                <TripDetailsTableCell
                  disabled={disabled}
                  value1={DateTime.fromISO(estimateDate).toISODate() ?? ''}
                  value2={DateTime.fromISO(estimateDate).toFormat('hh:mm')}
                  minWidth={200}
                />
                <TripDetailsTableCell
                  disabled={disabled}
                  value1={company.companyName}
                  value2={formatAddress(company.address)}
                  minWidth={240}
                />
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TripDetailsTable
