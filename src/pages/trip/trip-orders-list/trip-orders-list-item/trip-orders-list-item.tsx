import { Order } from '../../trip.types'
import TripOrdersTitle from '../trip-orders-title/trip-orders-title'
import TripOrdersItem from '../trip-orders-item/trip-orders-item'

const TripOrdersListItem = (order: Order) => {
  return (
    <>
      <TripOrdersTitle {...order} />
      <TripOrdersItem {...order} />
    </>
  )
}

export default TripOrdersListItem
