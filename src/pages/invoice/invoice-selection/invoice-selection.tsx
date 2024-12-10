import React from 'react'
import BasicTabs from '../../../components/tabs/basic-tabs/basic-tabs.component'
import { invoiceTabs } from '../invoice.constants'
import TabPanel from '../../../components/tabs/tab-panel/tab-panel.component'
import InvoiceToBe from './invoice-to-be/invoice-to-be'
import InvoiceNotPaid from './invoice-not-paid/invoice-not-paid'
import InvoicePaid from './invoice-paid/invoice-paid'
import { useDispatch } from 'react-redux'
import { selectInvoiceTab } from '../../../store/invoices/invoices.slice'

const InvoiceSelection = () => {
  const [tabsValue, setTabsValue] = React.useState(0)
  const dispatch = useDispatch()

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
    dispatch(selectInvoiceTab({ index: newValue }))
  }

  return (
    <BasicTabs tabs={invoiceTabs} value={tabsValue} handleChange={handleChange}>
      <TabPanel value={tabsValue} index={0}>
        <InvoiceToBe />
      </TabPanel>
      <TabPanel value={tabsValue} index={1}>
        <InvoiceNotPaid />
      </TabPanel>
      <TabPanel value={tabsValue} index={2}>
        <InvoicePaid />
      </TabPanel>
    </BasicTabs>
  )
}

export default InvoiceSelection
