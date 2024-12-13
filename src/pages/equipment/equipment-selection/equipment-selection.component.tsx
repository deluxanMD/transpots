import React, { SyntheticEvent, useState } from 'react'
import BasicTabsWithSearch from '../../../components/tabs/basic-tabs-with-search/basic-tabs-with-search.component'
import { equipmentTabs } from '../equipment.constants'
import TabPanel from '../../../components/tabs/tab-panel/tab-panel.component'
import EquipmentSelectionList from './equipment-selection-list/equipment-selection-list.component'
import EquipmentAddButton from './equipment-add-button/equipment-add-button.component'
import { Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { selectTab } from '../../../store/equipments/equipments.slice'

const EquipmentSelection = () => {
  const [tabsValue, setTabsValue] = useState(0)
  const dispatch = useDispatch()

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
    dispatch(selectTab({ tab: tabsValue === 0 ? 'tractor' : 'trailer' }))
  }

  return (
    <>
      <BasicTabsWithSearch
        tabs={equipmentTabs}
        value={tabsValue}
        handleChange={handleChange}
      >
        <TabPanel value={tabsValue} index={0}>
          <Stack
            justifyContent="space-between"
            sx={{ minHeight: 'calc(100vh - 200px)' }}
          >
            <EquipmentSelectionList selectedTab="tractor" />
            <EquipmentAddButton />
          </Stack>
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          <Stack
            justifyContent="space-between"
            sx={{ minHeight: 'calc(100vh - 200px)' }}
          >
            <EquipmentSelectionList selectedTab="trailer" />
            <EquipmentAddButton />
          </Stack>
        </TabPanel>
      </BasicTabsWithSearch>
    </>
  )
}

export default EquipmentSelection
