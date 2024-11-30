import { Box, Divider, Stack } from '@mui/material'
import VerifyOrderPdf from '../verify-order-pdf/verify-order-pdf'
import VerifyOrderForm from '../verify-order-form/verify-order-form'

const VerifyOrderMobile = () => {
  return (
    <Box px={1} pt={1}>
      <Stack spacing={1}>
        <VerifyOrderPdf />
        <Divider sx={{ bgcolor: 'secondary.main' }} />
        <VerifyOrderForm />
      </Stack>
    </Box>
  )
}

export default VerifyOrderMobile
