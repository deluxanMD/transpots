import { Stack } from '@mui/material'
import { Order } from '../../pages/order/order-selection/order-selection.constant'
import OrderCard from './order-card/order-card.component'

const OrderCardList = ({ orders }: { orders: Order[] }) => {
  return (
    <Stack spacing={1} mt={2}>
      {orders.map((order) => (
        <OrderCard key={order.orderId} {...order} />
      ))}
    </Stack>
  )
}

export default OrderCardList
