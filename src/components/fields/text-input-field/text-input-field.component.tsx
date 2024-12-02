import { InputLabel, Stack, TextField, TextFieldProps } from '@mui/material'

type TextInputFieldProps = {
  highlight?: boolean
} & TextFieldProps

const TextInputField = ({
  label,
  placeholder = 'Answer',
  highlight,
  ...rest
}: TextInputFieldProps) => {
  return (
    <Stack>
      <InputLabel
        sx={{
          color: highlight ? 'error.main' : 'secondary.dark',
          fontWeight: highlight ? 700 : 300,
        }}
      >
        {label}
      </InputLabel>
      <TextField placeholder={placeholder} size="small" {...rest} />
    </Stack>
  )
}

export default TextInputField