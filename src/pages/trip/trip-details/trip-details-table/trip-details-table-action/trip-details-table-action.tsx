import { useDispatch } from 'react-redux'
import TripDetailsTableCell from '../../trip-details-table-cell/trip-details-table-cell'
import { EquipmentType, Task, TripDetail } from '../../../trip.types'
import { closeVehicle } from '../../../../../store/trips/trips.slice'
import Close from '../../../../../assets/icons/Close.png'
import DownArrow from '../../../../../assets/icons/DownArrow.png'
import UpArrow from '../../../../../assets/icons/UpArrow.png'
import { Stack } from '@mui/material'

type TripDetailsTableActionProps = {
  currentRow: TripDetail
  prevRow: TripDetail
  nextRow: TripDetail
}

const TripDetailsTableAction = ({
  currentRow,
  prevRow,
  nextRow,
}: TripDetailsTableActionProps) => {
  const dispatch = useDispatch()

  const handleClose = (
    id: string,
    task: Task,
    equipmentType: EquipmentType
  ) => {
    dispatch(closeVehicle({ id, task, equipmentType }))
  }

  return (
    <TripDetailsTableCell align="right" minWidth={150}>
      <Stack spacing={1} direction="row" justifyContent="flex-end">
        {currentRow.task === 'pickup' && prevRow.task === 'pickup' && (
          <img
            src={UpArrow}
            alt="action icon"
            width={40}
            height={27}
            onClick={() =>
              handleClose(
                currentRow.equipment.equipmentId,
                currentRow.task,
                currentRow.equipment.equipmentType
              )
            }
          />
        )}
        {currentRow.task === 'pickup' && nextRow.task === 'pickup' && (
          <img
            src={DownArrow}
            alt="action icon"
            width={40}
            height={27}
            onClick={() =>
              handleClose(
                currentRow.equipment.equipmentId,
                currentRow.task,
                currentRow.equipment.equipmentType
              )
            }
          />
        )}
        <img
          src={Close}
          alt="action icon"
          width={27}
          height={27}
          onClick={() =>
            handleClose(
              currentRow.equipment.equipmentId,
              currentRow.task,
              currentRow.equipment.equipmentType
            )
          }
        />
      </Stack>
    </TripDetailsTableCell>
  )
}

export default TripDetailsTableAction
