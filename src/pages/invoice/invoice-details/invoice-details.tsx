import { SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import InvoiceDefaultView from '../invoice-default-view/invoice-default-view'
import InvoiceEditView from '../invoice-edit-view/invoice-edit-view'

const InvoiceDetails = () => {
  const [value, setValue] = useState('')
  const params = useParams()

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value as string)
  }

  return (
    <>
      {!!params?.invoiceId ? (
        <InvoiceEditView />
      ) : (
        <InvoiceDefaultView value={value} handleChange={handleChange} />
      )}
    </>
  )
}

export default InvoiceDetails
