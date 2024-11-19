import { Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from './topbar.styles'

const Topbar = () => {
  return (
    <Container elevation={4}>
      <MenuIcon />
      <Typography variant="h6">Transpots</Typography>
    </Container>
  )
}

export default Topbar
