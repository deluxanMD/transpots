import { SelectChangeEvent, Stack } from '@mui/material'
import ActionButtons from '../../../components/action-buttons/action-buttons.component'
import TripDetailsTable from './trip-details-table/trip-details-table'
import SelectField from '../../../components/select-field/select-field.component'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TripDetails = () => {
  const rows = useSelector((state: RootState) => state.trips.rows)
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value as string)
  }

  const handleCancel = () => {
    console.log('Edit Trip')
  }

  const handleSend = () => {
    navigate('/')
  }

  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      <Stack spacing={2} mt={1}>
        <div style={{ marginLeft: '36px' }}>
          <SelectField
            options={['Shri P', 'David Cho', 'Rajan Balan']}
            label="Select Driver"
            value={value === '' ? 'Select Driver' : value}
            onChange={handleChange}
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
