import React from 'react'
import BasicTabs from '../../../components/tabs/basic-tabs/basic-tabs.component'
import { equipmentDetailTabs } from '../equipment.constants'
import TabPanel from '../../../components/tabs/tab-panel/tab-panel.component'
import EquipmentRegistration from './equipment-registration/equipment-registration.component'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'
import EquipmentDeleteDialog from '../equipment-delete-dialog/equipment-delete-dialog.component'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const EquipmentDetails = () => {
  const [tabsValue, setTabsValue] = React.useState(0)

  const [deleteOpen, setDeleteOpen] = React.useState(false)

  const { selectedEquipment } = useSelector(
    (state: RootState) => state.equipments
  )

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue)
  }

  const handleView = () => {
    console.log('view')
  }

  const handleDelete = () => {
    setDeleteOpen(true)
  }

  return (
    <div>
      <div style={{ minHeight: '100%', height: 'calc(100vh - 100px)' }}>
        <BasicTabs
          tabs={equipmentDetailTabs}
          value={tabsValue}
          handleChange={handleChange}
        >
          <TabPanel value={tabsValue} index={0}>
            <EquipmentRegistration />
          </TabPanel>
          <TabPanel value={tabsValue} index={1}>
            <EquipmentRegistration />
          </TabPanel>
          <TabPanel value={tabsValue} index={2}>
            <EquipmentRegistration />
          </TabPanel>
          <TabPanel value={tabsValue} index={3}>
            <EquipmentRegistration />
          </TabPanel>
        </BasicTabs>
      </div>
      <ActionButtons
        firstBtnProps={{
          title: 'View',
          onClick: handleView,
          disabled: selectedEquipment.id === '',
          bgColor:
            selectedEquipment.id === '' ? 'secondary.main' : 'primary.main',
        }}
        secondBtnProps={{
          title: 'Delete',
          onClick: handleDelete,
          disabled: selectedEquipment.id === '',
          bgColor:
            selectedEquipment.id === '' ? 'secondary.main' : 'error.main',
        }}
      />
      <EquipmentDeleteDialog
        open={deleteOpen}
        handleClose={() => setDeleteOpen(false)}
      />
    </div>
  )
}

export default EquipmentDetails
