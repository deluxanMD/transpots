import { TextField } from '@mui/material'
import BasicTabs from '../../../components/basic-tabs/basic-tabs.component'
import { activeOrders, newOrders, tabs } from './order-selection.constant'
import OrderCardList from '../../../components/order-card-list/order-card-list.component'
import React from 'react'
import TabPanel from '../../../components/tab-panel/tab-panel.component'

const OrderSelection = () => {
  const [tabsValue, setTabsValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
  }

  return (
    <>
      <TextField
        type="text"
        placeholder="Search"
        variant="outlined"
        size="small"
        sx={{ width: '100%' }}
      />
      <BasicTabs tabs={tabs} value={tabsValue} handleChange={handleChange}>
        <TabPanel value={tabsValue} index={0}>
          <OrderCardList orders={newOrders} />
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          <OrderCardList orders={activeOrders} />
        </TabPanel>
      </BasicTabs>
    </>
  )
}

export default OrderSelection
