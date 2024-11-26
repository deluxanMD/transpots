import OrderSelection from './order-selection/order-selection.component'
import OrderDetails from './order-details/order-details.component'
import { Grid2 } from '@mui/material'
import MobileOrderSelection from './mobile-order-selection/mobile-order-selection.component'
import OrderPageProvider from './order-page.provider'
import { useState } from 'react'
import { Order } from './order-selection/order-selection.constant'

const OrderPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order>({
    orderId: '',
    loadId: '',
    customer: '',
    status: 'Assigned',
  })

  const handleSelectOrder = (order: Order) => {
    setSelectedOrder(order)
  }

  return (
    <OrderPageProvider value={{ order: selectedOrder, handleSelectOrder }}>
      <Grid2
        size={{ sm: 4, lg: 3 }}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <OrderSelection />
      </Grid2>
      <Grid2 size={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <OrderDetails />
      </Grid2>
      <Grid2 size={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <MobileOrderSelection />
      </Grid2>
    </OrderPageProvider>
  )
}

export default OrderPage
