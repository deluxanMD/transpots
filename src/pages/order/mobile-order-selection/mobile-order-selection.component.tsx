import { useContext } from 'react'
import OrderDetails from '../order-details/order-details.component'
import OrderSelection from '../order-selection/order-selection.component'
import { OrderPageContext } from '../order-page.provider'
import { Box, Stack, Typography } from '@mui/material'
import ArrowLeft from '../../../assets/icons/ArrowLeft.png'

const MobileOrderSelection = () => {
  const value = useContext(OrderPageContext)

  return (
    <>
      {value?.order?.status === 'New' && value?.order?.orderId === '' ? (
        <Box p={2}>
          <OrderSelection />
        </Box>
      ) : (
        value?.order?.orderId === '' && (
          <Box p={2}>
            <OrderSelection />
          </Box>
        )
      )}
      {value?.order?.orderId !== '' && (
        <Stack spacing={1}>
          <Stack
            direction="row"
            sx={{ cursor: 'pointer', alignItems: 'center' }}
            onClick={() =>
              value?.handleSelectOrder({
                orderId: '',
                loadId: '',
                customer: '',
                status: 'Assigned',
              })
            }
          >
            <Box px={1} pt={1}>
              <img src={ArrowLeft} alt="arrow left" width={24} height={24} />
            </Box>
            <Typography>Go Back</Typography>
          </Stack>
          <OrderDetails />
        </Stack>
      )}
    </>
  )
}

export default MobileOrderSelection
