import React, { createContext } from 'react'
import { Order } from './order-selection/order-selection.constant'

export type OrderPageProviderValue = {
  order: Order
  handleSelectOrder: (order: Order) => void
}

type OrderPageProviderProps = {
  value: OrderPageProviderValue
  children: React.ReactNode
}

export const OrderPageContext = createContext<OrderPageProviderValue | null>(
  null
)

const OrderPageProvider = ({ value, children }: OrderPageProviderProps) => {
  return (
    <OrderPageContext.Provider value={value}>
      {children}
    </OrderPageContext.Provider>
  )
}

export default OrderPageProvider
