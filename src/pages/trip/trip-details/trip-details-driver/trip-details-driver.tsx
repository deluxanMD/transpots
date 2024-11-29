import { Stack, Typography } from '@mui/material'

const TripDetailsDriver = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" pl={2}>
      <Typography>Driver Name</Typography>
      <Typography
        sx={{
          backgroundColor: 'primary.main',
          padding: '6px 12px',
          color: '#fff',
          borderRadius: '4px',
          minWidth: '183px',
        }}
      >
        Shri P
      </Typography>
    </Stack>
  )
}

export default TripDetailsDriver
