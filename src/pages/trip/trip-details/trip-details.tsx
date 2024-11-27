import { Stack } from '@mui/material'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'
import TripDetailsTable from './trip-details-table/trip-details-table'
import SelectDriver from '../../../components/select-driver/select-driver.component'

const TripDetails = () => {
  const handleEditTrip = () => {
    console.log('Edit Trip')
  }

  const handleDeleteTrip = () => {
    console.log('Delete Trip')
  }

  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      <Stack spacing={2} mt={1}>
        <div style={{ marginLeft: '36px' }}>
          <SelectDriver drivers={['Shri P', 'David Cho', 'Rajan Balan']} />
        </div>
        <div style={{ minHeight: '100vh' }}>
          <TripDetailsTable />
        </div>
      </Stack>
      <ActionButtons
        primaryBtnText="Edit Trip"
        dangerBtnText="Delete Trip"
        handlePrimaryBtn={handleEditTrip}
        handleDangerBtn={handleDeleteTrip}
      />
    </Stack>
  )
}

export default TripDetails
