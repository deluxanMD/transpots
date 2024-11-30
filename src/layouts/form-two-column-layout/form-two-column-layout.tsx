import { Grid2 } from '@mui/material'
import React from 'react'

const FormTwoColumnLayout = ({ children }: { children: React.ReactNode }) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <>
      {childrenArray.map((child, index) => (
        <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
          {child}
        </Grid2>
      ))}
    </>
  )
}

export default FormTwoColumnLayout
