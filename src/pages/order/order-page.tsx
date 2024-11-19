import { SecondColumn, ThirdColumn } from './order-page.styles'
import OrderSelection from './order-selection/order-selection.component'
import OrderDetails from './order-details/order-details.component'

const OrderPage = () => {
  return (
    <>
      <SecondColumn
        size={{ xs: 4, md: 2.5 }}
        sx={{ height: '100vh', display: { xs: 'none', sm: 'block' } }}
      >
        <OrderSelection />
      </SecondColumn>
      <ThirdColumn size={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <OrderDetails />
      </ThirdColumn>
    </>
  )
}

export default OrderPage
