import { Alert, Snackbar, Stack } from '@mui/material'
import {
  OrdersListItemContainer,
  OrderTitle,
} from '../trip-orders-list-item/trip-orders-list-item.styles'
import RightArrowCircleFilled from '../../../../assets/icons/RightArrowCircleFilled.png'
import { Order, TripsError } from '../../trip.types'
import { useDispatch, useSelector } from 'react-redux'
import {
  addOrder,
  clearError,
  makeError,
} from '../../../../store/trips/trips.slice'
import { useMemo } from 'react'
import { RootState } from '../../../../store'

const TripOrdersTitle = ({ orderId, orders }: Order) => {
  const rows = useSelector((state: RootState) => state.trips.rows)
  const error = useSelector((state: RootState) => state.trips.error)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(clearError())
  }

  const handleAddOrder = () => {
    const isTrailerAvailable = rows.some(
      (row) => row.equipment.equipmentType === 'Trailer'
    )

    if (!isTrailerAvailable) {
      const error: TripsError = {
        open: true,
        message: 'Please add a trailer',
        variant: 'error',
      }
      dispatch(makeError({ error }))
    } else {
      dispatch(addOrder({ orderId, orders }))
    }
  }

  const isSelected = useMemo(() => {
    const length = rows.filter(
      (row) => row.equipment.equipmentId === orderId
    ).length
    return length >= orders.length
  }, [orderId, orders.length, rows])

  return (
    <>
      <OrdersListItemContainer
        sx={{
          bgcolor: 'secondary.light',
          opacity: isSelected ? '60%' : '100%',
          cursor: 'pointer',
          borderBottomColor: 'primary.main',
        }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        //   onClick={handleTractorSelection}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <OrderTitle
            fontWeight={700}
          >{`${orderId} - ${orders[0].company.companyName}`}</OrderTitle>
          <img
            src={RightArrowCircleFilled}
            alt="right arrow circle filled"
            width={30}
            height={30}
            style={{
              cursor: 'pointer',
              visibility: isSelected ? 'hidden' : 'visible',
            }}
            onClick={handleAddOrder}
          />
        </Stack>
      </OrdersListItemContainer>
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

export default TripOrdersTitle
