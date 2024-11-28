import { Stack } from '@mui/material'
// import { tractors } from '../trip.constants'
import TripTractorsListItem from './trip-tractors-list-item/trip-tractors-list-item'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const TripTractorsList = () => {
  const tractors = useSelector((state: RootState) => state.trips.tractors)

  return (
    <Stack spacing={1.5} marginTop={'12px'}>
      {tractors.map(({ tractorId }) => (
        <TripTractorsListItem key={tractorId} tractorId={tractorId} />
      ))}
    </Stack>
  )
}

export default TripTractorsList
