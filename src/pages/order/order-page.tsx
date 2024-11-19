import OrderSelection from './order-selection/order-selection.component'
import OrderDetails from './order-details/order-details.component'
import { Grid2 } from '@mui/material'
import MobileOrderSelection from './mobile-order-selection/mobile-order-selection.component'

const OrderPage = () => {
  return (
    <>
      <Grid2
        size={{ xs: 4, md: 2.5 }}
        sx={{ height: '100vh', display: { xs: 'none', sm: 'block' } }}
      >
        <OrderSelection />
      </Grid2>
      <Grid2 size={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <OrderDetails />
      </Grid2>
      <Grid2
        size={12}
        sx={{ height: '100vh', display: { xs: 'block', sm: 'none' } }}
      >
        <MobileOrderSelection />
      </Grid2>
    </>
  )
}

export default OrderPage
