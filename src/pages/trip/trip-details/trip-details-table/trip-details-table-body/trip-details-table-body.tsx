import { styled, TableBody, TableRow } from '@mui/material'
import { Task, TripDetail } from '../../../trip.types'
import TripDetailsTableCell from '../../trip-details-table-cell/trip-details-table-cell'
import { DateTime } from 'luxon'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store'
import TripDetailsTableAction from '../trip-details-table-action/trip-details-table-action'
import TripDetailsTableCompany from '../trip-details-table-company/trip-details-table-company'

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {},
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const TripDetailsTableBody = () => {
  const rows = useSelector((state: RootState) => state.trips.rows)

  const getBgColor = (task: Task) => {
    console.log(task)
    switch (task) {
      case 'pickup':
        return 'primary.light'
      case 'delivery':
        return 'success.light'
      default:
        return 'secondary.light'
    }
  }

  return (
    <TableBody>
      {rows.map((row: TripDetail, index) => {
        const { company, date, equipment, estimateDate, task } = row
        return (
          <StyledTableRow key={index} sx={{ bgcolor: getBgColor(task) }}>
            <TripDetailsTableCell
              value1={task}
              textTransform="capitalize"
              minWidth={140}
              {...row}
            />
            <TripDetailsTableCell
              value1={equipment.equipmentId}
              value2={equipment.equipmentType}
              minWidth={120}
              {...row}
            />
            <TripDetailsTableCell
              value1={DateTime.fromISO(date).toISODate() ?? ''}
              value2={DateTime.fromISO(date).toFormat('hh:mm')}
              minWidth={150}
              {...row}
            />
            <TripDetailsTableCell
              value1={DateTime.fromISO(estimateDate).toISODate() ?? ''}
              value2={DateTime.fromISO(estimateDate).toFormat('hh:mm')}
              minWidth={150}
              {...row}
            />
            <TripDetailsTableCompany {...company} />
            <TripDetailsTableAction
              currentRow={row}
              prevRow={rows[index - 1]}
              nextRow={rows[index + 1]}
            />
          </StyledTableRow>
        )
      })}
    </TableBody>
  )
}

export default TripDetailsTableBody
