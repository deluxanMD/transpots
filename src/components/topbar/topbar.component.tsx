import { Avatar, Stack, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from './topbar.styles'
import { useState } from 'react'
import MobileNav from '../mobile-nav/mobile-nav.component'
import AvatarImg from '../../assets/images/avatar.png'

const Topbar = () => {
  const [openNavDrawer, setOpenNavDrawer] = useState(false)

  const closeDrawer = () => {
    setOpenNavDrawer(false)
  }

  return (
    <Container elevation={4}>
      <MenuIcon
        sx={{ display: { xs: 'block', lg: 'none' } }}
        onClick={() => setOpenNavDrawer(true)}
      />
      <MobileNav open={openNavDrawer} close={closeDrawer} />
      <div></div>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h6" fontSize={20} fontWeight={700}>
          Transpots
        </Typography>
        <Avatar src={AvatarImg} sx={{ width: 25, height: 25 }} />
      </Stack>
    </Container>
  )
}

export default Topbar
