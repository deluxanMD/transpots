import React from 'react'
import BasicTabs from '../../../components/basic-tabs/basic-tabs.component'
import { verifyOrderTabs } from '../verify-order.constant'
import TabPanel from '../../../components/tab-panel/tab-panel.component'
import LoadCustomerForm from '../../../components/forms/load-customer-form/load-customer-form.component'
import LoadRateForm from '../../../components/forms/load-rate-form/load-rate-form.component'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'
import LoadPickupForm from '../../../components/forms/load-pickup-form/load-pickup-form.component'
import LoadDeliveryForm from '../../../components/forms/load-delivery-form/load-delivery-form.component'
import LoadNotesForm from '../../../components/forms/load-notes-form/load-notes-form.component'

const VerifyOrderForm = () => {
  const [tabsValue, setTabsValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
  }

  const deleteOrder = () => {
    console.log('Delete order')
  }

  const save = () => {
    console.log('Save')
  }

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <BasicTabs
          tabs={verifyOrderTabs}
          value={tabsValue}
          handleChange={handleChange}
        >
          <TabPanel value={tabsValue} index={0}>
            <LoadCustomerForm />
          </TabPanel>
          <TabPanel value={tabsValue} index={1}>
            <LoadRateForm />
          </TabPanel>
          <TabPanel value={tabsValue} index={2}>
            <LoadPickupForm />
          </TabPanel>
          <TabPanel value={tabsValue} index={3}>
            <LoadDeliveryForm />
          </TabPanel>
          <TabPanel value={tabsValue} index={4}>
            <LoadNotesForm />
          </TabPanel>
        </BasicTabs>
      </div>
      <ActionButtons
        firstBtnProps={{
          title: 'Delete Order',
          bgColor: 'error.main',
          onClick: deleteOrder,
        }}
        secondBtnProps={{
          title: 'Save',
          bgColor: 'primary.main',
          onClick: save,
        }}
      />
    </>
  )
}

export default VerifyOrderForm
