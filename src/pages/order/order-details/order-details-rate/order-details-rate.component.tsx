import { Stack } from '@mui/material'
import KeyValue from '../../../../components/key-value/key-value.component'

const OrderDetailsRate = () => {
  return (
    <Stack mt={2} spacing={4}>
      <Stack mb={2} spacing={1}>
        <KeyValue title="Rate" value="$2000" />
        <KeyValue title="Currency" value="CAD" />
      </Stack>
    </Stack>
  )
}

export default OrderDetailsRate
