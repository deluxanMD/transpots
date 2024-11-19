import { Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from './topbar.styles'
import { useState } from 'react'
import MobileNav from '../mobile-nav/mobile-nav.component'

const Topbar = () => {
  const [openNavDrawer, setOpenNavDrawer] = useState(false)

  const closeDrawer = () => {
    setOpenNavDrawer(false)
  }

  return (
    <Container elevation={4}>
      <MenuIcon
        sx={{ display: { xs: 'block', md: 'none' } }}
        onClick={() => setOpenNavDrawer(true)}
      />
      <MobileNav open={openNavDrawer} close={closeDrawer} />
      <div></div>
      <Typography variant="h6">Transpots</Typography>
    </Container>
  )
}

export default Topbar
