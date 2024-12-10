import { SelectChangeEvent, Stack } from '@mui/material'
import React from 'react'
import SelectField from '../../../components/select-field/select-field.component'
import TextInputField from '../../../components/fields/text-input-field/text-input-field.component'
import InvoiceTable from '../invoice-details/invoice-table/invoice-table'

type InvoiceDefaultViewProps = {
  value: string
  handleChange: (event: SelectChangeEvent<any>) => void
}

const InvoiceDefaultView = ({
  value,
  handleChange,
}: InvoiceDefaultViewProps) => {
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

export default InvoiceDefaultView
