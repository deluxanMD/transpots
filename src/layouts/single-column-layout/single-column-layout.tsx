import { Grid2, Paper } from '@mui/material'
import React from 'react'

const SingleColumnLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid2 size={{ xs: 12, lg: 11 }}>
      <Paper
        elevation={4}
        sx={{
          px: 2,
          pb: 2,
          backgroundColor: 'white',
        }}
        className="hide-scrollbar"
      >
        {children}
      </Paper>
    </Grid2>
  )
}

export default SingleColumnLayout
