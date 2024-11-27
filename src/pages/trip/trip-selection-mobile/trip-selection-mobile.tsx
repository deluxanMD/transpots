import { Box, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { TripContext } from '../trip.provider'
import TripSelection from '../trip-selection/trip-selection.component'
import { ArrowBack } from '@mui/icons-material'
import TripDetails from '../trip-details/trip-details'

const TripSelectionMobile = () => {
  const value = useContext(TripContext)

  return (
    <>
      {value?.tractor.tractorId === '' ? (
        <Box p={2}>
          <TripSelection />
        </Box>
      ) : (
        <Stack spacing={1}>
          <Stack
            direction="row"
            sx={{ cursor: 'pointer', alignItems: 'center' }}
            onClick={() =>
              value?.handleSelectTractor({
                tractorId: '',
              })
            }
          >
            <Box px={1} pt={1}>
              <ArrowBack />
            </Box>
            <Typography>Go Back</Typography>
          </Stack>
          <TripDetails />
        </Stack>
      )}
    </>
  )
}

export default TripSelectionMobile
