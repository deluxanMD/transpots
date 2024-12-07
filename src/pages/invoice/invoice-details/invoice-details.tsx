import { SelectChangeEvent, Stack } from '@mui/material'
import SelectField from '../../../components/select-field/select-field.component'
import { useState } from 'react'
import TextInputField from '../../../components/fields/text-input-field/text-input-field.component'
import InvoiceTable from './invoice-table/invoice-table'

const InvoiceDetails = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value as string)
  }

  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      <Stack spacing={2} py={1} sx={{ bgcolor: 'secondary.light' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <SelectField
            options={['Factoring']}
            value={value === '' ? 'Factoring' : value}
            onChange={handleChange}
          />
          <TextInputField placeholder="Search" sx={{ px: 2 }} />
        </div>
      </Stack>
      <div style={{ minHeight: '100vh' }}>
        <InvoiceTable />
      </div>
    </Stack>
  )
}

export default InvoiceDetails
