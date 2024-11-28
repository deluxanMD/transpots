import { styled, TableBody, TableRow } from '@mui/material'
import { EquipmentType, Task, TripDetail } from '../../../trip.types'
import TripDetailsTableCell from '../../trip-details-table-cell/trip-details-table-cell'
import { DateTime } from 'luxon'
import { formatAddress } from '../../../trip.utils'
import Close from '../../../../../assets/icons/Close.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../../store'
import { closeVehicle } from '../../../../../store/trips/trips.slice'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const TripDetailsTableBody = () => {
  const rows = useSelector((state: RootState) => state.trips.rows)
  const dispatch = useDispatch()

  const handleClose = (
    id: string,
    task: Task,
    equipmentType: EquipmentType
  ) => {
    dispatch(closeVehicle({ id, task, equipmentType }))
  }

  return (
    <TableBody>
      {rows.map((row: TripDetail, index) => {
        const { company, date, equipment, estimateDate, task } = row
        return (
          <StyledTableRow key={index}>
            <TripDetailsTableCell
              value1={task}
              textTransform="capitalize"
              minWidth={140}
            />
            <TripDetailsTableCell
              value1={equipment.equipmentId}
              value2={equipment.equipmentType}
              minWidth={120}
            />
            <TripDetailsTableCell
              value1={DateTime.fromISO(date).toISODate() ?? ''}
              value2={DateTime.fromISO(date).toFormat('hh:mm')}
              minWidth={150}
            />
            <TripDetailsTableCell
              value1={DateTime.fromISO(estimateDate).toISODate() ?? ''}
              value2={DateTime.fromISO(estimateDate).toFormat('hh:mm')}
              minWidth={150}
            />
            <TripDetailsTableCell
              value1={company.companyName}
              value2={formatAddress(company.address)}
              minWidth={260}
            />
            <TripDetailsTableCell align="right" minWidth={150}>
              <img
                src={Close}
                alt="action icon"
                width={27}
                height={27}
                onClick={() =>
                  handleClose(
                    equipment.equipmentId,
                    task,
                    equipment.equipmentType
                  )
                }
              />
            </TripDetailsTableCell>
          </StyledTableRow>
        )
      })}
    </TableBody>
  )
}

export default TripDetailsTableBody
