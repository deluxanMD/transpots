import { Timeline, timelineItemClasses } from '@mui/lab'
import OrderTrackingItem from './order-tracking-item/order-tracking-item.component'
import { orderTrackings } from '../../pages/order/order-details/order-details.constant'

const OrderTracking = () => {
  return (
    <Timeline
      sx={{
        minHeight: 'calc(100vh - 130px)',
        overflow: 'hidden',
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {orderTrackings.map((orderTracking) => (
        <OrderTrackingItem
          key={`${orderTracking.status}${orderTracking.description}`}
          {...orderTracking}
        />
      ))}
    </Timeline>
  )
}

export default OrderTracking
