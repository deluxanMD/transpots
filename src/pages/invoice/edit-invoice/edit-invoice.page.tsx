import React from 'react'
import { useParams } from 'react-router-dom'

const EditInvoicePage = () => {
  const { invoiceId } = useParams()

  return <div>EditInvoicePage</div>
}

export default EditInvoicePage
