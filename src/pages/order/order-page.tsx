import { SecondColumn, ThirdColumn } from './order-page.styles'
import OrderSelection from './order-selection/order-selection.component'
import OrderDetails from './order-details/order-details.component'

const OrderPage = () => {
  return (
    <>
      <SecondColumn size={2.5} sx={{ height: '100vh' }}>
        <OrderSelection />
      </SecondColumn>
      <ThirdColumn size={8}>
        <OrderDetails />
      </ThirdColumn>
    </>
  )
}

export default OrderPage
