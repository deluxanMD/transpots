import { Stack, Typography, useTheme } from '@mui/material'
import { Order } from '../../../pages/order/order-selection/order-selection.constant'
import {
  OrderCardContainer,
  OrderCardContent,
  OrderCardStatus,
} from './order-card.styles'
import { useContext, useMemo, useState } from 'react'
import { OrderPageContext } from '../../../pages/order/order-page.provider'
import TranspotsAlert from '../../transpots-alert/transpots-alert.component'
import CircleGreenRevised from '../../../assets/icons/Circle Green Revised.png'

const OrderCard = (order: Order) => {
  const theme = useTheme()
  const value = useContext(OrderPageContext)
  const [alertVisible, setAlertVisible] = useState(false)

  const isSelectedOrder = useMemo(
    () => value?.order?.orderId === order?.orderId,
    [order?.orderId, value?.order.orderId]
  )

  const handleAlertOpen = () => {
    setAlertVisible(true)
  }

  const handleAlertClose = () => {
    setAlertVisible(false)
  }

  return (
    <OrderCardContainer
      onClick={() => {
        value?.handleSelectOrder(order)
      }}
    >
      <OrderCardContent
        style={{
          backgroundColor: isSelectedOrder
            ? theme.palette.primary.main
            : theme.palette.secondary.light,
          color: isSelectedOrder ? '#ffffff' : theme.palette.secondary.dark,
          border:
            order.status === 'New'
              ? `1px solid ${theme.palette.secondary.main}`
              : '0px',
          borderBottom:
            order.status !== 'New'
              ? `1px solid ${theme.palette.secondary.main}`
              : '0px',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2">Load #: </Typography>
          <Typography fontWeight={700}>{order?.loadId}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2">Order ID: </Typography>
          <Typography variant="body2">{order?.orderId}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2">Customer: </Typography>
          <Typography variant="body2">{order?.customer}</Typography>
        </Stack>
      </OrderCardContent>
      <OrderCardStatus
        direction="row"
        alignItems="center"
        justifyContent={order?.status === 'New' ? 'center' : 'flex-start'}
        spacing={1}
        onClick={handleAlertOpen}
        sx={{
          bgcolor: order?.status === 'New' ? 'success.main' : 'secondary.light',
        }}
      >
        {order?.status === 'New' ? (
          <>
            <Typography variant="body2" fontWeight={700} color="#fff">
              Accept Order
            </Typography>
          </>
        ) : (
          <>
            <img
              src={CircleGreenRevised}
              alt="check circle green"
              width={20}
              height={20}
            />
            <Typography variant="body2" fontWeight={700} color="secondary.main">
              {order?.status}
            </Typography>
          </>
        )}
      </OrderCardStatus>
      <TranspotsAlert
        open={alertVisible}
        handleClose={handleAlertClose}
        description="Are you sure you want to accept this order?"
        submitBtnText="Accept"
      />
    </OrderCardContainer>
  )
}

export default OrderCard
