import {
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { InvoiceDetail } from '../../invoice.type'

const InvoiceEditViewTo = ({
  invoiceId,
  billing: {
    to: { company },
    invoiceDate,
    dueDate,
    loadId,
  },
}: InvoiceDetail) => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Stack justifyContent="space-between" mt={6}>
      <Stack direction={isSm ? 'column' : 'row'} justifyContent="space-between">
        <Typography fontWeight={300} textAlign={isSm ? 'left' : 'right'}>
          Bill to <span style={{ fontWeight: 700 }}>{company}</span>
        </Typography>
        <Typography fontWeight={300} textAlign={isSm ? 'left' : 'right'}>
          Total Amount (CAD) <span style={{ fontWeight: 700 }}>$700.00</span>
        </Typography>
      </Stack>

      {/* <Stack
        direction={isSm ? 'column' : 'row'}
        justifyContent="space-between"
        mt={6}
      >
        <Stack>
          <Typography fontWeight={300}>Invoice Date</Typography>
          <Typography fontWeight={700}>{invoiceDate}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={300}>Due Date</Typography>
          <Typography fontWeight={700}>{dueDate}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={300}>Invoice#</Typography>
          <Typography fontWeight={700}>{invoiceId}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={300}>Load#</Typography>
          <Typography fontWeight={700}>{loadId}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={300}>Currency Type</Typography>
          <Typography fontWeight={700}>CAD</Typography>
        </Stack>
      </Stack> */}

      <Grid2 container columns={9} mt={4} spacing={2}>
        <Grid2 size={{ xs: 4.5, sm: 3, md: 1.8 }}>
          <Stack>
            <Typography fontWeight={300}>Invoice Date</Typography>
            <Typography fontWeight={700}>{invoiceDate}</Typography>
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 4.5, sm: 3, md: 1.8 }}>
          <Typography fontWeight={300}>Due Date</Typography>
          <Typography fontWeight={700}>{dueDate}</Typography>
        </Grid2>

        <Grid2 size={{ xs: 4.5, sm: 3, md: 1.8 }}>
          <Typography fontWeight={300}>Invoice#</Typography>
          <Typography fontWeight={700}>{invoiceId}</Typography>
        </Grid2>

        <Grid2 size={{ xs: 4.5, sm: 3, md: 1.8 }}>
          <Typography fontWeight={300}>Load#</Typography>
          <Typography fontWeight={700}>{loadId}</Typography>
        </Grid2>

        <Grid2 size={{ xs: 4.5, sm: 3, md: 1.8 }}>
          <Typography fontWeight={300}>Currency Type</Typography>
          <Typography fontWeight={700}>CAD</Typography>
        </Grid2>
      </Grid2>
    </Stack>
  )
}

export default InvoiceEditViewTo
