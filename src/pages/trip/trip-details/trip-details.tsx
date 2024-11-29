import { Stack } from '@mui/material'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'
import TripDetailsTable from './trip-details-table/trip-details-table'
import SelectField from '../../../components/select-field/select-field.component'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const TripDetails = () => {
  const rows = useSelector((state: RootState) => state.trips.rows)

  const handleCancel = () => {
    console.log('Edit Trip')
  }

  const handleSend = () => {
    console.log('Delete Trip')
  }

  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      <Stack spacing={2} mt={1}>
        <div style={{ marginLeft: '36px' }}>
          <SelectField
            options={['Shri P', 'David Cho', 'Rajan Balan']}
            label="Select Driver"
          />
        </div>
        <div style={{ minHeight: '100vh' }}>
          <TripDetailsTable />
        </div>
      </Stack>
      {rows.length > 0 && (
        <ActionButtons
          firstBtnProps={{
            title: 'Cancel',
            onClick: handleCancel,
            bgColor: 'secondary.main',
          }}
          secondBtnProps={{
            title: 'Send to Driver',
            onClick: handleSend,
            bgColor: 'primary.main',
          }}
        />
      )}
    </Stack>
  )
}

export default TripDetails
