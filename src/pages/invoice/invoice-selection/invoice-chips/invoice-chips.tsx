import { Chip, Grid2 } from '@mui/material'
import React from 'react'
import { invoiceChips } from '../../invoice.constants'

const InvoiceChips = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleClick = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <Grid2
      container
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      spacing={1}
      sx={{
        bgcolor: 'secondary.main',
        padding: 2,
        mt: 2,
        borderRadius: '10px',
      }}
    >
      {invoiceChips.map((invoice, index) => (
        <Grid2 size={{ xs: 12, md: 6 }} key={invoice.id} spacing={1}>
          <Chip
            label={invoice.label}
            variant={selectedIndex === index ? 'filled' : 'outlined'}
            color={selectedIndex === index ? 'primary' : 'default'}
            onClick={() => handleClick(index)}
            sx={{
              minWidth: 150,
              color: 'common.white',
              fontWeight: 700,
              border: selectedIndex === index ? '0px' : '1px solid #fff',
            }}
          />
        </Grid2>
      ))}
    </Grid2>
  )
}

export default InvoiceChips
