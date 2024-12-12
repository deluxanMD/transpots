import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import BasicTabs from '../../../../../components/tabs/basic-tabs/basic-tabs.component'
import { invoiceTimelineTabs } from '../invoice-dialog.constants'
import TabPanel from '../../../../../components/tabs/tab-panel/tab-panel.component'
import InvoiceDialogTimelineTracking from './invoice-dialog-timeline-tracking/invoice-dialog-timeline-tracking'
import InvoiceDialogTimelineInvoice from './invoice-dialog-timeline-invoice/invoice-dialog-timeline-invoice'

const InvoiceDialogTimeline = () => {
  const [tabsValue, setTabsValue] = React.useState(0)
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
  }

  return (
    <Box
      sx={{ height: isSm ? 'auto' : '90vh', borderRight: '1px solid #D9D9D9' }}
    >
      <BasicTabs
        tabs={invoiceTimelineTabs}
        value={tabsValue}
        handleChange={handleChange}
        hideDivider
      >
        <TabPanel value={tabsValue} index={0}>
          <InvoiceDialogTimelineTracking />
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          <InvoiceDialogTimelineInvoice />
        </TabPanel>
      </BasicTabs>
    </Box>
  )
}

export default InvoiceDialogTimeline
