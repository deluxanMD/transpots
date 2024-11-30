import { Grid2, Typography } from '@mui/material'
import React from 'react'
import BasicTabs from '../../../components/basic-tabs/basic-tabs.component'
import { orderDetailsTabs } from './order-details.constant'
import TabPanel from '../../../components/tab-panel/tab-panel.component'
import OrderDetailsCustomer from './order-details-customer/order-details-customer.component'
import OrderTracking from '../../../components/order-tracking/order-tracking.component'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'
import { useNavigate } from 'react-router-dom'

const OrderDetails = () => {
  const [tabsValue, setTabsValue] = React.useState(0)
  const navigate = useNavigate()

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
  }

  const handleVerifyOrder = () => {
    navigate('verify')
  }

  const handleDeleteOrder = () => {
    console.log('Delete Order')
  }

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <BasicTabs
          tabs={orderDetailsTabs}
          value={tabsValue}
          handleChange={handleChange}
        >
          <Grid2 container>
            <Grid2 size={{ xs: 6, sm: 7, md: 8 }} p={2}>
              <TabPanel value={tabsValue} index={0}>
                <OrderDetailsCustomer />
              </TabPanel>
            </Grid2>
            <Grid2
              size={{ xs: 6, sm: 5, md: 4 }}
              sx={{
                bgcolor: 'secondary.light',
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
      </div>
      <ActionButtons
        firstBtnProps={{ title: 'Verify Order', onClick: handleVerifyOrder }}
        secondBtnProps={{ title: 'Delete Order', onClick: handleDeleteOrder }}
      />
    </>
  )
}

export default OrderDetails
