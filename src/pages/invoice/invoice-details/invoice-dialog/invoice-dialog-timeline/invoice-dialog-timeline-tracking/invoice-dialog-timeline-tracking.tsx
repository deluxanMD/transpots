import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab'
import { invoiceTimeLines } from '../../invoice-dialog.constants'
import { Stack, Typography } from '@mui/material'
import Tick from '../../../../../../assets/icons/Circle Green Revised.png'

const InvoiceDialogTimelineTracking = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {invoiceTimeLines.map((timeline, index) => (
        <TimelineItem key={timeline.id}>
          <TimelineSeparator>
            {/* <TimelineDot /> */}
            <img src={Tick} alt="check icon" width={20} height={20} />
            {index < invoiceTimeLines.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ mt: -1 }}>
            <Stack>
              <Typography fontWeight={700}>{timeline.label}</Typography>
              <Stack direction="row" spacing={1}>
                <Typography fontWeight={300}>{timeline.date}</Typography>
                <Typography fontWeight={700}>{timeline.time}</Typography>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default InvoiceDialogTimelineTracking
