import { Stack, Typography } from '@mui/material'

type KeyValueProps = {
  title: string
  value: string
}

const KeyValue = ({ title, value }: KeyValueProps) => {
  return (
    <Stack direction="row" spacing={1}>
      <Typography>{title}:</Typography>
      <Typography fontWeight={700}>{value}</Typography>
    </Stack>
  )
}

export default KeyValue
