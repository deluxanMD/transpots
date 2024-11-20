import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import { Button, Typography } from '@mui/material'
import { OrderTracking } from '../../../pages/order/order-details/order-details.constant'

const OrderTrackingItem = ({
  status,
  description,
  date,
  done,
}: OrderTracking) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        {done ? (
          <CheckCircleOutlineOutlined
            fontSize="small"
            sx={{ color: 'primary.main' }}
          />
        ) : (
          <TimelineDot />
        )}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ mb: done ? 4 : 0, mt: done ? -1 : 0 }}>
        <Typography fontWeight={700}>{status}</Typography>
        <Typography>{date}</Typography>
        <Typography>{description}</Typography>
        {status === 'Pickup' && (
          <Button
            size="small"
            sx={{ bgcolor: 'primary.main', color: '#fff', px: 2 }}
          >
            Picked up
          </Button>
        )}
        {status === 'Delivery' && (
          <Button
            size="small"
            sx={{ bgcolor: 'success.main', color: '#fff', px: 2 }}
          >
            Delivered
          </Button>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

export default OrderTrackingItem
