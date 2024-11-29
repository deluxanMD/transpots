import { Stack, Typography } from '@mui/material'
import { Order, TripDetail } from '../../trip.types'
import {
  OrderItemContainer,
  OrderItemName,
} from '../trip-orders-list-item/trip-orders-list-item.styles'
import { DateTime } from 'luxon'
import { formatAddress } from '../../trip.utils'
import RightArrowCircle from '../../../../assets/icons/RightArrowCircle.png'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderItem } from '../../../../store/trips/trips.slice'
import { useMemo } from 'react'
import { RootState } from '../../../../store'

const TripOrdersItem = ({ orderId, orders }: Order) => {
  const rows = useSelector((state: RootState) => state.trips.rows)
  const dispatch = useDispatch()
  console.log(rows)
  const handleAddOrderItem = (orderItem: TripDetail) => {
    dispatch(addOrderItem({ orderItem }))
  }

  return (
    <>
      {orders.map((order, index) => {
        const isSelected = rows.some(
          (row) => row.equipment.orderItemId === order.equipment.orderItemId
        )

        return (
          <OrderItemContainer
            key={`${orderId}_${index}`}
            sx={{
              bgcolor:
                order.task === 'pickup' ? 'primary.light' : 'success.light',
              borderBottomColor: 'secondary.main',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* 1st column */}
              <Stack>
                <OrderItemName
                  fontWeight={700}
                  sx={{ color: 'secondary.main' }}
                >
                  {order.task}
                </OrderItemName>
                <Typography fontWeight={300}>
                  {order.company.companyName}
                </Typography>
              </Stack>

              {/* 2nd column */}
              <Stack>
                <Typography fontWeight={700}>
                  {DateTime.fromISO(order.date).toLocaleString(
                    DateTime.DATE_MED
                  )}
                </Typography>
                <Typography fontWeight={700}>
                  {DateTime.fromISO(order.date).toFormat('hh:mm')}
                </Typography>
              </Stack>

              {/* 3rd column */}
              <img
                src={RightArrowCircle}
                alt="right arrow circle"
                width={24}
                height={24}
                style={{
                  cursor: 'pointer',
                  visibility: isSelected ? 'hidden' : 'visible',
                }}
                onClick={() => handleAddOrderItem(order)}
              />
            </Stack>
            <Typography fontWeight={300}>
              {formatAddress(order.company.address)}
            </Typography>
          </OrderItemContainer>
        )
      })}
    </>
  )
}

export default TripOrdersItem
