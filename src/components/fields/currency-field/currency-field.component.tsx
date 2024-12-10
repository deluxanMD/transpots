import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    )
  }
)

const CurrencyField = ({ value, onChange, ...rest }: TextFieldProps) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder=""
      size="small"
      slotProps={{
        input: {
          inputComponent: NumericFormatCustom as any,
        },
      }}
      variant="outlined"
      {...rest}
    />
  )
}

export default CurrencyField
