import { Stack, Typography, useTheme } from '@mui/material'
import { Order } from '../../../pages/order/order-selection/order-selection.constant'
import {
  OrderCardContainer,
  OrderCardContent,
  OrderCardStatus,
} from './order-card.styles'
import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { useContext, useMemo } from 'react'
import { OrderPageContext } from '../../../pages/order/order-page.provider'

const OrderCard = (order: Order) => {
  const theme = useTheme()
  const value = useContext(OrderPageContext)

  const isSelectedOrder = useMemo(
    () => value?.order?.orderId === order?.orderId,
    [order?.orderId, value?.order.orderId]
  )

  return (
    <OrderCardContainer onClick={() => value?.handleSelectOrder(order)}>
      <OrderCardContent
        style={{
          backgroundColor: isSelectedOrder
            ? theme.palette.primary.main
            : theme.palette.secondary.light,
          color: isSelectedOrder ? '#ffffff' : theme.palette.secondary.dark,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2">Load #: </Typography>
          <Typography>{order?.loadId}</Typography>
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
        spacing={1}
        sx={{ bgcolor: 'secondary.light' }}
      >
        <CheckCircleOutlineOutlined
          fontSize="small"
          sx={{ color: 'primary.main' }}
        />
        <Typography variant="body2" fontWeight={500} color="secondary.main">
          {order?.status}
        </Typography>
      </OrderCardStatus>
    </OrderCardContainer>
  )
}

export default OrderCard
