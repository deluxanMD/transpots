import OrderSelection from './order-selection/order-selection.component'
import OrderDetails from './order-details/order-details.component'
import MobileOrderSelection from './mobile-order-selection/mobile-order-selection.component'
import OrderPageProvider from './order-page.provider'
import { useState } from 'react'
import { Order } from './order-selection/order-selection.constant'
import TwoColumnLayout from '../../layouts/two-column-layout/two-column-layout'

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
      <TwoColumnLayout>
        <OrderSelection />
        <OrderDetails />
        <MobileOrderSelection />
      </TwoColumnLayout>
    </OrderPageProvider>
  )
}

export default OrderPage
