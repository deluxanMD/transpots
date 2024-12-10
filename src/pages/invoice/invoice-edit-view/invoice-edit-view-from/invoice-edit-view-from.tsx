import { Stack, Typography } from '@mui/material'
import ProfilePic from '../../../../assets/images/avatar.png'
import { InvoiceDetail } from '../../invoice.type'

const InvoiceEditViewFrom = ({
  billing: {
    from: { company, email },
  },
}: InvoiceDetail) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <img src={ProfilePic} width={40} height={40} alt="profile pic" />
      <Stack>
        <Typography fontWeight={700} textAlign="right">
          {company}
        </Typography>
        <Typography fontWeight={300} textAlign="right">
          {email}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default InvoiceEditViewFrom
