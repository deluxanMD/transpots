import { Box, TextField } from '@mui/material'
import React from 'react'
import InvoiceList from '../invoice-list/invoice-list'
import InvoiceChips from '../invoice-chips/invoice-chips'

const InvoiceNotPaid = () => {
  return (
    <Box>
      <InvoiceChips />
      <TextField
        type="text"
        placeholder="Search"
        variant="outlined"
        size="small"
        sx={{ width: '100%', mt: 2 }}
      />
      <InvoiceList />
    </Box>
  )
}

export default InvoiceNotPaid
