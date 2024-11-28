import { Task } from '../../pages/trip/trip.types'
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
    state.rows = state.rows.filter(
      (row) => row.equipment.equipmentId !== id || row.task !== task
    )
  }
}
