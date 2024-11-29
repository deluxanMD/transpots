import { Stack, Typography } from '@mui/material'
import { Tractor } from '../../trip.types'
import RightArrowCircle from '../../../../assets/icons/RightArrowCircle.png'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTractor } from '../../../../store/trips/trips.slice'
import { RootState } from '../../../../store'
import { ListItemContainer } from '../../trip.styles'

const TripTractorsListItem = ({ tractorId }: Tractor) => {
  const rows = useSelector((state: RootState) => state.trips.rows)
  const dispatch = useDispatch()

  const isSelected = useMemo(
    () => rows.some((row) => row.equipment.equipmentId === tractorId),
    [rows, tractorId]
  )

  const handleTractorSelection = () => {
    dispatch(addTractor({ tractorId }))
  }

  return (
    <ListItemContainer
      sx={{
        bgcolor: 'secondary.light',
        opacity: isSelected ? '60%' : '100%',
        cursor: 'pointer',
      }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      onClick={handleTractorSelection}
    >
      <Stack>
        <Typography fontWeight={700}>{tractorId}</Typography>
        <Typography>Tractor</Typography>
      </Stack>
      {!isSelected && (
        <img
          src={RightArrowCircle}
          alt="right arrow circle"
          width={24}
          height={24}
          style={{ cursor: 'pointer' }}
        />
      )}
    </ListItemContainer>
  )
}

export default TripTractorsListItem
