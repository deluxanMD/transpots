import { Stack } from '@mui/material'
import TripTrailersListItem from './trip-trailers-list-item/trip-trailers-list-item'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'

const TripTrailersList = () => {
  const trailers = useSelector((state: RootState) => state.trips.trailers)

  return (
    <Stack spacing={1.5} marginTop={'12px'}>
      {trailers.map(({ trailerId }) => (
        <TripTrailersListItem key={trailerId} trailerId={trailerId} />
      ))}
    </Stack>
  )
}

export default TripTrailersList
