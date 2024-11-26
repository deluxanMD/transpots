import { Timeline, timelineItemClasses } from '@mui/lab'
import OrderTrackingItem from './order-tracking-item/order-tracking-item.component'
import { orderTrackings } from '../../pages/order/order-details/order-details.constant'

const OrderTracking = () => {
  return (
    <Timeline
      sx={{
        minHeight: 'calc(100vh - 100px)',
        overflow: 'hidden',
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {orderTrackings.map((orderTracking, index) => (
        <OrderTrackingItem
          key={`${orderTracking.status}${orderTracking.description}`}
          isLast={orderTrackings.length === index + 1}
          {...orderTracking}
        />
      ))}
    </Timeline>
  )
}

export default OrderTracking
