import { Stack } from '@mui/material'
import { tractors } from '../trip.constants'
import TripTractorsListItem from './trip-tractors-list-item/trip-tractors-list-item'

const TripTractorsList = () => {
  return (
    <Stack spacing={1.5} marginTop={'12px'}>
      {tractors.map(({ tractorId }) => (
        <TripTractorsListItem key={tractorId} tractorId={tractorId} />
      ))}
    </Stack>
  )
}

export default TripTractorsList
