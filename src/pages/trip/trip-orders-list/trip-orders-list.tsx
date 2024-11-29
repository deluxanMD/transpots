import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { Stack } from '@mui/material'
import TripOrdersListItem from './trip-orders-list-item/trip-orders-list-item'

const TripOrdersList = () => {
  const orders = useSelector((state: RootState) => state.trips.orders)

  return (
    <Stack spacing={1.5} marginTop={'12px'}>
      {orders.map((order) => (
        <TripOrdersListItem key={order.orderId} {...order} />
      ))}
    </Stack>
  )
}

export default TripOrdersList
