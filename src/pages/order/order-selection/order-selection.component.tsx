import { Paper, TextField } from '@mui/material'
import BasicTabs from '../../../components/basic-tabs/basic-tabs.component'
import { orders, tabs } from './order-selection.constant'
import OrderCardList from '../../../components/order-card-list/order-card-list.component'
import React from 'react'

const OrderSelection = () => {
  const [tabsValue, setTabsValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
  }

  return (
    <Paper elevation={4} sx={{ height: '100%', p: 2 }}>
      <TextField
        type="text"
        placeholder="Search"
        variant="outlined"
        size="small"
        sx={{ width: '100%' }}
      />
      <BasicTabs tabs={tabs} value={tabsValue} handleChange={handleChange}>
        <OrderCardList orders={orders} />
      </BasicTabs>
    </Paper>
  )
}

export default OrderSelection
