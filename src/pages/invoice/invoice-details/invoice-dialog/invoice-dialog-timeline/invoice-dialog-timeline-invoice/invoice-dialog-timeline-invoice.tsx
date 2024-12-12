import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab'
// import Tick from '../../../../../../assets/icons/Circle Green Revised.png'
import { SelectChangeEvent, Stack, Typography } from '@mui/material'
import SelectField from '../../../../../../components/select-field/select-field.component'
import { useState } from 'react'

const InvoiceDialogTimelineInvoice = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value as string)
  }

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          {/* <img src={Tick} alt="check icon" width={20} height={20} /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack>
            <Typography fontWeight={700}>Invoice Sent</Typography>
            <Stack direction="row" spacing={1}>
              <Typography fontWeight={300}>Nov 4, 2025</Typography>
              <Typography fontWeight={700}>09:00</Typography>
            </Stack>
          </Stack>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <SelectField
            options={['Sent EFT']}
            value={value === '' ? 'Sent EFT' : value}
            onChange={handleChange}
          />
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent>
          <SelectField
            options={['Paid EFT']}
            value={value === '' ? 'Paid EFT' : value}
            onChange={handleChange}
            sx={{
              bgcolor: 'secondary.main',
              border: '0px',
              borderRadius: '6px',
            }}
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default InvoiceDialogTimelineInvoice
