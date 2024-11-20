import { Divider, Grid2, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { OrderPageContext } from '../order-page.provider'
import BasicTabs from '../../../components/basic-tabs/basic-tabs.component'
import { orderDetailsTabs } from './order-details.constant'
import TabPanel from '../../../components/tab-panel/tab-panel.component'
import OrderDetailsCustomer from './order-details-customer/order-details-customer.component'
import OrderTracking from '../../../components/order-tracking/order-tracking.component'

const OrderDetails = () => {
  const value = useContext(OrderPageContext)
  const [tabsValue, setTabsValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
  }

  return (
    <Paper elevation={4} sx={{ pt: 2, pl: 2, height: '100%' }}>
      <BasicTabs
        tabs={orderDetailsTabs}
        value={tabsValue}
        handleChange={handleChange}
      >
        <Divider sx={{ border: 0.6 }} />
        <Grid2 container>
          <Grid2 size={7}>
            <TabPanel value={tabsValue} index={0}>
              <OrderDetailsCustomer />
            </TabPanel>
          </Grid2>
          <Grid2
            size={5}
            sx={{
              bgcolor: 'secondary.light',
              height: '100vh',
              overflow: 'hidden',
            }}
          >
            <Typography
              pt={2}
              px={2}
              fontWeight={700}
              sx={{ color: 'secondary.dark' }}
            >
              Tracking
            </Typography>
            <OrderTracking />
          </Grid2>
        </Grid2>
      </BasicTabs>
    </Paper>
  )
}

export default OrderDetails
