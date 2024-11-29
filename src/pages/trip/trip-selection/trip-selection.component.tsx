import { TextField } from '@mui/material'
import BasicTabs from '../../../components/basic-tabs/basic-tabs.component'
import TabPanel from '../../../components/tab-panel/tab-panel.component'
import { SyntheticEvent, useState } from 'react'
import { tripTabs } from '../trip.constants'
import TripTractorsList from '../trip-tractors-list/trip-tractors-list'
import TripTrailersList from '../trip-trailers-list/trip-trailers-list'
import TripOrdersList from '../trip-orders-list/trip-orders-list'

const TripSelection = () => {
  const [tabsValue, setTabsValue] = useState(0)

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
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
      <BasicTabs tabs={tripTabs} value={tabsValue} handleChange={handleChange}>
        <TabPanel value={tabsValue} index={0}>
          <TripTractorsList />
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          <TripTrailersList />
        </TabPanel>
        <TabPanel value={tabsValue} index={2}>
          <TripOrdersList />
        </TabPanel>
      </BasicTabs>
    </>
  )
}

export default TripSelection
