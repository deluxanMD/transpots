import { useMemo } from 'react'
import { Trailer, TripsError } from '../../trip.types'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTrailer,
  clearError,
  makeError,
} from '../../../../store/trips/trips.slice'
import { Alert, Snackbar, Stack, Typography } from '@mui/material'
import RightArrowCircle from '../../../../assets/icons/RightArrowCircle.png'
import { RootState } from '../../../../store'
import { ListItemContainer } from '../../trip.styles'

const TripTrailersListItem = ({ trailerId }: Trailer) => {
  const rows = useSelector((state: RootState) => state.trips.rows)
  const error = useSelector((state: RootState) => state.trips.error)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(clearError())
  }

  const isSelected = useMemo(
    () => rows.some((row) => row.equipment.equipmentId === trailerId),
    [rows, trailerId]
  )

  const handleTrailerSelection = () => {
    const isTractorAvailable = rows.some(
      (row) => row.equipment.equipmentType === 'Tractor'
    )

    if (!isTractorAvailable) {
      const error: TripsError = {
        open: true,
        message: 'Please add a tractor',
        variant: 'error',
      }
      dispatch(makeError({ error }))
    } else {
      dispatch(addTrailer({ trailerId }))
    }
  }

  return (
    <>
      <ListItemContainer
        sx={{
          bgcolor: 'secondary.light',
          opacity: isSelected ? '60%' : '100%',
        }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <Typography fontWeight={700}>{trailerId}</Typography>
          <Typography>Tractor</Typography>
        </Stack>
        {!isSelected && (
          <img
            src={RightArrowCircle}
            alt="right arrow circle"
            width={24}
            height={24}
            style={{ cursor: 'pointer' }}
            onClick={handleTrailerSelection}
          />
        )}
      </ListItemContainer>
      <Snackbar
        open={error.open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ bgcolor: 'error.main', color: 'common.white' }}
        >
          {error.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default TripTrailersListItem
