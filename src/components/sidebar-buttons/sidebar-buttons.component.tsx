import { Stack, Typography } from '@mui/material'
import PlusButton from '../../assets/icons/Plus Button.png'

const SidebarButtons = () => {
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Stack alignItems="center" justifyContent="center" textAlign="center">
        <img src={PlusButton} alt="plus button" width={50} height={50} />
        <Typography fontWeight={700} color="#fff">
          Create
          <br />
          Order
        </Typography>
      </Stack>

      <Stack alignItems="center" textAlign="center">
        <img src={PlusButton} alt="plus button" width={50} height={50} />
        <Typography fontWeight={700} color="#fff">
          Create
          <br />
          Trip
        </Typography>
      </Stack>
    </Stack>
  )
}

export default SidebarButtons
