import { activeOrders, newOrders, tabs } from './order-selection.constant'
import OrderCardList from '../../../components/order-card-list/order-card-list.component'
import React from 'react'
import TabPanel from '../../../components/tabs/tab-panel/tab-panel.component'
import BasicTabsWithSearch from '../../../components/tabs/basic-tabs-with-search/basic-tabs-with-search.component'

const OrderSelection = () => {
  const [tabsValue, setTabsValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
  }

  return (
    <BasicTabsWithSearch
      tabs={tabs}
      value={tabsValue}
      handleChange={handleChange}
    >
      <TabPanel value={tabsValue} index={0}>
        <OrderCardList orders={newOrders} />
      </TabPanel>
      <TabPanel value={tabsValue} index={1}>
        <OrderCardList orders={activeOrders} />
      </TabPanel>
    </BasicTabsWithSearch>
  )
}

export default OrderSelection
