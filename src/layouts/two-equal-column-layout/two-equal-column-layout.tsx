import { Grid2, Paper } from '@mui/material'
import React from 'react'

const TwoEqualColumnLayout = ({ children }: { children: React.ReactNode }) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <>
      <Grid2
        size={{ sm: 6, lg: 5.5 }}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <Paper elevation={4} sx={{ p: 2, height: 'calc(100vh - 66px)' }}>
          {childrenArray[0]}
        </Paper>
      </Grid2>
      <Grid2
        size={{ sm: 6, lg: 5.5 }}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <Paper
          elevation={4}
          sx={{ overflow: 'auto', height: 'calc(100vh - 66px)' }}
          className="hide-scrollbar"
        >
          {childrenArray[1]}
        </Paper>
      </Grid2>
      <Grid2 size={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Paper
          elevation={4}
          sx={{ overflow: 'auto', height: 'calc(100vh - 66px)' }}
          className="hide-scrollbar"
        >
          {childrenArray[2]}
        </Paper>
      </Grid2>
    </>
  )
}

export default TwoEqualColumnLayout
