import { Box, Stack, Typography } from '@mui/material'
import TripSelection from '../trip-selection/trip-selection.component'
import ArrowRight from '../../../assets/icons/ArrowRight.png'
import ArrowLeft from '../../../assets/icons/ArrowLeft.png'
import { useState } from 'react'
import TripDetails from '../trip-details/trip-details'

const TripSelectionMobile = () => {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <Box px={1} pt={1}>
      <Stack spacing={1}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: detailsOpen ? 'flex-start' : 'flex-end',
          }}
          onClick={() =>
            detailsOpen ? setDetailsOpen(false) : setDetailsOpen(true)
          }
        >
          {detailsOpen ? (
            <>
              <img src={ArrowLeft} alt="arrow left" width={20} height={20} />
              <Typography>Go Back</Typography>
            </>
          ) : (
            <>
              <Typography>Go To Detail</Typography>
              <img src={ArrowRight} alt="arrow right" width={20} height={20} />
            </>
          )}
        </Stack>
        {detailsOpen ? <TripDetails /> : <TripSelection />}
      </Stack>
    </Box>
  )
}

export default TripSelectionMobile
