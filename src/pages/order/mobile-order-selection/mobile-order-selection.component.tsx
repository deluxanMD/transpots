import { useContext } from 'react'
import OrderDetails from '../order-details/order-details.component'
import OrderSelection from '../order-selection/order-selection.component'
import { OrderPageContext } from '../order-page.provider'
import { Box, Stack, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

const MobileOrderSelection = () => {
  const value = useContext(OrderPageContext)

  return (
    <Box sx={{ position: 'relative' }}>
      {value?.order?.status === 'New' ? (
        <OrderSelection />
      ) : (
        value?.order?.orderId === '' && <OrderSelection />
      )}
      {value?.order?.orderId !== '' && (
        <Stack spacing={1}>
          <Stack
            direction="row"
            spacing={1}
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
            <ArrowBack />
            <Typography>Go Back</Typography>
          </Stack>
          <OrderDetails />
        </Stack>
      )}
    </Box>
  )
}

export default MobileOrderSelection
