import { Stack } from '@mui/material'
import { trailers } from '../trip.constants'
import TripTrailersListItem from './trip-trailers-list-item/trip-trailers-list-item'

const TripTrailersList = () => {
  return (
    <Stack spacing={1.5} marginTop={'12px'}>
      {trailers.map(({ trailerId }) => (
        <TripTrailersListItem key={trailerId} trailerId={trailerId} />
      ))}
    </Stack>
  )
}

export default TripTrailersList
