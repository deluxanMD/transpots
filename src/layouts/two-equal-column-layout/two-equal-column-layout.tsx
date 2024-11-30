import { Grid2, Paper } from '@mui/material'
import React from 'react'

const TwoEqualColumnLayout = ({ children }: { children: React.ReactNode }) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <>
      <Grid2
        size={{ sm: 12, lg: 5.5 }}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <Paper elevation={4} sx={{ p: 2, minHeight: '100%' }}>
          {childrenArray[0]}
        </Paper>
      </Grid2>
      <Grid2
        size={{ sm: 12, lg: 5.5 }}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <Paper elevation={4} sx={{ p: 2, minHeight: '100%' }}>
          {childrenArray[1]}
        </Paper>
      </Grid2>
      <Grid2 size={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Paper elevation={4} sx={{ minHeight: '100%' }}>
          {childrenArray[2]}
        </Paper>
      </Grid2>
    </>
  )
}

export default TwoEqualColumnLayout
