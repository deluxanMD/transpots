import { useDispatch } from 'react-redux'
import TripDetailsTableCell from '../../trip-details-table-cell/trip-details-table-cell'
import { EquipmentType, Task, TripDetail } from '../../../trip.types'
import {
  closeOrderItem,
  closeVehicle,
} from '../../../../../store/trips/trips.slice'
import Close from '../../../../../assets/icons/Close.png'
import DownArrow from '../../../../../assets/icons/DownArrow.png'
import UpArrow from '../../../../../assets/icons/UpArrow.png'
import { Stack } from '@mui/material'
import { useTripDetailsAction } from './trip-details-table-action.hooks'

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
  const { hasCloseIcon } = useTripDetailsAction(currentRow)

  const handleCloseVehicle = (
    id: string,
    task: Task,
    equipmentType: EquipmentType
  ) => {
    dispatch(closeVehicle({ id, task, equipmentType }))
  }

  const handleCloseOrderItem = (orderItemId: string) => {
    dispatch(closeOrderItem({ orderItemId }))
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
            style={{ cursor: 'pointer' }}
          />
        )}
        {currentRow.task === 'pickup' && nextRow.task === 'pickup' && (
          <img
            src={DownArrow}
            alt="action icon"
            width={40}
            height={27}
            style={{ cursor: 'pointer' }}
          />
        )}
        {hasCloseIcon && (
          <img
            src={Close}
            alt="action icon"
            width={27}
            height={27}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (currentRow.task === 'hook' || currentRow.task === 'drop') {
                handleCloseVehicle(
                  currentRow.equipment.equipmentId,
                  currentRow.task,
                  currentRow.equipment.equipmentType
                )
              } else {
                !!currentRow.equipment.orderItemId &&
                  handleCloseOrderItem(currentRow.equipment.orderItemId)
              }
            }}
          />
        )}
      </Stack>
    </TripDetailsTableCell>
  )
}

export default TripDetailsTableAction
