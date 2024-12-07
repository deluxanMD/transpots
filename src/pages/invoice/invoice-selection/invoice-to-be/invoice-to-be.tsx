import { Box, TextField } from '@mui/material'
import React from 'react'
import InvoiceList from '../invoice-list/invoice-list'

const InvoiceToBe = () => {
  return (
    <Box mt={2}>
      <TextField
        type="text"
        placeholder="Search"
        variant="outlined"
        size="small"
        sx={{ width: '100%' }}
      />
      <InvoiceList />
    </Box>
  )
}

export default InvoiceToBe
