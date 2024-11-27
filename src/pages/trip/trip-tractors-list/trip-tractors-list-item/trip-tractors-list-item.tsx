import { Stack, Typography } from '@mui/material'
import { Tractor } from '../../trip.types'
import { TractorsListItemContainer } from './trip-tractors-list-item.styles'
import RightArrowCircle from '../../../../assets/icons/RightArrowCircle.png'

const TripTractorsListItem = ({ tractorId }: Tractor) => {
  return (
    <TractorsListItemContainer
      sx={{ bgcolor: 'secondary.light' }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack>
        <Typography fontWeight={700}>{tractorId}</Typography>
        <Typography>Tractor</Typography>
      </Stack>
      <img
        src={RightArrowCircle}
        alt="right arrow circle"
        width={24}
        height={24}
        style={{ cursor: 'pointer' }}
      />
    </TractorsListItemContainer>
  )
}

export default TripTractorsListItem
