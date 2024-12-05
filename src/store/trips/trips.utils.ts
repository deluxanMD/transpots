import { Task, TripDetail } from '../../pages/trip/trip.types'
import { TripsState } from './trips.slice'

export const removeHookAndDrop = (
  state: TripsState,
  id: string,
  task: Task
) => {
  if (task === 'hook') {
    state.rows = state.rows.filter((row) => row.equipment.equipmentId !== id)
  }

  if (task === 'drop') {
    state.rows = state.rows.map((row) =>
      row.equipment.equipmentId === id && row.task === 'drop'
        ? { ...row, task: 'delivery' }
        : row
    )
  }
}

export const didAlreadyExist = (state: TripsState, item: TripDetail) => {
  return state.rows.some(
    (row) => row.equipment.orderItemId === item.equipment.orderItemId
  )
}

export const removeOrderItem = (state: TripsState, orderItemId: string) => {
  state.rows = state.rows.filter(
    (row) => row.equipment.orderItemId !== orderItemId
  )
}
