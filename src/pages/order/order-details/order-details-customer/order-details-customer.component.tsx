import { Stack } from '@mui/material'
import KeyValue from '../../../../components/key-value/key-value.component'

const OrderDetailsCustomer = () => {
  return (
    <Stack mt={2}>
      <Stack mb={2}>
        <KeyValue title="Customer" value="Apotex" />
        <KeyValue
          title="Address"
          value="1234, Satellite Drive, Mississauga, Ontari0, Canada"
        />
      </Stack>
      <Stack>
        <KeyValue title="Notification Email" value="xxx.abc@email.com" />
        <KeyValue title="Invoice & POD Email" value="account@email.com" />
        <KeyValue title="AP Email" value="ap@email.com" />
        <KeyValue title="Phone" value="12345678" />
      </Stack>
    </Stack>
  )
}

export default OrderDetailsCustomer
