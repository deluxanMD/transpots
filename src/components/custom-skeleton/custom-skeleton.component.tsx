import { Box, Typography } from '@mui/material'

type CustomSkeletonProps = {
  height: number
  text?: string
}

const CustomSkeleton = ({ height, text }: CustomSkeletonProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.light',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        height,
      }}
    >
      <Typography fontSize={20} fontWeight={700}>
        {text}
      </Typography>
    </Box>
  )
}

export default CustomSkeleton
