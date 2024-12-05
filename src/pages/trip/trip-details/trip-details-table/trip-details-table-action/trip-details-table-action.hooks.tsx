import { useMemo } from 'react'
import { TripDetail } from '../../../trip.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store'

export const useTripDetailsAction = (row: TripDetail) => {
  const {
    equipment: { equipmentType },
  } = row
  const rows = useSelector((state: RootState) => state.trips.rows)

  const trailersLength = rows.filter(
    (row) => row.equipment.equipmentType === 'Trailer'
  ).length

  const ordersLength = rows.filter(
    (row) => row.equipment.equipmentType === 'Order'
  ).length

  const hasCloseIcon = useMemo(() => {
    if (equipmentType === 'Tractor') {
      return trailersLength === 0
    }

    if (equipmentType === 'Trailer') {
      return ordersLength === 0
    }

    return true
  }, [equipmentType, ordersLength, trailersLength])

  return { hasCloseIcon }
}
