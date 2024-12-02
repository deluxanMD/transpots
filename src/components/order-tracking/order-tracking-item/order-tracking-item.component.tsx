import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import { Typography, useTheme } from '@mui/material'
import { OrderTracking } from '../../../pages/order/order-details/order-details.constant'
import CircleGreenRevised from '../../../assets/icons/Circle Green Revised.png'
import SolidCircle from '../../../assets/icons/Solid Circle.png'
import { TrackingButton } from './order-tracking-item.styles'

const OrderTrackingItem = ({
  status,
  description,
  date,
  done,
  isLast,
}: OrderTracking) => {
  const theme = useTheme()

  return (
    <TimelineItem>
      <TimelineSeparator>
        {done ? (
          <img
            src={CircleGreenRevised}
            alt="check circle green"
            width={20}
            height={20}
          />
        ) : (
          <img src={SolidCircle} alt="solid circle" width={20} height={20} />
        )}
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{ mb: 4, mt: -1 }}>
        <Typography fontWeight={700}>{status}</Typography>
        <Typography>{date}</Typography>
        <Typography>{description}</Typography>
        {status === 'Pickup' && !done && (
          <TrackingButton size="small" theme={theme}>
            Mark as Picked up
          </TrackingButton>
        )}
        {status === 'Delivery' && !done && (
          <TrackingButton size="small" theme={theme}>
            Mark as Delivered
          </TrackingButton>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

export default OrderTrackingItem
