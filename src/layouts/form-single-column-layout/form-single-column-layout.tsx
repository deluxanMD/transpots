import { Grid2 } from '@mui/material'
import React from 'react'

const FormSingleColumnLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <>
      {childrenArray.map((child, index) => (
        <Grid2 size={12} key={index}>
          {child}
        </Grid2>
      ))}
    </>
  )
}

export default FormSingleColumnLayout
