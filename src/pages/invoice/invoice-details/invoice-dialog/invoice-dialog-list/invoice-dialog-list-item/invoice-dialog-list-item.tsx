import { Stack, Typography } from '@mui/material'
import Edit from '../../../../../../assets/icons/EditBlue.png'
import Delete from '../../../../../../assets/icons/Delete.png'
import { TimelineInfo } from '../../invoice-dialog.constants'

const InvoiceDialogListItem = ({ date, description, time }: TimelineInfo) => {
  return (
    <Stack direction="row" mb={2} justifyContent="space-between">
      <Stack>
        <Stack direction="row" spacing={1}>
          <Typography fontWeight={700}>{date}</Typography>
          <Typography fontWeight={300}>{time}</Typography>
        </Stack>
        <Typography fontWeight={300}>{description}</Typography>
      </Stack>

      <Stack direction="row" spacing={1}>
        <img
          src={Edit}
          alt="edit icon"
          width={36}
          height={36}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={Delete}
          alt="delete icon"
          width={28}
          height={33}
          style={{ cursor: 'pointer' }}
        />
      </Stack>
    </Stack>
  )
}

export default InvoiceDialogListItem
