import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import { Button, Typography } from '@mui/material'
import { OrderTracking } from '../../../pages/order/order-details/order-details.constant'
import CircleGreenRevised from '../../../assets/icons/Circle Green Revised.png'
import SolidCircle from '../../../assets/icons/Solid Circle.png'

const OrderTrackingItem = ({
  status,
  description,
  date,
  done,
  isLast,
}: OrderTracking) => {
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
        {(status === 'Pickup' || status === 'Delivery') && !done && (
          <Button
            size="small"
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              px: '12px',
              py: '6px',
              borderRadius: '6px',
              textTransform: 'capitalize',
              fontWeight: 700,
            }}
          >
            {status}
          </Button>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

export default OrderTrackingItem
